/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3c5ba4", // Light mode primary color(blue)
          dark: "#e22a90", // Dark mode primary color(pink)
        },
        secondary: {
          DEFAULT: "#11121c", // Light mode secondary color(black)
          dark: "#bdbfd4", // Dark mode secondary color(grey)
        },
        background: {
          DEFAULT: "#ffffff", // Light mode background color(white)
          dark: "#191B1F", // Dark mode background color(black)
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
      },
      animation: {
        slideInTop: "slideInTop 20s ease-in-out forwards",
        slideInLeft: "slideInLeft 20s ease-in-out 0.5s forwards",
        slideInRight: "slideInRight 20s ease-in-out 1s forwards",
        "scroll-ltr": "scroll-ltr 30s linear infinite",
        "scroll-rtl": "scroll-rtl 30s linear infinite",
      },
    },
  },
  plugins: [],
};
