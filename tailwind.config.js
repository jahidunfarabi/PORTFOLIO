/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        animation: {
            'float': 'float 3s ease-in-out infinite',
            'shine': 'shine 1.5s ease-in-out infinite',
        },
        keyframes: {
            float: {
                '0%, 100%': {
                    transform: 'translateY(0px) rotate(0deg)'
                },
                '50%': {
                    transform: 'translateY(-20px) rotate(180deg)'
                },
            },
            shine: {
                '0%': {
                    transform: 'translateX(-100%)'
                },
                '100%': {
                    transform: 'translateX(200%)'
                },
            }
        }
    },
};
export const plugins = [];