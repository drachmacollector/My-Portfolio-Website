import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Aostala", "Georgia", "serif"],
        body: ["General", "Segoe UI", "system-ui", "sans-serif"],
        deva: ["Tiro Devanagari Marathi", "Nirmala UI", "serif"],
      },
      colors: {
        ink: { DEFAULT: "#0b0b0c", 2: "#141416", 3: "#1c1c1f" },
        bone: { DEFAULT: "#efe7dc", dim: "#a79f96" },
        blood: { DEFAULT: "#c8102a", hi: "#ff4255", deep: "#8e0d1e" },
        paper: { DEFAULT: "#f3ece4", ink: "#1b1715", mute: "#6b625b" },
      },
      screens: { xs: "420px" },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
