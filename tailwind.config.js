/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')
// const flowbite = require('flowbite')


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {
      colors: {
        "ed-green": "#00A859",
        "ed-blue": "#003399",
        "dark": '#02021A',
        "ed-dark": '#4F4F4F',
        "ed2-green":'#E4F3EA',
        "ed1-dark": '#1B1B1B',
        "ed3-dark": '#4F4F4F',
        "ed-orange": '#FF9D0B',
        "ed4-green": '#00A859',
        "bu1-black": '#111827',
        "bu2-black": '#29303D',
        "bu1-blue": '#263864',
        "bu2-blue": '#175CFF',
        "bu1-green": '#253724',
        "bu2-green": '#74B51B',
        "bu1-red": '#41282A',
        "bu2-red": '#FF6B35',
        "bu1-white": '#A4A2A2',
        "bu2-white": '#FFFFFF',
        "bu1-yellow": '#544D31',
        "bu3-yellow": '#FFC300'

        


      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Lato', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
    // flowbite
  ],
}
