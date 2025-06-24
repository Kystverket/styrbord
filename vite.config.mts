// vite.config.ts
import { defineConfig, type Plugin } from 'vite';

import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import react from '@vitejs/plugin-react';
import preserveDirectives from 'rollup-preserve-directives';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
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
      fileName: 'main',
      name: 'Styrbord',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@digdir/designsystemet-react', new RegExp('.*storybook.*')],
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
        preserveDirectives() as Plugin,
      ],
    },
  },
});
