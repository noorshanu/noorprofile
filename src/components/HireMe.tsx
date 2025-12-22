/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const SERVICES: Service[] = [
  {
    title: "Freelance / Contract",
    description: "Full-stack development for your projects. Available for short-term or long-term engagements.",
    icon: "💼",
  },
  {
    title: "Startup MVPs",
    description: "Turn your idea into a working product. Fast, scalable, and production-ready from day one.",
    icon: "🚀",
  },
  {
    title: "Web3 Audits & Bots",
    description: "Smart contract audits, security reviews, and automated trading bots for DeFi protocols.",
    icon: "🔐",
  },
];

const CTA_OPTIONS = [
  {
    label: "Email Me",
    href: "mailto:noor.alam.619@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    primary: true,
  },
  {
    label: "DM on Telegram",
    href: "https://t.me/noorxdee",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    primary: false,
  },
  {
    label: "Book a Call",
    href: "https://cal.com/nooralam",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    primary: false,
  },
];

const HireMe: React.FC = () => {
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
        staggerChildren: 0.15,
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
      id="hire"
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[12px_12px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h2 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[28px]">
              WORK WITH ME
            </h2>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            LET&apos;S BUILD SOMETHING AMAZING • CONVERSION READY
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="mb-6 font-['Press_Start_2P',system-ui,monospace] text-[14px] uppercase tracking-[0.18em] text-white sm:text-[16px]">
              WHAT I OFFER
            </h3>
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative overflow-hidden rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#6e3ece] hover:bg-black/80 hover:shadow-[0_0_24px_rgba(110,62,206,0.5)]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#6e3ece]/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h4 className="font-['Press_Start_2P',system-ui,monospace] text-[12px] uppercase tracking-[0.16em] text-white sm:text-[14px]">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-300 sm:text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* Image and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative mb-8">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/hireme.png"
                  alt="Hire Me"
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-sm drop-shadow-[0_0_30px_rgba(110,62,206,0.4)]"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-[#6e3ece]/20 blur-2xl" />
              </motion.div>
            </div>

            <div className="w-full space-y-4">
              <h3 className="text-center font-['Press_Start_2P',system-ui,monospace] text-[12px] uppercase tracking-[0.18em] text-white sm:text-[14px]">
                GET IN TOUCH
              </h3>
              <div className="space-y-3">
                {CTA_OPTIONS.map((cta, index) => (
                  <motion.a
                    key={cta.label}
                    href={cta.href}
                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex w-full items-center justify-center gap-3 rounded-[8px] border-2 px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                      cta.primary
                        ? "border-[#6e3ece] bg-[#6e3ece]/20 text-white hover:bg-[#6e3ece]/30 hover:shadow-[0_0_20px_rgba(110,62,206,0.6)]"
                        : "border-white/20 bg-black/60 text-white/90 backdrop-blur-sm hover:border-[#6e3ece] hover:bg-[#6e3ece]/10 hover:text-white hover:shadow-[0_0_18px_rgba(110,62,206,0.5)]"
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-3">
                      <motion.div
                        animate={cta.primary ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {cta.icon}
                      </motion.div>
                      <span className="font-['Press_Start_2P',system-ui,monospace] text-[10px] sm:text-[11px]">
                        {cta.label}
                      </span>
                    </div>
                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative overflow-hidden rounded-[12px] border-2 border-[#6e3ece]/50 bg-gradient-to-r from-[#6e3ece]/10 via-[#6e3ece]/5 to-transparent p-8 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,62,206,0.1)_1px,transparent_0)] bg-size-[8px_8px] opacity-30" />
          <div className="relative z-10 text-center">
            <p className="mb-4 font-['Press_Start_2P',system-ui,monospace] text-[12px] uppercase tracking-[0.18em] text-white sm:text-[14px]">
              READY TO START YOUR PROJECT?
            </p>
            <p className="mb-6 text-sm text-zinc-300 sm:text-base">
              Let&apos;s discuss how I can help bring your vision to life. Fast response guaranteed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:noor.alam.619@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-[6px] bg-[#6e3ece] px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-all hover:bg-[#5a32aa] hover:shadow-[0_0_20px_rgba(110,62,206,0.6)] font-['Press_Start_2P',system-ui,monospace]"
              >
                START NOW
              </motion.a>
              <motion.a
                href="https://t.me/noorxdee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-[6px] border-2 border-white/20 bg-black/60 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm transition-all hover:border-[#6e3ece] hover:bg-[#6e3ece]/10 hover:text-white hover:shadow-[0_0_18px_rgba(110,62,206,0.5)] font-['Press_Start_2P',system-ui,monospace]"
              >
                QUICK CHAT
              </motion.a>
            </div>
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

export default HireMe;


