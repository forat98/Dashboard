/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
