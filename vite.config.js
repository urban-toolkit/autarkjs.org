import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        ex1: resolve(__dirname, 'examples/ex1.ts'),
        ex2: resolve(__dirname, 'examples/ex2.ts'),
        ex3: resolve(__dirname, 'examples/ex3.ts'),
      },
      output: {
        dir: 'examples/dist',
        entryFileNames: '[name].js',
        format: 'es',
      }
    },
    outDir: 'examples/dist',
    copyPublicDir: false,
    emptyOutDir: true,
    sourcemap: false,
  },
})
