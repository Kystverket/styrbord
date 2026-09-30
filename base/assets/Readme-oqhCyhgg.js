import{j as e}from"./iframe-WmfM_TXr.js";import{u as o,M as i,a as t}from"./blocks-B7WXttPU.js";import{C as m}from"./CHANGELOG-CQKyVfKO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DSQ9LxGG.js";import"./index-DdJPEpml.js";const k=`# Styrbord

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

## Migrere fra 1.x?

Mat KI-agenten med [v2.md](Versjon 2 - Endringer). Den vil da klare å migrere det meste uten problemer. Testet med Claude Code med Opus 5.5.

## Versjonering

- Prosjektet følger semantisk versjonering (\`major.minor.patch\`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.
- Versjon 2.0.0 finnes bare på GitHub Packages. På npmjs var versjonsnummeret allerede brukt, så første 2.x-versjon der er 2.0.1.

## Bruk

Det holder å importere CSS én gang globalt.

\`\`\`js
import '@kystverket/styrbord/style.css';
\`\`\`

Importering av enkeltkomponenter.

\`\`\`js
import { Heading, Ingress, Tabs } from '@kystverket/styrbord';
\`\`\`

### Språk og oversettelser

Applikasjoner som bruker Styrbord må wrappe alt med både \`<SprakProvider>\` (for å velge språk) og \`<StyrbordTranslations>\` (for å hente oversettelsene til Styrbord). Uten dette vil komponenter som for eksempel Footer vise nøkkelstrenger i stedet for oversatt tekst.

\`\`\`tsx
import { SprakProvider } from '@kystverket/sprak-react';
import { STYRBORD_TRANSLATIONS_NAMESPACE, StyrbordTranslations } from '@kystverket/styrbord';

function App() {
  return (
    <SprakProvider locale="nb-NO">
      <StyrbordTranslations>{/* resten av applikasjonen */}</StyrbordTranslations>
    </SprakProvider>
  );
}
\`\`\`

## Design Tokens

Styrbords design tokens hentes fra [@Kystverket/styrbord-tokens](https://github.com/Kystverket/styrbord-tokens).
`;function s(n){const r={p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Readme"}),`
`,e.jsxs(r.p,{children:["Følgende tekst hentes fra README.md i ",e.jsx("a",{href:"https://github.com/Kystverket/styrbord",children:"rotmappen til prosjektet"}),"."]}),`
`,e.jsx(t,{children:k}),`
`,e.jsxs(r.p,{children:["Følgende tekst hentes fra CHANGELOG.md i ",e.jsx("a",{href:"https://github.com/Kystverket/styrbord",children:"rotmappen til prosjektet"}),"."]}),`
`,e.jsx(t,{children:m})]})}function v(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
