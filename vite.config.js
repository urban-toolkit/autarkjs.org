import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist-temp',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        ex1: 'examples/ex1.ts',
        ex2: 'examples/ex2.ts',
        ex3: 'examples/ex3.ts',
        ex4: 'examples/ex4.ts',
        ex5: 'examples/ex5.ts',
        ex6: 'examples/ex6.ts',
        urbane: 'casestudies/urbane/main.html',
        boston: 'casestudies/boston/main.html',
      },
      output: {
        format: 'es',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'urbane' || chunkInfo.name === 'boston') {
            return 'casestudies/[name].js'
          }
          return 'examples/[name].js'
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? ''

          if (name.includes('urbane') && name.includes('.css')) {
            return 'assets/urbane-[hash][extname]'
          }

          if (name.includes('boston') && name.includes('.css')) {
            return 'assets/boston-[hash][extname]'
          }

          if (name.includes('main.css')) {
            return 'assets/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
