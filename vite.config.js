import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'examples/dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        ex1: 'examples/ex1.ts',
        ex2: 'examples/ex2.ts',
        ex3: 'examples/ex3.ts',
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js',
      },
    },
  },
})
