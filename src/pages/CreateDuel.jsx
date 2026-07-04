import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import TopicInput from "../components/create/TopicInput";
import ModeSelector from "../components/create/ModeSelector";
import RoundSelector from "../components/create/RoundSelector";
import { createDebate } from "../services/api";

const FADE_UP = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

function CreateDuel() {
  const navigate = useNavigate();

  const [topic, setTopic]           = useState("");
  const [mode, setMode]             = useState("balanced");
  const [rounds, setRounds]         = useState(3);
  const [topicError, setTopicError] = useState("");
  const [apiError, setApiError]     = useState("");
  const [loading, setLoading]       = useState(false);

  const handleSubmit = async () => {
    const trimmed = topic.trim();
    if (!trimmed) {
      setTopicError("Please enter a debate topic to continue.");
      return;
    }

    setApiError("");
    setLoading(true);

    try {
      const data = await createDebate({ topic: trimmed, mode, rounds });
      // Persist full response so Arena and Verdict can read it without refetching
      sessionStorage.setItem("duelData", JSON.stringify(data));
      const params = new URLSearchParams({ topic: trimmed, mode, rounds: String(rounds) });
      navigate(`/arena?${params.toString()}`);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTopicChange = (value) => {
    setTopic(value);
    if (topicError && value.trim()) setTopicError("");
  };

  const canSubmit = !!topic.trim() && !loading;

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-violet-500/30 selection:text-white">
      <Navbar />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-br from-violet-600/20 via-blue-600/8 to-transparent blur-[120px]"
      />

      <main className="relative pt-36 pb-28 md:pt-48 md:pb-36">
        <Container className="flex flex-col items-center">
          <motion.div
            {...FADE_UP}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-[#a0a0a0]"
          >
            Step 1 of 3
          </motion.div>

          <motion.h1
            {...FADE_UP}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]"
          >
            What should the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI debate?
            </span>
          </motion.h1>

          <motion.p
            {...FADE_UP}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-base text-[#a0a0a0] text-center max-w-sm leading-relaxed"
          >
            Two AI agents will argue opposite sides. A judge decides the winner.
          </motion.p>

          <motion.div
            {...FADE_UP}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-12 w-full max-w-2xl"
          >
            <div className="rounded-[28px] border border-white/[0.08] bg-[#0d0d0d]/60 backdrop-blur-sm px-6 py-8 md:px-8 md:py-10 flex flex-col gap-8">
              <TopicInput
                value={topic}
                onChange={handleTopicChange}
                error={topicError}
              />

              <div className="h-px bg-white/[0.06]" />

              <ModeSelector value={mode} onChange={setMode} />

              <div className="h-px bg-white/[0.06]" />

              <RoundSelector value={rounds} onChange={setRounds} />

              {apiError && (
                <p className="text-sm text-red-400 text-center -mb-2">{apiError}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                aria-label="Start Duel"
                className={`group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-medium transition-all duration-300
                  ${
                    canSubmit
                      ? "bg-white text-black hover:scale-[1.02] cursor-pointer"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating Debate…
                  </>
                ) : (
                  <>
                    Start Duel
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}

export default CreateDuel;
