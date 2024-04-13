import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{html, js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      s: '375px',
      sm: '480px',
      m: '640px',
      l: '1024px',
      xl: '1360px',
      1400: '1400px',
    },

    spacing: {
      none: '0px',
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
      '2xl': '48px',
      '3xl': '64px',
      '4xl': '104px',
      g: '120px',
    },

    boxShadow: {
      1: 'box-shadow: -4px -4px 10px 0px #000000, 4px 4px 6px 0px #000000',
      2: 'box-shadow: 4px 3px 20px 4px #000000, 2px 2px 4px 0px #000000,  4px 4px 10px 0px #000000',
      3: 'box-shadow: 0px 8px 16px 0px #000000',
      4: 'box-shadow: 0px 16px 16px 0px #000000',
      'pdp-color-selected': 'inset 0 0 0 1.5px #fff, 0 0 0 1.5px #000;',
      'pdp-color': 'inset 0 0 0 1px #fff, 0 0 0 1px #000;',
      none: 'shadow: 0 0 0 0',
    },

    opacity: {
      1: '0.16',
      2: '0.40',
      3: '0.64',
      4: '0.80',
    },

    lineHeight: {
      s: '100%',
      m: '140%',
      l: '180%',
    },

    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '20px',
      xl: '28px',
      '2xl': '36px',
      g: '48px',
    },

    borderWidth: {
      none: '0',
      s: '1px',
      m: '2px',
    },

    letterSpacing: {
      s: '0%',
      m: '4%',
      l: '8%',
    },

    borderRadius: {
      none: '0px',
      s: '4px',
      m: '8px',
      l: '10px',
      full: '50vh',
    },

    extend: {
      colors: {
        primary: {
          main: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        'secondary-main': 'var(--secondary)',
        'tertiary-main': 'var(--color-tertiary-main)',

        'neutrals-1': 'var(--color-neutrals-1)',
        'neutrals-2': 'var(--color-neutrals-2)',
        'neutrals-3': 'var(--color-neutrals-3)',
        'neutrals-4': 'var(--color-neutrals-4)',
        'neutrals-5': 'var(--color-neutrals-5)',
        'neutrals-6': 'var(--color-neutrals-6)',
        'gray-light': 'var(--gray-light)',
        'gray-medium': 'var(--gray-medium)',

        'success-main': 'var(--color-success-main)',
        'success-light': 'var(--color-success-light)',
        'error-main': 'var(--color-error-main)',
        'error-light': 'var(--color-error-light)',
        'alert-main': 'var(--color-alert-main)',
        'alert-light': 'var(--color-alert-light)',
        'information-main': 'var(--color-information-main)',
        'information-light': 'var(--color-information-light)',
        'visited-main': 'var(--color-visited-main)',

        overlay: 'var(--overlay)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
