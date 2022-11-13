/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container:{
      padding:'24px',
      center:true,
    },
    extend: {
      screens: {
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
