"use client";

import { motion, useReducedMotion } from "framer-motion";

const staticTransition = { duration: 0 };
const loopTransition = {
  duration: 7,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "loop" as const,
};

export default function HeroPalette() {
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <svg
      aria-label="Illustration of an artist palette with a paintbrush"
      className="hero-palette"
      role="img"
      viewBox="0 0 460 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={animate ? { y: [0, -7, 0], opacity: [0.35, 0.7, 0.35] } : { y: 0, opacity: 0.45 }}
        transition={animate ? { duration: 5.5, ease: "easeInOut", repeat: Infinity } : staticTransition}
      >
        <path d="M55 96c18-18 30-11 37 2-14 2-25 8-37-2Z" fill="var(--color-poppy)" />
        <path d="m364 75 7-15 8 15-8 14-7-14Z" fill="var(--color-sunshine)" />
        <path d="M390 178c11-9 23-4 27 7-11 5-19 4-27-7Z" fill="var(--color-cobalt)" />
      </motion.g>
      <motion.g
        animate={animate ? { y: [0, 9, 0], opacity: [0.2, 0.55, 0.2] } : { y: 0, opacity: 0.35 }}
        transition={animate ? { duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 0.7 } : staticTransition}
      >
        <path d="m79 226 12-8 7 10-13 8-6-10Z" fill="var(--color-sunshine)" />
        <path d="M373 272c16-6 26 1 26 11-14 4-23 1-26-11Z" fill="var(--color-poppy)" />
        <path d="m115 71 4-14 8 11-5 12-7-9Z" fill="var(--color-cobalt)" />
      </motion.g>
      <path
        d="M106 254c-28-35-24-104 11-147 39-47 132-66 190-20 43 34 57 102 30 150-28 50-102 72-166 59-28-5-52-20-65-42Z"
        fill="var(--color-canvas)"
        stroke="var(--color-ink)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path d="M127 246c-15-29-14-62 1-89 15-26 34-35 48-22 11 11 4 25-4 36-12 17-8 42 8 58 10 11-1 28-18 34-13 5-28-3-35-17Z" fill="rgba(43, 79, 194, 0.12)" />
      <circle cx="177" cy="132" fill="var(--color-cobalt)" r="19" />
      <circle cx="239" cy="113" fill="var(--color-poppy)" r="19" />
      <circle cx="300" cy="135" fill="var(--color-sunshine)" r="19" />
      <circle cx="336" cy="190" fill="var(--color-cobalt)" r="13" />
      <circle cx="316" cy="237" fill="var(--color-poppy)" r="13" />
      <path d="M175 205c20-9 38-6 54 4 15 9 29 10 47 3" fill="none" stroke="var(--color-ink)" strokeLinecap="round" strokeWidth="4" />
      <motion.g
        animate={animate
          ? { x: [8, 50, 79, 34, 8], y: [102, 48, 35, 95, 102], rotate: [-20, -12, 10, 18, -20] }
          : { x: 8, y: 102, rotate: -20 }}
        transition={animate ? loopTransition : staticTransition}
        style={{ transformOrigin: "90px 170px" }}
      >
        <path d="M79 94 247 244" stroke="var(--color-ink)" strokeLinecap="round" strokeWidth="12" />
        <path d="m76 90 12-12 13 15-12 12-13-15Z" fill="var(--color-sunshine)" stroke="var(--color-ink)" strokeLinejoin="round" strokeWidth="3" />
        <path d="m241 238 21 21-10 8-20-22 9-7Z" fill="var(--color-poppy)" stroke="var(--color-ink)" strokeLinejoin="round" strokeWidth="3" />
      </motion.g>
      <motion.path
        animate={animate ? { opacity: [0.25, 0.7, 0.25] } : { opacity: 0.45 }}
        d="M350 117c14 0 14 20 0 20s-14-20 0-20Zm-15 21c7 0 7 10 0 10s-7-10 0-10Z"
        fill="var(--color-marigold)"
        transition={animate ? { duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1.1 } : staticTransition}
      />
    </svg>
  );
}
