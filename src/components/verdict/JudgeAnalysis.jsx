import { motion } from "motion/react";
import { Gavel } from "lucide-react";

const SECTION_META = [
  { key: "strengths",     label: "Strengths",      accent: false },
  { key: "weaknesses",    label: "Weaknesses",     accent: false },
  { key: "turningPoint",  label: "Turning Point",  accent: true  },
  { key: "finalDecision", label: "Final Decision", accent: true  },
];

/**
 * @param {{
 *   analysis: {
 *     strengths: { challenger: string, defender: string },
 *     weaknesses: { challenger: string, defender: string },
 *     turningPoint: string,
 *     finalDecision: string
 *   }
 * }} props
 */
function JudgeAnalysis({ analysis }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[28px] border border-white/[0.08] bg-[#0d0d0d]/60 backdrop-blur-sm overflow-hidden"
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-7 py-5">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/15">
          <Gavel className="h-4 w-4 text-violet-400" strokeWidth={2} />
        </span>
        <div>
          <p className="text-sm font-medium text-white">AI Judge</p>
          <p className="text-xs text-[#505050]">Detailed Analysis Report</p>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-white/[0.05]">
        {SECTION_META.map(({ key, label, accent }, i) => {
          const value = analysis[key];
          const isPair = typeof value === "object";

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="px-7 py-6"
            >
              <p
                className={`mb-4 text-xs font-semibold uppercase tracking-widest ${
                  accent ? "text-violet-400" : "text-[#505050]"
                }`}
              >
                {label}
              </p>

              {isPair ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["challenger", "defender"].map((side) => (
                    <div
                      key={side}
                      className="flex flex-col gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-[#505050]">
                        {side}
                      </span>
                      <p className="text-[14px] leading-[1.7] text-[#c0c0c0]">
                        {value[side]}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className={`text-[15px] leading-[1.75] ${
                    accent ? "text-[#d8d8d8]" : "text-[#c0c0c0]"
                  }`}
                >
                  {value}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default JudgeAnalysis;
