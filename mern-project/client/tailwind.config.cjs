//  @type {import('tailwindcss').Config}
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet' : "640px",
      'laptop': "1024px",
      'desktop': "1280px"
    }
  },
  plugins: [],
}
