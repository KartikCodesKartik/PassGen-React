import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PassGen-React/', // Base path for GitHub Pages deployment
  plugins: [react()],
});
