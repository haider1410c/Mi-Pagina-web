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
    fontSize: {
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'tiny': '.875rem',  // 14px
      'base': '1rem',     // 16px
      "base2":"1.1rem",   // 17.6px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
      '7xl': '5rem',      // 80px
      '8xl': '6rem',      // 96px
      '9xl': '8rem',      // 128px
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
