/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/app.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Sans-Serief']
      }
    },

    extend: {
      colors: {
        'primary': '#F49D1A',
        'secondary': '#FFE15D'
      }
    }
  },
  plugins: [],
}







