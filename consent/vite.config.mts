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
      external: [
        'react',
        'react-dom',
        'c15t',
        '@digdir/designsystemet-react',
        '@kystverket/sprak-react',
        '@kystverket/styrbord',
        '@kystverket/styrbord-tokens',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@digdir/designsystemet-react': '@digdir/designsystemet-react',
          '@kystverket/styrbord': 'Styrbord',
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
