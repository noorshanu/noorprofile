"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [eatenCount, setEatenCount] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Only render on client to avoid hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const updatePageHeight = () => {
      if (typeof window === "undefined") return;
      // Use a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const height = document.documentElement.scrollHeight;
        setPageHeight(height);
      }, 200);
    };

    updatePageHeight();
    
    // Update on resize and when content loads
    window.addEventListener("resize", updatePageHeight);
    window.addEventListener("load", updatePageHeight);
    
    // Also update periodically to catch dynamic content
    const interval = setInterval(updatePageHeight, 1000);
    
    return () => {
      window.removeEventListener("resize", updatePageHeight);
      window.removeEventListener("load", updatePageHeight);
      clearInterval(interval);
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || pageHeight === 0 || typeof window === "undefined") return;

    const generateDots = () => {
      const dotSpacing = 35;
      const waveAmplitude = 120;
      const startX = 50;
      // Start from hero section (after viewport)
      const startY = window.innerHeight * 0.6;
      // End at footer
      const endY = pageHeight - 100;
      const scrollableHeight = endY - startY;
      
      if (scrollableHeight <= 0) return;
      
      const numDots = Math.floor(scrollableHeight / dotSpacing);
      const newDots: Array<{ id: number; x: number; y: number }> = [];

      // Generate dots along a snake-like wave path from hero to footer
      for (let i = 0; i < numDots; i++) {
        const progress = i / numDots;
        const y = startY + i * dotSpacing;
        // Create wave pattern - 6 complete waves
        const wave = Math.sin(progress * Math.PI * 6) * waveAmplitude;
        const x = startX + wave;
        newDots.push({
          id: i,
          x,
          y,
        });
      }

      setDots(newDots);
    };

    // Generate dots when page height is available
    const timer = setTimeout(generateDots, 300);
    return () => clearTimeout(timer);
  }, [pageHeight, isMounted]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const count = Math.floor(latest * dots.length);
      setEatenCount(count);
    });
    return () => unsubscribe();
  }, [smoothProgress, dots.length]);

  const currentDotIndex = Math.min(eatenCount, dots.length - 1);
  const currentDot = dots[currentDotIndex] || dots[0];
  const nextDot = dots[currentDotIndex + 1];

  let rotation = 0;
  if (currentDot && nextDot) {
    const angle = Math.atan2(nextDot.y - currentDot.y, nextDot.x - currentDot.x);
    rotation = (angle * 180) / Math.PI + 90;
  }

  // Don't render on server to avoid hydration errors
  if (!isMounted || typeof window === "undefined") {
    return null;
  }

  const svgWidth = window.innerWidth;
  const svgHeight = pageHeight || window.innerHeight;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-0 top-0 z-30 w-full"
      style={{ 
        height: `${pageHeight || window.innerHeight}px`,
        minHeight: "100vh"
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        style={{ 
          overflow: "visible", 
          position: "absolute", 
          top: 0, 
          left: 0,
          pointerEvents: "none"
        }}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      >
        {/* Draw dots */}
        {dots.map((dot, index) => {
          const isEaten = index < eatenCount;
          return (
            <motion.circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={6}
              fill="#6e3ece"
              stroke="#6e3ece"
              strokeWidth={1}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isEaten ? 0 : 0.8,
                scale: isEaten ? 0 : 1,
              }}
              transition={{ duration: 0.15 }}
            />
          );
        })}

        {/* Pacman */}
        {currentDot && (
          <motion.g
            animate={{
              x: currentDot.x,
              y: currentDot.y,
              rotate: rotation,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Pacman body with animated mouth */}
            <motion.path
              d="M 0,-10 A 10,10 0 1,1 0,10 A 10,10 0 0,1 -7.07,-7.07 L 0,0 Z"
              fill="#FFD700"
              animate={{
                d: [
                  "M 0,-10 A 10,10 0 1,1 0,10 A 10,10 0 0,1 -7.07,-7.07 L 0,0 Z",
                  "M 0,-10 A 10,10 0 1,1 0,10 A 10,10 0 0,1 0,0 L 0,0 Z",
                  "M 0,-10 A 10,10 0 1,1 0,10 A 10,10 0 0,1 -7.07,-7.07 L 0,0 Z",
                ],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Pacman eye */}
            <circle cx={-3} cy={-4} r={2} fill="#000" />
            {/* Glow effect */}
            <circle cx={0} cy={0} r={14} fill="#FFD700" opacity={0.15} />
          </motion.g>
        )}
      </svg>
    </div>
  );
};

export default ScrollProgress;

