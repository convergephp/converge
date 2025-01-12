/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./resources/views/**/*.blade.php", "./src/**/*.php"],
  safelist: ["bg-gray-200", "bg-white/10"],
  theme: {
    extend: {},
  },
  plugins: [],
};
