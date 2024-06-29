// tailwind.config.js

module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#0097A7',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
};
