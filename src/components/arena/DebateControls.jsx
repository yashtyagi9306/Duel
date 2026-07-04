import { motion } from "motion/react";
import { ArrowRight, Gavel } from "lucide-react";

/**
 * @param {{
 *   isFinal: boolean,
 *   onNext: () => void
 * }} props
 */
function DebateControls({ isFinal, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="flex justify-center"
    >
      <button
        onClick={onNext}
        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
      >
        {isFinal ? (
          <>
            <Gavel className="h-4 w-4" strokeWidth={2} />
            View Verdict
          </>
        ) : (
          <>
            Next Round
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </motion.div>
  );
}

export default DebateControls;
