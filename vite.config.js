import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'flow-maker',
  // In your Vite or server configuration
  headers: {
    'Permissions-Policy': 'interest-cohort=()',
  }
})
