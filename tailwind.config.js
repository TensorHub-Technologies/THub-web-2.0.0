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
    },
    plugins: [],
  },
};
