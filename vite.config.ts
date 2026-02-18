import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for Electron and GitHub Pages. 
  // It ensures assets are loaded with relative paths (e.g., "./assets/...") 
  // instead of absolute paths (e.g., "/assets/...").
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  }
});