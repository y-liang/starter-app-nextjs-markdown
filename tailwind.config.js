/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],



  theme: {
    extend: {
      colors: {
        'yl-neutral': '#ffffff',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        // small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        // medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        md: '0 3px 6px 3px rgb(0 0 0 / 0.1)',
        lg: '0 9px 15px 6px rgb(255, 255, 255, 0.1)',
        around: '0 3px 15px 6px rgb(255, 255, 255, 0.1)',
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
