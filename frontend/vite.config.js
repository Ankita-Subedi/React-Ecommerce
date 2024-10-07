import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-Ecommerce/',
  build: {
    outDir: 'dist', // Default output directory for Vite
  },
  plugins: [react()],
})