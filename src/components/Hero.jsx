import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import Container from "./Container";

function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-br from-violet-600/25 via-blue-600/10 to-transparent blur-[120px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-[#a0a0a0]"
        >
          Now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.05]"
        >
          The Smartest{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Arguments
          </span>{" "}
          Start Here.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-xl text-base md:text-lg text-[#a0a0a0] leading-relaxed"
        >
          Challenge AI experts, historical figures and legendary minds in
          debates that sharpen your thinking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.03]">
            Start Debating
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/5">
            <Play className="h-4 w-4" />
            Watch Demo
          </button>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
