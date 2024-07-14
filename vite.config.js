import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    
  },
  optimizeDeps: {
    include: ['react-responsive-carousel']
  },
  build: {
    rollupOptions: {
      external: ['react-responsive-carousel']
    }
  }
});
