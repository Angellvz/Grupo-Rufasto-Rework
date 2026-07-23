import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#127957",
          50: "#faf8f6",
          100: "#E6F0EC",
          200: "#C2DCD1",
          300: "#95C2AE",
          400: "#127957",
          500: "#127957",
          600: "#017333",
          700: "#007224",
          800: "#007224",
          900: "#007224",
        },
        secondary: {
          DEFAULT: "#017333",
          50: "#faf8f6",
          100: "#E6F0EC",
          200: "#C2DCD1",
          300: "#95C2AE",
          400: "#127957",
          500: "#017333",
          600: "#007224",
          700: "#007224",
          800: "#007224",
          900: "#007224",
        },
        accent: {
          DEFAULT: "#007224",
          50: "#faf8f6",
          100: "#E6F0EC",
          200: "#C2DCD1",
          300: "#95C2AE",
          400: "#017333",
          500: "#007224",
          600: "#007224",
          700: "#007224",
          800: "#007224",
          900: "#007224",
        },
        background: "#FFFFFF",
        surface: "#faf8f6",
        border: "#E1E7E2",
        ink: "#0F241C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "clean-line": "linear-gradient(90deg, transparent 0%, #127957 50%, transparent 100%)",
      },
      keyframes: {
        "wipe-in": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "wipe-in": "wipe-in 1s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
