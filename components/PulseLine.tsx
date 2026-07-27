"use client";

import { useEffect, useRef, useState } from "react";

type PulseColor = "cobalt" | "poppy" | "marigold";

type PulseLineProps = {
  color?: PulseColor;
  animate?: boolean;
  variant?: "default" | "underline" | "vertical";
  className?: string;
};

const colorValues: Record<PulseColor, string> = {
  cobalt: "var(--color-cobalt)",
  poppy: "var(--color-poppy)",
  marigold: "var(--color-marigold)",
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
      viewBox={variant === "vertical" ? "0 0 40 220" : "0 0 220 40"}
      width={variant === "underline" ? 108 : variant === "vertical" ? 40 : 220}
      height={variant === "underline" ? 20 : variant === "vertical" ? 220 : 40}
      role="presentation"
      ref={lineRef}
    >
      <path
        className="pulse-line__path"
        d={variant === "vertical"
          ? "M20 3c-1 15 1 20 0 29-1 8-2 10-1 17 1 8 4 7 4 13 0 6-3 7-3 11 0 6 4 7 4 10 0 4-11 6-11 10 0 5 24 6 24 11 0 4-18 5-18 10 0 4 8 6 8 10 0 5-6 7-6 12 0 6 5 6 5 12 0 10-4 13-3 24 1 13 1 16 0 25"
          : "M3 22c15 1 20-1 29 0 8 1 10 2 17 1 8-1 7-4 13-4 6 0 7 3 11 3 6 0 7-4 10-4 4 0 6 11 10 11 5 0 6-24 11-24 4 0 5 18 10 18 4 0 6-8 10-8 5 0 7 6 12 6 6 0 6-5 12-5 10 0 13 4 24 3 13-1 16-1 25 0"}
        pathLength="1"
        stroke={colorValues[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={variant === "underline" ? 3 : 3.5}
      />
    </svg>
  );
}
