import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        'noto-mono': ['"Noto Sans Mono"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0'
  },
})
