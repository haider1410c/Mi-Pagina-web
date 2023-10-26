const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{html,js}",
    "./src/**/*{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1536px',
    },

    extend: {

    height: {
      "hs":"90%",
    },
    boxShadow:{
      "bs":"12px 10px 15px -3px rgba(0,0,0,0.39)",
      "bsh":"  -9px 10px 15px -3px rgba(0,0,0,0.43)",
      "bsd":" -9px -8px 15px -3px rgba(0,0,0,0.50)",
    },
    fontFamily:{
      "Gabarito":"Gabarito",
      "Roboto":"Roboto Condensed"
    },

  },

  }

  }
