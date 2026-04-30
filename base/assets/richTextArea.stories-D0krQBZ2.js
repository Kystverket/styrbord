import{S as k,r as x,j as D}from"./iframe-Czv3AHya.js";import{ad as v}from"./SlotDialog-DWY9LpQH.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-32TxQ_PH.js";import"./tooltip-DjKviRXa.js";import"./index-D1vxHnYL.js";import"./index-BU31YQ6P.js";import"./kyvDivider-BCRc_Uf9.js";import"./typography-hnOE2O5i.js";import"./skillingsbuoye-CCNtNPj1.js";import"./Logo-C52OS84m.js";const _={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[k],tags:["autodocs","kyv","beta"]},s={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},o=a=>{const[h,b]=x.useState(a.value??"");return D.jsx(v,{...a,value:h,onChange:n=>{b(n),a.onChange(n)}})},e={args:s,render:o},r={args:{...s,disabled:!0,value:"Skrivebeskyttet innhold"},render:o},t={args:{...s,error:"Du må fylle ut dette feltet."},render:o};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold'
  },
  render: renderInteractive
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'Du må fylle ut dette feltet.'
  },
  render: renderInteractive
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const F=["Default","Disabled","WithError"];export{e as Default,r as Disabled,t as WithError,F as __namedExportsOrder,_ as default};
