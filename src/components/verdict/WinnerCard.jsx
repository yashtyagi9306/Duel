import { motion } from "motion/react";
import { Trophy } from "lucide-react";

/** @param {{ winner: string, confidence: number, summary: string }} props */
function WinnerCard({ winner, confidence, summary }) {
  const isChallenger = winner === "challenger";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[28px] border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.07] via-blue-500/[0.04] to-transparent p-8 md:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-600/15 blur-[80px]"
      />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/20">
              <Trophy className="h-4 w-4 text-violet-400" strokeWidth={2} />
            </span>
            <span className="text-sm text-[#a0a0a0]">Winner</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight capitalize">
            {winner}
          </h2>

          <p className="max-w-md text-[15px] leading-relaxed text-[#a0a0a0]">
            "{summary}"
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center justify-center gap-1 rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-10 py-7">
          <span className="text-5xl font-semibold tracking-tight text-white">
            {confidence}
            <span className="text-2xl text-violet-400">%</span>
          </span>
          <span className="text-xs text-[#606060] uppercase tracking-widest">
            Confidence
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default WinnerCard;
