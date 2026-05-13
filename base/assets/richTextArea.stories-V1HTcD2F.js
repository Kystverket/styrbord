import{S as k,r as x,j as D}from"./iframe-BwNXjz1-.js";import{R as v}from"./SlotDialog-C7Xx2xOF.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-B8L762hq.js";import"./tooltip-Db4onsaN.js";import"./index-humZCf57.js";import"./index-C7emVOEy.js";import"./KyvDivider-B7bh-XWF.js";import"./typography-DWqq8BFX.js";import"./KyvSpinner-C6wDoulU.js";import"./skillingsbuoye-uckncf06.js";import"./Logo-SV-Ifc1R.js";const F={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[k],tags:["autodocs","kyv","beta"]},o={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=a=>{const[h,b]=x.useState(a.value??"");return D.jsx(v,{...a,value:h,onChange:n=>{b(n),a.onChange(n)}})},e={args:o,render:s},r={args:{...o,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...o,error:"Du må fylle ut dette feltet."},render:s};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
