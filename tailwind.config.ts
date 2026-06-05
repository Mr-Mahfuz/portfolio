import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neon Abyss (Dark Mode) palette
        abyss: {
          950: '#050510',
          900: '#0a0a1a',
          800: '#0f0f2a',
          700: '#14143a',
          600: '#1a1a4a',
        },
        neon: {
          cyan: '#00f0ff',
          purple: '#b44aff',
          pink: '#ff2d7c',
          green: '#39ff14',
          blue: '#4d7cff',
        },
        // Warm Linen (Light Mode) palette
        linen: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#ebe5d9',
          300: '#ddd4c4',
          400: '#c9b99f',
          500: '#b8956a',
          600: '#8b6f47',
          700: '#6b5535',
          800: '#4a3a24',
          900: '#2c2419',
        },
        warm: {
          gold: '#b8956a',
          bronze: '#8b6f47',
          caramel: '#d4b896',
          cream: '#f5f0e8',
          espresso: '#2c2419',
        },
        // Keep some zinc for neutrals
        zinc: {
          950: '#09090b',
        }
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans Bengali"', 'ui-sans-serif', 'system-ui'],
        display: ['Outfit', '"Noto Sans Bengali"', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slide-down 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'draw-line': 'draw-line 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 240, 255, 0.5), 0 0 80px rgba(0, 240, 255, 0.2)' },
        },
        'border-rotate': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'text-reveal': {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        'draw-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00f0ff, #b44aff, #ff2d7c)',
        'neon-gradient-subtle': 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(180,74,255,0.1), rgba(255,45,124,0.1))',
        'warm-gradient': 'linear-gradient(135deg, #b8956a, #d4b896, #8b6f47)',
        'warm-gradient-subtle': 'linear-gradient(135deg, rgba(184,149,106,0.1), rgba(212,184,150,0.1), rgba(139,111,71,0.1))',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)',
        'neon-lg': '0 0 40px rgba(0, 240, 255, 0.4), 0 0 80px rgba(0, 240, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(180, 74, 255, 0.3), 0 0 60px rgba(180, 74, 255, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 45, 124, 0.3), 0 0 60px rgba(255, 45, 124, 0.1)',
        'warm': '0 4px 30px rgba(184, 149, 106, 0.15)',
        'warm-lg': '0 8px 40px rgba(184, 149, 106, 0.25)',
      },
    }
  },
  plugins: [],
}
