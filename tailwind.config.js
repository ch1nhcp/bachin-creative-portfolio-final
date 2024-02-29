/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: "#4d2600", // Choose a suitable text color
      },
      fontFamily: {
        "sans-custom": ["Old Standard TT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
