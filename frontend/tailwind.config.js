module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'. We enabled dark mode.
  theme: {
    container : {
      center: true, //Always center containers
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
