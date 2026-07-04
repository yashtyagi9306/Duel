"use strict";

const { buildChallengerPrompt } = require("./challenger.prompt");
const { buildDefenderPrompt }   = require("./defender.prompt");
const { buildJudgePrompt }      = require("./judge.prompt");

module.exports = { buildChallengerPrompt, buildDefenderPrompt, buildJudgePrompt };
