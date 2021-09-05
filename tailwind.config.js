const colors = require('tailwindcss/colors')
const { fontWeight } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        rose: colors.rose,
        indigo: colors.indigo,
        twitter: '#03A9F4',
        linkedin: '#0077B5',
        clearsky: '#0085FF',
      },

      fontFamily: {
        primary: ['"Work Sans"', 'Karla', 'system-ui'],
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      typography: (theme) => ({
        lg: {
          css: {
            color: theme('colors.gray.800'),
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '700',
            },
            strong: {
              fontWeight: '700',
            },
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'none',
              fontWeight: '700',
            },
            p: {
              fontWeight: '500',
            },
            li: {
              fontWeight: '500',
            },
            blockquote: {
              fontWeight: '400',
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
