import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-BfoN-vOS.js";import{S}from"./styrbordDecorator-DxSHsXul.js";import{aj as v}from"./SlotDialog-BXCSDTek.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-B8sgFfKT.js";import"./Details-Dvul74Gc.js";import"./index-mgzIzKok.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-DlMf2niQ.js";import"./index--nQnPdvn.js";import"./index-Cx1b4yTZ.js";import"./heading-kG84jQRj.js";import"./label-PjKHcVab.js";import"./index-59-YvnaZ.js";const J={title:"Form/RichTextArea",component:v,decorators:[S],tags:["autodocs","kyv"]},a={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=o=>{const[h,k]=D.useState(o.value??"");return b.jsx(v,{...o,value:h,onChange:n=>{k(n),o.onChange(n)}})},r={args:a,render:s},e={args:{...a,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...a,error:"Du må fylle ut dette feltet."},render:s};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
