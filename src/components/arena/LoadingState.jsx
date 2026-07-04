import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

const STEPS = [
  "Understanding topic",
  "Assigning positions",
  "Challenger thinking…",
];

/** @param {{ onReady: () => void }} props */
function LoadingState({ onReady }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 1400),
      setTimeout(() => onReady(), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onReady]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xl font-semibold tracking-tight"
      >
        Preparing Duel…
      </motion.p>

      <div className="flex flex-col gap-3 w-56">
        {STEPS.map((label, i) => {
          const done = step > i;
          const active = step === i;
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: step >= i ? 1 : 0.25, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {done ? (
                  <Check className="h-4 w-4 text-violet-400" strokeWidth={2.5} />
                ) : active ? (
                  <span className="inline-flex gap-[3px]">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1 w-1 rounded-full bg-violet-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: d * 0.18,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                )}
              </span>
              <span
                className={`text-sm transition-colors duration-300 ${
                  done
                    ? "text-white"
                    : active
                    ? "text-[#c0c0c0]"
                    : "text-[#404040]"
                }`}
              >
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default LoadingState;
