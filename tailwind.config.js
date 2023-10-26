/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jsans': ['Josefin Sans', 'sans-serif'],
        'vround': ['Varela Round', 'sans-serif'],
      },
      fontSize: {
        '1em': '1em',
        '1.8em': '1.8em',
      },
      spacing: {
        "vh-50": "calc(100vh - 50px)",
      },
    },
  },
  plugins: [],
}