import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-B-ZvoIK6.js";import{S}from"./styrbordDecorator-MCETfN2Q.js";import{aj as v}from"./SlotDialog-q5Rj0zPb.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-CPVUAnhc.js";import"./Details-mlppe4D9.js";import"./index-BC8FX9x4.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-CUvd5KX1.js";import"./index-BeOyC88q.js";import"./index-D9NpKy59.js";import"./heading-D0JrpNzo.js";import"./label-DE975ZUp.js";import"./index-BPg-DChg.js";const J={title:"Form/RichTextArea",component:v,decorators:[S],tags:["autodocs","kyv"]},a={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=o=>{const[h,k]=D.useState(o.value??"");return b.jsx(v,{...o,value:h,onChange:n=>{k(n),o.onChange(n)}})},r={args:a,render:s},e={args:{...a,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...a,error:"Du må fylle ut dette feltet."},render:s};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const K=["Default","Disabled","WithError"];export{r as Default,e as Disabled,t as WithError,K as __namedExportsOrder,J as default};
