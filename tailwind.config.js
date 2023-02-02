/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        ruslan: ['Ruslan Display', 'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
