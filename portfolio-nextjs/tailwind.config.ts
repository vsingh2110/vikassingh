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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-crimson': '#dc143c',
        'brand-crimson-dark': '#a00e2e',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        heading: ['var(--font-ubuntu)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
