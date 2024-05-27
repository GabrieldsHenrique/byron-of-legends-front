/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'regular' : 'regular',

        'heavy' : 'heavy',
        'italic' : 'italic',
        'light' : 'light',
        'medium' : 'medium',
        'league' : 'league'
      },
    },
  },
  plugins: [
    createThemes({
      byron: {
        'primary-color': '#1f92ad',
        'primary-color-2': '#62b2c5',
        'primary-color-3': '#156679',
        'secondary-color': '#202020',

        'bg-color': '#F7F7F7',

        'gray-1':'#d1d5db',
        'gray-2':'#6b7280',
        'gray-3':'#374151',

        'c-success': '#57C73C',
        'c-warn': '#E2D55B',
        'c-error': '#FF412E',
        'c-info': '#0B65BD',
      }
    })
  ],
}
