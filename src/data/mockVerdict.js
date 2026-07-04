/**
 * Mock verdict data.
 * Shape mirrors the future API response exactly.
 *
 * Future API: POST /api/verdict { topic, mode, rounds }
 * Response:   Verdict
 *
 * @typedef {{
 *   winner: "challenger" | "defender",
 *   confidence: number,
 *   summary: string,
 *   scores: {
 *     challenger: Record<string, number>,
 *     defender: Record<string, number>
 *   },
 *   analysis: {
 *     strengths: { challenger: string, defender: string },
 *     weaknesses: { challenger: string, defender: string },
 *     turningPoint: string,
 *     finalDecision: string
 *   }
 * }} Verdict
 */

/** @returns {Verdict} */
export function getMockVerdict() {
  return {
    winner: "challenger",
    confidence: 92,
    summary:
      "Presented stronger evidence, maintained consistent logic across all rounds, and effectively neutralised counterarguments without abandoning the core proposition.",
    scores: {
      challenger: {
        Logic: 9.2,
        Evidence: 8.8,
        Rebuttal: 9.0,
        Consistency: 9.4,
        Persuasiveness: 8.9,
      },
      defender: {
        Logic: 8.3,
        Evidence: 8.5,
        Rebuttal: 7.8,
        Consistency: 8.2,
        Persuasiveness: 7.6,
      },
    },
    analysis: {
      strengths: {
        challenger:
          "The Challenger built a coherent evidentiary chain from round one and never retreated from it under pressure. Each rebuttal sharpened the original claim rather than merely deflecting critique — a discipline that compounded across rounds and made the argument progressively harder to dismiss.",
        defender:
          "The Defender demonstrated genuine philosophical rigour in questioning the epistemological foundations of the opposing argument. The appeal to process over model in round four was the strongest single point of the debate and momentarily shifted the burden of proof.",
      },
      weaknesses: {
        challenger:
          "The Challenger occasionally conflated correlation with causation in the evidentiary phase, and the closing argument leaned on moral urgency where a structural policy proposal would have been more persuasive to a sceptical audience.",
        defender:
          "The Defender never offered an affirmative alternative — the entire strategy was reactive. By round three, this pattern became readable as avoidance. A principled counter-proposal would have forced the Challenger to defend ground rather than simply advance.",
      },
      turningPoint:
        "Round three was decisive. The Challenger's pivot from broad historical analogy to specific longitudinal data forced the Defender into pure epistemological critique — a defensible but ultimately defensive posture. Once the Defender conceded the data's existence while challenging only its interpretation, the rhetorical initiative shifted and never returned.",
      finalDecision:
        "The Challenger wins on the preponderance of argument. The evidence base was more specific, the rebuttals were more substantive, and the narrative arc was more cohesive. The Defender mounted a credible philosophical challenge but was unable to translate epistemological caution into a competing positive case. Intellectual honesty demands we follow the stronger argument — and on balance, that argument belonged to the Challenger.",
    },
  };
}
