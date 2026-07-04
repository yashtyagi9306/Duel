import { motion } from "motion/react";

/**
 * @param {{
 *   side: "challenger" | "defender",
 *   argument: string,
 *   delay?: number
 * }} props
 */
function DebateCard({ side, argument, delay = 0 }) {
  const isChallenger = side === "challenger";

  return (
    <motion.div
      key={argument}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]/60 backdrop-blur-sm p-6 md:p-7"
    >
      <div className="flex items-center justify-between">
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
          <span className="text-sm font-medium text-white capitalize">
            {side}
          </span>
        </div>

        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
            isChallenger
              ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
              : "bg-white/[0.04] text-[#606060] border border-white/[0.06]"
          }`}
        >
          {isChallenger ? "FOR" : "AGAINST"}
        </span>
      </div>

      <p className="text-[15px] leading-[1.7] text-[#d0d0d0]">{argument}</p>
    </motion.div>
  );
}

export default DebateCard;
