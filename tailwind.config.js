/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Esto es importante
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: {
            light: '#C6A870',
            DEFAULT: '#B89356',
            dark: '#96763D'
          },
          beige: {
            light: '#F5E6D3',
            DEFAULT: '#E8D4BB',
            dark: '#D4B795'
          },
          cream: {
            light: '#FAF5EF',
            DEFAULT: '#F0E6D9',
            dark: '#E0D0BB'
          },
          brown: {
            light: '#3D261C',
            DEFAULT: '#2C1810',
            dark: '#1A0D08'
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}