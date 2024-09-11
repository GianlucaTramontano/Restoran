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
      'pacifico': ['Pacifico', 'ui-sans-serif'],
      'nunito': ['Nunito', 'ui-sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        'primary': '#FB923C',
        'secondary': '#0F172B',
        'secondary-important': '#0F172B !important',
        'tertiary': '#666565'
      },
      animation: {
        'spin-slow': 'spin 45s linear infinite',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'slide-in': 'slideIn 1s ease-out',
        'slide-in-slow': 'slideIn 3s ease-out',
        'partial-slide-in': 'partialSlideIn 1s ease-out'
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateZ(0)'
          }
        },
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