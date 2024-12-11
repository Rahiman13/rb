import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Simplify imports if needed
    },
  },
  optimizeDeps: {
    include: ['react-responsive-carousel'], // Pre-bundling dependencies
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the size limit (in KB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Define chunks for heavy libraries to split them
          vendor: ['react', 'react-dom', 'react-responsive-carousel'],
        },
      },
    },
  },
});
