import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // allows dev server on network
  },
  preview: {
    port: 4173, // optional, default port
    allowedHosts: ["home.philippinesheadline.com"],
  },
});
