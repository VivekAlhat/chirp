import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "./src/chirp.tsx",
      name: "Chirp",
      formats: ["es", "umd"],
      fileName: (format) => `chirp.${format}.js`,
    },
    target: "esnext",
  },
});
