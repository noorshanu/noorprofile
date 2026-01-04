"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get Google Apps Script URL from environment variable
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (scriptUrl) {
        // Send data to Google Apps Script
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script requires no-cors
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        
        // Since we're using no-cors, we can't read the response
        // But the data will be saved to Google Sheets
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto if script URL is not configured
        const mailtoLink = `mailto:noor.alam.619@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
        window.location.href = mailtoLink;
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

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
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
      {/* Stars Background */}
      <div ref={starsRef} className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star">.</div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[12px_12px] opacity-20" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-[#6e3ece]" />
            <h1 className="font-['Press_Start_2P',system-ui,monospace] text-[20px] uppercase tracking-[0.22em] sm:text-[24px] lg:text-[32px]">
              CONTACT ME
            </h1>
            <div className="h-1 w-12 bg-[#6e3ece]" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400 sm:text-sm">
            SEND A MESSAGE • LET&apos;S START A MISSION
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Contact Form Card */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-[12px] border-2 border-[rgba(255,255,255,0.12)] bg-black/60 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
          >
            {/* Animated corner accents */}
            <motion.div
              className="absolute -left-1 -top-1 h-3 w-3"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="h-2 w-2 rounded-full bg-[#6e3ece] opacity-60 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#6e3ece]" />
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-1 -bottom-1 h-3 w-3"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="h-2 w-2 rounded-full bg-[#6e3ece] opacity-60 blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#6e3ece]" />
              </div>
            </motion.div>

            {/* Background pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,62,206,0.1)_1px,transparent_0)] bg-size-[8px_8px] opacity-30" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px]"
                >
                  PLAYER NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[8px] border-2 border-[rgba(255,255,255,0.12)] bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-300 focus:border-[#6e3ece] focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#6e3ece]/50 font-['Press_Start_2P',system-ui,monospace] text-[10px] sm:text-[11px]"
                  placeholder="ENTER YOUR NAME"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px]"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[8px] border-2 border-[rgba(255,255,255,0.12)] bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-300 focus:border-[#6e3ece] focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#6e3ece]/50 font-['Press_Start_2P',system-ui,monospace] text-[10px] sm:text-[11px]"
                  placeholder="YOUR@EMAIL.COM"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px]"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-[8px] border-2 border-[rgba(255,255,255,0.12)] bg-black/40 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-300 focus:border-[#6e3ece] focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#6e3ece]/50 resize-none font-['Press_Start_2P',system-ui,monospace] text-[10px] sm:text-[11px]"
                  placeholder="TYPE YOUR MESSAGE HERE..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full overflow-hidden rounded-[8px] border-2 border-[#6e3ece] bg-[#6e3ece]/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#6e3ece]/30 hover:shadow-[0_0_24px_rgba(110,62,206,0.7)] disabled:opacity-50 disabled:cursor-not-allowed font-['Press_Start_2P',system-ui,monospace] text-[11px] sm:text-[12px]"
                >
                  <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#6e3ece] bg-[#6e3ece]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative z-10">
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </span>
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-[#6e3ece]/20"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[8px] border-2 border-green-500/50 bg-green-500/10 p-4 text-center"
                >
                  <p className="font-['Press_Start_2P',system-ui,monospace] text-[10px] text-green-400 sm:text-[11px]">
                    ✓ MESSAGE SENT! CHECKING INBOX...
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[8px] border-2 border-red-500/50 bg-red-500/10 p-4 text-center"
                >
                  <p className="font-['Press_Start_2P',system-ui,monospace] text-[10px] text-red-400 sm:text-[11px]">
                    ✗ ERROR! TRY AGAIN...
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-[#6e3ece]"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
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
              <span className="font-['Press_Start_2P',system-ui,monospace] text-[10px] uppercase tracking-[0.16em]">
                BACK TO HOME
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Images */}
      <Image
        src="/assets/sin.png"
        alt="Border"
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-20 right-0 z-0 opacity-60"
      />
      <Image
        src="/assets/spaceman.png"
        alt="Spaceman"
        width={200}
        height={200}
        className="pointer-events-none absolute bottom-20 left-0 z-0 opacity-60"
      />
      <Image
        src="/assets/border.png"
        alt="Border"
        width={400}
        height={200}
        className="pointer-events-none absolute bottom-0 right-0 z-0 opacity-60 w-full h-[100px]"
      />
    </div>
  );
};

export default ContactUsPage;
