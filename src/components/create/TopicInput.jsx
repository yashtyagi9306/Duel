import { useEffect, useRef } from "react";

function TopicInput({ value, onChange, error }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="topic"
        className="text-sm font-medium text-[#a0a0a0]"
      >
        Topic
      </label>
      <textarea
        ref={ref}
        id="topic"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Should AI replace teachers?"
        rows={3}
        aria-invalid={!!error}
        aria-describedby={error ? "topic-error" : undefined}
        className={`w-full resize-none rounded-2xl border bg-white/[0.03] px-5 py-4 text-base leading-relaxed text-white placeholder:text-[#555] transition-colors duration-200 outline-none
          focus:bg-white/[0.05]
          ${
            error
              ? "border-red-500/50 focus:border-red-500/70"
              : "border-white/[0.08] focus:border-white/25"
          }`}
      />
      {error && (
        <p id="topic-error" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default TopicInput;
