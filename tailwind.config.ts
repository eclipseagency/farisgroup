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
        primary: {
          DEFAULT: "#1a3a6b",
          50: "#f0f4ff",
          100: "#e0e9ff",
          600: "#1a3a6b",
          700: "#152f58",
          800: "#0f2040",
          900: "#0a1628",
        },
        gold: {
          light: "#f5d78e",
          DEFAULT: "#c9a227",
          dark: "#9b7a1a",
        },
        navy: {
          DEFAULT: "#0a1628",
          600: "#1a3a6b",
          700: "#152f58",
          800: "#0f2040",
          900: "#0a1628",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
