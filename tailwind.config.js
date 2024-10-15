/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: "480px",
      md: "568px",
      lg: "978px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josephine Sans", "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
