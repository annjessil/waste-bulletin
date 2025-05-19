import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/waste-bulletin/',
  publicDir: 'public' // This ensures public assets are copied correctly
})