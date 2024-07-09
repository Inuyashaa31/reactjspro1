/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f2f3f4",
        "secondary": "#00447c",
        "tertiary": "#0b7b9e",
        "notso": "#f9744b",
      }
    },
    screens: {
      lg: {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      

      sm: {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}