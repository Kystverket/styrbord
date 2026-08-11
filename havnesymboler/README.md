# Styrbord Havnesymboler

Styrbord Havnesymboler er en illustrasjonspakke som distribuerer havnesymboler som råfiler i både SVG- og PNG-format.

Pakken inneholder ingen React-komponenter. I stedet publiseres filene uendret, sammen med et manifest og noen hjelpeeksporter som gjør dem enkle å bruke i applikasjoner.

## Installasjon

```bash
npm install @kystverket/styrbord-havnesymboler
```

## Bruk

### Importer en konkret fil

Bruk direkte filimport når du kjenner filnavnet og vil la bundleren håndtere asset-urlen. Filene ligger gruppert per symboltype, og hver mappe inneholder både `.svg`- og `.png`-varianter:

```ts
import fenderSvg from '@kystverket/styrbord-havnesymboler/assets/fender/blaa---punkt.svg';
import fenderPng from '@kystverket/styrbord-havnesymboler/assets/fender/blaa---punkt.png';
```

Dette fungerer godt i for eksempel Vite, webpack og Next.js:

```tsx
export function Example() {
  return (
    <>
      <img src={fenderSvg} alt="Fender, blå, punktfeste" />
      <img src={fenderPng} alt="Fender, blå, punktfeste" />
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

const fenderSvgUrl = svgIllustrations['fender/blaa---punkt'];
const fenderPng150Url = pngIllustrations['fender/blaa---punkt_150'];

const avfallspunktSvgUrl = getIllustrationAssetPath('svg', 'avfallspunkt/blaa');
```

- `svgIllustrations` og `pngIllustrations` er oppslagstabeller fra symbolnavn til asset-url
- `assetManifest` inneholder alle symboler gruppert per format, f.eks. `assetManifest.svg` og `assetManifest.png`
- `getIllustrationAssetPath(format, navn)` returnerer asset-url eller `null`

Navnene i manifestet er relative filbaner uten filendelse, gruppert per symboltype med `/` som skilletegn, for eksempel `fender/blaa---punkt` og `avfallspunkt/blaa`. PNG-varianter i redusert størrelse har suffikset `_150`, f.eks. `fender/blaa---punkt_150`.

### Importer råmanifest som JSON

Hvis du bare trenger filoversikten, kan du importere JSON-manifestene direkte:

```ts
import manifest from '@kystverket/styrbord-havnesymboler/manifest.json';
import svgManifest from '@kystverket/styrbord-havnesymboler/svg-manifest.json';
import pngManifest from '@kystverket/styrbord-havnesymboler/png-manifest.json';
```

Et enkelt element i `svgManifest` ser slik ut:

```json
{
  "name": "fender/blaa---punkt",
  "format": "svg",
  "path": "./assets/fender/blaa---punkt.svg"
}
```

## Innhold og struktur

Kildefilene ligger under `src/`, gruppert i én mappe per symboltype (`avfallspunkt`, `beredskapspunkt`, `drivstofftilkobling`, `fender`, `fortoeyningsinnretning`, `havnesensor`, `ikke-i-bruk`, `kran`, `stroemtilkobling`, `toalett`, `vanntilkobling`). Hver mappe inneholder både `.svg`- og `.png`-filer for symbolene i den kategorien, for eksempel:

```text
src/
  fender/
    blaa---punkt.svg
    blaa---punkt.png
    blaa---punkt_150.png
    ...
```

Under bygg kopieres hele `src/**/*` uendret til `dist/assets/**/*`.

I tillegg genereres:

- `dist/index.js`
- `dist/index.d.ts`
- `dist/manifest.json`
- `dist/svg-manifest.json`
- `dist/png-manifest.json`

## Vedlikehold

Legg kildefiler i riktig kategorimappe under `src/` (opprett en ny mappe for en ny symboltype ved behov), og kjør deretter:

```bash
npm run build --workspace havnesymboler
```

Bygget kopierer filene til `dist/assets/` og oppdaterer manifestene automatisk.
