module.exports = {
  prefix: 'tw-',
  important: true,
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  mode: 'jit',
  theme: {
    extend: {},
  },
  // theme: {
  //   screens: {
  //     'sm': '576px',
  //     'md': '768px',
  //     'lg': '992px',
  //     'xl': '1200px',
  //   }
  // },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
