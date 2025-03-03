/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        12: '12px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        cursive: ['var(--font-cursive)'],
      },
      colors: {
        'pink-site': '#ED5EDD',
        'yellow-site': '#F2E947',
        'lightgreen-site': '#8BDB81',
        'red-site': '#F72834',
        'white-site': '#EEEEEE',
        'darkyellow-site': '#FFBB30',
        'green-site': '#43AF1C',
        'purple-site': '#8751BD',
        'blue-site': '#2859B6',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade 3s ease-in-out',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
