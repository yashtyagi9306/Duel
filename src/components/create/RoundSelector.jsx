const OPTIONS = [1, 3, 5];

function RoundSelector({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[#a0a0a0]">Rounds</span>
      <div
        role="radiogroup"
        aria-label="Number of rounds"
        className="inline-flex self-start gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-1"
      >
        {OPTIONS.map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(n)}
              className={`min-w-[68px] rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200
                ${
                  selected
                    ? "bg-white text-black shadow-sm"
                    : "text-[#a0a0a0] hover:text-white"
                }`}
            >
              {n === 1 ? "1 round" : `${n} rounds`}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RoundSelector;
