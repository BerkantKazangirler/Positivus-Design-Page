/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      spacing: {
        '75': '19rem',  
        '98': '25rem',  
        '100': '30rem',
        '101': '32rem',
        '128': '40rem',
        '256': '56rem',
      },
      colors: {
        'main-green' : '#B9FF66',
        'main-gray' : '#191A23',
        'main-white' : '#F3F3F3',
      },
      container: {
        screens: {
          sm: '400px',
          md: '450px',
          lg: '728px',
          xl: '984px',
          '2xl': '1240px',
        },
      },
      fontFamily: {
        spacegrotesk: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

