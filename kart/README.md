# Styrbord Kart

Styrbord Kart er et kart- og GeoJSON-komponentbibliotek for Kystverkets interne og eksterne
applikasjoner. Biblioteket er et tillegg til Styrbord, med fokus på visualisering, redigering og
annotering av geografiske data.

Styrbord Kart bygger på [MapLibre GL](https://maplibre.org/) for kartvisning og
[terra-draw](https://github.com/JamesLMilner/terra-draw) for tegne- og redigeringsverktøy.
Komponentene er laget for å passe sammen med `@kystverket/styrbord`.

Biblioteket eksporterer blant annet:

- `CoordinateDirectionField`
- `CoordinateField`
- `GeoJsonViewer`
- `GeoJsonEditor`
- `GeoJsonAnnotater`
- `LayerToggle`

I tillegg eksporteres hooks, context-providers og hjelpefunksjoner for lagoppsett og kartkonfigurasjon.

## Versjonering

- Prosjektet følger semantisk versjonering (`major.minor.patch`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.

## Bruk

Det holder å importere CSS globalt en gang.

```js
import "@kystverket/styrbord/style.css";
import "@kystverket/styrbord-kart/style.css";
```

Importering av enkeltkomponenter.

```js
import {
  GeoJsonViewer,
  GeoJsonEditor,
  CoordinateField,
} from "@kystverket/styrbord-kart";
```

Et enkelt eksempel med visning av GeoJSON.

```tsx
import type { FeatureCollection } from "geojson";
import { GeoJsonViewer } from "@kystverket/styrbord-kart";

const data: FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

export function Example() {
  return <GeoJsonViewer data={data} height="500px" />;
}
```

## Avhengigheter

Styrbord Kart har følgende peer dependencies som må være tilgjengelige i applikasjonen:

- `maplibre-gl`
- `terra-draw`
- `terra-draw-maplibre-gl-adapter`
- `geojson`

### maplibre-gl v6: oppsett av worker

Fra og med v6 må applikasjonen selv fortelle maplibre-gl hvor worker-filen ligger. maplibre-gl
leter etter `maplibre-gl-worker.mjs` ved siden av sin egen fil, men når en bundler har pakket
maplibre-gl inn i en egen chunk, ligger det ingen worker der. Kartet får da 404 på
`maplibre-gl-worker.mjs` og tegner verken data eller bakgrunnskart. Styrbord Kart kan ikke løse
dette for deg, fordi det er applikasjonens bundler som bestemmer hvor filene havner.

Løsningen er å kalle `setWorkerUrl()` én gang, før det første kartet opprettes. Workeren
importerer `maplibre-gl-shared.mjs` med relativ sti, så begge filene må ende opp i samme mappe,
eller være bundlet sammen. Hvordan du får til det, avhenger av bundleren. Se også
[MapLibre sin installasjonsguide](https://maplibre.org/maplibre-gl-js/docs/).

Dette gjelder bare v6. I v4 og v5 er workeren bygget inn i maplibre-gl.

#### Vite

Med `?worker&url` bundler Vite workeren og filen den importerer til én fil, både i dev og i
produksjonsbygg. Bruk ikke `?url` alene, for da mangler `maplibre-gl-shared.mjs` i bygget.

```ts
// main.tsx (eller et annet sted som kjører før kartet vises)
import { setWorkerUrl } from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";

setWorkerUrl(maplibreWorkerUrl);
```

Med dette oppsettet trengs ikke `optimizeDeps.exclude: ["maplibre-gl"]`, som tidligere versjoner av
denne README-en anbefalte. Det løste bare problemet i `vite dev`, ikke i produksjonsbygget.

#### Next.js med Turbopack

Turbopack legger ut worker-filen, men ikke `maplibre-gl-shared.mjs` som den importerer. Kopier
derfor begge filene til `public/` før dev og build, for eksempel med et lite skript:

```js
// scripts/copy-maplibre-worker.mjs
import { cpSync, mkdirSync } from "node:fs";

const dir = "public/maplibre";
mkdirSync(dir, { recursive: true });
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  cpSync(`node_modules/maplibre-gl/dist/${file}`, `${dir}/${file}`);
}
```

```json
// package.json
"scripts": {
  "predev": "node scripts/copy-maplibre-worker.mjs",
  "prebuild": "node scripts/copy-maplibre-worker.mjs"
}
```

Legg `public/maplibre/` i `.gitignore`, og pek på filene fra en klientkomponent:

```ts
"use client";
import { setWorkerUrl } from "maplibre-gl";

setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
```

Hvis applikasjonen har middleware eller en proxy som beskytter ruter, må `/maplibre/` slippes
gjennom uten innlogging.

#### webpack 5

```ts
import { setWorkerUrl } from "maplibre-gl";

setWorkerUrl(
  new URL(
    "maplibre-gl/dist/maplibre-gl-worker.mjs",
    import.meta.url,
  ).toString(),
);
```

#### Content Security Policy

Hvis applikasjonen har en CSP, må den tillate `worker-src 'self'` og `img-src data: blob: 'self'`.
