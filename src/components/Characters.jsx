import { motion } from "motion/react";
import Container from "./Container";

const CHARACTERS = [
  {
    name: "Socrates",
    description: "Master of the question that unravels your own argument.",
    initials: "SO",
  },
  {
    name: "Einstein",
    description: "Challenges assumptions with relentless first-principles logic.",
    initials: "AE",
  },
  {
    name: "Napoleon",
    description: "Argues with strategic precision and unshakable conviction.",
    initials: "NB",
  },
  {
    name: "Sherlock Holmes",
    description: "Dismantles weak reasoning with cold, observational clarity.",
    initials: "SH",
  },
  {
    name: "Sun Tzu",
    description: "Turns every debate into a study of position and timing.",
    initials: "ST",
  },
];

function Characters() {
  return (
    <section id="characters" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Argue with legends.
          </h2>
        </motion.div>

        <div className="mt-16 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CHARACTERS.map((character, i) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex w-64 shrink-0 flex-col items-center rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 text-sm font-medium">
                {character.initials}
              </div>
              <h3 className="mt-5 text-lg font-medium">{character.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">
                {character.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Characters;
