const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'heebo': ['Heebo', 'ui-sans-serif'],
      'nunito': ['Nunito', 'ui-sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'primary': '#FB923C',
        'secondary': '#0F172B',
      },
      animation: {
        'spin-slow': 'spin 45s linear infinite',
        'slide-in': 'slideIn 1s ease-out',
        'slide-in-slow': 'slideIn 3s ease-out',
        'partial-slide-in': 'partialSlideIn 1s ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translate3d(-100%, 0, 0)',
            visibility: 'visible'
          },
          '100%': {
            transform: 'translateZ(0)'
          }
        },
        partialSlideIn: {
          '0%': {
            transform: 'translate3d(-70%, 0, 0)',
            visibility: 'visible'
          },
          '100%': {
            transform: 'translateZ(0)'
          }
        }
      }
    }
  },
  plugins: [],
}