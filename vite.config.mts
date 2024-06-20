// vite.config.ts
import { defineConfig } from "vite";

import typescript from "@rollup/plugin-typescript";
import path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'automatic',
    }),],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "main",
      name: "Styrbord"
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@digdir/designsystemet-react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          '@digdir/designsystemet-react': '@digdir/designsystemet-react'
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: true,
          declaration: true,
          outDir: "dist",
        }),
      ],
    },
  },
});
