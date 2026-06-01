import{M as D}from"./Suggestion-Dz2IZmYd.js";import{S as E}from"./iframe-DBsTpQ4-.js";import"./tooltip-CeI2-ayI.js";import"./index-CtSRtnP9.js";import"./index-CBHgjAak.js";import"./Details-BEz2bL06.js";import"./KyvDivider-CHdDozIA.js";import"./typography-zHkd-pq3.js";import"./KyvSpinner-BW7zFJg2.js";import"./skillingsbuoye-BpTUilrB.js";import"./Logo-DG1BRYWm.js";import"./preload-helper-Dp1pzeXC.js";const P={title:"Components/MarkdownToReact",component:D,decorators:[E],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},e={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},r={args:{markdown:`# Overskrift nivå 1
## Overskrift nivå 2`}},n={args:{markdown:"**Fet tekst** og *kursiv tekst* kan kombineres.\n\nDu kan også bruke `inline kode`."}},o={args:{markdown:`## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`}},s={args:{markdown:"Her er et eksempel på en kodeblokk:\n\n```typescript\nconst hilsen = (navn: string): string => {\n  return `Hei, ${navn}!`;\n};\n\nconsole.log(hilsen('verden'));\n```"}},t={args:{markdown:"Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon."}},a={args:{markdown:`# Velkommen til MarkdownToReact

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
\`\`\``}},m={args:{markdown:`
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
`,resolveImageRef:x=>({"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69":{src:"/assets/img/atlas/atlas%201.jpeg"}})[x]}};var d,i,k;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    markdown: '**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter.'
  }
}`,...(k=(i=e.parameters)==null?void 0:i.docs)==null?void 0:k.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    markdown: \`# Overskrift nivå 1
## Overskrift nivå 2\`
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,w,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(u=(w=n.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var R,j,T;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    markdown: \`Her er et eksempel på en kodeblokk:

\\\`\\\`\\\`typescript
const hilsen = (navn: string): string => {
  return \\\`Hei, \\\${navn}!\\\`;
};

console.log(hilsen('verden'));
\\\`\\\`\\\`\`
  }
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var M,S,y;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    markdown: \`Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon.\`
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,F,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(F=a.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var A,H,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    markdown: \`
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
\`,
    resolveImageRef: (ref: string) => {
      const imageRefMap: Record<string, ResolvedImageRef> = {
        'image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69': {
          src: '/assets/img/atlas/atlas%201.jpeg'
        }
      };
      return imageRefMap[ref];
    }
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const Q=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined","ResolveImageRefExample"];export{s as CodeBlock,a as Combined,e as Default,r as Headings,t as Links,o as Lists,m as ResolveImageRefExample,n as TextFormatting,Q as __namedExportsOrder,P as default};
