/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        charcoal: '#1a1a1a',
        accent: {
          DEFAULT: '#ff6600', // Neon Orange
          glow: '#ff8c00',    // Amber Glow
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'], // Bold artistic headings
        body: ['Inter', 'sans-serif'],           // Clean sans-serif body
        accent: ['"Permanent Marker"', 'cursive'], // Brush-style accent text
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, textShadow: '0 0 10px #ff6600, 0 0 20px #ff6600' },
          '50%': { opacity: 0.8, textShadow: '0 0 20px #ff6600, 0 0 40px #ff6600' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'grain': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", // Subtle grain texture
      }
    },
  },
  plugins: [],
}
