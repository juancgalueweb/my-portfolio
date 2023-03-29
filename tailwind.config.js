/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        ruslan: ['Ruslan Display', 'sans-serif']
      },
      colors: {
        'gray-dark-mode': {
          50: '#373737',
          100: '#353535',
          200: '#333333',
          300: '#2E2E2E',
          400: '#2C2C2C',
          500: '#272727',
          600: '#242424',
          700: '#222222',
          800: '#1E1E1E',
          900: '#121212'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
