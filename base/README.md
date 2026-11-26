# Styrbord

Styrbord er et komponentbibliotek som vi kan ta i bruk i Kystverkets interne og eksterne
applikasjoner. Det er _ikke_ en profilguide, men en teknisk ressurs om kan trekkes inn for å la
applikasjonen ha et Kystverket uttrykk samtidig som det følger moderne prinsipper for design.

Styrbord tar i bruk [designsystemet.no](https://www.designsystemet.no/) sine komponenter og prinsipper.
Komponentene til Designsystemet blir eksportert videre av Styrbord med Kystverkets farger og tekststil.
Dette betyr at [dokumentasjonen til Designsystemet](https://storybook.designsystemet.no/) er vel så viktig
som den du finner [her](https://kystverket.github.io/styrbord/base).

Alle komponentene og typene i Designsystemet er tilgjengelig i Styrbord med følgende merknader:

- Komponenter merket med ⚓ i menyen er utviklet av Kystverket og har ikke nødvendigvis noe til felles med Designsystemet. De kan riktignok bruke Designsystem-komponenter i implementasjonen.
- Komponenter merket med 🌈 i menyen er uendret fra Designsystemet.
- Komponenter merket med 🌈+⚓ i menyen er Designsystem-komponenter som er utvidet med Kystverkets behov. Bruk og egenskap skal i stor grad overlappe.

## Endringer som kan skape visuell endring

### 2026-10-16

Default weight på label endret til medium fra semibold.
data-font-weight endret til data-weight for å matche designsystemet.

## Veiledning for utviklere og KI-verktøy

Pakken har med seg retningslinjer og ferdige mønstre (skjemaer, dashbord, sider) i `dist/docs/`, for den
versjonen du har installert. Legg dette i applikasjonens `AGENTS.md` eller `CLAUDE.md`, så bruker Claude
Code, Copilot og andre verktøy dem:

```md
## Brukergrensesnitt

Vi bruker Styrbord (`@kystverket/styrbord`). Før du lager eller endrer UI, les
`node_modules/@kystverket/styrbord/dist/docs/README.md` og følg retningslinjene og mønstrene der.
```

## Migrere fra 1.x?

Mat KI-agenten med [v2.md](Versjon 2 - Endringer). Den vil da klare å migrere det meste uten problemer. Testet med Claude Code med Opus 5.5.

## Versjonering

- Prosjektet følger semantisk versjonering (`major.minor.patch`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.
- Versjon 2.0.0 finnes bare på GitHub Packages. På npmjs var versjonsnummeret allerede brukt, så første 2.x-versjon der er 2.0.1.

## Bruk

Det holder å importere CSS én gang globalt.

```js
import '@kystverket/styrbord/style.css';
```

Importering av enkeltkomponenter.

```js
import { Heading, Ingress, Tabs } from '@kystverket/styrbord';
```

### Språk og oversettelser

Applikasjoner som bruker Styrbord må wrappe alt med både `<SprakProvider>` (for å velge språk) og `<StyrbordTranslations>` (for å hente oversettelsene til Styrbord). Uten dette vil komponenter som for eksempel Footer vise nøkkelstrenger i stedet for oversatt tekst.

```tsx
import { SprakProvider } from '@kystverket/sprak-react';
import { STYRBORD_TRANSLATIONS_NAMESPACE, StyrbordTranslations } from '@kystverket/styrbord';

function App() {
  return (
    <SprakProvider locale="nb-NO">
      <StyrbordTranslations>{/* resten av applikasjonen */}</StyrbordTranslations>
    </SprakProvider>
  );
}
```

### Favicon

Pakken har ferdige favicon-filer under `@kystverket/styrbord/favicon/`:

| Fil                    | Bruk                                |
| ---------------------- | ----------------------------------- |
| `favicon.svg`          | Moderne nettlesere                  |
| `favicon.ico`          | Reserve (16, 32 og 48 px)           |
| `apple-touch-icon.png` | iOS, 180 px, uten avrundede hjørner |
| `icon-192.png`         | Web app manifest                    |
| `icon-512.png`         | Web app manifest                    |

Kopier filene til appens `public`-mappe, eller importer dem så bundleren gir dem en URL:

```js
import faviconSvg from '@kystverket/styrbord/favicon/favicon.svg?url';
```

```html
<link rel="icon" href="/favicon.ico" sizes="32x32" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

PNG- og ICO-filene genereres fra `assets/favicon/favicon.svg` av `scripts/build-favicons.mjs` når pakken bygges.

## Design Tokens

Styrbords design tokens hentes fra [@Kystverket/styrbord-tokens](https://github.com/Kystverket/styrbord-tokens).
