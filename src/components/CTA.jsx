import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

function CTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02] px-8 py-20 text-center md:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-600/20 to-blue-600/10 blur-[100px]"
          />

          <h2 className="relative text-4xl md:text-5xl font-semibold tracking-tight">
            Ready to Challenge Great Minds?
          </h2>

          <button className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]">
            Start Free
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTA;
