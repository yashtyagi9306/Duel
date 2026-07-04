import { motion } from "motion/react";
import { Bot, Landmark, BookOpen, UserRound, Radio } from "lucide-react";
import Container from "./Container";

const MODES = [
  {
    icon: Bot,
    title: "AI Debate",
    description: "Face an AI opponent tuned to argue any position rigorously.",
  },
  {
    icon: Landmark,
    title: "Historical Figures",
    description: "Cross arguments with Socrates, Einstein and other icons.",
  },
  {
    icon: BookOpen,
    title: "Fictional Characters",
    description: "Test your reasoning against legendary literary minds.",
  },
  {
    icon: UserRound,
    title: "Friend vs Friend",
    description: "Invite someone you know and debate head to head.",
  },
  {
    icon: Radio,
    title: "Live Audience",
    description: "Debate in front of a crowd and get judged in real time.",
  },
];

function Modes() {
  return (
    <section id="modes" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Pick your format.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#a0a0a0]">
            Every debate mode is built around a different way to grow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODES.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
            >
              <mode.icon className="h-5 w-5 text-violet-300" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-medium">{mode.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Modes;
