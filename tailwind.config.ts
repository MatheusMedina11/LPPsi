import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7f4",
          100: "#e6ede7",
          200: "#c9d9cb",
          300: "#a3bfa7",
          400: "#78a07e",
          500: "#57845e",
          600: "#436a49",
          700: "#37553c",
          800: "#2e4432",
          900: "#27392b",
        },
        sand: {
          50: "#fbf9f6",
          100: "#f5f0e8",
          200: "#ebe1d0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  plugins: [],
};

export default config;
