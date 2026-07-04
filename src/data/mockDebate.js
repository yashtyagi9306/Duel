/**
 * Mock debate rounds.
 * Shape mirrors the future API response exactly.
 * Replace `getMockDebate()` with an API call when backend is ready.
 *
 * Future API: POST /api/debate { topic, mode, rounds }
 * Response:   { id, topic, mode, rounds: Round[] }
 */

/**
 * @typedef {{ round: number, challenger: string, defender: string }} Round
 */

/** @param {string} topic */
export function getMockDebate(topic) {
  return [
    {
      round: 1,
      challenger: `The case for "${topic}" rests on measurable outcomes. Historical data consistently shows that structured change, when implemented with clear metrics and accountability, produces compounding benefits that outweigh transitional friction. We cannot afford to let cognitive bias anchor us to the status quo when evidence points elsewhere.`,
      defender: `Appealing to data without interrogating its source is precisely the kind of epistemic shortcut that undermines serious discourse. The studies cited in favor of "${topic}" often suffer from selection bias and short observation windows. Robust institutions are built on caution, not optimism dressed as rigor.`,
    },
    {
      round: 2,
      challenger: `My opponent confuses caution with paralysis. Every transformative advancement — from germ theory to digital infrastructure — was resisted with the same appeals to institutional prudence. The burden of proof lies with those who defend an arrangement that demonstrably fails the people it was designed to serve.`,
      defender: `False analogy. Germ theory was accepted because it produced repeatable, falsifiable predictions — a standard the proponents of "${topic}" have not met. Invoking progress does not constitute an argument; it is a rhetorical sleight of hand. Burden of proof cuts both ways: extraordinary claims require extraordinary evidence.`,
    },
    {
      round: 3,
      challenger: `We have provided peer-reviewed evidence, comparative case studies, and longitudinal data. If my opponent's standard of proof is unfalsifiability, then no policy change could ever be justified. The intellectually honest position acknowledges uncertainty while acting on the best available evidence — which clearly favors the proposition.`,
      defender: `Intellectual honesty also demands we acknowledge what we do not know. The complexity of social systems means unintended consequences are not edge cases — they are the norm. A cautious, iterative approach to "${topic}" is not obstruction; it is wisdom. Moving fast and breaking things is a strategy, not a virtue.`,
    },
    {
      round: 4,
      challenger: `Iterative approaches have been tried for decades on this very question. The result is incremental drift with no accountability. At some point, calling for more study becomes a political act masquerading as epistemic humility. The data we have is sufficient; the will to act is what is lacking.`,
      defender: `Conflating insufficient will with insufficient evidence is a rhetorical convenience. Democratic deliberation is slow by design — it is how we prevent well-intentioned but catastrophic mistakes. The challenger asks us to trust a model. I ask us to trust a process. Processes survive; models expire.`,
    },
    {
      round: 5,
      challenger: `Processes that never produce outcomes are not democratic — they are structural vetoes. The communities most affected by the status quo do not have the luxury of waiting for perfect consensus. Justice delayed is not caution. It is a choice — and today, we are being asked to make a different one.`,
      defender: `A moving closing statement — but emotion is not a substitute for mechanism. How exactly will this change be governed, measured, and reversed if it fails? The challenger has given us conviction without contingency. Good policy is not just about the best case; it is about surviving the worst one. On that, the proposition remains silent.`,
    },
  ];
}
