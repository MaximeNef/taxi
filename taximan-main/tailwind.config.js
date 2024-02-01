const { url } = require("inspector");
const { brotliDecompress } = require("zlib");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "100px",
        sm: "300px",
        sm2: "400px",
        xsm: "800px",
        md: "850px",
        lg: "1150px",
        xl: "1280px",
        "2xl": "1436px",
      },

      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      backgroundImage: {
        heroBG: "url(/assets/backgrounds/heroSectionBG.png)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "theme-yellow": "#5CB1A5",
      "theme-grey": "#343332",
      "theme-light-grey": "#6D6D6D",
      "theme-dark-grey": "#191717",
      "button-yellow": "#5CB1A5",
      "bg-hover": "#ca8a04",
      "bg-hover-white": "#3f3f3e",
    },
    boxShadow: {
      button: "0px 4px 20px rgba(0, 0, 0, 0.29)",
    },
  },
  plugins: [],
};
