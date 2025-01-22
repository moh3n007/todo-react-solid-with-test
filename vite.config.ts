import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@components": path.resolve(__dirname, "./src/components"),
    "@interfaces": path.resolve(__dirname, "./src/interfaces"),
    "@hooks": path.resolve(__dirname, "./src/hooks"),
    "@": path.resolve(__dirname, "./src"),
  },
},
})
