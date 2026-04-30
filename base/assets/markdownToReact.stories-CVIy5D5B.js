import{am as j}from"./SlotDialog-DWY9LpQH.js";import{S as H}from"./iframe-Czv3AHya.js";import"./Details-32TxQ_PH.js";import"./tooltip-DjKviRXa.js";import"./index-D1vxHnYL.js";import"./index-BU31YQ6P.js";import"./kyvDivider-BCRc_Uf9.js";import"./typography-hnOE2O5i.js";import"./skillingsbuoye-CCNtNPj1.js";import"./Logo-C52OS84m.js";import"./preload-helper-Dp1pzeXC.js";const $={title:"Components/MarkdownToReact",component:j,decorators:[H],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},e={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},r={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2`}},n={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},o={args:{markdown:`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`}},t={args:{markdown:"Her er et eksempel på en kodeblokk:\n\n```typescript\nconst hilsen = (navn: string): string => {\n  return `Hei, ${navn}!`;\n};\n\nconsole.log(hilsen('verden'));\n```"}},s={args:{markdown:"Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon."}},a={args:{markdown:`# Velkommen til MarkdownToReact

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
\`\`\``}};var m,d,k;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    markdown: '**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter.'
  }
}`,...(k=(d=e.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    markdown: \`# Overskrift nivå 1
## Overskrift nivå 2\`
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,v,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    markdown: \`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg\`
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,R,y;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    markdown: \`Her er et eksempel på en kodeblokk:

\\\`\\\`\\\`typescript
const hilsen = (navn: string): string => {
  return \\\`Hei, \\\${navn}!\\\`;
};

console.log(hilsen('verden'));
\\\`\\\`\\\`\`
  }
}`,...(y=(R=t.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var S,b,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    markdown: \`Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon.\`
  }
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var M,O,h;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    markdown: \`# Velkommen til MarkdownToReact

Denne komponenten lar deg **rendere markdown** som React-komponenter.


# Overskrift 1

## Funksjoner




litt mellom

- Støtter *kursiv* og **fet** tekst
- Lister (ordnet og uordnet)
- [Lenker](https://www.kystverket.no)
- Kodeblokker og \\\`inline kode\\\`

## Eksempel på kode

\\\`\\\`\\\`typescript
import MarkdownToReact from './markdownToReact';

const App = () => (
  <MarkdownToReact markdown="**Hei verden!**" />
);
\\\`\\\`\\\`\`
  }
}`,...(h=(O=a.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const q=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined"];export{t as CodeBlock,a as Combined,e as Default,r as Headings,s as Links,o as Lists,n as TextFormatting,q as __namedExportsOrder,$ as default};
