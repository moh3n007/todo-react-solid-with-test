import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/components/shared"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Enable global test functions like expect, describe, it
    environment: "jsdom", // Use jsdom for DOM testing
    setupFiles: "./test.setup.ts", // Setup file for testing (optional)
  },
});
