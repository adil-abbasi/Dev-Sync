/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e293b',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(30, 41, 59, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
