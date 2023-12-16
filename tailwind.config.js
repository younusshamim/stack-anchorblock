/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "success-light": "#ECFDF3",
      "error-light": "#FDA29B",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        stackTheme: {
          primary: "#6941C6",
          success: "#027A48",
          error: "#F04438",
        },
      },
    ],
  },
};
