import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rosé dessaturado — suave, clean, sem agressividade visual.
        brand: {
          50: "#fdfaf9",
          100: "#f9f0ed",
          200: "#f0ded8",
          300: "#e2c4bb",
          400: "#cda396",
          500: "#b58676",
          600: "#9a6c5c",
          700: "#7d574a",
          800: "#5e423a",
          900: "#3f2e29",
        },
        // Neutros quentes para o fundo e textos secundários.
        sand: {
          50: "#fdfcfb",
          100: "#f7f4f2",
          200: "#ece7e4",
          300: "#d8d1cd",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
