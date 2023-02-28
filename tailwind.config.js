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
      animation: {
        type: 'type 3.7s ease-out .8s infinite alternate both'
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '15625%, 3.125%': { transform: 'translateX(1ch)' },
          '4.6875%, 6.25%': { transform: 'translateX(2ch)' },
          '7.8125%, 9.375%': { transform: 'translateX(3ch)' },
          '10.9375%, 12.5%': { transform: 'translateX(4ch)' },
          '14.0625%, 15.625%': { transform: 'translateX(5ch)' },
          '17.1875%, 18.75%': { transform: 'translateX(6ch)' },
          '20.3125%, 21.875%': { transform: 'translateX(7ch)' },
          '23.4375%, 25%': { transform: 'translateX(8ch)' },
          '26.5625%, 28.125%': { transform: 'translateX(9ch)' },
          '29.6875%, 31.25%': { transform: 'translateX(10ch)' },
          '32.8125%, 34.375%': { transform: 'translateX(11ch)' },
          '35.9375%, 37.5%': { transform: 'translateX(12ch)' },
          '39.0625%, 40.625%': { transform: 'translateX(13ch)' },
          '42.1875%, 43.75%': { transform: 'translateX(14ch)' },
          '45.3125%, 46.875%': { transform: 'translateX(15ch)' },
          '48.4375%, 50%': { transform: 'translateX(16ch)' },
          '51.5625%, 53.125%': { transform: 'translateX(17ch)' },
          '54.6875%, 56.25%': { transform: 'translateX(18ch)' },
          '57.8125%, 59.375%': { transform: 'translateX(19ch)' },
          '60.9375%, 62.5%': { transform: 'translateX(20ch)' },
          '64.0625%, 65.625%': { transform: 'translateX(21ch)' },
          '67.1875%, 68.75%': { transform: 'translateX(22ch)' },
          '70.3125%, 71.875%': { transform: 'translateX(23ch)' },
          '73.4375%, 75%': { transform: 'translateX(24ch)' },
          '76.5625%, 78.125%': { transform: 'translateX(25ch)' },
          '79.6875%, 81.25%': { transform: 'translateX(26ch)' },
          '82.8125%, 84.375%': { transform: 'translateX(27ch)' },
          '85.9375%, 87.5%': { transform: 'translateX(28ch)' },
          '89.0625%, 90.625%': { transform: 'translateX(29ch)' },
          '92.1875%, 93.75%': { transform: 'translateX(30ch)' },
          '95.3125%, 96.875%': { transform: 'translateX(31ch)' },
          '98.4375%, 100%': { transform: 'translateX(32ch)' }
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
