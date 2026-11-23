// Genererer favicon-filene i dist/favicon/ fra assets/favicon/favicon.svg.
// Kjøres etter `vite build`, som tømmer dist/ først.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = resolve(__dirname, '../assets/favicon/favicon.svg');
const outDir = resolve(__dirname, '../dist/favicon');

const svg = readFileSync(source, 'utf8');

// iOS runder hjørnene selv og fyller gjennomsiktige piksler med svart, så Apple touch-ikonet må
// være et helt kvadrat. Feiler høyt hvis SVG-en endres så bakgrunnen ikke lenger finnes.
const roundedBackground = /<rect width="180" height="180" rx="\d+(?:\.\d+)?" fill="white"\/>/;
if (!roundedBackground.test(svg)) {
  throw new Error(`Fant ikke den avrundede bakgrunnen i ${source}; oppdater build-favicons.mjs.`);
}
const squareSvg = svg.replace(roundedBackground, '<rect width="180" height="180" fill="white"/>');

const render = (input, size) =>
  new Resvg(input, { fitTo: { mode: 'width', value: size }, font: { loadSystemFonts: false } }).render().asPng();

// ICO kan inneholde PNG-er direkte (støttet siden Windows Vista): 6 byte header, 16 byte per bilde.
const toIco = (images) => {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0); // reservert
  header.writeUInt16LE(1, 2); // type: ikon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, entry); // bredde (0 = 256)
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1); // høyde
    header.writeUInt8(0, entry + 2); // antall farger i palett
    header.writeUInt8(0, entry + 3); // reservert
    header.writeUInt16LE(1, entry + 4); // fargeplan
    header.writeUInt16LE(32, entry + 6); // bit per piksel
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map(({ png }) => png)]);
};

mkdirSync(outDir, { recursive: true });

copyFileSync(source, resolve(outDir, 'favicon.svg'));
writeFileSync(resolve(outDir, 'favicon.ico'), toIco([16, 32, 48].map((size) => ({ size, png: render(svg, size) }))));
writeFileSync(resolve(outDir, 'apple-touch-icon.png'), render(squareSvg, 180));
writeFileSync(resolve(outDir, 'icon-192.png'), render(svg, 192));
writeFileSync(resolve(outDir, 'icon-512.png'), render(svg, 512));

console.log('Wrote favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png and icon-512.png to dist/favicon/');
