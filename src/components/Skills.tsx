/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type SkillLevel = "Primary" | "Strong" | "Working knowledge";

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Architecture" | "Tools" | "Soft Skills" | "Quality";
  level: SkillLevel;
  description: string;
  icon?: string;
}

const SKILLS: Skill[] = [
  // Frontend Tech
  {
    name: "React.js",
    category: "Frontend",
    level: "Primary",
    description: "Building component-based UIs with hooks, context, and modern patterns.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Primary",
    description: "Full-stack React framework with SSR, SSG, and App Router expertise.",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Primary",
    description: "Modern JavaScript with ES6+ features, async patterns, and performance optimization.",
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: "Strong",
    description: "Semantic markup, accessibility, and modern web standards.",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Strong",
    description: "Flexbox, Grid, animations, and responsive design patterns.",
  },
  // Backend Tech
  {
    name: "Node.js",
    category: "Backend",
    level: "Primary",
    description: "Server-side JavaScript, REST APIs, and real-time applications.",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Strong",
    description: "API development, middleware, and server architecture.",
  },
  {
    name: "RESTful APIs",
    category: "Backend",
    level: "Strong",
    description: "Designing and implementing RESTful API architectures.",
  },
  {
    name: "Socket.io",
    category: "Backend",
    level: "Strong",
    description: "Real-time bidirectional communication for web applications.",
  },
  {
    name: "Ethers.js",
    category: "Backend",
    level: "Strong",
    description: "Web3 / Blockchain integration for EVM-compatible chains.",
  },
  // Databases
  {
    name: "SQL",
    category: "Databases",
    level: "Strong",
    description: "Relational database design, queries, and optimization.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    level: "Strong",
    description: "NoSQL database design, queries, and aggregation pipelines.",
  },
  {
    name: "Firebase",
    category: "Databases",
    level: "Strong",
    description: "Real-time database, authentication, and cloud functions.",
  },
  // Architecture
  {
    name: "Scalable Structure",
    category: "Architecture",
    level: "Primary",
    description: "Designing scalable application architectures and system structures.",
  },
  {
    name: "Reusable Components",
    category: "Architecture",
    level: "Primary",
    description: "Building reusable UI components and design systems.",
  },
  {
    name: "Wallet Integrations",
    category: "Architecture",
    level: "Strong",
    description: "Integrating crypto wallets and Web3 authentication.",
  },
  {
    name: "Smart Contracts",
    category: "Architecture",
    level: "Strong",
    description: "Smart contract interaction for EVM-based blockchains.",
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    level: "Strong",
    description: "Version control and collaborative development workflows.",
  },
  {
    name: "GitHub/GitLab",
    category: "Tools",
    level: "Strong",
    description: "Code repository management and collaboration platforms.",
  },
  {
    name: "CI/CD",
    category: "Tools",
    level: "Working knowledge",
    description: "Basic CI/CD pipeline setup and automation.",
  },
  {
    name: "Deployment",
    category: "Tools",
    level: "Strong",
    description: "Deployment workflows and production releases.",
  },
  {
    name: "AWS EC2 / DevOps",
    category: "Tools",
    level: "Strong",
    description: "Good experience in DevOps with AWS EC2 infrastructure management.",
  },
  // Soft Skills
  {
    name: "Team Leadership",
    category: "Soft Skills",
    level: "Strong",
    description: "Leading development teams and coordinating projects.",
  },
  {
    name: "Project Coordination",
    category: "Soft Skills",
    level: "Strong",
    description: "Managing project timelines and deliverables.",
  },
  {
    name: "Client Communication",
    category: "Soft Skills",
    level: "Strong",
    description: "Effective communication with clients and stakeholders.",
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    level: "Strong",
    description: "Analytical thinking and creative problem-solving approaches.",
  },
  // Quality
  {
    name: "Debugging",
    category: "Quality",
    level: "Strong",
    description: "Identifying and resolving bugs efficiently.",
  },
  {
    name: "Performance",
    category: "Quality",
    level: "Strong",
    description: "Performance optimization and code efficiency.",
  },
  {
    name: "Clean Code",
    category: "Quality",
    level: "Strong",
    description: "Writing maintainable, readable, and well-structured code.",
  },
];

const CATEGORIES = ["Frontend", "Backend", "Databases", "Architecture", "Tools", "Soft Skills", "Quality"] as const;

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );
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

  const getLevelColor = (level: SkillLevel) => {
    switch (level) {
      case "Primary":
        return "text-[#6e3ece] border-[#6e3ece] bg-[#6e3ece]/10";
      case "Strong":
        return "text-[#6e3ece] border-[#6e3ece] bg-[#6e3ece]/10";
      case "Working knowledge":
        return "text-zinc-400 border-zinc-400 bg-zinc-400/10";
    }
  };

  const filteredSkills =
    selectedCategory === null
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
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

      {cursorPos && (
        <div
          className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            animation: "star-blink 1.2s ease-in-out infinite",
          }}
        >
          <span className="block text-2xl leading-none">✦</span>
        </div>
      )}

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
              SKILL TREE
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            HOVER TO EXPLORE • NO PERCENTAGES, JUST REALITY
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-[6px] border px-4 py-2 text-[9px] font-['Press_Start_2P',system-ui,monospace] uppercase tracking-[0.22em] transition-all ${
              selectedCategory === null
                ? "border-[#6e3ece] bg-[#6e3ece]/20 text-white shadow-[0_0_12px_rgba(110,62,206,0.4)]"
                : "border-white/20 bg-black/40 text-zinc-400 hover:border-white/40 hover:text-white"
            }`}
          >
            ALL
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-[6px] border px-4 py-2 text-[9px] font-['Press_Start_2P',system-ui,monospace] uppercase tracking-[0.22em] transition-all ${
                selectedCategory === cat
                  ? "border-[#6e3ece] bg-[#6e3ece]/20 text-white shadow-[0_0_12px_rgba(110,62,206,0.4)]"
                  : "border-white/20 bg-black/40 text-zinc-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            className="relative rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/60 p-8 backdrop-blur-sm"

          >
            <div className="absolute -right-8 -top-8 hidden lg:block">
              <Image
                src="/assets/spaceman.png"
                alt="Spaceman"
                width={120}
                height={120}
                className="h-auto w-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative"
                >
                  <div
                    className={`relative cursor-pointer rounded-[8px] border-2 p-3 text-center transition-all duration-200 ${getLevelColor(
                      skill.level
                    )} hover:scale-110 hover:shadow-[0_0_20px_rgba(110,62,206,0.6)]`}
                  >
                    <div className="mb-2 font-['Press_Start_2P',system-ui,monospace] text-[11px] uppercase tracking-[0.16em] text-white">
                      {skill.name}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.14em] text-white/80">
                      {skill.level}
                    </div>

                    <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#6e3ece] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {hoveredSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-[8px] border border-[#6e3ece]/40 bg-black/95 p-4 shadow-[0_0_24px_rgba(110,62,206,0.6)] backdrop-blur-md"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-white">
                      {hoveredSkill.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-[0.1em] ${getLevelColor(
                        hoveredSkill.level
                      ).split(" ")[0]}`}
                    >
                      {hoveredSkill.level}
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-zinc-300">
                    {hoveredSkill.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1">
                    <span className="text-[8px] uppercase tracking-[0.1em] text-zinc-500">
                      {hoveredSkill.category}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/10" />
            <span>PRIMARY</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/10" />
            <span>STRONG</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-zinc-400 bg-zinc-400/10" />
            <span>WORKING KNOWLEDGE</span>
          </div>
        </div>
      </div>
      <img src="/assets/border.png" alt="Border" className="absolute bottom-0 right-0  " />
    </section>
  );
};

export default Skills;

