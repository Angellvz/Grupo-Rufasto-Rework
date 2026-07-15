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
          DEFAULT: "#0B4F3F",
          50: "#E6F0EC",
          100: "#C2DCD1",
          200: "#95C2AE",
          300: "#67A88B",
          400: "#3F8E6C",
          500: "#0B4F3F",
          600: "#0A4638",
          700: "#083A2E",
          800: "#062D24",
          900: "#04201A",
        },
        secondary: {
          DEFAULT: "#0D3B66",
          50: "#E7EEF5",
          100: "#C3D5E6",
          200: "#93B3D0",
          300: "#6391BA",
          400: "#3B70A0",
          500: "#0D3B66",
          600: "#0B3358",
          700: "#092947",
          800: "#061E35",
          900: "#041423",
        },
        accent: {
          DEFAULT: "#8BC53F",
          50: "#F3FAE9",
          100: "#E4F3CB",
          200: "#CDE99F",
          300: "#B5DF73",
          400: "#9ED64C",
          500: "#8BC53F",
          600: "#72A431",
          700: "#588027",
          800: "#3E5C1C",
          900: "#253711",
        },
        background: "#F6F8F6",
        surface: "#FFFFFF",
        border: "#E1E7E2",
        ink: "#0F241C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "clean-line": "linear-gradient(90deg, transparent 0%, #8BC53F 50%, transparent 100%)",
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
