/** @type {import('tailwindcss').Config} */
export const content = ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
        colors: {
            frame: "#fef3dc",
            dot: "#5c240f",
            brownStart: "#502413",
            brownEnd: "#8c4b29",
        },
    },
};
export const plugins = [];
