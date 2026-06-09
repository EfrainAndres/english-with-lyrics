import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070817",
        night: "#0b0b1f",
        midnight: "#111332",
        panel: "#181a3f",
        pink: "#ff4fb8",
        purple: "#8c5cff",
        blue: "#35b7ff",
        cream: "#fff1b8",
        soft: "#d7d9ea",
        paper: "#f8f4ff",
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.28)",
        neon: "0 0 36px rgba(255, 79, 184, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
