"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  life: number;
};

const CursorPixelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const clustersRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * window.devicePixelRatio;
      canvas.height = innerHeight * window.devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      clustersRef.current = [
        { x: innerWidth * 0.18, y: innerHeight * 0.25 },
        { x: innerWidth * 0.78, y: innerHeight * 0.28 },
        { x: innerWidth * 0.2, y: innerHeight * 0.78 },
        { x: innerWidth * 0.8, y: innerHeight * 0.72 },
      ];
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (x: number, y: number) => {
      const count = 14;
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 32,
          y: y + (Math.random() - 0.5) * 32,
          size: 3 + Math.random() * 3,
          alpha: 1,
          life: 0,
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnParticles(x, y);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const rect = canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      spawnParticles(x, y);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const animate = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const c of clustersRef.current) {
        if (Math.random() < 0.4) {
          const count = 4;
          for (let i = 0; i < count; i++) {
            particlesRef.current.push({
              x: c.x + (Math.random() - 0.5) * 120,
              y: c.y + (Math.random() - 0.5) * 120,
              size: 2 + Math.random() * 3,
              alpha: 0.85,
              life: Math.random() * 0.4,
            });
          }
        }
      }

      const next: Particle[] = [];
      for (const p of particlesRef.current) {
        const life = p.life + 0.015;
        const alpha = Math.max(1 - life, 0);
        if (alpha <= 0) continue;

        const y = p.y - life * 10;

        ctx.fillStyle = `rgba(110,62,206,${alpha})`;
        ctx.fillRect(Math.round(p.x), Math.round(y), p.size, p.size);

        next.push({ ...p, y, alpha, life });
      }
      particlesRef.current = next;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
};

export default CursorPixelBackground;


