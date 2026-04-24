import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-CEe34j-8.js";import{S as D}from"./styrbordDecorator-DVjhlZte.js";import{ao as v}from"./SlotDialog-IiDUAjIg.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-BlpUfsXb.js";import"./Details-DuwLCoqf.js";import"./index-BE087VYV.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-ipWIRNfe.js";import"./index-C4ge4ZBy.js";import"./index-CSdkRmyd.js";import"./heading-BACAW4Bs.js";import"./label-DFMU21SS.js";import"./index-DNyFNu7W.js";const J={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[D],tags:["autodocs","kyv","beta"]},a={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=o=>{const[h,b]=x.useState(o.value??"");return k.jsx(v,{...o,value:h,onChange:n=>{b(n),o.onChange(n)}})},e={args:a,render:s},r={args:{...a,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...a,error:"Du må fylle ut dette feltet."},render:s};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,f,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const K=["Default","Disabled","WithError"];export{e as Default,r as Disabled,t as WithError,K as __namedExportsOrder,J as default};
