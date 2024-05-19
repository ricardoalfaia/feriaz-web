import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{html, js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: '320px',
      s: '375px',
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1360px',
      1400: '1400px',
    },

    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          main: 'hsl(var(--primary-main))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          main: 'hsl(var(--secondary-main))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

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

      spacing: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
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
        sm: '100%',
        md: '140%',
        lg: '180%',
      },

      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '28px',
        '2xl': '36px',
        '3xl': '48px',
      },

      borderWidth: {
        none: '0',
        sm: '1px',
        md: '2px',
      },

      letterSpacing: {
        sm: '0%',
        md: '4%',
        lg: '8%',
      },

      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '10px',
        full: '50vh',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
export default config
