import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
    fs: {
      strict: false,
    },
  },
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  build: {
    outDir: "build",
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
