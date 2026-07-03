# Styrbord

Styrbord er et monorepository med komponentbiblioteker for Kystverkets interne og eksterne applikasjoner.
Det inneholder to npm-pakker:

| Pakke | Versjon | Beskrivelse |
|---|---|---|
| [`@kystverket/styrbord`](./base) | [![npm](https://img.shields.io/npm/v/@kystverket/styrbord)](https://www.npmjs.com/package/@kystverket/styrbord) | React-komponentbibliotek med Kystverkets profil |
| [`@kystverket/styrbord-kart`](./kart) | [![npm](https://img.shields.io/npm/v/@kystverket/styrbord-kart)](https://www.npmjs.com/package/@kystverket/styrbord-kart) | Kart- og GeoJSON-komponenter bygget på MapLibre GL |

## Dokumentasjon

- **Storybook (base):** https://kystverket.github.io/styrbord/base
- **Designsystemet:** https://storybook.designsystemet.no/

## Pakker

### `@kystverket/styrbord`

Inneholder React-komponenter som implementerer Kystverkets designprofil.
Biblioteket bygger på [Designsystemet](https://www.designsystemet.no/) og re-eksporterer alle Designsystemet-komponenter med Kystverkets farger og typografi.

Se [base/README.md](./base/README.md) for installasjonsveiledning og brukseksempler.

### `@kystverket/styrbord-kart`

Inneholder kart- og GeoJSON-komponenter for visualisering, redigering og annotering av geografiske data.
Biblioteket er et tillegg til `@kystverket/styrbord` og bygger på [MapLibre GL](https://maplibre.org/) og [terra-draw](https://github.com/JamesLMilner/terra-draw).

Se [kart/README.md](./kart/README.md) for installasjonsveiledning og brukseksempler.

## Kom i gang

### Installasjon

```bash
# Bare komponentbiblioteket
npm install @kystverket/styrbord

# Komponentbiblioteket med kart
npm install @kystverket/styrbord @kystverket/styrbord-kart
```

### Grunnleggende oppsett

Importer CSS globalt én gang:

```js
import '@kystverket/styrbord/style.css';
// For kart:
import '@kystverket/styrbord-kart/style.css';
```

Wrap applikasjonen med `SprakProvider` og `StyrbordTranslations` for korrekt språkstøtte:

```tsx
import { SprakProvider } from '@kystverket/sprak-react';
import { StyrbordTranslations } from '@kystverket/styrbord';

function App() {
  return (
    <SprakProvider locale="nb-NO">
      <StyrbordTranslations>
        {/* resten av applikasjonen */}
      </StyrbordTranslations>
    </SprakProvider>
  );
}
```

Importer komponenter etter behov:

```tsx
import { Button, Heading, Tabs } from '@kystverket/styrbord';
import { GeoJsonViewer, CoordinateField } from '@kystverket/styrbord-kart';
```

## Utvikling

Monorepoet bruker npm workspaces. Alle kommandoer kjøres fra rotnivå.

```bash
# Installer avhengigheter
npm install

# Bygg alle pakker
npm run build

# Start dev-modus for alle pakker parallelt
npm run dev

# Start Storybook for base
npm run storybook:base

# Linting og formatering
npm run lint:check
npm run lint:fix
npm run pretty:check
npm run pretty:fix
```

## Commit-konvensjoner

Prosjektet bruker [conventional commits](https://www.conventionalcommits.org/). Scope er påkrevd og må være `base` eller `kart`.

```text
feat(base): legg til ny komponent
fix(kart): rett opp markørforskyvning
chore(base): oppdater avhengigheter
```

## Versjonering og publisering

Versjonering og publisering håndteres automatisk av [release-please](https://github.com/googleapis/release-please).
De to pakkene versjoneres uavhengig av hverandre. Endre aldri versjonsnumre i `package.json` manuelt.

Pakkene publiseres til [npmjs.org](https://www.npmjs.com/) og [GitHub Packages](https://github.com/orgs/Kystverket/packages) når en release-PR merges til `main`.
