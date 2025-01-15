/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
module.exports = {
    darkMode: "selector",
    content: ["./resources/views/**/*.blade.php", "./src/**/*.php"],
    theme: {
        extend: {
            colors: {
                gray: {
                    950: "#000000",
                },
            },
        },
    },
    plugins: [typography],
};
