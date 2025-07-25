import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nextFont from "@next-font/plugin-vite";
import Inspect from "vite-plugin-inspect";

// https://vite.dev/config/
export default defineConfig({
  plugins: [Inspect(), react(), nextFont()],
});
