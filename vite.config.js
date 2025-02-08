import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Portfolio/', // Add this line
    server: {
      host: true, // or '0.0.0.0'
    },
  })
