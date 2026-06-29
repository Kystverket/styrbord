import{S as C,j as i}from"./iframe-C7v4yl2J.js";import{M as D,F as I}from"./Dialog-DK_STYvC.js";import{a as K}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-TyAXlcCq.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";const Z={title:"Components/MarkdownToReact",component:D,decorators:[e=>i.jsx(I.Provider,{value:{deriveFileInfosFromStorageIds:U},children:i.jsx(e,{})}),C],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},U=async()=>new Promise(e=>{setTimeout(()=>{e([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:K}])},300)}),r={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},n={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2`}},o={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},s={args:{markdown:`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`}},t={args:{markdown:"Her er et eksempel på en kodeblokk:\n\n```typescript\nconst hilsen = (navn: string): string => {\n  return `Hei, ${navn}!`;\n};\n\nconsole.log(hilsen('verden'));\n```"}},a={args:{markdown:"Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon."}},d={args:{markdown:`# Velkommen til MarkdownToReact

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
\`\`\``}},m={parameters:{docs:{source:{type:"code"}}},args:{markdown:`
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
`},render:e=>i.jsx(D,{...e})};var k,c,p;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    markdown: '**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter.'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    markdown: \`# Overskrift nivå 1
## Overskrift nivå 2\`
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,v,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,j,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(j=s.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var T,y,S;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    markdown: \`Her er et eksempel på en kodeblokk:

\\\`\\\`\\\`typescript
const hilsen = (navn: string): string => {
  return \\\`Hei, \\\${navn}!\\\`;
};

console.log(hilsen('verden'));
\\\`\\\`\\\`\`
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var F,M,x;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    markdown: \`Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon.\`
  }
}`,...(x=(M=a.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var h,O,A;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var E,H,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    markdown: '\\n# Noe kul markdown\\n\\n## Med et bilde som ikke resolver\\n![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)\\n\\n## og et bilde som resolver!\\n![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)\\n'
  },
  render: args => <MarkdownToReact {...args} />
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ee=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined","ResolveImageRefExample"];export{t as CodeBlock,d as Combined,r as Default,n as Headings,a as Links,s as Lists,m as ResolveImageRefExample,o as TextFormatting,ee as __namedExportsOrder,Z as default};
