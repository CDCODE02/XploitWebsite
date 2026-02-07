/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FFD30D',
          hover: '#E6BE0B',
          glow: 'rgba(255, 211, 13, 0.15)',
        },
        dark: {
          bg: '#050505',
          card: '#0F0F0F',
          border: '#27272a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 211, 13, 0.15) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}