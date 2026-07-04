"use strict";

const { OUTPUT_RULE, DEBATE_RULES } = require("./shared");

/**
 * Builds the system and user messages for the Defender role.
 * The Defender argues strictly AGAINST the topic.
 *
 * @param {object} params
 * @param {string} params.topic
 * @param {string} params.mode
 * @param {number} params.round
 * @param {number} params.totalRounds
 * @param {string} params.challengerArgument - Challenger's argument this round
 * @returns {{ system: string, user: string }}
 */
function buildDefenderPrompt({ topic, mode, round, totalRounds, challengerArgument }) {
  const system = [
    `You are the Defender in a formal debate. You argue strictly AGAINST: "${topic}".`,
    DEBATE_RULES,
    `Debate mode: ${mode}. Adjust your tone accordingly (balanced=measured, academic=scholarly, aggressive=assertive, funny=witty).`,
    OUTPUT_RULE,
  ].join(" ");

  const user = [
    `Round ${round} of ${totalRounds}.`,
    `The Challenger argued: "${challengerArgument}". Counter this directly, then present your own case against the topic.`,
    `Respond with JSON: { "argument": "<your argument>" }`,
  ].join(" ");

  return { system, user };
}

module.exports = { buildDefenderPrompt };
