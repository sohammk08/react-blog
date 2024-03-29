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
        'lora': ['Lora', 'sans-serif'],
      },
      fontSize: {
        '1em': '1em',
        '1.8em': '1.8em',
        '3.5rem': '3.5rem',
        '4em': '4em',
      },
      spacing: {
        'vh-50': 'calc(100vh - 50px)',
        '70vw': '70vw',
        '2rem': '2rem',
        '5.5rem': '5.5rem',
      },
    },
  },
  plugins: [],
}