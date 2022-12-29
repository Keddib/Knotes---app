/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      grey: "#F3F3F3",
      orange: "#F5E0B7",
      blue: "#CCDBF5",
      red: "#FF0000",
    },
    fontFamily: {
      beaufort: ["Beaufort", "Georgia", "serif"],
      spiegel: ["Spiegel", "Arial", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      heavy: 800,
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
