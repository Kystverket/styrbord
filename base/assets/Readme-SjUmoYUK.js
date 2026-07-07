import{j as e}from"./iframe-CILDSxky.js";import{u as o,M as i,a as r}from"./blocks-CIl6mgLu.js";import{C as k}from"./CHANGELOG-BWpyn41g.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FIPjUDlT.js";import"./index-Dk2GYvad.js";const m=`# Styrbord

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

## Versjonering

- Major følger major-versjon til Designsystemet.
- Minor inkrementeres ved en eller flere knekkende endringer, eller ny versjon av Designsystemet.
- Patch inkrementeres ved alle endringer, store eller små, som ikke knekker noe eksisterende.

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
`;function s(n){const t={p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Readme"}),`
`,e.jsxs(t.p,{children:["Følgende tekst hentes fra README.md i ",e.jsx("a",{href:"https://github.com/Kystverket/styrbord",children:"rotmappen til prosjektet"}),"."]}),`
`,e.jsx(r,{children:m}),`
`,e.jsxs(t.p,{children:["Følgende tekst hentes fra CHANGELOG.md i ",e.jsx("a",{href:"https://github.com/Kystverket/styrbord",children:"rotmappen til prosjektet"}),"."]}),`
`,e.jsx(r,{children:k})]})}function v(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{v as default};
