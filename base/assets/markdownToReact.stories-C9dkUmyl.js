import{S as L,j as i}from"./iframe-C8M-VeIj.js";import{M as I,F as D,v as U}from"./Dialog-B9KxNoKm.js";import{a as K}from"./atlas 1-DK2KYHpu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BBROsufm.js";import"./index-BUBX68yo.js";import"./index-sHKts_Ar.js";import"./Details-WhE9vrcR.js";import"./KyvDivider-C2UJ23Nn.js";import"./typography-BEkYQZbB.js";import"./KyvSpinner-fUmgDD5m.js";import"./skillingsbuoye-C-SStW0M.js";import"./Logo-CToxfNH3.js";const re={title:"Components/MarkdownToReact",component:I,decorators:[L],tags:["autodocs","kyv","beta"],argTypes:{markdown:{control:"text"}}},P=async()=>new Promise(m=>{setTimeout(()=>{m([{storageId:"image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69",previewUri:K}])},300)}),B=async()=>({storageId:U(),success:!0}),N=async()=>{},e={args:{markdown:"**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter."}},r={args:{markdown:`# Overskrift nivå 1
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
\`\`\``}},d={parameters:{docs:{source:{type:"code"}}},args:{markdown:`
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
`},render:m=>i.jsx(D.Provider,{value:{uploadFile:B,deleteFile:N,deriveFileInfosFromStorageIds:P},children:i.jsx(I,{...m})})};var c,k,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    markdown: '**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter.'
  }
}`,...(l=(k=e.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    markdown: \`# Overskrift nivå 1
## Overskrift nivå 2\`
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var w,v,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    markdown: \`**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \\\`inline kode\\\`.\`
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,j,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(j=o.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,T,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    markdown: \`Her er et eksempel på en kodeblokk:

\\\`\\\`\\\`typescript
const hilsen = (navn: string): string => {
  return \\\`Hei, \\\${navn}!\\\`;
};

console.log(hilsen('verden'));
\\\`\\\`\\\`\`
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,x,M;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    markdown: \`Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon.\`
  }
}`,...(M=(x=t.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var h,O,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,E,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  render: args => <FileUploaderContext.Provider value={{
    uploadFile,
    deleteFile,
    deriveFileInfosFromStorageIds
  }}>
      <MarkdownToReact {...args} />
    </FileUploaderContext.Provider>
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const ne=["Default","Headings","TextFormatting","Lists","CodeBlock","Links","Combined","ResolveImageRefExample"];export{s as CodeBlock,a as Combined,e as Default,r as Headings,t as Links,o as Lists,d as ResolveImageRefExample,n as TextFormatting,ne as __namedExportsOrder,re as default};
