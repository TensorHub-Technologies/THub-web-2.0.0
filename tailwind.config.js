/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3c5ba4",
          dark: "#e22a90",
        },
        secondary: {
          DEFAULT: "#11121c",
          dark: "#bdbfd4",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#191B1F",
        },
        glass: {
          primary: "hsl(var(--glass-primary) / <alpha-value>)",
          secondary: "hsl(var(--glass-secondary) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["'Cambria Math'", "sans-serif"],
      },
      keyframes: {
        slideInTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-ltr": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scroll-rtl": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },

        // ✅ Add this float animation
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        slideInTop: "slideInTop 20s ease-in-out forwards",
        slideInLeft: "slideInLeft 20s ease-in-out 0.5s forwards",
        slideInRight: "slideInRight 20s ease-in-out 1s forwards",
        "scroll-ltr": "scroll-ltr 30s linear infinite",
        "scroll-rtl": "scroll-rtl 30s linear infinite",

        // ✅ Add this float animation class
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
