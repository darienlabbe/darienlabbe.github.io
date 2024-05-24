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
        
        "dark-primary":"rgba(var(--dark-primary), 1)",
        "dark-secondary":"rgba(var(--dark-secondary), 1)",
        "primary-color":"rgba(var(--primary-color), 1)",
        "secondary-color":"rgba(var(--secondary-color), 1)",
        "light-emerald": "rgba(var(--light-emerald)))",

        "text-color-dark": "rgba(var(--text-color-dark), 1)",
        "text-color-light": "rgba(var(--text-color-light), 1)",
        "text-emerald": "rgba(var(--text-emerald), 1)",
        "text-emerald-dark": "rgba(var(--text-emerald-dark), 1)",
        "text-emerald-darkest": "rgba(var(--text-emerald-darkest), 1)",
        "text-hyperlink": "rgba(var(--text-hyperlink), 1)",
        
        "linkedin-hover": "rgba(var(--linkedin-hover), 1)",
        "github-hover": "rgba(var(--github-hover), 1)",
        
        "border-color-emerald": "rgba(var(--border-color-emerald), 1)",
        "border-color-gray": "rgba(var(--border-color-gray), 1)",
        "footer-color": "rgba(var(--footer-color), 1)",
      },
    },
  },
  plugins: [],
}