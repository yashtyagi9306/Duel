"use strict";

const { OUTPUT_RULE, DEBATE_RULES } = require("./shared");

/**
 * Builds the system and user messages for the Challenger role.
 * The Challenger argues strictly IN FAVOUR of the topic.
 *
 * @param {object} params
 * @param {string} params.topic
 * @param {string} params.mode        - balanced | academic | aggressive | funny
 * @param {number} params.round       - current round number
 * @param {number} params.totalRounds
 * @param {string} [params.defenderPrior] - Defender's previous argument (empty in round 1)
 * @returns {{ system: string, user: string }}
 */
function buildChallengerPrompt({ topic, mode, round, totalRounds, defenderPrior = "" }) {
  const system = [
    `You are the Challenger in a formal debate. You argue strictly IN FAVOUR of: "${topic}".`,
    DEBATE_RULES,
    `Debate mode: ${mode}. Adjust your tone accordingly (balanced=measured, academic=scholarly, aggressive=assertive, funny=witty).`,
    OUTPUT_RULE,
  ].join(" ");

  const priorContext = defenderPrior
    ? `The Defender's last argument was: "${defenderPrior}". Rebut it directly, then advance your case.`
    : "This is the opening round. Present your strongest opening argument.";

  const user = [
    `Round ${round} of ${totalRounds}.`,
    priorContext,
    `Respond with JSON: { "argument": "<your argument>" }`,
  ].join(" ");

  return { system, user };
}

module.exports = { buildChallengerPrompt };
