/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        default: '#fff',
        primary: '#3f97be',
        primary_dark: '#287DA1',
        secondary: '#5ed1c9',
        secondary_dark: '#40AEA7',
        neutral: '#fff',
        color1: '#fdb9ac',
        color2: '#fedcd2',
        color3: '#fef3f1',
        red: '#f53d2d',
        gray: '#f5f4f4',
        gray2: '#ededed',
        gray3: '#fafafa',
        gray4: '#fbfbfb',
      },
    },
  },
  plugins: [],
}
