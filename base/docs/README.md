# Styrbord: veiledning for applikasjoner

Denne mappen følger med `@kystverket/styrbord` og gjelder for versjonen som er installert. Den er skrevet
for utviklere og for KI-verktøy (Claude Code, Copilot, Cursor …) som bygger brukergrensesnitt med Styrbord.

**Til KI-agenter:** les denne filen før du lager eller endrer UI med Styrbord. Velg komponenter og mønstre
herfra framfor å finne opp egne. Typene i `dist/src/main.d.ts` og JSDoc-en der er fasit for props.

## Ta veiledningen i bruk i en applikasjon

Legg dette i applikasjonens `AGENTS.md` (eller `CLAUDE.md`, `.github/copilot-instructions.md`):

```md
## Brukergrensesnitt

Vi bruker Styrbord (`@kystverket/styrbord`). Før du lager eller endrer UI, les
`node_modules/@kystverket/styrbord/dist/docs/README.md` og følg retningslinjene og mønstrene der.
```

## Oppsett

CSS importeres én gang, globalt:

```tsx
import '@kystverket/styrbord/style.css';
```

Hele applikasjonen må ligge inni både `SprakProvider` og `StyrbordTranslations`. Uten dem viser komponenter
som `Header`, `Footer` og skjemafeltene (teksten «valgfritt») oversettelsesnøkler i stedet for tekst.

```tsx
import { SprakProvider } from '@kystverket/sprak-react';
import { StyrbordTranslations } from '@kystverket/styrbord';

export const App = () => (
  <SprakProvider locale="nb-NO">
    <StyrbordTranslations>{/* applikasjonen */}</StyrbordTranslations>
  </SprakProvider>
);
```

## De viktigste reglene

1. **Importer fra `@kystverket/styrbord`**, ikke fra `@digdir/designsystemet-react`. Styrbord eksporterer
   alt fra Designsystemet, og der Styrbord har en egen versjon kan API-et være et annet.
2. **Bruk `Surface` til layout.** `Box` er utgått.
3. **Farger settes med `data-color` og `data-color-variant`**, ikke med hex-verdier eller egne CSS-farger.
   Trenger du en farge i CSS, bruk `var(--ds-color-…)`.
4. **Avstand settes med steg på størrelsesskalaen** (`gap={4}` = `var(--ds-size-4)`), ikke i piksler.
5. **Ikke bruk komponenter med `Deprecated` foran navnet** i ny kode.
6. **Følg et mønster** når det finnes et for det du lager.

## Innhold

| Fil                                      | Innhold                                                             |
| ---------------------------------------- | ------------------------------------------------------------------- |
| [komponenter.md](komponenter.md)         | Hvilken komponent du skal velge, layout, farger og typografi        |
| [skjema.md](skjema.md)                   | Felt, validering og feilmeldinger                                   |
| [patterns/README.md](patterns/README.md) | Ferdige mønstre (skjemaer, dashbord, sider) med kode du kan kopiere |
| [migrering-v2.md](migrering-v2.md)       | Endringer fra 1.x til 2.x                                           |

Storybook med alle komponentene: <https://kystverket.github.io/styrbord/base>. For komponenter Styrbord
eksporterer uendret, gjelder også [Designsystemets dokumentasjon](https://designsystemet.no).
