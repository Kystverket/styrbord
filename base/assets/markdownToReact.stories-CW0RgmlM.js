import{aA as H}from"./SlotDialog-CRlREUgj.js";import{S as L}from"./styrbordDecorator-CIbTUomQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-bhWpiSzx.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-DWvzlAYm.js";import"./index-CkzFcdhQ.js";import"./lite-DaUVFjkg.js";import"./translations-DPb5q_wG.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-evdyOLrE.js";import"./index-CittD0zn.js";import"./index-CbYkMlbW.js";import"./heading-D7LPSSe7.js";import"./label-COWAke5u.js";import"./index-CMCCKPfU.js";const Q={title:"Components/MarkdownToReact",component:H,decorators:[L],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},e={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},r={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2`}},n={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},o={args:{markdown:`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`}},t={args:{markdown:"Her er et eksempel på en kodeblokk:\n\n```typescript\nconst hilsen = (navn: string): string => {\n  return `Hei, ${navn}!`;\n};\n\nconsole.log(hilsen('verden'));\n```"}},s={args:{markdown:"Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon."}},a={args:{markdown:`# Velkommen til MarkdownToReact

Denne komponenten lar deg **rendere markdown** som React-komponenter.

## Funksjoner

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
}`,...(k=(d=e.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var i,p,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    markdown: \`# Overskrift nivå 1
## Overskrift nivå 2\`
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,l,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(w=(l=n.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var u,v,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,R,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var M,h,j;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    markdown: \`# Velkommen til MarkdownToReact

Denne komponenten lar deg **rendere markdown** som React-komponenter.

## Funksjoner

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
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const W=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined"];export{t as CodeBlock,a as Combined,e as Default,r as Headings,s as Links,o as Lists,n as TextFormatting,W as __namedExportsOrder,Q as default};
