/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#08A869',
        lightprimary: '#2E5576',
        secondary: '#172A3A',
        lightsecondary: '#457EB0',
        accent: '#F55D3E',
        neutralgray: '#EBEBEB',
        lightneutral: '#C4D7E8'
      },

      fontFamily: {
        montserrat: 'Montserrat'
      }
    },
  },
  plugins: [],
}

