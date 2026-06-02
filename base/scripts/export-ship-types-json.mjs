import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const src = readFileSync(resolve(__dirname, '../src/data/ais/shipTypes.ts'), 'utf-8');

const arrayMatch = src.match(/export const AIS_SHIP_TYPES = (\[[\s\S]*?\]) as const/);
if (!arrayMatch) {
  console.error('Could not extract AIS_SHIP_TYPES from shipTypes.ts');
  process.exit(1);
}

// eslint-disable-next-line no-eval
const data = eval(`(${arrayMatch[1]})`);

const outDir = resolve(__dirname, '../../github-pages-root/data/ais');
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'ship-types.json'), JSON.stringify(data, null, 2) + '\n');

console.log(`Wrote ${data.length} ship types to github-pages-root/data/ais/ship-types.json`);
