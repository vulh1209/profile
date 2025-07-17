import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    ...(process.env.LOCAL !== "true"
      ? {
          headers: {
            "Content-Type": "application/javascript",
          },
          middlewareMode: false,
        }
      : {}),
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          utils: ['zustand', 'lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})