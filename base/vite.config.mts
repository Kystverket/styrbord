// vite.config.ts
import { defineConfig } from 'vite';

import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client';

export default defineConfig({
  plugins: [
    preserveUseClientDirective(),
    svgrPlugin(),
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    // Avoid bundling browser-only conditional exports (e.g. decode-named-character-reference)
    // that use top-level `document` calls, breaking SSR consumers.
    conditions: ['module', 'import', 'default'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
  server: {
    port: 3000,
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
        '@digdir/designsystemet-react',
        '@kystverket/sprak-react',
        'react-markdown',
        'react-datepicker',
        'date-fns',
        'exifr',
        'uuid',
        /^@milkdown\//,
        new RegExp('.*storybook.*'),
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@digdir/designsystemet-react': '@digdir/designsystemet-react',
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          exclude: ['**/storybook/**'],
          sourceMap: true,
          declaration: true,
          outDir: 'dist',
        }),
      ],
    },
  },
});
