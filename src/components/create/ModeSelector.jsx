const MODES = [
  {
    id: "balanced",
    label: "Balanced",
    description: "Both sides argued fairly with equal depth.",
  },
  {
    id: "academic",
    label: "Academic",
    description: "Evidence-driven. Citations and structured logic.",
  },
  {
    id: "aggressive",
    label: "Aggressive",
    description: "No mercy. Hard rebuttals, direct attacks.",
  },
  {
    id: "funny",
    label: "Funny",
    description: "Same arguments, delivered with wit and humor.",
  },
];

function ModeSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[#a0a0a0]">Debate Mode</span>
      <div
        role="radiogroup"
        aria-label="Debate mode"
        className="grid grid-cols-2 gap-3"
      >
        {MODES.map((mode) => {
          const selected = value === mode.id;
          return (
            <button
              key={mode.id}
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(mode.id)}
              className={`group flex flex-col items-start rounded-2xl border px-4 py-4 text-left transition-all duration-200
                ${
                  selected
                    ? "border-violet-500/50 bg-violet-500/[0.08]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
            >
              <span
                className={`text-sm font-medium transition-colors duration-200 ${
                  selected ? "text-white" : "text-[#c0c0c0] group-hover:text-white"
                }`}
              >
                {mode.label}
              </span>
              <span className="mt-1 text-xs leading-relaxed text-[#606060]">
                {mode.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModeSelector;
