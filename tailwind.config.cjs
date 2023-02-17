/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'Desaturated-Red': 'hsl(0, 36%, 70%)',
        'Soft-Red': 'hsl(0, 93%, 68%)',
        'Dark-Grayish-Red': 'hsl(0, 6%, 24%)',
        'Final-Gradient': 'hsl(0, 100%, 98%)',
        'Btn-Gradient-Start': 'hsl(0, 80%, 86%)',
        'Btn-Gradient-End': 'hsl(0, 74%, 74%)',
      }
    },
  },
  plugins: [],
}
