/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '-2xl': { max: '1400px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
      colors: {
        default: '#fff',
        // primary: '#f53d2d',
        primary: '#a8242d',
        primary_dark: '#63161B',
        secondary: '#5ed1c9',
        secondary_dark: '#40AEA7',
        neutral: '#fff',
        color1: '#a8242d',
        color2: '#ffffff',
        color3: '#ececec',
        color1_dark: '#63161B',
        red: '#f53d2d',
        red2: '#d00000',
        gray: '#f5f4f4',
        gray2: '#ededed',
        gray3: '#fafafa',
        gray4: '#fbfbfb',
      },
    },
  },
  plugins: [],
  module: {
    rules: [
      // Rule cho JavaScript và JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Rule cho CSS và SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Rule cho hình ảnh
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
}
