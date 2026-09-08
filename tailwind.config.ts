import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#12151B",
        navy: "#0E1522",
        navylight: "#1A2333",
        gold: "#C6A15B",
        goldlight: "#E7D5A8",
        cream: "#F6F1E7",
        creamdark: "#EDE6D6",
        ink: "#1B1F27"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      maxWidth: {
        content: "1280px"
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(18,21,27,0.35)",
        gold: "0 10px 40px -10px rgba(198,161,91,0.45)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
