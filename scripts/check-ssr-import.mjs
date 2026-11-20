#!/usr/bin/env node
/**
 * Sjekker at de bygde pakkene kan importeres i Node uten DOM.
 *
 * Bakgrunn: hver pakke bygges til én fil, så hele `dist/style.js` kjøres så snart en applikasjon
 * importerer noe som helst fra den — også under server-rendering (Next kjører `'use client'`-
 * komponenter på serveren) og i testkjørere uten jsdom. Kode på toppnivå i en modul som rører
 * `window`, `document`, `HTMLInputElement` o.l. krasjer da hele importen, uansett om komponenten
 * brukes. Slik gikk det med `Search` i styrbord 2.15.0.
 *
 * CSS-importer fra avhengigheter hoppes over, siden ren Node ikke kan laste dem
 * (Next og Vite håndterer dem selv).
 *
 * Kjøres etter build med `npm run ssr:check` fra rot, eventuelt med workspaces som argumenter:
 * `node scripts/check-ssr-import.mjs base consent`.
 */
import { existsSync } from 'node:fs';
import { register } from 'node:module';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');

const ignoreCss = `
export async function load(url, context, nextLoad) {
  if (url.endsWith('.css')) return { format: 'module', source: 'export default {};', shortCircuit: true };
  return nextLoad(url, context);
}`;
register(`data:text/javascript,${encodeURIComponent(ignoreCss)}`);

const workspaces = process.argv.length > 2 ? process.argv.slice(2) : ['base', 'kart', 'consent'];

let failed = false;
for (const workspace of workspaces) {
  const entry = join(root, workspace, 'dist', 'style.js');
  if (!existsSync(entry)) {
    console.error(`✗ ${workspace}: fant ikke ${workspace}/dist/style.js — bygg pakken først`);
    failed = true;
    continue;
  }
  try {
    const exports = await import(pathToFileURL(entry).href);
    console.log(`✓ ${workspace}: ${Object.keys(exports).length} eksporter importert uten DOM`);
  } catch (error) {
    console.error(`✗ ${workspace}: import uten DOM feilet\n  ${error instanceof Error ? error.message : error}`);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
