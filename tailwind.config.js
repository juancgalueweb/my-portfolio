/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ruslan: ['Ruslan Display', 'sans-serif']
      }
    }
  },
  plugins: []
}
