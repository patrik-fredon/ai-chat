/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: '#bc13fe',
        neonPink: '#fe019a',
        neonBlue: '#04d9ff',
        darkBg: '#0d0d0d',
        darkBgAlt: '#1a1a1a',
      },
      fontFamily: {
        synth: ['"Press Start 2P"', 'cursive'],
      }, boxShadow: { 
        neon: '0 0 5px #fe019a, 0 0 10px #fe019a, 0 0 20px #fe019a', 
        neonBlue: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff', 
      }, 
    },
    plugins: [require('@tailwindcss/typography')],
  }
};
