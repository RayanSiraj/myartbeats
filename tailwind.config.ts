import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        cobalt: "var(--color-cobalt)",
        poppy: "var(--color-poppy)",
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
  plugins: [],
};
export default config;
