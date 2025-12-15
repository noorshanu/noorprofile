"use client";

import React from "react";
import { motion } from "framer-motion";

const FloatingTelegram: React.FC = () => {
  return (
    <motion.a
      href="https://t.me/noorxdee"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#6e3ece]/50 bg-[#6e3ece]/10 shadow-[0_0_20px_rgba(110,62,206,0.3)] backdrop-blur-sm transition-all duration-300 hover:border-[#6e3ece] hover:bg-[#6e3ece]/20 hover:shadow-[0_0_30px_rgba(110,62,206,0.6)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#6e3ece]/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Telegram icon */}
      <svg
        className="relative z-10 h-7 w-7 text-white transition-colors group-hover:text-[#6e3ece] sm:h-8 sm:w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>

      {/* Tooltip on hover */}
      <motion.div
        className="pointer-events-none absolute right-full mr-3 hidden rounded-[6px] border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:block"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-['Press_Start_2P',system-ui,monospace] text-[8px]">
          TELEGRAM
        </span>
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 border-r border-b border-white/10 bg-black/90" />
      </motion.div>
    </motion.a>
  );
};

export default FloatingTelegram;

