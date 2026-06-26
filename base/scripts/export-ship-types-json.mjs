import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AIS_SHIP_TYPES } from '../src/data/ais/shipTypes.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../../github-pages-root/data/ais');

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'ship-types.json'), JSON.stringify(AIS_SHIP_TYPES, null, 2) + '\n');

console.log(`Wrote ${AIS_SHIP_TYPES.length} ship types to github-pages-root/data/ais/ship-types.json`);
