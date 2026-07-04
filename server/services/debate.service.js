"use strict";

const { openai } = require("./openai.service");
const { buildChallengerPrompt, buildDefenderPrompt, buildJudgePrompt } = require("../prompts");

const MODEL = "llama-3.3-70b-versatile";

/**
 * Extracts the first valid JSON object or array from a string.
 * Handles markdown fences, leading prose, and trailing text.
 */
function extractJSON(raw) {
  let text = raw.replace(/```(?:json)?/gi, "").trim();

  const start = text.search(/[{[]/);
  if (start === -1) throw new Error("No JSON object found in response");
  text = text.slice(start);

  const open = text[0];
  const close = open === "{" ? "}" : "]";
  let depth = 0;
  let end = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === open) depth++;
    else if (text[i] === close) {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }

  const jsonStr = end !== -1 ? text.slice(0, end + 1) : text;
  return JSON.parse(jsonStr);
}

/**
 * Calls Groq and returns parsed JSON.
 * Uses response_format: json_object for reliable structured output.
 */
async function callAI(system, user) {
  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: MODEL,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user",   content: user   },
      ],
    });
  } catch (err) {
    // Surface Groq API errors directly (auth, rate limit, network)
    const status = err?.status ?? err?.statusCode;
    if (status === 401) throw new Error("Invalid Groq API key. Check GROQ_API_KEY in your .env file.");
    if (status === 429) throw new Error("Groq rate limit reached. Please wait a moment and try again.");
    throw new Error(`Groq API error: ${err.message}`);
  }

  const raw = completion.choices[0]?.message?.content ?? "";
  if (!raw.trim()) throw new Error("Groq returned an empty response.");

  try {
    return extractJSON(raw);
  } catch {
    console.error("[Parse Error] Raw response:", raw.slice(0, 300));
    throw new Error("Could not parse AI response as JSON.");
  }
}

/**
 * Generates a complete AI debate and verdict.
 */
async function generateDebate({ topic, mode, rounds }) {
  const debate = [];
  let defenderPrior = "";

  for (let i = 0; i < rounds; i++) {
    const round = i + 1;

    const { system: cSys, user: cUser } = buildChallengerPrompt({
      topic, mode, round, totalRounds: rounds, defenderPrior,
    });
    const challengerResult = await callAI(cSys, cUser);
    const challengerArgument = challengerResult.argument ?? String(challengerResult);

    const { system: dSys, user: dUser } = buildDefenderPrompt({
      topic, mode, round, totalRounds: rounds, challengerArgument,
    });
    const defenderResult = await callAI(dSys, dUser);
    const defenderArgument = defenderResult.argument ?? String(defenderResult);

    debate.push({ round, challenger: challengerArgument, defender: defenderArgument });
    defenderPrior = defenderArgument;
  }

  const { system: jSys, user: jUser } = buildJudgePrompt({ topic, mode, rounds: debate });
  const verdict = await callAI(jSys, jUser);

  return { topic, mode, rounds, debate, verdict };
}

module.exports = { generateDebate };
