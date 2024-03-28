/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mutedpurple-800': '#372857',
        'mutedpurple-700': '#423068',
        'mutedpurple-600': '#4d387a',
        'mutedpurple-500': '#58408B',
        'mutedpurple-400': '#63489C',
        'mutedpurple-300': '#6E50AE',
        'mutedpurple-200': '#7c61b6',
      }
    },
  },
  plugins: [],
}

