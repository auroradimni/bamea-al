import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
      },
      colors: {
        teal: {
          DEFAULT: "#1B7A8A",
          light: "#2A9BAC",
          pale: "#E8F4F6",
          faint: "#F0F8FA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
