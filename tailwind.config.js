/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
          // Add more dark mode colors as needed
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        loading : {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        loading: ' loading 1s linear infinite'
      },
    },
    fontFamily: {
      fantasy: ['Comic Sans MS', 'cursive'], // Example fantasy font family
    },
  },
  plugins: [],
}

