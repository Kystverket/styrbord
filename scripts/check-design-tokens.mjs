#!/usr/bin/env node
/**
 * Sjekker at alle `var(--ds-*)`-referanser i kildekoden faktisk finnes i de genererte
 * token-filene fra Designsystemet og @kystverket/styrbord-tokens.
 *
 * Bakgrunn: en referanse til et token som ikke finnes er ugyldig CSS, og deklarasjonen
 * droppes stille. Er det oppgitt en fallback vinner fallbacken alltid, og komponenten
 * slutter å følge temaet — inkludert dark mode — uten at noe feiler i build.
 *
 * Kjøres med `npm run tokens:check` fra rot.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');

/** Filer som definerer de gyldige tokenene. */
const TOKEN_SOURCES = [
  'node_modules/@digdir/designsystemet-css/dist/src/index.css',
  'node_modules/@kystverket/styrbord-tokens/dist/kystverket.css',
];

/** Kildemapper som skannes for referanser. */
const SOURCE_DIRS = ['base/src', 'kart/src'];

const SOURCE_EXTENSIONS = ['.css', '.scss', '.ts', '.tsx'];

/** Fanger `--ds-foo-bar` rett etter `var(`. `--dsc-*` matcher ikke, og skal ikke det. */
const VAR_REFERENCE = /var\(\s*(--ds-[a-z0-9-]+)/g;

function collectDefinedTokens() {
  const defined = new Set();

  for (const source of TOKEN_SOURCES) {
    let css;
    try {
      css = readFileSync(join(root, source), 'utf8');
    } catch {
      console.error(`Fant ikke ${source}. Kjør \`npm ci\` først.`);
      process.exit(2);
    }
    for (const match of css.matchAll(/(--ds-[a-z0-9-]+)\s*:/g)) {
      defined.add(match[1]);
    }
  }

  return defined;
}

function collectSourceFiles(dir) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      files.push(...collectSourceFiles(path));
    } else if (SOURCE_EXTENSIONS.some((extension) => entry.endsWith(extension))) {
      files.push(path);
    }
  }

  return files;
}

const definedTokens = collectDefinedTokens();
const findings = [];

for (const dir of SOURCE_DIRS) {
  for (const file of collectSourceFiles(join(root, dir))) {
    const lines = readFileSync(file, 'utf8').split('\n');

    lines.forEach((line, index) => {
      for (const match of line.matchAll(VAR_REFERENCE)) {
        const token = match[1];

        // `var(--ds-color-${family}-text-default)` — navnet settes sammen i runtime
        // og kan ikke slås opp her.
        if (line[match.index + match[0].length] === '$') continue;

        if (!definedTokens.has(token)) {
          findings.push({ file: relative(root, file), line: index + 1, token });
        }
      }
    });
  }
}

if (findings.length > 0) {
  console.error(`Fant ${findings.length} referanse(r) til design-token som ikke finnes:\n`);
  for (const { file, line, token } of findings) {
    console.error(`  ${file}:${line}  ${token}`);
  }
  console.error(`\nSjekk navnet mot ${TOKEN_SOURCES[1]}.`);
  process.exit(1);
}

console.log(`OK — alle var(--ds-*)-referanser finnes blant ${definedTokens.size} definerte tokens.`);
