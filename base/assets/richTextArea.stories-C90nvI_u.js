import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-Wqxy49la.js";import{S}from"./styrbordDecorator-15I8QETM.js";import{aj as v}from"./SlotDialog--WpQu7iR.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-3zaBT3ZN.js";import"./Details-CQZu0DPZ.js";import"./index-Low7a8x7.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-D30kX9__.js";import"./index-DY6AJdd6.js";import"./index-BP_fwt0Y.js";import"./heading-2OHLRVWu.js";import"./label-BEW3hIeJ.js";import"./index-DUQK1WM6.js";const J={title:"Form/RichTextArea",component:v,decorators:[S],tags:["autodocs","kyv"]},a={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=o=>{const[h,k]=D.useState(o.value??"");return b.jsx(v,{...o,value:h,onChange:n=>{k(n),o.onChange(n)}})},r={args:a,render:s},e={args:{...a,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...a,error:"Du må fylle ut dette feltet."},render:s};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
