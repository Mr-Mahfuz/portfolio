import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0C0C0E',
          900: '#141416',
          800: '#1C1C1F',
          700: '#242427',
          600: '#2E2E32',
          500: '#3A3A3F',
        },
        paper: {
          50: '#FAFAF8',
          100: '#F2F1EE',
          200: '#E8E6E2',
          300: '#D4D2CE',
          400: '#B0AEA8',
        },
        amber: {
          400: '#F0C060',
          500: '#E8A838',
          600: '#C4891E',
          700: '#A06E14',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans Bengali"', 'ui-sans-serif', 'system-ui'],
        display: ['Outfit', '"Noto Sans Bengali"', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.92)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    }
  },
  plugins: [],
}
