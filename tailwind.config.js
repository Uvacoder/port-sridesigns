const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        rose: colors.rose,
        indigo: colors.indigo,
      },

      fontFamily: {
        primary: ['"Work Sans"', 'Inter', 'system-ui'],
      },

      typography: (theme) => ({
        lg: {
          css: {
            color: theme('colors.gray.800'),
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
            },
            strong: {
              fontWeight: '600',
            },
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'none',
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
