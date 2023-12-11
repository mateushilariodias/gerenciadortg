import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondDarkBlue: '#6FA0C6',
        mediumToneBlue: '#3B6E96',
        whiteBlueGray: '#E1E7F6',
        mediumToneBlack: '#1E292C',
      },
      borderRadius: {
        '10rem': '0.625rem',
      },
      fontSize: {
        '3.1xl': [ '1.875rem', {
          lineHeight: '1.938rem'
        }],
      },
    },
  },
  plugins: [],
}
export default config
