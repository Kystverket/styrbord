import{S as r,j as o}from"./iframe-BpVtr7CM.js";import{aH as t,ah as n}from"./Dialog-BW_2LQd8.js";import{a as s}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-DJ-pYRYM.js";import"./index-D4eKPnKn.js";import"./index-kRWVY6wU.js";import"./shipTypes-hFnSBndP.js";import"./Details-VCOZg20P.js";import"./KyvDivider-DRhHbJ6A.js";import"./KyvSpinner-D5cQy2tq.js";import"./skillingsbuoye-CADBPjxz.js";import"./Logo-C0BiL7KQ.js";import"./color-tokens-BWmLKHwz.js";const j={title:"Components/Data display/MarkdownToReact",component:t,decorators:[e=>o.jsx(n.Provider,{value:{deriveFileInfosFromStorageIds:a},children:o.jsx(e,{})}),r],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},a=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:s}])},300)}),x={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},T={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2`}},y={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},F={args:{markdown:`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`}},h={args:{markdown:"Her er et eksempel på en kodeblokk:\n\n```typescript\nconst hilsen = (navn: string): string => {\n  return `Hei, ${navn}!`;\n};\n\nconsole.log(hilsen('verden'));\n```"}},M={args:{markdown:"Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon."}},C={args:{markdown:`# Velkommen til MarkdownToReact

Denne komponenten lar deg **rendere markdown** som React-komponenter.


# Overskrift 1

## Funksjoner




litt mellom

- Støtter *kursiv* og **fet** tekst
- Lister (ordnet og uordnet)
- [Lenker](https://www.kystverket.no)
- Kodeblokker og \`inline kode\`

## Eksempel på kode

\`\`\`typescript
import MarkdownToReact from './markdownToReact';

const App = () => (
  <MarkdownToReact markdown="**Hei verden!**" />
);
\`\`\``}},D={parameters:{docs:{source:{type:"code"}}},args:{markdown:`
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
`},render:e=>o.jsx(t,{...e})},E=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined","ResolveImageRefExample"];export{h as CodeBlock,C as Combined,x as Default,T as Headings,M as Links,F as Lists,D as ResolveImageRefExample,y as TextFormatting,E as __namedExportsOrder,j as default};
