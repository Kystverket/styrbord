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

### Hotfix på 1.x

`main` er gjeldende hovedversjon. Branchen `1.x` er vedlikeholdsbranchen for 1.x-linjen, og release-please kjører på begge.
Releaser fra `main` publiseres med dist-tag `latest`, releaser fra `1.x` med dist-tag `maintenance`, slik at `npm install` fortsatt gir nyeste hovedversjon.

1. Lag en branch fra `1.x`, og gjør rettingen der:

   ```bash
   git fetch origin
   git checkout -b fix/beskrivelse origin/1.x
   ```

2. Commit med vanlig conventional commit, for eksempel `fix(base): rett opp fokusmarkering i Dialog`.
   Bruk `fix` for hotfixer: det gir en patch-versjon (1.20.1 → 1.20.2). `feat` gir en ny minor-versjon, og breaking changes hører ikke hjemme på `1.x`.
3. Åpne PR mot `1.x` (ikke `main`), og merge den.
4. release-please åpner en release-PR mot `1.x`. Når den merges, publiseres pakken med dist-tag `maintenance`.
   Storybook deployes bare fra `main`, så dokumentasjonen på GitHub Pages viser fortsatt gjeldende hovedversjon.
5. Gjelder feilen også gjeldende hovedversjon, cherry-picker du rettingen til en branch fra `main` og åpner en egen PR mot `main`:

   ```bash
   git checkout -b fix/beskrivelse-main origin/main
   git cherry-pick <commit-sha>
   ```

Applikasjoner som fortsatt er på 1.x, får hotfixen med `npm install @kystverket/styrbord@maintenance` eller en versjonsrange som `^1.20.0`.
For `@kystverket/styrbord-kart` er vedlikeholdslinjen 0.x, så der gir `@maintenance` en 0.2.x-versjon.

**Ikke release `@kystverket/styrbord-consent` fra `1.x`.** Consent har ingen egen vedlikeholdslinje og er på samme versjon på begge brancher.
En consent-retting på `1.x` ville fått samme versjonsnummer som neste consent-retting på `main`, og den siste publiseringen ville feilet.
Rettinger i consent gjøres bare mot `main`.
