module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-200': '#0089cd',
        'primary-300': '#0074ae',
        'primary-400': '#006699',
        'primary-500': '#005985',
        'primary-600': '#014263',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
