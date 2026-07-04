import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Swords, Home, Share2 } from "lucide-react";

function ActionButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
    >
      <Link
        to="/create"
        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
      >
        <Swords className="h-4 w-4" strokeWidth={2.25} />
        Start New Duel
      </Link>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/5"
      >
        <Home className="h-4 w-4" strokeWidth={1.75} />
        Return Home
      </Link>

      {/* Placeholder — enable when sharing is implemented */}
      <button
        disabled
        aria-label="Share (coming soon)"
        title="Coming soon"
        className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] px-7 py-3.5 text-sm font-medium text-white/25 cursor-not-allowed"
      >
        <Share2 className="h-4 w-4" strokeWidth={1.75} />
        Share
      </button>
    </motion.div>
  );
}

export default ActionButtons;
