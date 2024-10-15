/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      colors: {
        background: {
          primary: 'rgba(var(--color-bg-primary))',
          secondary: 'rgba(var(--color-bg-secondary))',
          tertiary: 'rgba(var(--color-bg-tertiary))'
        },
        color: {
          primary: 'rgba(var(--color-text-primary))',
          secondary: 'rgba(var(--color-text-secondary))',
          'primary-lighter': 'rgba(var(--color-text-primary-lighter))',
          'secondary-lighter': 'rgba(var(--color-text-secondary-lighter))',

          emphasis: 'rgba(var(--color-text-emphasis))'
        }
      },
      boxShadow: {
        'custom-dark': '0 2px 4px rgb(0 0 0 / 0.1), inset 0 2px 4px rgb(0 0 0 / 0.1)'
      }
    }
  },
  plugins: []
}
