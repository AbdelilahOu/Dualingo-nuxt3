/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dualingo: "#58CC02",
        uniteOrange: "#ff960",
        courseDone: "#ffc800",
      },
      gridTemplateRows: {
        a: "repeat(10, minmax(0,1fr))",
        b: "repeat(11, minmax(0,1fr))",
        c: "repeat(12, minmax(0,1fr))",
      },
      gridTemplateColumns: {
        a: "repeat(10, minmax(0,1fr))",
        b: "repeat(11, minmax(0,1fr))",
        c: "repeat(12, minmax(0,1fr))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
