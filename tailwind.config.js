export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}', // Ensure your Vue files are covered
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        tinyhand: ['TinyHand'],
        montserrat: ['Monsterrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
