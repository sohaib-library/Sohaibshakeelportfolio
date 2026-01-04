/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'dark-bg': '#0a0a0a',
        'card-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}

