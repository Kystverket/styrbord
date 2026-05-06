import{S as k,r as x,j as D}from"./iframe-DbK6FVEl.js";import{R as v}from"./SlotDialog-ChyaEfm3.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-o8lTps7p.js";import"./tooltip-B-fy50eu.js";import"./index-Ca8YZSCr.js";import"./index-DrpcA9x6.js";import"./KyvDivider-kFKNH1y6.js";import"./typography-I4-dbcZu.js";import"./KyvSpinner-D0JP3_Mr.js";import"./skillingsbuoye-BrVEVtLu.js";import"./Logo-DMjmaFCl.js";const F={title:"Form/RichTextArea/RichTextArea",component:v,decorators:[k],tags:["autodocs","kyv","beta"]},o={value:"",onChange:()=>{},label:"Rikt tekstfelt",description:"Dette er et tekstfelt som støtter rik tekstformatering.",optional:"Valgfritt"},s=a=>{const[h,b]=x.useState(a.value??"");return D.jsx(v,{...a,value:h,onChange:n=>{b(n),a.onChange(n)}})},e={args:o,render:s},r={args:{...o,disabled:!0,value:"Skrivebeskyttet innhold"},render:s},t={args:{...o,error:"Du må fylle ut dette feltet."},render:s};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
