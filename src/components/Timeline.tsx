/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  bossName: string;
}

const EXPERIENCES: WorkExperience[] = [
  {
    id: 1,
    company: "DeeLance",
    role: "Full-stack Developer",
    period: "Jan 2023 - Present",
    duration: "3 yrs",
    location: "Dubai, United Arab Emirates · On-site",
    type: "Full-time",
    description:
      "Planned, developed, and integrated Web3 functionality and advanced database management into a modern operations-focused web application. Oversaw backend architecture and server infrastructure on AWS EC2 (Ubuntu/Linux), enabling secure decentralized features and efficient enterprise-grade performance.",
    skills: ["Python", "Node.js", "Web3", "AWS EC2", "Database Management"],
    bossName: "BOSS BATTLE 1",
  },
  {
    id: 2,
    company: "BlockAudit",
    role: "Senior Frontend Developer",
    period: "Jul 2020 - Dec 2022",
    duration: "2 yrs 6 mos",
    location: "Dubai, United Arab Emirates · Remote",
    type: "Full-time",
    description:
      "Spearheaded the frontend development of blockchain-based dashboards and interfaces using React.js, ensuring a modern and intuitive user experience.",
    skills: ["React.js", "Python", "WordPress Development", "Blockchain"],
    bossName: "BOSS BATTLE 2",
  },
  {
    id: 3,
    company: "Brainchange",
    role: "Frontend Developer",
    period: "Dec 2021 - Feb 2022",
    duration: "3 mos",
    location: "Toronto, Ontario, Canada · Remote",
    type: "Internship",
    description:
      "Supported backend API testing to ensure reliable frontend-backend integration.",
    skills: ["WordPress", "PHP", "API Testing"],
    bossName: "BOSS BATTLE 3",
  },
  {
    id: 4,
    company: "Gaatha - A tale of Crafts",
    role: "Frontend Developer",
    period: "Aug 2021 - Oct 2021",
    duration: "3 mos",
    location: "Gujarat, India · Remote",
    type: "Part-time",
    description: "Developed WordPress-based frontend solutions for craft marketplace.",
    skills: ["WordPress"],
    bossName: "BOSS BATTLE 4",
  },
  {
    id: 5,
    company: "RuralShores Skills Academy",
    role: "Web Developer",
    period: "Jul 2020 - Nov 2020",
    duration: "5 mos",
    location: "Noida, Uttar Pradesh, India · On-site",
    type: "Internship",
    description: "Built web applications and learned foundational web development skills.",
    skills: ["Python", "WordPress", "Web Development"],
    bossName: "BOSS BATTLE 5",
  },
];

const Timeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExp = EXPERIENCES[currentIndex];
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

  const nextExp = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length);
  };

  const prevExp = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  };

  const progress = ((currentIndex + 1) / EXPERIENCES.length) * 100;

  return (
    <section
      id="work"
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

      <div className="relative z-10 mx-auto max-w-6xl sm:pb-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[28px]">
              WORK EXPERIENCE
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            BOSS BATTLES • LEVEL UP YOUR CAREER
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="relative rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/80 py-16 px-24 backdrop-blur-sm"
        
          >
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExp.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border-2 border-[#6e3ece] bg-[#6e3ece]/20 font-['Press_Start_2P',system-ui,monospace] text-[10px] text-[#6e3ece]">
                      {currentExp.id}
                    </div>
                    <div>
                      <h3 className="font-['Press_Start_2P',system-ui,monospace] text-[12px] uppercase tracking-[0.18em] text-[#6e3ece] sm:text-[14px]">
                        {currentExp.bossName}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                        {currentExp.company}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-black/60 p-6">
                    <div className="mb-4">
                      <h4 className="mb-2 font-['Press_Start_2P',system-ui,monospace] text-[11px] uppercase tracking-[0.16em] text-white">
                        {currentExp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-[9px] text-zinc-300">
                        <span className="rounded-[4px] border border-[#6e3ece]/40 bg-[#6e3ece]/10 px-2 py-1">
                          {currentExp.period}
                        </span>
                        <span className="rounded-[4px] border border-[#6e3ece]/40 bg-[#6e3ece]/10 px-2 py-1">
                          {currentExp.duration}
                        </span>
                        <span className="rounded-[4px] border border-white/20 bg-white/5 px-2 py-1">
                          {currentExp.type}
                        </span>
                      </div>
                      <p className="mt-2 text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                        {currentExp.location}
                      </p>
                    </div>

                    <p className="mb-4 text-[10px] leading-relaxed text-zinc-300">
                      {currentExp.description}
                    </p>

                    <div>
                      <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                        SKILLS USED:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentExp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="rounded-[4px] border border-[#6e3ece]/30 bg-[#6e3ece]/10 px-2 py-1 text-[8px] uppercase tracking-[0.1em] text-[#6e3ece]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0">
                <div className="mb-4 flex items-center gap-4">
                  <motion.div
                    className="relative h-16 w-16 shrink-0"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/assets/ufo.png"
                      alt="UFO Player"
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="h-1 w-12 rounded-full bg-[#6e3ece] blur-sm" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                      animate={{
                        scale: [0.8, 1, 0.8],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="h-2 w-16 rounded-full bg-[#6e3ece]/40 blur-md" />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-zinc-400">
                      <span>PROGRESS</span>
                      <span>
                        {currentIndex + 1} / {EXPERIENCES.length}
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full border-2 border-[rgba(255,255,255,0.2)] bg-black/60">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#6e3ece] to-[#7b1e3a]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevExp}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-[6px] border border-white/20 bg-black/60 p-3 text-white transition-all hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]"
              aria-label="Previous experience"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextExp}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-[6px] border border-white/20 bg-black/60 p-3 text-white transition-all hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]"
              aria-label="Next experience"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {EXPERIENCES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-[#6e3ece]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to experience ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <img
        src="/assets/border.png"
        alt="Border"
     
        className="pointer-events-none absolute bottom-0 right-0 z-0 "
        
      />
    </section>
  );
};

export default Timeline;
