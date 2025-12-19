/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Principle {
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  keywords: string[];
}

const PRINCIPLES: Principle[] = [
  {
    emoji: "🚀",
    title: "Ship Fast",
    tagline: "over perfect",
    description:
      "I prioritize rapid iteration and real user feedback over endless refactoring. Building production ready applications that deliver value quickly while maintaining code quality and scalability. Real users validate ideas faster than perfect code.",
    keywords: ["rapid development", "MVP", "agile", "production-ready", "user feedback"],
  },
  {
    emoji: "🔐",
    title: "Security First",
    tagline: "> Hype",
    description:
      "In Web3 and blockchain development, security isn't optional—it's foundational. I implement rigorous security practices, smart contract audits, and follow best practices to protect user assets and data. No shortcuts, no compromises.",
    keywords: ["Web3 security", "smart contract audits", "blockchain security", "cybersecurity"],
  },
  {
    emoji: "🧼",
    title: "Clean DX",
    tagline: "Faster teams",
    description:
      "Developer experience directly impacts team velocity. I write maintainable, well-documented code with clear architecture patterns. Clean code enables faster onboarding, easier debugging, and scalable collaboration across teams.",
    keywords: ["developer experience", "clean code", "maintainable code", "code quality", "DX"],
  },
  {
    emoji: "🤖",
    title: "Automation",
    tagline: "> Manpower",
    description:
      "I automate repetitive tasks, implement CI/CD pipelines, and build tools that eliminate manual work. From deployment automation to testing frameworks, automation reduces errors, speeds up delivery, and frees teams to focus on innovation.",
    keywords: ["CI/CD", "automation", "DevOps", "testing automation", "deployment"],
  },
];

const HowIThink: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const starsRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (starsRef.current && !initializedRef.current) {
      const stars = starsRef.current.getElementsByClassName("star");
      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i] as HTMLElement;
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        const d = Math.floor(Math.random() * 5 + 1);
        star.style.transform = `translate(${x}px, ${y}px)`;
        star.style.animationDuration = `${d}s`;
      }
      initializedRef.current = true;
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="how-i-think"
      className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div
        ref={starsRef}
        className="pointer-events-none absolute inset-0 z-0"
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star">
            .
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[12px_12px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[28px]">
              HOW I THINK
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            MY PRINCIPLES WHEN BUILDING REAL PRODUCTS
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Every line of code I write follows these core principles. They guide my decisions in
            full-stack development, Web3 architecture, and AI integration—ensuring scalable,
            secure, and maintainable solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#6e3ece] hover:bg-black/90 hover:shadow-[0_0_35px_rgba(110,62,206,0.6)]"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#6e3ece]/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 flex items-start gap-4">
                  <motion.div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] border border-[#6e3ece]/30 bg-[#6e3ece]/10 text-3xl backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {principle.emoji}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-['Press_Start_2P',system-ui,monospace] text-[14px] uppercase tracking-[0.16em] text-white sm:text-[16px]">
                      {principle.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#6e3ece] sm:text-xs">
                      {principle.tagline}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {principle.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {principle.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="rounded-[4px] border border-[#6e3ece]/20 bg-[#6e3ece]/5 px-2 py-1 text-[9px] uppercase tracking-widest text-[#6e3ece] opacity-70"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative overflow-hidden rounded-[12px] border border-[#6e3ece]/30 bg-linear-to-r from-[#6e3ece]/10 via-transparent to-[#6e3ece]/10 p-8 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,62,206,0.1)_1px,transparent_0)] bg-size-[8px_8px] opacity-30" />
          <div className="relative z-10 text-center">
            <p className="mb-2 font-['Press_Start_2P',system-ui,monospace] text-[12px] uppercase tracking-[0.18em] text-white sm:text-[14px]">
              ENGINEER MINDSET, NOT VENDOR
            </p>
            <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
              I build solutions that scale, systems that last, and code that your team will thank
              you for. Every decision is made with long-term impact in mind.
            </p>
          </div>
        </motion.div>
      </div>

      <img
        src="/assets/border.png"
        alt="Border"
        className="pointer-events-none absolute bottom-0 right-0 z-0 opacity-60"
      />
    </section>
  );
};

export default HowIThink;

