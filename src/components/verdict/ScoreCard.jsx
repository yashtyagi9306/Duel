import { motion } from "motion/react";

/**
 * @param {{
 *   side: "challenger" | "defender",
 *   scores: Record<string, number>,
 *   delay?: number
 * }} props
 */
function ScoreCard({ side, scores, delay = 0 }) {
  const isChallenger = side === "challenger";
  const max = 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]/60 backdrop-blur-sm p-6 md:p-7"
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold
            ${
              isChallenger
                ? "bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-violet-300"
                : "bg-white/[0.06] text-[#a0a0a0]"
            }`}
        >
          {isChallenger ? "C" : "D"}
        </span>
        <span className="text-sm font-medium text-white capitalize">{side}</span>
      </div>

      <div className="flex flex-col gap-4">
        {Object.entries(scores).map(([metric, score], i) => (
          <div key={metric} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#606060]">{metric}</span>
              <span className="text-xs font-medium text-white">{score.toFixed(1)}</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(score / max) * 100}%` }}
                transition={{ duration: 0.7, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full rounded-full ${
                  isChallenger
                    ? "bg-gradient-to-r from-violet-400 to-blue-400"
                    : "bg-white/30"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ScoreCard;
