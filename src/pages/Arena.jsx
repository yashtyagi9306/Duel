import { useState, useCallback, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import LoadingState from "../components/arena/LoadingState";
import TopicHeader from "../components/arena/TopicHeader";
import DebateCard from "../components/arena/DebateCard";
import DebateControls from "../components/arena/DebateControls";

const PHASE = { LOADING: "loading", DEBATE: "debate", ERROR: "error" };

function Arena() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const topic       = searchParams.get("topic") ?? "Untitled Debate";
  const mode        = searchParams.get("mode")  ?? "balanced";
  const totalRounds = Math.min(parseInt(searchParams.get("rounds") ?? "3"), 5);

  const [phase, setPhase]               = useState(PHASE.LOADING);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [debateRounds, setDebateRounds] = useState([]);
  const [verdict, setVerdict]           = useState(null);

  // Load data from sessionStorage (written by CreateDuel after API response)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("duelData");
      if (!raw) throw new Error("No debate data found.");
      const data = JSON.parse(raw);
      if (!Array.isArray(data.debate) || !data.verdict) throw new Error("Invalid debate data.");
      setDebateRounds(data.debate.slice(0, totalRounds));
      setVerdict(data.verdict);
    } catch {
      setPhase(PHASE.ERROR);
    }
  }, [totalRounds]);

  // LoadingState fires onReady after its animation — transition to debate then
  const handleReady = useCallback(() => {
    if (debateRounds.length > 0) setPhase(PHASE.DEBATE);
  }, [debateRounds]);

  const handleNext = () => {
    const isLastRound = currentIndex === totalRounds - 1;
    if (isLastRound) {
      const params = new URLSearchParams({ topic, mode, rounds: String(totalRounds) });
      navigate(`/verdict?${params.toString()}`);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const round   = debateRounds[currentIndex];
  const isFinal = currentIndex === totalRounds - 1;

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-br from-violet-600/15 via-blue-600/8 to-transparent blur-[130px]"
      />

      <main className="relative pt-28 pb-28 md:pt-36 md:pb-36">
        <Container className="flex flex-col gap-12">
          <AnimatePresence mode="wait">
            {phase === PHASE.ERROR ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center"
              >
                <p className="text-lg font-medium text-white">Something went wrong.</p>
                <p className="text-sm text-[#a0a0a0]">We couldn't load the debate. Please start a new duel.</p>
                <button
                  onClick={() => navigate("/create")}
                  className="mt-4 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                >
                  Start New Duel
                </button>
              </motion.div>
            ) : phase === PHASE.LOADING ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingState onReady={handleReady} />
              </motion.div>
            ) : (
              <motion.div
                key="debate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-10"
              >
                <TopicHeader
                  topic={topic}
                  mode={mode}
                  currentRound={currentIndex + 1}
                  totalRounds={totalRounds}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <DebateCard side="challenger" argument={round.challenger} delay={0} />
                    <DebateCard side="defender"   argument={round.defender}   delay={0.12} />
                  </motion.div>
                </AnimatePresence>

                <DebateControls isFinal={isFinal} onNext={handleNext} />
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </main>
    </div>
  );
}

export default Arena;
