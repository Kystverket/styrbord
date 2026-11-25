// Bygger dist/docs: veiledningen og mønstrene som følger med npm-pakken, så utviklere og KI-verktøy i
// applikasjonene finner dem i node_modules for akkurat den versjonen de har installert.
//
// - docs/*.md kopieres som de er.
// - v2.md blir migrering-v2.md.
// - Fra hvert mønster under storybook/stories/patterns/<Gruppe>/<Navn>/ kopieres bare README.md:
//   veiledning med korte kodeeksempler. Mønsterets .tsx er en demo i Storybook og følger ikke med,
//   fordi hver applikasjon løser validering, tilstand og datahenting på sin måte.
//   Kodeeksemplene skal importere fra '@kystverket/styrbord'; et eksempel som importerer fra '~/'
//   stopper bygget, siden applikasjonene ikke kan bruke den stien.
// - patterns/README.md genereres fra overskriften og første avsnitt i hvert mønsters README.md.

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist/docs');
const patternsSrc = path.join(root, 'storybook/stories/patterns');
const patternsOut = path.join(out, 'patterns');

rmSync(out, { recursive: true, force: true });
mkdirSync(patternsOut, { recursive: true });

cpSync(path.join(root, 'docs'), out, { recursive: true });
cpSync(path.join(root, 'v2.md'), path.join(out, 'migrering-v2.md'));

const dirs = (dir) => readdirSync(dir).filter((name) => statSync(path.join(dir, name)).isDirectory());

const summary = (readme) => {
  const title = readme.match(/^# (.+)$/m)?.[1];
  const intro = readme
    .replace(/^# .+$/m, '')
    .trim()
    .split(/\n\s*\n/)[0]
    ?.replace(/\s*\n\s*/g, ' ');
  return { title, intro };
};

const index = [
  '# Mønstre',
  '',
  'Retningslinjer for hvordan Styrbord-komponentene settes sammen, med korte kodeeksempler.',
  'Hvert mønster finnes også som levende eksempel i Storybook.',
  '',
];
let count = 0;

for (const group of existsSync(patternsSrc) ? dirs(patternsSrc) : []) {
  const entries = [];
  for (const name of dirs(path.join(patternsSrc, group))) {
    const readmePath = path.join(patternsSrc, group, name, 'README.md');
    if (!existsSync(readmePath)) continue;

    const readme = readFileSync(readmePath, 'utf8');
    const relative = path.relative(root, readmePath);
    const internal = readme.match(/from\s+['"]~\/[^'"]*['"]/);
    if (internal) {
      throw new Error(`${relative} har ${internal[0]}. Kodeeksempler skal importere fra '@kystverket/styrbord'.`);
    }
    const { title, intro } = summary(readme);
    if (!title) throw new Error(`${relative} mangler en # overskrift.`);

    mkdirSync(path.join(patternsOut, group, name), { recursive: true });
    writeFileSync(path.join(patternsOut, group, name, 'README.md'), readme);
    entries.push(`- [${title}](${group}/${name}/README.md): ${intro ?? ''}`);
    count++;
  }
  if (entries.length > 0) index.push(`## ${group}`, '', ...entries, '');
}

writeFileSync(path.join(patternsOut, 'README.md'), index.join('\n'));
console.log(`dist/docs: veiledning og ${count} mønster${count === 1 ? '' : 'e'}`);
