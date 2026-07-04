import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Gavel } from "lucide-react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import WinnerCard from "../components/verdict/WinnerCard";
import ScoreCard from "../components/verdict/ScoreCard";
import JudgeAnalysis from "../components/verdict/JudgeAnalysis";
import ActionButtons from "../components/verdict/ActionButtons";

function Verdict() {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();

  const topic = searchParams.get("topic") ?? "Untitled Debate";

  const [verdict, setVerdict] = useState(null);
  const [error, setError]     = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("duelData");
      if (!raw) throw new Error();
      const data = JSON.parse(raw);
      if (!data.verdict) throw new Error();
      setVerdict(data.verdict);
    } catch {
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <div className="bg-[#050505] text-white min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-medium">No verdict data found.</p>
        <button
          onClick={() => navigate("/create")}
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
        >
          Start New Duel
        </button>
      </div>
    );
  }

  if (!verdict) return null;

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-br from-violet-600/15 via-blue-600/8 to-transparent blur-[130px]"
      />

      <main className="relative pt-28 pb-28 md:pt-36 md:pb-36">
        <Container className="flex flex-col gap-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-[#a0a0a0]">
              <Gavel className="h-3.5 w-3.5 text-violet-400" strokeWidth={2} />
              Debate Completed
            </span>
            <h1 className="max-w-2xl text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
              {topic}
            </h1>
          </motion.div>

          <WinnerCard
            winner={verdict.winner}
            confidence={verdict.confidence}
            summary={verdict.summary}
          />

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#505050]"
            >
              Score Analysis
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScoreCard side="challenger" scores={verdict.scores.challenger} delay={0.1} />
              <ScoreCard side="defender"   scores={verdict.scores.defender}   delay={0.18} />
            </div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#505050]"
            >
              Judge Analysis
            </motion.p>
            <JudgeAnalysis analysis={verdict.analysis} />
          </div>

          <ActionButtons />

        </Container>
      </main>
    </div>
  );
}

export default Verdict;
