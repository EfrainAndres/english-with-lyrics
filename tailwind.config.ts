import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#010101",
        night: "#010101",
        midnight: "#100B10",
        panel: "#191119",
        pink: "#FE9CE1",
        purple: "#CC9DEA",
        cream: "#FEE296",
        soft: "#F7EEF8",
        paper: "#FFF9FE",
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.28)",
        neon: "0 0 36px rgba(254, 156, 225, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
