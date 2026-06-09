import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17202a",
        lagoon: "#126c74",
        coral: "#e86452",
        sunshine: "#f7c948",
        paper: "#fffaf2",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 32, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
