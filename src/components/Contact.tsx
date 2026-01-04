/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/noorshanu",
    color: "#6e3ece",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/noor-alam-aa722314b/",
    color: "#6e3ece",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/noorxdee",
    color: "#6e3ece",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/CodingGamer4",
    color: "#6e3ece",
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const Contact: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div ref={starsRef} className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star">
            .
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-size-[12px_12px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl sm:pb-40 pb-20">
        <motion.div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[28px]">
              CONTACT
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            LET&apos;S CONNECT • READY FOR NEXT MISSION
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="relative overflow-hidden  p-8 ">
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-8 text-center">
                <h3 className="mb-4 font-['Press_Start_2P',system-ui,monospace] text-[16px] uppercase tracking-[0.18em] text-white sm:text-[18px]">
                  GET IN TOUCH
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Looking to collaborate on a project or just want to chat about
                  Web3, AI, or full-stack development? Let&apos;s connect!
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-8 rounded-[8px] border border-[rgba(255,255,255,0.08)] p-6 z-10"
              >
                <div className="mb-4 text-center">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    EMAIL
                  </p>
                  <a
                    href="mailto:noor.alam.619@gmail.com"
                    className="font-['Press_Start_2P',system-ui,monospace] text-[12px] text-[#6e3ece] transition-colors hover:text-[#8a5ce8] sm:text-[14px]"
                  >
                    noor.alam.619@gmail.com
                  </a>
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/contact-us">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative flex items-center gap-2 rounded-[6px] border-2 border-[#6e3ece] bg-[#6e3ece]/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#6e3ece]/30 hover:shadow-[0_0_20px_rgba(110,62,206,0.6)] font-['Press_Start_2P',system-ui,monospace]"
                    >
                      <span>CONTACT ME</span>
                      <motion.svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-24 z-10 relative">
                <p className="mb-6 text-center text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  FOLLOW ME
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex h-16 w-16 items-center justify-center rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/60 text-white transition-all duration-300 hover:border-[#6e3ece] hover:bg-[#6e3ece]/10 hover:shadow-[0_0_20px_rgba(110,62,206,0.5)]"
                    >
                      <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#6e3ece]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative z-10 transition-colors group-hover:text-[#6e3ece]">
                        {social.icon}
                      </div>
                      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center absolute top-[-30px] left-0"
              >
                <img
                  src="/assets/contact.png"
                  alt="Contact"
                  className=" w-full h-full z-[-1]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            MADE WITH <span className="text-[#6e3ece]">♥</span> BY NOOR ALAM
          </p>
        </motion.div>
      </div>
      <img
        src="/assets/sin.png"
        alt="Border"
        className="pointer-events-none absolute bottom-20 sm:bottom-40 right-0 z-0 "
      />
      <img
        src="/assets/spaceman.png"
        alt="Border"
        className="pointer-events-none absolute bottom-20 sm:bottom-40 left-0 z-0 "
      />
      <img
        src="/assets/border.png"
        alt="Border"
        className="pointer-events-none absolute bottom-0 right-0 z-0 "
      />
    </section>
  );
};

export default Contact;
