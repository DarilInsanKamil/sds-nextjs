/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contact-home': 'url("/images/contact-home.png")'
      },
      fontFamily: {
        'montserrat': 'var(--font-montserrat)',
        'nunito': 'var(--font-nunito)',
      },
      colors: {
        'my-green': '#51CA6A',
        'my-black': '#222222',
        'my-hover-green': '#46B55D'
      },
      fontSize: {
        'very-big': '72px'
      },
      lineHeight: {
        'hero': '60px'
      },
      textUnderlineOffset: {
        12: '24px'
      },
      maxWidth: {
        'small': '120px',
      }
    },
  },
  plugins: [],
}
