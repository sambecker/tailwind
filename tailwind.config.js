module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',
      },
      transitionProperty: {
        'left': 'left',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
