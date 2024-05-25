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
      colors: {
        background: "rgba(var(--background), 1)",
        
        primary: "rgba(var(--primary), 1)",
        secondary: "rgba(var(--secondary), 1)",
        "middle-color": "rgba(var(--middle-color), 1)",
        highlight: "rgba(var(--highlight), 1)",
        
        // "primary-color": "rgba(var(--primary-color), 1)",
        // "secondary-color": "rgba(var(--secondary-color), 1)",
        // "light-emerald": "rgba(var(--light-emerald)))",

        "t-main": "rgba(var(--t-main), 1)",
        "t-dark": "rgba(var(--t-dark), 1)",
        "t-nav": "rgba(var(--t-nav), 1)",
        "t-link": "rgba(var(--t-link), 1)",
        
        "linkedin-hover": "rgba(var(--linkedin-hover), 1)",
        "github-hover": "rgba(var(--github-hover), 1)",
        "arrow-bg": "rgba(var(--arrow-bg), 1)",

        "b-primary": "rgba(var(--border-primary), 1)",
        "border-gray": "rgba(var(--border-gray))",
        "footer-color": "rgba(var(--footer-color), 1)",
      },
    },
  },
  plugins: [],
}