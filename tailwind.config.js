/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      slate: '#D1D5DB',
      gray: '#EDF2F7',
      blue: {
        DEFAULT: '#2563EC',
        dark: '#1E3A8A',
        light: '#60A5FA',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // extend: {
    //   colors: {
    //     success: '#22BF3E',
    //     danger: 'rgb(255, 95, 86)', //'#FF5F56',
    //     gray: '#EDF2F7',
    //     blue: {
    //       DEFAULT: '#2563EC',
    //       dark: '#1E3A8A',
    //       light: '#60A5FA',
    //     },
    //   },
    // },
  },
  plugins: [],
};




















// colors: {
    //   white: '#FFFFFF',
    //   black: '#000000',
    //   slate: '#D1D5DB',
    //   gray: '#EDF2F7',
    //   blue: {
    //     DEFAULT: '#2563EC',
    //     dark: '#1E3A8A',
    //     light: '#60A5FA',
    //   },
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },