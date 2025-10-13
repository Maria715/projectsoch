/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#233d60',      // Main brand color
        secondary: '#ff7f00',    // Accent color
        dark: '#1d314e',         // Dark variant
        'primary-light': '#2d4a6b',
        'secondary-light': '#ff8f1a'
      }
    },
  },
  plugins: [],


}

