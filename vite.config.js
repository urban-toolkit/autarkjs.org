/* eslint-disable no-undef */

import { resolve } from 'path';
import { defineConfig } from 'vite';

const exampleStr = 'ex3';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, `examples/${exampleStr}.ts`),
      name: `autkark-${exampleStr}`,
      fileName: `${exampleStr}`,
      formats: ['es'],
      minify: true
    },
    outDir: 'examples/dist',
    copyPublicDir: false,
    emptyOutDir: false,
    sourcemap: false
  },
});
