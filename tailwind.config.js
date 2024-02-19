/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      'miImg': 'url(./assets/portfolioimg.jpg)',
    },
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

