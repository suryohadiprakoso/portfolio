/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6ee',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        'mini-tablet': '368px',
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

