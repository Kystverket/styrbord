import{S as k,r as x,j as D}from"./iframe-DmO0_IBn.js";import{R as v}from"./SlotDialog-BPJ2cHIP.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-fHbSZ2bp.js";import"./tooltip-BVgKeJkG.js";import"./index-Db_67X2b.js";import"./index-BvJZGYO4.js";import"./KyvDivider-PtHXubDN.js";import"./typography-D6Nc_-Ez.js";import"./KyvSpinner-wNZgeKHI.js";import"./skillingsbuoye-B5ugKafC.js";import"./Logo-CQFEkEbe.js";const F={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[k],tags:["autodocs","kyv","beta"]},o={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=a=>{const[h,b]=x.useState(a.value??"");return D.jsx(v,{...a,value:h,onChange:n=>{b(n),a.onChange(n)}})},e={args:o,render:s},r={args:{...o,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...o,error:"Du må fylle ut dette feltet."},render:s};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const O=["Default","Disabled","WithError"];export{e as Default,r as Disabled,t as WithError,O as __namedExportsOrder,F as default};
