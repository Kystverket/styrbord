import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-C_0V18ee.js";import{S as D}from"./styrbordDecorator-DycH2nZP.js";import{ad as v}from"./SlotDialog-Ds7-ek3v.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-B2h4bsCg.js";import"./Details-C8iTZlYa.js";import"./tooltip-DMuGhVQ9.js";import"./index-DbereDgs.js";import"./index-DDsTTpaJ.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";const q={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[D],tags:["autodocs","kyv","beta"]},o={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=a=>{const[h,b]=x.useState(a.value??"");return k.jsx(v,{...a,value:h,onChange:n=>{b(n),a.onChange(n)}})},e={args:o,render:s},r={args:{...o,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...o,error:"Du må fylle ut dette feltet."},render:s};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Default","Disabled","WithError"];export{e as Default,r as Disabled,t as WithError,z as __namedExportsOrder,q as default};
