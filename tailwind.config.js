/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',

  theme: {
    extend: {
      colors: {
        primary: '#008080',
        accent: '#F5A623',
        neutralbluegray: '#3B5F78',
        neutrallightgray: '#6D7D8B',
        neutraldarkgray: '#4A6572'
      }
    },
  },
  plugins: [],
}

