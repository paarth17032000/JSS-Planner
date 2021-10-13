module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary-red': '#FF4646',
      'primary': '#090E36',
      'secondary': '#050C44',
      'shadow': '#6E7191'

    },
    backgroundColor: theme => ({
      'primary': '#FF4646',
      'secondary': '#050C44',
      'tertiary': '#EAF2FA',
      'background': '#F4F8FE',
      'links': '#CDCEDA',
      'white': '#FFFFFF'
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
