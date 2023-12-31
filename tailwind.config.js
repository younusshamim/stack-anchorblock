/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-light": "#D6BBFB",
        "primary-extra-light": "#EBE3F7",
        "success-light": "#ECFDF3",
        "error-light": "#FDA29B",
        "error-extra-light": "#FDE3E0",
      },
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
