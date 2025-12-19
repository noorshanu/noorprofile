"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Hire Me", href: "#hire" },
  // { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/20 bg-black/80 shadow-[0_18px_45px_rgba(0,0,0,0.95)]"
            : "border-white/10 bg-black/40"
        } bg-clip-padding backdrop-blur-xl`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[12px_12px] opacity-30" />

        <nav className="relative z-10 mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:h-20 sm:px-6">
          <Link
            href="#home"
            onClick={handleLinkClick}
            className="text-xl font-bold tracking-[0.2em] text-white transition-all hover:scale-105 sm:text-2xl font-['Press_Start_2P',system-ui,monospace]"
          >
            NOOR<span className="text-purple-500">.DEV</span>
          </Link>

          <div className="hidden items-center gap-6 sm:flex sm:gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.16em] text-zinc-300 sm:gap-8">
              {NAV_ITEMS.map((item, index) => (
                <li key={`${item.href}-${item.label}-${index}`}>
                  <Link
                    href={item.href}
                    className="group relative rounded-[6px] px-3 py-1.5 transition-all duration-200 hover:text-white"
                  >
                    <span className="relative z-10 transition-all duration-200 group-hover:tracking-[0.22em] group-hover:text-white">
                      {item.label}
                    </span>
                    <span className="pointer-events-none absolute inset-0 z-0 rounded-[6px] border border-transparent shadow-[0_0_0_0_rgba(110,62,206,0)] transition-[box-shadow,border-color,background-color] duration-200 group-hover:border-[#6e3ece] group-hover:bg-[#6e3ece]/10 group-hover:shadow-[0_0_18px_rgba(110,62,206,0.55)]" />
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="/assets/noorResume.pdf"
              download="Noor_Alam_Resume.pdf"
              className="group relative flex items-center gap-2 rounded-[6px] border border-[#6e3ece]/50 bg-[#6e3ece]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-200 hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_18px_rgba(110,62,206,0.55)]"
            >
              <motion.svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </motion.svg>
              <span className="relative z-10 font-['Press_Start_2P',system-ui,monospace] text-[8px]">
                CV
              </span>
              <span className="pointer-events-none absolute inset-0 z-0 rounded-[6px] border border-transparent shadow-[0_0_0_0_rgba(110,62,206,0)] transition-shadow duration-200 group-hover:shadow-[0_0_12px_rgba(110,62,206,0.4)]" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[6px] border border-white/20 bg-black/60 transition-all hover:border-[#6e3ece] hover:bg-[#6e3ece]/10 sm:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-0.5 w-6 bg-white"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto border-l border-white/10 bg-black/95 p-6 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[12px_12px] opacity-20" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[14px] uppercase tracking-[0.18em] text-white">
                    MENU
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/20 bg-black/60 text-white transition-all hover:border-[#6e3ece] hover:bg-[#6e3ece]/10"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={`${item.href}-${item.label}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="group relative block rounded-[8px] border border-white/10 bg-black/40 p-4 transition-all duration-200 hover:border-[#6e3ece] hover:bg-[#6e3ece]/10 hover:shadow-[0_0_18px_rgba(110,62,206,0.55)]"
                      >
                        <span className="font-['Press_Start_2P',system-ui,monospace] text-[11px] uppercase tracking-[0.16em] text-white transition-all group-hover:text-[#6e3ece]">
                          {item.label}
                        </span>
                        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8 space-y-4"
                >
                  <a
                    href="/assets/noorResume.pdf"
                    download="Noor_Alam_Resume.pdf"
                    onClick={handleLinkClick}
                    className="group relative flex items-center justify-center gap-2 rounded-[8px] border border-[#6e3ece]/50 bg-[#6e3ece]/10 px-4 py-3 transition-all duration-200 hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_18px_rgba(110,62,206,0.55)]"
                  >
                    <motion.svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ y: -2, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </motion.svg>
                    <span className="font-['Press_Start_2P',system-ui,monospace] text-[10px] uppercase tracking-[0.16em] text-white transition-all group-hover:text-[#6e3ece]">
                      DOWNLOAD CV
                    </span>
                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>

                  <div className="rounded-[8px] border border-white/10 bg-black/40 p-4">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                      QUICK LINKS
                    </p>
                    <div className="space-y-2">
                      <a
                        href="mailto:noor.alam.619@gmail.com"
                        className="block text-[10px] text-zinc-300 transition-colors hover:text-[#6e3ece]"
                      >
                        noor.alam.619@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;