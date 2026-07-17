import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        cobalt: "var(--color-cobalt)",
        poppy: "var(--color-poppy)",
        "poppy-text": "var(--color-poppy-text)",
        violet: "var(--color-violet)",
        sunshine: "var(--color-sunshine)",
      },
      fontFamily: {
        display: ["var(--font-baloo-2)", "sans-serif"],
        body: ["var(--font-atkinson)", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        gentle: "var(--shadow-gentle)",
        hover: "var(--shadow-hover)",
      },
    },
  },
  safelist: [
    "about-card--mission",
    "about-card--teams",
    "join-card--volunteer",
    "join-card--chapter",
    "mission-pillar--create",
    "mission-pillar--connect",
    "mission-pillar--coalesce",
    "chapter-card--south",
    "chapter-card--north",
    "chapter-page--south",
    "chapter-page--north",
    "team-card__portrait--cobalt",
    "team-card__portrait--poppy",
    "team-card__portrait--violet",
    "team-card__portrait--sunshine",
  ],
  plugins: [],
};
export default config;
