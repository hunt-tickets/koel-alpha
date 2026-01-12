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
        koel: {
          // PRIMARY COLORS
          teal: {
            DEFAULT: "#153439",
            light: "#2A4A50",
            dark: "#0F2428",
          },
          aqua: {
            DEFAULT: "#32A9AE",
            light: "#9ACEE4",
            dark: "#258B8F",
          },
          // SECONDARY COLORS
          yellow: {
            DEFAULT: "#E6E451",
            light: "#FBEEB4",
          },
          olive: {
            DEFAULT: "#59693A",
            light: "#B5D4B8",
            dark: "#5F9465",
          },
          pink: {
            DEFAULT: "#B24866",
          },
          coral: {
            DEFAULT: "#D5753C",
            light: "#E8C9A3",
            dark: "#B8864F",
          },
          // NEUTRALS
          neutral: {
            50: "#FCF9F5",
            100: "#FCF7EE",
            200: "#D9D6C5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#221615",
          },
        },
        accent: {
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
