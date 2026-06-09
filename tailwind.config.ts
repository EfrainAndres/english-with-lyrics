import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f1a17",
        paper: "#fff8ed",
        cream: "#f4e6d0",
        teal: "#0e6f68",
        coral: "#e85d4f",
        beat: "#f4b942",
        plum: "#3b243b",
        sky: "#bfe5e0",
      },
      fontFamily: {
        heading: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px rgba(31, 26, 23, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
