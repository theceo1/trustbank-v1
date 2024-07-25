// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0097A7',
          dark: '#00796B',
          light: '#4DD0E1',
        },
        secondary: {
          DEFAULT: '#FFC107',
          dark: '#FFA000',
          light: '#FFD54F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
