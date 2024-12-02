/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#101015', 
        oceanblue: '#1a6f8c',
        yellow: '#facc15',
      },
    },
  },
  plugins: [
  ],
}