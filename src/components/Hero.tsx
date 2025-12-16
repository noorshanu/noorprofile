"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import CursorPixelBackground from "./CursorPixelBackground";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <CursorPixelBackground />
      </div>

      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#6e3ece]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#7b1e3a]/30 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-center lg:text-left"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-zinc-400">
            FULL STACK • WEB3 • AI
          </p>

          <h1 className="mb-5 font-['Press_Start_2P',system-ui,monospace] text-[24px] leading-relaxed tracking-[0.18em] sm:text-[28px] lg:text-[32px]">
            NOOR&nbsp;ALAM
          </h1>

          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
            BUILDING SCALABLE, PRODUCTION‑GRADE SYSTEMS
          </p>

          <p className="mb-8 max-w-md text-base leading-relaxed text-zinc-300 ">
            Full‑stack engineer with 6+ years shipping high‑impact products across
            modern SaaS, DeFi, and AI. I design clean architectures, robust APIs,
            and crisp, fast UIs that feel like premium game menus.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <motion.a
              href="https://game.nooralam.pro/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: "0 0 22px rgba(110,62,206,0.75)" }}
              whileTap={{ y: 0, scale: 0.97, boxShadow: "0 0 12px rgba(110,62,206,0.55)" }}
              className="rounded-[6px] bg-[#6e3ece] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#5a32aa] font-['Press_Start_2P',system-ui,monospace]"
            >
              Start Game
            </motion.a>

            <motion.a
              href="#projects"
           
              whileHover={{ y: -2, boxShadow: "0 0 18px rgba(255,255,255,0.45)" }}
              whileTap={{ y: 0, scale: 0.97, boxShadow: "0 0 10px rgba(255,255,255,0.35)" }}
              className="rounded-[6px] border border-white/30 bg-white/5 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md transition-colors hover:bg-white/12 hover:border-white/60"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative flex w-full max-w-sm justify-center lg:max-w-md"
        >
          <div className="relative w-full max-w-xs rounded-[12px] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:rounded-[12px] before:border before:border-[#6e3ece]/40 before:opacity-40 before:mix-blend-screen">
            <div className="mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              <span>Player 01</span>
              <span>Ready</span>
            </div>

            <div className="mb-6 h-78 overflow-hidden rounded-[6px] border border-[rgba(255,255,255,0.12)] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-size-[10px_10px]">
              <Image
                src="/assets/hero.png"
                alt="Noor pixel avatar"
                width={560}
                height={560}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-[10px] text-zinc-300">
              <div className="rounded-[6px] border border-[rgba(255,255,255,0.08)] bg-white/5 px-3 py-2">
                <p className="mb-1 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                  Stack
                </p>
                <p>TS • Next • Solidity</p>
              </div>
              <div className="rounded-[6px] border border-[rgba(255,255,255,0.08)] bg-white/5 px-3 py-2">
                <p className="mb-1 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                  Mode
                </p>
                <p>Web3 • AI • DX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;