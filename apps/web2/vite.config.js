import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        // chunking configuration
        manualChunks: {
          vendor_react: ['react'],
          vendor_lodash: ['lodash']
        },
        // filename configuration
        /* entryFileNames: `assets/[name].js`,
         * chunkFileNames: `assets/[name].js`,
         * assetFileNames: `assets/[name].[ext]`, */
      }
    },
  },
  plugins: [react()],
})
