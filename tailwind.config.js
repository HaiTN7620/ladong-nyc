/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"]
      },
      colors: {
        background: '#fafaf9',
        accent: '#262626',
        'ladong-red': '#8B1A1A',
        'ladong-dark-red': '#6B1010',
        'ladong-cream': '#F5E6D3',
      },
    },
  },
  plugins: [],
};