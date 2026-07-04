import { motion } from "motion/react";
import { Brain, Users, GraduationCap } from "lucide-react";
import Container from "./Container";

const FEATURES = [
  {
    icon: Brain,
    title: "Think Better",
    description:
      "Structured debates push you to test your logic against real counterarguments, not just opinions.",
  },
  {
    icon: Users,
    title: "Debate Anyone",
    description:
      "From AI specialists to history's sharpest minds, choose who challenges you and how.",
  },
  {
    icon: GraduationCap,
    title: "Learn Faster",
    description:
      "Every exchange surfaces gaps in your reasoning, turning each debate into a lesson.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Built to make you sharper.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20">
                <feature.icon className="h-5 w-5 text-violet-300" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-xl font-medium">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
