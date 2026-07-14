import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Warn when a chunk exceeds 600KB
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor animation libs — loaded async, not on initial paint
          "vendor-gsap": ["gsap", "@gsap/react"],
          "vendor-framer": ["framer-motion"],
          "vendor-lenis": ["lenis"],
          // Radix UI primitives
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
}));
