/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'consolas': ['consolas', 'mono'],
        'randygg' : ['randygg', 'consolas']
      },
    },
  },
  plugins: [],
}