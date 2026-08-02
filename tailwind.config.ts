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
          50: "#fdf2f6",
          100: "#fce7ef",
          200: "#f9d0e1",
          300: "#f3aecb",
          400: "#ea82ac",
          500: "#dd5c8f",
          600: "#c13d71",
          700: "#9e2f5c",
          800: "#7a2549",
          900: "#4a1730",
        },
        sand: {
          50: "#fffbfd",
          100: "#fdf5f8",
          200: "#fbebf1",
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
