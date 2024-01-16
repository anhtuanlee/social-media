import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  rules: [
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--roboto)'],
        poppins: ['var(--poppins)'],
      },
      colors: {
        black: '#000',
        darkblack: '#06090c',
        white: '#fff',
        colgray: '#e4e4e4',
        lightgray: ' #f2f2f2',
        darkgray: '#494949',
        ashgray: '#b8b8b8',
        red: '#d93f21',
        lightsky: '#EEF5FF',
        lightgreen: '#5858FA',
        darkgreen: '#150AA1',
      },
      screens: {
        xs: '0px',
        sm: '768px',
        md: '1024px',
        lg: '1200px',
        xl: '1400px',
      },
      maxWidth: {
        '3xl': '1920px',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      space: {
        section: '80px',
      },
      aspectRatio: {
        '5/1': '5 / 1',
        '2/75': '2.75',
        '2': '2 / 1',
      },
    },
  },

  plugins: [],
};
export default config;
