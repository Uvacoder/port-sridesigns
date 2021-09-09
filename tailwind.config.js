const colors = require('tailwindcss/colors')
const { fontWeight } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/assets/**/*.{js,ts,jsx,tsx}',],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        rose: colors.rose,
        indigo: colors.indigo,
        sky: colors.sky,
        twitter: '#03A9F4',
        linkedin: '#0077B5',
        clearsky: '#0085FF',
        darkblack: '#0B0B0B',
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
        default: {
          css: {
            color: theme('colors.gray.900'),
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
              '&:hover': {
                color: theme('colors.indigo.800')
              },
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
            code: {
              fontFamily: 'font-mono',
              fontWeight: '500',
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.50'),
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
            strong: {
              color: theme('colors.gray.50'),
              fontWeight: '700',
            },
            a: {
              color: theme('colors.indigo.400'),
              textDecoration: 'none',
              fontWeight: '700',
              '&:hover': {
                color: theme('colors.indigo.600')
              },
            },
            blockquote: {
              fontWeight: '400',
              color: theme('colors.gray.50'),
            },
            code: {
              fontFamily: 'font-mono',
              color: theme('colors.gray.50'),
              fontWeight: '500',
            },

          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
