/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
        },
        ink: 'rgb(var(--ink) / <alpha-value>)',
        brand: {
          copper: '#C2410C',
          ember: '#EA580C',
          charcoal: '#1C1917',
          stone: '#FAF9F7',
        },
      },
      boxShadow: {
        soft: '0 8px 28px rgba(28, 25, 23, 0.06)',
        'soft-lg': '0 16px 48px rgba(28, 25, 23, 0.08)',
        brand: '0 8px 28px rgba(194, 65, 12, 0.22)',
      },
    },
  },
  plugins: [],
}
