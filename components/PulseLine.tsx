"use client";

import { useEffect, useRef, useState } from "react";

type PulseColor = "cobalt" | "poppy" | "violet";

type PulseLineProps = {
  color?: PulseColor;
  animate?: boolean;
  variant?: "default" | "underline";
  className?: string;
};

const colorValues: Record<PulseColor, string> = {
  cobalt: "var(--color-cobalt)",
  poppy: "var(--color-poppy)",
  violet: "var(--color-violet)",
};

export default function PulseLine({
  color = "poppy",
  animate = true,
  variant = "default",
  className = "",
}: PulseLineProps) {
  const [visible, setVisible] = useState(!animate);
  const lineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate) return;

    const element = lineRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [animate, color]);

  return (
    <svg
      aria-hidden="true"
      className={`pulse-line pulse-line--${variant} ${visible ? "pulse-line--visible" : ""} ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 220 40"
      width={variant === "underline" ? 108 : 220}
      height={variant === "underline" ? 20 : 40}
      role="presentation"
      ref={lineRef}
    >
      <path
        className="pulse-line__path"
        d="M3 22c15 1 20-1 29 0 8 1 10 2 17 1 8-1 7-4 13-4 6 0 7 3 11 3 6 0 7-4 10-4 4 0 6 11 10 11 5 0 6-24 11-24 4 0 5 18 10 18 4 0 6-8 10-8 5 0 7 6 12 6 6 0 6-5 12-5 10 0 13 4 24 3 13-1 16-1 25 0"
        pathLength="1"
        stroke={colorValues[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={variant === "underline" ? 3 : 3.5}
      />
    </svg>
  );
}
