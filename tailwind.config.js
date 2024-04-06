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
    },
  },
  plugins: [],
}

