"use strict";

const OUTPUT_RULE =
  "Respond with valid JSON only. No markdown. No prose outside the JSON object.";

const DEBATE_RULES = [
  "Never switch sides regardless of arguments presented.",
  "Be concise — maximum 120 words per argument.",
  "Build on previous rounds; do not repeat earlier points verbatim.",
  "Use factual reasoning. Avoid logical fallacies.",
].join(" ");

module.exports = { OUTPUT_RULE, DEBATE_RULES };
