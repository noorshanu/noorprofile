import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import ScrollProgress from "@/components/ScrollProgress";
import HowIThink from "@/components/HowIThink";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import FloatingTelegram from "@/components/FloatingTelegram";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noor Alam",
  jobTitle: "Full Stack, Web3 & AI Engineer",
  description:
    "Full-stack engineer with 6+ years shipping high-impact products across modern SaaS, DeFi, and AI. Building scalable, production-grade systems.",
  url: "https://www.nooralam.pro",
  image: "https://www.nooralam.pro/fav.png",
  sameAs: [
    "https://github.com/noorshanu",
    "https://www.linkedin.com/in/noor-alam-aa722314b/",
    "https://x.com/CodingGamer4",
    "https://t.me/noorxdee",
  ],
  email: "noor.alam.619@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "United Arab Emirates",
  },
  knowsAbout: [
    "Full Stack Development",
    "Web3",
    "Blockchain",
    "Smart Contracts",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Solidity",
    "AI Integration",
    "DeFi",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Software Engineering",
  },
  worksFor: {
    "@type": "Organization",
    name: "DeeLance",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen text-white">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <section>
          <div className="mx-auto">
            <TechMarquee />
          </div>
        </section>
        <HowIThink />
        <Skills />
        <Timeline />
        <Projects />
        <HireMe />
        <Contact />
        <FloatingTelegram />
      </main>
    </>
  );
}

