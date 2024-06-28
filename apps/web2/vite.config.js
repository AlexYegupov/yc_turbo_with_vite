import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        manualChunks: {
          vendor_react: ['react'],
          vendor_lodash: ['lodash']
        }
      }
    },
  },
  plugins: [react()],
})
