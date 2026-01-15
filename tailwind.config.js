/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ops: {
          dark: '#0a0e14',
          panel: '#0f1419',
          border: '#1a2530',
          green: '#00ff88',
          amber: '#ffb347',
          red: '#ff4444',
          blue: '#00d4ff',
        }
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'blink': 'blink 1.5s steps(2, start) infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        }
      }
    },
  },
  plugins: [],
}
