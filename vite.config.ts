import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Static assets directory - automatically copied to dist on build
  publicDir: 'public',
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/webhook': {
        target: 'https://n8n.eiatech.ma',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook/, '/webhook-test'),
        secure: true,
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      sourcemap: false,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure public directory is copied during build
    copyPublicDir: true,
  },
});
