/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#111111',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}