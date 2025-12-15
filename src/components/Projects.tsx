/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mark8 - Marketing Agency",
    description:
      "A marketing agency website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/mark8.png",
    link: "https://mark8-io.vercel.app/",
  },
  {
    id: 2,
    title: "Shiro - Meme Token",
    description:
      "A meme token platform built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Solidity", "Web3.js", "Node.js"],
    category: "Web3",
    image: "/shiro.png",
    link: "https://mochi-delta.vercel.app/",
  },
  {
    id: 3,
    title: "404Monster - Presale Platform",
    description:
      "A presale platform built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web3",
    image: "/404mon.png",
    link: "https://404monster-xosm.vercel.app/en",
  },
  {
    id: 4,
    title: "Mira VENTURES",
    description:
      "A venture capital firm website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["React", "TypeScript", "CSS3", "Vercel"],
    category: "Frontend",
    image: "/Mira.png",
    link: "https://mira-vc.vercel.app/",
  },
  {
    id: 5,
    title: "Minto - create meme token",
    description:
      "A meme token creation platform built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Solidity", "Web3.js", "Node.js"],
    category: "Frontend",
    image: "/minto.png",
    link: "https://app.minto.live/create-token",
  },
  {
    id: 6,
    title: "Ruralshores Skills Academy",
    description:
      "A skills academy website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/rsa.png",
    link: "https://ruralshores.vercel.app/",
  },
  {
    id: 7,
    title: "Rainbow Delta - Icecream factory",
    description:
      "A icecream factory website built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    image: "/rainbow.png",
    link: "https://rainbow-delta.vercel.app/",
  },
  {
    id: 8,
    title: "Lunex - Staking Platform",
    description:
      "A staking platform built with Next.js, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations and responsive layout.",
    tech: ["Next.js", "Solidity", "Web3.js", "Node.js"],
    category: "Web3",
    image: "/Lunex.png",
    link: "https://lunex-webapp.vercel.app/",
  }
];

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);
  const starsRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isAnimating, setIsAnimating] = useState(false);

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

  const currentProjects = PROJECTS.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (isAnimating || newPage === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-4 sm:py-24 py-12 text-white sm:px-6 lg:px-8"
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

      <div className="relative z-10 mx-auto max-w-7xl pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[28px]">
              PROJECTS
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            LEVEL COMPLETE • MISSION ACCOMPLISHED
          </p>
        </motion.div>

        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate={isInView && !isAnimating ? "visible" : "hidden"}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
                <div
                  className="relative overflow-hidden rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#6e3ece] hover:shadow-[0_0_30px_rgba(110,62,206,0.5)]"
           
                >
                  <div className="absolute -right-8 -top-8 hidden opacity-20 transition-opacity group-hover:opacity-40 lg:block">
                    <Image
                      src="/assets/spaceman.png"
                      alt="Spaceman"
                      width={120}
                      height={120}
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="absolute -left-6 -bottom-6 hidden opacity-15 transition-opacity group-hover:opacity-30 lg:block">
                    <Image
                      src="/assets/sin.png"
                      alt="Sin"
                      width={100}
                      height={100}
                      className="h-auto w-auto"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-[#6e3ece]">
                          {project.category}
                        </span>
                        <h3 className="mb-3 font-['Press_Start_2P',system-ui,monospace] text-[14px] uppercase tracking-[0.16em] text-white sm:text-[16px]">
                          {project.title}
                        </h3>
                      </div>
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6e3ece]/40 bg-[#6e3ece]/10"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/assets/ufo.png"
                          alt="UFO"
                          width={20}
                          height={20}
                          className="h-4 w-4"
                        />
                      </motion.div>
                    </div>

                    <div className="mb-4 aspect-video overflow-hidden rounded-[8px] border border-[rgba(255,255,255,0.08)] bg-black/60">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <p className="mb-4 text-[11px] leading-relaxed text-zinc-300">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-[4px] border border-[#6e3ece]/30 bg-[#6e3ece]/10 px-2 py-1 text-[8px] uppercase tracking-[0.1em] text-[#6e3ece]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-[6px] border border-[#6e3ece]/40 bg-[#6e3ece]/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#6e3ece] transition-all hover:bg-[#6e3ece]/20 hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>VIEW PROJECT</span>
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>

                  <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0 || isAnimating}
            className="rounded-[6px] border border-white/20 bg-black/60 p-3 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]"
            whileHover={{ scale: currentPage === 0 || isAnimating ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => handlePageChange(idx)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all ${
                  idx === currentPage
                    ? "w-8 bg-[#6e3ece]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
                whileHover={{ scale: isAnimating ? 1 : 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1 || isAnimating}
            className="rounded-[6px] border border-white/20 bg-black/60 p-3 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]"
            whileHover={{ scale: currentPage === totalPages - 1 || isAnimating ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </div>
      </div>


    </section>
  );
};

export default Projects;

