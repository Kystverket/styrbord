// vite.config.mts
import { defineConfig, preprocessCSS, transformWithEsbuild, type Plugin, type ResolvedConfig } from 'vite';

import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import react from '@vitejs/plugin-react';
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client';

/**
 * `style.css` skal bare inneholde komponentstilene. Designsystemet-temaet treffer `:root` og
 * `[data-size]`, så følger det med der, overstyrer et cookie-banner vertsappens tema. Temaet
 * bygges i stedet til en egen `theme.css` for apper uten Styrbord, og bygget feiler om det likevel
 * havner i `style.css` — for eksempel etter en endring i tokenpakken eller byggoppsettet.
 */
function themeCss(): Plugin {
  let config: ResolvedConfig;
  return {
    name: 'styrbord-consent-theme-css',
    apply: 'build',
    configResolved(resolved) {
      config = resolved;
    },
    async closeBundle() {
      // Storybook bygger med samme konfig, men uten lib-modus og uten style.css.
      if (!config.build.lib) return;
      const outDir = path.resolve(config.root, config.build.outDir);
      const css = fs.readFileSync(path.join(outDir, 'style.css'), 'utf-8');
      if (/:root\b/.test(css) || /@layer\s+ds[\s.{;,]/.test(css)) {
        this.error(
          'dist/style.css inneholder Designsystemet-temaet (:root eller @layer ds). ' +
            'Temaet hører hjemme i theme.css — i style.css overstyrer det vertsappens tema.',
        );
      }

      const entry = path.resolve(__dirname, 'src/css/theme.css');
      const { code } = await preprocessCSS(fs.readFileSync(entry, 'utf-8'), entry, config);
      const { code: minified } = await transformWithEsbuild(code, entry, { minify: true });
      fs.writeFileSync(path.join(outDir, 'theme.css'), minified);
    },
  };
}

export default defineConfig({
  plugins: [
    themeCss(),
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
