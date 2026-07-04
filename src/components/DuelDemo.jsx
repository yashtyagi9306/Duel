import { motion } from "motion/react";
import { Sparkles, RotateCcw } from "lucide-react";
import Container from "./Container";

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#a0a0a0]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

function DuelDemo() {
  return (
    <section className="relative pb-28 md:pb-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[28px] border border-white/[0.08] bg-[#0d0d0d]/80 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(124,58,237,0.25)] overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[90px]"
            />

            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
              <div className="flex items-center gap-2 text-xs text-[#a0a0a0]">
                <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                Live Debate
              </div>
              <p className="text-sm font-medium text-white">
                Is remote work better than office work?
              </p>
              <span className="text-xs text-[#a0a0a0]">02:14</span>
            </div>

            <div className="flex flex-col gap-4 px-6 py-7">
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white text-black px-4 py-3 text-sm leading-relaxed">
                  Remote work removes commute friction entirely and gives
                  people back hours of focused, undistracted time.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-relaxed text-[#e5e5e5]">
                  Focused time, sure — but spontaneous collaboration drops
                  sharply. How do you account for the lost serendipity?
                  <TypingDots />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#a0a0a0]">Reasoning</span>
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-blue-400"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#a0a0a0]">Confidence</span>
                  <span className="text-xs font-medium text-white">78%</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-white/5 sm:self-auto">
                <RotateCcw className="h-3.5 w-3.5" />
                Counter
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default DuelDemo;
