import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DuelDemo from "../components/DuelDemo";
import Features from "../components/Features";
import Modes from "../components/Modes";
import Characters from "../components/Characters";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <DuelDemo />
        <Features />
        <Modes />
        <Characters />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
