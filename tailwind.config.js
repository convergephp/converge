/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./resources/views/**/*.blade.php", "./src/**/*.php"],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#000000',
        },
      }
    },
  },
  plugins: [],
};
