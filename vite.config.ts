import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nextFont from "@next-font/plugin-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nextFont()],
});
