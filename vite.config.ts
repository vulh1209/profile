import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

// Custom plugin to handle MIME types
const mimePlugin = () => ({
  name: "mime-fix",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (
        req.url?.endsWith(".tsx") ||
        req.url?.endsWith(".ts") ||
        req.url?.endsWith(".jsx") ||
        req.url?.endsWith(".js")
      ) {
        res.setHeader("Content-Type", "text/javascript; charset=utf-8");
      }
      next();
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mimePlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  // Server configuration
  server: {
    port: 3000,
    host: true,
  },

  // Preview configuration for production
  preview: {
    port: 3000,
    host: true,
  },

  // Asset handling
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          utils: ["zustand", "lucide-react"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
