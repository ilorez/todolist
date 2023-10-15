/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#EDEDED',
        'background-light': '#F9F7F7',
        'dark-blue': '#1C274C',
        'tdl_main': {
          'blue': '#0095FF',
          'green': '#27C289',
          'red': '#FF6E0A',
          'brown': 'DD894F'
        }
      }
    },

  },
  plugins: [],
}

