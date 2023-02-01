/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
