# Styrbord Havnesymboler

Styrbord Havnesymboler er en illustrasjonspakke som distribuerer havnesymboler som råfiler i både SVG- og PNG-format.

Pakken inneholder ingen React-komponenter. I stedet publiseres filene uendret, sammen med et manifest og noen hjelpeeksporter som gjør dem enkle å bruke i applikasjoner.

## Installasjon

```bash
npm install @kystverket/styrbord-havnesymboler
```

## Bruk

### Importer en konkret fil

Bruk direkte filimport når du kjenner filnavnet og vil la bundleren håndtere asset-urlen:

```ts
import symbolSvg from '@kystverket/styrbord-havnesymboler/svg/<symbolnavn>.svg';
import symbolPng from '@kystverket/styrbord-havnesymboler/png/<symbolnavn>.png';
```

Dette fungerer godt i for eksempel Vite, webpack og Next.js:

```tsx
export function Example() {
  return (
    <>
      <img src={symbolSvg} alt="Havnesymbol" />
      <img src={symbolPng} alt="Havnesymbol" />
    </>
  );
}
```

### Bruk manifestet

Pakken eksporterer også et manifest dersom du vil slå opp symboler dynamisk:

```ts
import {
  assetManifest,
  getIllustrationAssetPath,
  pngIllustrations,
  svgIllustrations,
} from '@kystverket/styrbord-havnesymboler';
```

- `svgIllustrations` og `pngIllustrations` er oppslagstabeller fra symbolnavn til asset-url
- `assetManifest` inneholder alle symboler gruppert per format
- `getIllustrationAssetPath(format, navn)` returnerer asset-url eller `null`

Navnene i manifestet er relative filbaner uten endelse. Hvis pakken senere får undermapper, vil nøklene bruke `/` som skilletegn.

### Importer råmanifest som JSON

Hvis du bare trenger filoversikten, kan du importere JSON-manifestene direkte:

```ts
import manifest from '@kystverket/styrbord-havnesymboler/manifest.json';
import svgManifest from '@kystverket/styrbord-havnesymboler/svg-manifest.json';
import pngManifest from '@kystverket/styrbord-havnesymboler/png-manifest.json';
```

## Innhold og struktur

Under bygg kopieres filer fra:

- `src/svg/**/*`
- `src/png/**/*`

til tilsvarende struktur under `dist/`.

I tillegg genereres:

- `dist/index.js`
- `dist/index.d.ts`
- `dist/manifest.json`
- `dist/svg-manifest.json`
- `dist/png-manifest.json`

## Vedlikehold

Legg kildefilene i `src/svg` og `src/png`, og kjør deretter:

```bash
npm run build --workspace havnesymboler
```

Bygget kopierer filene til `dist/` og oppdaterer manifestene automatisk.
