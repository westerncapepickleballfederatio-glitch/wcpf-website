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
        sans: ["var(--font-barlow)", "Arial", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "Arial Narrow", "sans-serif"],
      },
      colors: {
        "fed-blue": "#0A1F5C",
        "mid-blue": "#1A3A8F",
        "fed-red": "#CC1B1B",
        "pickle": "#F5C800",
      },
    },
  },
  plugins: [],
};

export default config;
