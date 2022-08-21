/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image' : 'url("./components/assets/swirl_pattern.webp")'
      },
    },
  },
  plugins: [],
}
