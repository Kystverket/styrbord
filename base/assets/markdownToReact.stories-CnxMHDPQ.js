import{aw as j}from"./SlotDialog-DFPCz_j6.js";import{S as H}from"./styrbordDecorator-Bh4wQYRP.js";import"./jsx-runtime-D_zvdyIk.js";import"./Details-CXNblecA.js";import"./index-D-vaaPfz.js";import"./lite-DaUVFjkg.js";import"./iframe-CA8jcxhK.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-DiTK49gl.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-CIWvlS7Z.js";import"./index-DnJql7B5.js";import"./index-DnuXTUaW.js";import"./heading-T3X-FuxJ.js";import"./label-BsxS4Z4F.js";import"./index-BfGKFJwr.js";const Q={title:"Components/MarkdownToReact",component:j,decorators:[H],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},e={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},r={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2 
### Overskrift nivå 3`}},n={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},o={args:{markdown:`## Uordnet liste
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
## Overskrift nivå 2 
### Overskrift nivå 3\`
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,l,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(w=(l=n.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var u,v,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(O=a.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};const W=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined"];export{t as CodeBlock,a as Combined,e as Default,r as Headings,s as Links,o as Lists,n as TextFormatting,W as __namedExportsOrder,Q as default};
