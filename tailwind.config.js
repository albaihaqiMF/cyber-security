const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Raleway", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                theme: {
                    1: "#68C55D",
                    2: "#021327",
                    3: "#0194FA",
                    4: "#DBA21C",
                    5: "#263238",
                },
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "3rem",
                lg: "6rem",
                xl: "7rem",
                "2xl": "8rem",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
