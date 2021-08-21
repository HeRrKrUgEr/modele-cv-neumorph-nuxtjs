/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: { min: '640px', max: '1023px' },
      // => @media (min-width: 640px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: [
        '"Roboto"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    extend: {
      screens: {
        xxl: '1400px',
      },
      colors: {
        'cv-body': '#F7FAFC',
        'cv-accent': '#007FAB',
      },

      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '5/6': '83.333333%',
        '7/10': '70%',
        '9/10': '90%',
        '1/12': '8.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '11/12': '91.666667%',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        rebound: 'cubic-bezier(0.38, 0.8, 0.32, 1.07)',
      },
      boxShadow: {
        neumorph:
          '-8px -8px 24px rgb(255 255 255 / 70%), 6px 6px 10px 0px rgb(0 0 0 / 20%)',
        'neumorph-sm':
          '0px -6px 8px -6px rgb(255 255 255 / 70%), 0px 6px 8px -6px rgb(0 0 0 / 20%)',
        'neumorph-md':
          '0px -8px 10px -8px rgb(255 255 255 / 80%), 0px 8px 10px -8px rgb(0 0 0 / 20%)',
        'under-lg': '0px 15px 10px -6px rgba(0, 0, 0, 0.3);',
        'under-md': '0px 10px 10px -10px rgba(0, 0, 0, 0.3);',
        'under-sm': '0px 5px 10px -5px rgba(0, 0, 0, 0.3);',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    transform: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
