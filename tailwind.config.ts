import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      cream: {
        100: '#FAF9F5',
        200: '#F2EEE1',
        300: '#EAE3CC',
        400: '#BBB49B',
      },
      red: {
        500: '#FF723D',
      },
      green: {
        100: '#F6FECD',
        500: '#AD9332',
        600: '#91834E',
      },
      gray: {
        300: '#979B96',
        500: '#616B63',
        600: '#4D554F',
        700: '#383E3A',
        900: '#141414',
      },
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
};

export default config; 