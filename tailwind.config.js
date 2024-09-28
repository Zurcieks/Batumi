/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50:  '#fdfcf5',
          100: '#f9f8eb',
          200: '#f5f5dc',  // Klasyczny beżowy
          300: '#ede7c5',
          400: '#e4dab0',
          500: '#dbcd9a',
          600: '#c0b57c',
          700: '#a29a63',
          800: '#837d4b',
          900: '#656033',
        },
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeDown: 'fadeDown 0.9s ease-out',
        fadeRight: 'fadeRight 0.9s ease-out',
        fadeUp: 'fadeUp 0.9s ease-out',
        fadeLeft: 'fadeLeft 0.9s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
