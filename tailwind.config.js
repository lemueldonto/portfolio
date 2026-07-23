/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Semantic tokens driven by CSS vars so light/dark can swap.
      // `film-*` = surfaces, `cream` = foreground ink, `brass` = accent.
      colors: {
        film: {
          950: 'rgb(var(--c-film-950) / <alpha-value>)',
          900: 'rgb(var(--c-film-900) / <alpha-value>)',
          850: 'rgb(var(--c-film-850) / <alpha-value>)',
          800: 'rgb(var(--c-film-800) / <alpha-value>)',
          700: 'rgb(var(--c-film-700) / <alpha-value>)',
          600: 'rgb(var(--c-film-600) / <alpha-value>)',
        },
        olive: {
          DEFAULT: 'rgb(var(--c-olive) / <alpha-value>)',
          light: 'rgb(var(--c-olive-light) / <alpha-value>)',
          dark: 'rgb(var(--c-olive-dark) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--c-cream) / <alpha-value>)',
          dim: 'rgb(var(--c-cream-dim) / <alpha-value>)',
          faint: 'rgb(var(--c-cream-faint) / <alpha-value>)',
        },
        brass: {
          DEFAULT: 'rgb(var(--c-brass) / <alpha-value>)',
          light: 'rgb(var(--c-brass-light) / <alpha-value>)',
          dark: 'rgb(var(--c-brass-dark) / <alpha-value>)',
        },
        rust: 'rgb(var(--c-rust) / <alpha-value>)',
        // Zoned palette — flips between light content zones and dark anchor
        // zones (hero / contact) via --ink / --canvas / --accent CSS vars.
        ink: 'rgb(var(--ink) / <alpha-value>)',
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.86' },
          '52%': { opacity: '1' },
          '54%': { opacity: '0.9' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reticle-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        sweep: {
          '0%': { transform: 'translateY(-130%)', opacity: '0' },
          '12%': { opacity: '0.55' },
          '88%': { opacity: '0.55' },
          '100%': { transform: 'translateY(240%)', opacity: '0' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1.08)' },
          '50%': { transform: 'translate3d(-1.2%, -0.8%, 0) scale(1.12)' },
        },
      },
      animation: {
        grain: 'grain 0.6s steps(3) infinite',
        flicker: 'flicker 6s linear infinite',
        blink: 'blink 1.2s step-end infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'reticle-pulse': 'reticle-pulse 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-y': 'marquee-y 26s linear infinite',
        sweep: 'sweep 9s ease-in-out infinite',
        'drift-slow': 'drift-slow 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
