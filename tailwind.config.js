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
          tertiary: 'rgba(var(--color-bg-tertiary))',

          'emphasis-50': 'rgba(var(--color-text-emphasis-50))',
          'emphasis-100': 'rgba(var(--color-text-emphasis-100))',
          'emphasis-200': 'rgba(var(--color-text-emphasis-200))',
          'emphasis-300': 'rgba(var(--color-text-emphasis-300))',
          'emphasis-400': 'rgba(var(--color-text-emphasis-400))',
          'emphasis-500': 'rgba(var(--color-text-emphasis-500))',
          'emphasis-600': 'rgba(var(--color-text-emphasis-600))',
          'emphasis-700': 'rgba(var(--color-text-emphasis-700))',
          'emphasis-800': 'rgba(var(--color-text-emphasis-800))',
          'emphasis-900': 'rgba(var(--color-text-emphasis-900))',
          'emphasis-950': 'rgba(var(--color-text-emphasis-950))'
        },
        color: {
          primary: 'rgba(var(--color-text-primary))',
          secondary: 'rgba(var(--color-text-secondary))',
          'primary-lighter': 'rgba(var(--color-text-primary-lighter))',
          'secondary-lighter': 'rgba(var(--color-text-secondary-lighter))',

          'emphasis-50': 'rgba(var(--color-text-emphasis-50))',
          'emphasis-100': 'rgba(var(--color-text-emphasis-100))',
          'emphasis-200': 'rgba(var(--color-text-emphasis-200))',
          'emphasis-300': 'rgba(var(--color-text-emphasis-300))',
          'emphasis-400': 'rgba(var(--color-text-emphasis-400))',
          'emphasis-500': 'rgba(var(--color-text-emphasis-500))',
          'emphasis-600': 'rgba(var(--color-text-emphasis-600))',
          'emphasis-700': 'rgba(var(--color-text-emphasis-700))',
          'emphasis-800': 'rgba(var(--color-text-emphasis-800))',
          'emphasis-900': 'rgba(var(--color-text-emphasis-900))',
          'emphasis-950': 'rgba(var(--color-text-emphasis-950))'

        }
      },
      boxShadow: {
        'custom-dark': '0 2px 4px rgb(0 0 0 / 0.1), inset 0 2px 4px rgb(0 0 0 / 0.1)'
      }
    }
  },
  plugins: []
}
