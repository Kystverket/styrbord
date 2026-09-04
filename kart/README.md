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

### maplibre-gl v6 og Vite

maplibre-gl v6 finner worker-filen sin i runtime med
`new URL("./maplibre-gl-worker.mjs", import.meta.url)`. Vite sin
dependency-optimizer forhåndsbygger kun hovedmodulen, slik at den URL-en
peker på en fil som aldri ble lagt i `deps`-katalogen -- kartet feiler med
`The file does not exist at .../deps/maplibre-gl-worker.mjs`. Løsningen er å
la Vite servere maplibre-gl rett fra `node_modules`:

```js
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    exclude: ["maplibre-gl"],
  },
});
```

## Endringslogg

### 2026-03-06 -- v0.0.5

- README omskrevet for `@kystverket/styrbord-kart` med kartspesifikk dokumentasjon.
