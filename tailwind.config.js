/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyColor: "#23283e",
        lightText: "#cdcdff",
        boxBg: "none",
        designColor: "#90a0d9",
      },
      boxShadow: {
        shadowOne: "",
      },
    },
  },
  plugins: [],
};
