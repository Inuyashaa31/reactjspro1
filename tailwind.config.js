/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ddace",
        "secondary": "#00447c",
        "tertiary": "#0b7b9e",
        "notso": "#f9744b",
      }
    },
    screens: {
      lg: {'max': '1023px'},
      
      sm: {'max': '639px'},
      
    }
  },
  plugins: [],
}