import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

const toPosix = (value) => value.split(path.sep).join('/');

async function listAssetFilesByFormat(directory, prefix = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const filesByFormat = { svg: [], png: [] };

  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name, 'nb'))) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    const relativePath = path.join(prefix, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const nested = await listAssetFilesByFormat(absolutePath, relativePath);
      filesByFormat.svg.push(...nested.svg);
      filesByFormat.png.push(...nested.png);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (extension === '.svg' || extension === '.png') {
      filesByFormat[extension.slice(1)].push(relativePath);
    }
  }

  return filesByFormat;
}

function createIllustrationName(relativePath) {
  return toPosix(relativePath).replace(/\.[^.]+$/u, '');
}

function createAssetPath(relativePath) {
  return `./assets/${toPosix(relativePath)}`;
}

function createAssetEntries(format, files) {
  return files.map((relativePath) => ({
    name: createIllustrationName(relativePath),
    format,
    path: createAssetPath(relativePath),
  }));
}

function createIllustrationObjectSource(variableName, entries) {
  const lines = entries.map(
    ({ name, path: assetPath }) =>
      `  ${JSON.stringify(name)}: new URL(${JSON.stringify(assetPath)}, import.meta.url).href,`,
  );

  return `export const ${variableName} = Object.freeze({\n${lines.join('\n')}\n});`;
}

function createReadonlyArraySource(variableName, values) {
  return `const ${variableName} = Object.freeze(${JSON.stringify(values, null, 2)});`;
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

const assetFilesByFormat = await listAssetFilesByFormat(srcDir);
const assetsDistDir = path.join(distDir, 'assets');

await cp(srcDir, assetsDistDir, {
  recursive: true,
  filter: (source) => !path.basename(source).startsWith('.'),
});

const svgEntries = createAssetEntries('svg', assetFilesByFormat.svg);
const pngEntries = createAssetEntries('png', assetFilesByFormat.png);
const assetManifest = {
  svg: svgEntries,
  png: pngEntries,
};
const svgNames = svgEntries.map(({ name }) => name);
const pngNames = pngEntries.map(({ name }) => name);

const indexJs = [
  createIllustrationObjectSource('svgIllustrations', svgEntries),
  '',
  createIllustrationObjectSource('pngIllustrations', pngEntries),
  '',
  'export const assetManifest = Object.freeze({',
  `  svg: Object.freeze(${JSON.stringify(svgEntries, null, 2)}),`,
  `  png: Object.freeze(${JSON.stringify(pngEntries, null, 2)}),`,
  '});',
  '',
  createReadonlyArraySource('svgNames', svgNames),
  createReadonlyArraySource('pngNames', pngNames),
  'export const illustrationNames = Object.freeze({',
  '  svg: svgNames,',
  '  png: pngNames,',
  '});',
  '',
  'export function getIllustrationAssetPath(format, name) {',
  "  if (format === 'svg') {",
  '    return svgIllustrations[name] ?? null;',
  '  }',
  '',
  "  if (format === 'png') {",
  '    return pngIllustrations[name] ?? null;',
  '  }',
  '',
  '  return null;',
  '}',
  '',
].join('\n');

const indexTypes = `export type IllustrationFormat = 'svg' | 'png';

export interface IllustrationAsset {
  name: string;
  format: IllustrationFormat;
  path: string;
}

export interface IllustrationManifest {
  svg: readonly IllustrationAsset[];
  png: readonly IllustrationAsset[];
}

export declare const svgIllustrations: Readonly<Record<string, string>>;
export declare const pngIllustrations: Readonly<Record<string, string>>;
export declare const assetManifest: IllustrationManifest;
export declare const illustrationNames: Readonly<{
  svg: readonly string[];
  png: readonly string[];
}>;
export declare function getIllustrationAssetPath(format: IllustrationFormat, name: string): string | null;
`;

await Promise.all([
  writeFile(path.join(distDir, 'index.js'), indexJs),
  writeFile(path.join(distDir, 'index.d.ts'), indexTypes),
  writeFile(path.join(distDir, 'manifest.json'), JSON.stringify(assetManifest, null, 2)),
  writeFile(path.join(distDir, 'svg-manifest.json'), JSON.stringify(svgEntries, null, 2)),
  writeFile(path.join(distDir, 'png-manifest.json'), JSON.stringify(pngEntries, null, 2)),
]);
