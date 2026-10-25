import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
          border: "var(--surface-border)",
        },
        lime: {
          neon: "#ccff00",
          bright: "#d8ff33",
          glow: "#b5e600",
          dark: "#1c2400",
        },
        brand: {
          cyan: "#06b6d4",
          sky: "#38bdf8",
          blue: "#2563eb",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        "neon-lime": "0 0 35px rgba(204, 255, 0, 0.45)",
        "neon-lime-sm": "0 0 15px rgba(204, 255, 0, 0.3)",
        "neon-lime-lg": "0 0 60px rgba(204, 255, 0, 0.35)",
        "switch-inner": "inset 0 4px 12px rgba(0,0,0,0.8), inset 0 -2px 6px rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.45" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(204, 255, 0, 0.3))" },
          "100%": { filter: "drop-shadow(0 0 30px rgba(204, 255, 0, 0.7))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
