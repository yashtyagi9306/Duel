import { Swords } from "lucide-react";

const MODE_LABELS = {
  balanced: "Balanced",
  academic: "Academic",
  aggressive: "Aggressive",
  funny: "Funny",
};

/**
 * @param {{ topic: string, mode: string, currentRound: number, totalRounds: number }} props
 */
function TopicHeader({ topic, mode, currentRound, totalRounds }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-[#a0a0a0]">
          <Swords className="h-3 w-3 text-violet-400" strokeWidth={2.25} />
          {MODE_LABELS[mode] ?? mode}
        </span>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-[#a0a0a0]">
          Round {currentRound} / {totalRounds}
        </span>
      </div>

      <h1 className="max-w-2xl text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
        {topic}
      </h1>

      <div className="flex items-center gap-1.5 w-full max-w-xs">
        {Array.from({ length: totalRounds }).map((_, i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
              i < currentRound
                ? "bg-gradient-to-r from-violet-400 to-blue-400"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TopicHeader;
