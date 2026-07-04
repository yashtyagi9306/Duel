"use strict";

const { OUTPUT_RULE } = require("./shared");

/**
 * Builds the system and user messages for the Judge role.
 * The Judge evaluates the full debate and returns a structured verdict.
 *
 * @param {object} params
 * @param {string} params.topic
 * @param {string} params.mode
 * @param {{ round: number, challenger: string, defender: string }[]} params.rounds
 * @returns {{ system: string, user: string }}
 */
function buildJudgePrompt({ topic, mode, rounds }) {
  const system = [
    "You are an impartial AI debate judge. Evaluate the debate objectively based solely on argument quality.",
    "Score each debater independently across five criteria: logic, evidence, rebuttal, consistency, persuasiveness. Scores are 0–10 with one decimal place.",
    "Do not favour either side. Base your decision strictly on the arguments presented, not on the topic itself.",
    OUTPUT_RULE,
  ].join(" ");

  const transcript = rounds
    .map(
      (r) =>
        `Round ${r.round} — Challenger: "${r.challenger}" | Defender: "${r.defender}"`
    )
    .join("\n");

  const schema = JSON.stringify({
    winner: "challenger | defender",
    confidence: "number 0-100",
    summary: "one sentence explaining the decision",
    scores: {
      challenger: { logic: 0, evidence: 0, rebuttal: 0, consistency: 0, persuasiveness: 0 },
      defender:   { logic: 0, evidence: 0, rebuttal: 0, consistency: 0, persuasiveness: 0 },
    },
    analysis: {
      strengths:    { challenger: "string", defender: "string" },
      weaknesses:   { challenger: "string", defender: "string" },
      turningPoint: "string",
      finalDecision: "string",
    },
  });

  const user = [
    `Topic: "${topic}" | Mode: ${mode}`,
    `Transcript:\n${transcript}`,
    `Respond with JSON matching this exact schema: ${schema}`,
  ].join("\n");

  return { system, user };
}

module.exports = { buildJudgePrompt };
