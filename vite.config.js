import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@urban-toolkit/autk-db', '@duckdb/duckdb-wasm'],
  },
  build: {
    outDir: 'dist-temp',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        ex1: 'gallery/ex1.ts',
        ex2: 'gallery/ex2.ts',
        ex3: 'gallery/ex3.ts',
        ex4: 'gallery/ex4.ts',
        ex5: 'gallery/ex5.ts',
        ex6: 'gallery/ex6.ts',
        urbane: 'usecases/urbane/main.html',
        heat: 'usecases/heat/main.html',
        shadows: 'usecases/shadows/main.html',
      },
      output: {
        format: 'es',
        entryFileNames: (chunkInfo) => {
          if (['urbane', 'heat', 'shadows'].includes(chunkInfo.name)) {
            return 'usecases/[name].js'
          }
          return 'gallery/[name].js'
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
