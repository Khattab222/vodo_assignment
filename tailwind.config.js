/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Montserrat": "Montserrat, sans-serif",
        "title":"Poetsen One, sans-serif"
      }
    },
  },
  plugins: [],
}

