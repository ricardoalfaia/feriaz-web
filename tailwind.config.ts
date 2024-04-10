import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
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
    // fontFamily: {
    //   roboto: ['Roboto Condensed', 'sans-serif'],
    // },
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
    colors: {
      // primary: {
      //   DEFAULT: 'hsl(var(--primary))',
      //   light: 'hsl(var(--primary))',
      //   dark: 'hsl(var(--primary))',
      //   foreground: 'hsl(var(--primary-foreground))',
      // },
      // secondary: {
      //   DEFAULT: 'hsl(var(--secondary))',
      //   foreground: 'hsl(var(--secondary-foreground))',
      // },
      // destructive: {
      //   DEFAULT: 'hsl(var(--destructive))',
      //   foreground: 'hsl(var(--destructive-foreground))',
      // },
      // muted: {
      //   DEFAULT: 'hsl(var(--muted))',
      //   foreground: 'hsl(var(--muted-foreground))',
      // },

      'primary-main': 'var(--primary)',
      'primary-bg': 'var(--primary-foreground)',
      // 'primary-dark': 'var(--color-primary-dark)',
      // 'primary-light': 'var(--color-primary-light)',
      'secondary-main': 'var(--color-secondary-main)',
      // 'secondary-dark': 'var(--color-secondary-dark)',
      // 'secondary-light': 'var(--color-secondary-light)',
      'tertiary-main': 'var(--color-tertiary-main)',
      // 'tertiary-dark': 'var(--color-tertiary-dark)',

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
    boxShadow: {
      1: 'box-shadow: -4px -4px 10px 0px #000000, 4px 4px 6px 0px #000000',
      2: 'box-shadow: 4px 3px 20px 4px #000000, 2px 2px 4px 0px #000000,  4px 4px 10px 0px #000000',
      3: 'box-shadow: 0px 8px 16px 0px #000000',
      4: 'box-shadow: 0px 16px 16px 0px #000000',
      'pdp-color-selected': 'inset 0 0 0 1.5px #fff, 0 0 0 1.5px #000;',
      'pdp-color': 'inset 0 0 0 1px #fff, 0 0 0 1px #000;',
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
      xs: '12px', //'0.75rem'
      s: '14px', //0.875rem
      m: '16px', //1rem
      l: '20px', //1.25rem
      xl: '28px', //1.75rem
      '2xl': '36px', //2.25rem
      g: '48px', //3rem
    },
    borderRadius: {
      none: '0px',
      s: '4px',
      m: '8px',
      circle: '50vh',
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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      transition_drop_next: {
        '0%': { width: '10px', backgroundColor: '#FFFFFF' },
        '100%': { width: '21px', backgroundColor: '#AFAFAF' },
      },
      transition_drop_selected: {
        '0%': { width: '21px', backgroundColor: '#AFAFAF' },
        '100%': { width: '10px', backgroundColor: '#FFFFFF' },
      },
      transition_drop_next_desktop: {
        '0%': { width: '10px', backgroundColor: '#FFFFFF' },
        '100%': { width: '32px', backgroundColor: '#AFAFAF' },
      },
      transition_drop_selected_desktop: {
        '0%': { width: '32px', backgroundColor: '#AFAFAF' },
        '100%': { width: '10px', backgroundColor: '#FFFFFF' },
      },
      open_mobile_menu: {
        '0%': { left: '-580px' },
        '100%': { left: '0px' },
      },
      close_mobile_menu: {
        '0%': { left: '0px' },
        '100%': { left: '-580px' },
      },
      transition_modal_select_size: {
        '0%': { top: '825px' },
        '100%': { top: '585px' },
      },
      transition_close_modal_select_size: {
        '0%': { top: '585px' },
        '100%': { top: '825px' },
      },
      transition_width_20: {
        '0%': { width: '0' },
        '100%': { width: '20%' },
      },
      transition_width_40: {
        '0%': { width: '0' },
        '100%': { width: '40%' },
      },
      transition_width_60: {
        '0%': { width: '0' },
        '100%': { width: '60%' },
      },
      transition_width_100: {
        '0%': { width: '0' },
        '100%': { width: '100%' },
      },
    },
    animation: {
      selected: 'transition_drop_selected 5s ease-in-out infinite',
      next: 'transition_drop_next 5s ease-in-out infinite',
      selected_desktop: 'transition_drop_selected_desktop 5s ease-in-out infinite',
      next_desktop: 'transition_drop_next_desktop 5s ease-in-out infinite',
      open_mobile_menu: 'open_mobile_menu 0.5s ease-in',
      close_mobile_menu: 'close_mobile_menu 0.5s ease-in',
      open_modal_select_size: 'transition_modal_select_size ease-in-out 0.5s ',
      close_modal_select_size: 'transition_close_modal_select_size ease-in-out 0.5s ',
      width_20: 'transition_width_20 ease-in-out 1s forwards',
      width_40: 'transition_width_40 ease-in-out 1s forwards',
      width_60: 'transition_width_60 ease-in-out 1s forwards',
      width_100: 'transition_width_100 ease-in-out 1s forwards',
    },
  },
  safelist: ['animate-width_20', 'animate-width_40', 'animate-width_60', 'animate-width_100'],
  plugins: [],
}
export default config
