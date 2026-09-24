/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--bg-color) / <alpha-value>)',
        surface: 'rgb(var(--surface-color) / <alpha-value>)',
        surfaceHover: 'rgb(var(--surface-hover) / <alpha-value>)',
        border: 'rgb(var(--border-color) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary-color) / <alpha-value>)',
          hover: 'rgb(var(--primary-hover) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [],
}
