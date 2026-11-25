// Bygger dist/docs: veiledningen og mønstrene som følger med npm-pakken, så utviklere og KI-verktøy i
// applikasjonene finner dem i node_modules for akkurat den versjonen de har installert.
//
// - docs/*.md kopieres som de er.
// - v2.md blir migrering-v2.md.
// - Hvert mønster under storybook/stories/patterns/<Gruppe>/<Navn>/ som har en README.md kopieres, uten
//   .stories-filene. `~/main` skrives om til `@kystverket/styrbord`, så koden kan kopieres rett inn i en
//   applikasjon. Importerer et mønster noe annet fra pakkens innside, stopper bygget: et mønster skal
//   bare bruke det applikasjonene har tilgang til.
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
const isStory = (file) => /\.stories\.[jt]sx?$/.test(file);
const isCode = (file) => /\.(tsx?|css)$/.test(file);

const rewriteImports = (source, file) => {
  const internal = [...source.matchAll(/from\s+(['"])(~\/(?!main\1)[^'"]*|\.\.\/[^'"]*)\1/g)].map((m) => m[2]);
  if (internal.length > 0) {
    throw new Error(
      `${path.relative(root, file)} importerer ${internal.join(', ')}. ` +
        `Mønstre kan bare importere fra '~/main' og fra sin egen mappe.`,
    );
  }
  return source.replace(/from\s+(['"])~\/main\1/g, "from '@kystverket/styrbord'");
};

const summary = (readme) => {
  const title = readme.match(/^# (.+)$/m)?.[1];
  const intro = readme
    .replace(/^# .+$/m, '')
    .trim()
    .split(/\n\s*\n/)[0]
    ?.replace(/\s*\n\s*/g, ' ');
  return { title, intro };
};

const index = ['# Mønstre', '', 'Ferdige sammensetninger av Styrbord-komponenter. Kopier koden og tilpass den.', ''];
let count = 0;

for (const group of existsSync(patternsSrc) ? dirs(patternsSrc) : []) {
  const entries = [];
  for (const name of dirs(path.join(patternsSrc, group))) {
    const src = path.join(patternsSrc, group, name);
    if (!existsSync(path.join(src, 'README.md'))) continue;

    const dest = path.join(patternsOut, group, name);
    mkdirSync(dest, { recursive: true });
    const files = readdirSync(src).filter((file) => !isStory(file));
    if (!files.some((file) => /\.tsx?$/.test(file))) {
      throw new Error(`${path.relative(root, src)} har README.md, men ingen kode.`);
    }
    for (const file of files) {
      const from = path.join(src, file);
      const content = readFileSync(from, 'utf8');
      writeFileSync(path.join(dest, file), isCode(file) ? rewriteImports(content, from) : content);
    }

    const { title, intro } = summary(readFileSync(path.join(src, 'README.md'), 'utf8'));
    if (!title) throw new Error(`${path.relative(root, src)}/README.md mangler en # overskrift.`);
    entries.push(`- [${title}](${group}/${name}/README.md): ${intro ?? ''}`);
    count++;
  }
  if (entries.length > 0) index.push(`## ${group}`, '', ...entries, '');
}

writeFileSync(path.join(patternsOut, 'README.md'), index.join('\n'));
console.log(`dist/docs: veiledning og ${count} mønster${count === 1 ? '' : 'e'}`);
