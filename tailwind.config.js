/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3c5ba4", // Light mode primary color
          dark: "#e22a90", // Dark mode primary color
        },
        secondary: {
          DEFAULT: "#FEFDFC", // Light mode secondary color
          dark: "#13111E", // Dark mode secondary color
        },
        fontFamily: {
          sans: ["'Cambria Math'", "sans-serif"],
        },
      },
    },
    plugins: [],
  },
};
