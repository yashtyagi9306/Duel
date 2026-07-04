"use strict";

const { generateDebate } = require("../services/debate.service");

const VALID_MODES = ["balanced", "academic", "aggressive", "funny"];
const MIN_ROUNDS = 1;
const MAX_ROUNDS = 5;

/**
 * POST /api/debate
 */
async function createDebate(req, res) {
  const { topic, mode, rounds } = req.body;

  if (!topic || typeof topic !== "string" || !topic.trim()) {
    return res.status(400).json({ success: false, message: "Topic is required." });
  }

  if (!mode || typeof mode !== "string") {
    return res.status(400).json({ success: false, message: "Mode is required." });
  }
  const normalizedMode = mode.toLowerCase();
  if (!VALID_MODES.includes(normalizedMode)) {
    return res.status(400).json({
      success: false,
      message: `Mode must be one of: ${VALID_MODES.join(", ")}.`,
    });
  }

  if (rounds === undefined || rounds === null) {
    return res.status(400).json({ success: false, message: "Rounds is required." });
  }
  const roundCount = parseInt(rounds, 10);
  if (isNaN(roundCount) || roundCount < MIN_ROUNDS || roundCount > MAX_ROUNDS) {
    return res.status(400).json({
      success: false,
      message: `Rounds must be a number between ${MIN_ROUNDS} and ${MAX_ROUNDS}.`,
    });
  }

  try {
    const data = await generateDebate({
      topic: topic.trim(),
      mode: normalizedMode,
      rounds: roundCount,
    });
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("[Debate Error]", err.message);
    return res.status(500).json({
      success: false,
      message: err.message ?? "Failed to generate debate.",
    });
  }
}

module.exports = { createDebate };