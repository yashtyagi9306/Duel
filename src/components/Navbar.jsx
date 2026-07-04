import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Swords, Menu, X } from "lucide-react";
import Container from "./Container";

const LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Modes", href: "/#modes" },
  { label: "Characters", href: "/#characters" },
  { label: "Pricing", href: "/#pricing" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 transition-transform duration-300 group-hover:scale-105">
            <Swords className="h-4 w-4 text-white" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-semibold tracking-tight">DUEL</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#a0a0a0] transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-[#a0a0a0] px-4 py-2 transition-colors duration-300 hover:text-white">
            Login
          </button>
          <Link
            to="/create"
            className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10"
        >
          <Container className="flex flex-col gap-5 py-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[#a0a0a0] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <button className="text-sm text-[#a0a0a0] text-left">Login</button>
              <Link
                to="/create"
                onClick={() => setOpen(false)}
                className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black w-fit"
              >
                Get Started
              </Link>
            </div>
          </Container>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
