/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        "blue": {
          100: "#3366FF"
        }
      },
      fontFamily: {
        rubik: ['Rubik', 'serif'],
      },
    },
  },
  plugins: [],
};
