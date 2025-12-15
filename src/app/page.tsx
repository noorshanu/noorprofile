
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingTelegram from "@/components/FloatingTelegram";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <section>
        <div className="mx-auto">
          <TechMarquee />
        </div>
      </section>
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <FloatingTelegram />
    </main>
  );
}

