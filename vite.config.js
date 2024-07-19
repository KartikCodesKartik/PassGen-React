import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Todo-React/', // Base path for GitHub Pages deployment
  plugins: [react()],
});
