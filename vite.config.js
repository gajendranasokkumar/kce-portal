import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/fa'] // Externalizing the react-icons/fa module
    }
  }
})