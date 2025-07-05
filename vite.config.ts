import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // GitHub Pages configuration
  base: '/profile/',

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
  },

  // Server configuration
  server: {
    port: 3000,
    host: true,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
    },
  },

  // Preview configuration for production
  preview: {
    port: 3000,
    host: true,
  },

  // Asset handling
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
});
