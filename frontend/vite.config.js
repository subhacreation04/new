import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from "dotenv";

// https://vite.dev/config/

dotenv.config();
export default defineConfig({
  base: "./",
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("some-large-module")) {
            return "large-module";
          }
        },
      },
    },
  },

   
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  
})
