// vite.config.mts
import { defineConfig } from 'vite';

import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import react from '@vitejs/plugin-react';
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client';

export default defineConfig({
  plugins: [
    preserveUseClientDirective(),
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: 'style',
      name: 'Styrbord',
    },
    rollupOptions: {
      // Designtokenene står bevisst ikke her: de kommer inn som en CSS-import og skal bakes
      // inn i `dist/style.css`, slik at applikasjonen ikke trenger å laste noe i tillegg.
      external: ['react', 'react-dom', 'react/jsx-runtime', 'c15t'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          c15t: 'c15t',
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: true,
          declaration: true,
          outDir: 'dist',
          // Pin rootDir so typene alltid havner i dist/src/, uavhengig av hvor
          // mange filer som er med i bygget. Uten denne flytter TypeScript
          // felles rot etter hvert som filer legges til, og stien i
          // package.json ("typings") slutter å stemme.
          rootDir: '.',
        }),
      ],
    },
  },
});
