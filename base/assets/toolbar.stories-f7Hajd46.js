import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-Cugl2SpL.js";import{S as x}from"./styrbordDecorator-B2Z0nZ2m.js";import{am as p}from"./SlotDialog-DHQu0GUf.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-Cg5irVE2.js";import"./Details-Ds73P8aO.js";import"./index-r4eP-CZn.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-UI7YxYxl.js";import"./index-DSxIqraS.js";import"./index-D6Os6u8p.js";import"./heading-BzaD13KW.js";import"./label-1qu2tFOm.js";import"./index-Di0TxOgb.js";const P={title:"Form/RichTextArea/Toolbar",component:p,decorators:[x],tags:["autodocs","kyv","beta"],argTypes:{onBold:{action:"onBold"},onItalic:{action:"onItalic"},onBulletList:{action:"onBulletList"},onOrderedList:{action:"onOrderedList"},onUndo:{action:"onUndo"},onRedo:{action:"onRedo"},onFormatChange:{action:"onFormatChange"},onLink:{action:"onLink"}}},L=e=>{const[u,v]=o.useState(e.isBoldActive),[A,B]=o.useState(e.isItalicActive),[f,I]=o.useState(e.isBulletListActive),[k,F]=o.useState(e.isOrderedListActive),[O,S]=o.useState(e.isLinkActive),[b,h]=o.useState(e.selectedFormat);return s.jsx("div",{style:{padding:"1rem"},children:s.jsx(p,{...e,isBoldActive:u,isItalicActive:A,isBulletListActive:f,isOrderedListActive:k,isLinkActive:O,selectedFormat:b,onBold:()=>{v(t=>!t),e.onBold()},onItalic:()=>{B(t=>!t),e.onItalic()},onBulletList:()=>{I(t=>!t),e.onBulletList()},onOrderedList:()=>{F(t=>!t),e.onOrderedList()},onLink:()=>{S(t=>!t),e.onLink()},onFormatChange:t=>{h(t),e.onFormatChange(t)},onUndo:()=>e.onUndo(),onRedo:()=>e.onRedo()})})},i={args:{disabled:!1,isBoldActive:!1,isItalicActive:!1,isBulletListActive:!1,isOrderedListActive:!1,isLinkActive:!1,selectedFormat:"paragraph",onBold:()=>{},onItalic:()=>{},onBulletList:()=>{},onOrderedList:()=>{},onUndo:()=>{},onRedo:()=>{},onFormatChange:()=>{},onLink:()=>{}},render:L},n={args:{...i.args,disabled:!0},render:L};var r,a,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    disabled: false,
    isBoldActive: false,
    isItalicActive: false,
    isBulletListActive: false,
    isOrderedListActive: false,
    isLinkActive: false,
    selectedFormat: 'paragraph',
    onBold: () => {},
    onItalic: () => {},
    onBulletList: () => {},
    onOrderedList: () => {},
    onUndo: () => {},
    onRedo: () => {},
    onFormatChange: () => {},
    onLink: () => {}
  },
  render: renderInteractive
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: renderInteractive
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const Q=["Default","Disabled"];export{i as Default,n as Disabled,Q as __namedExportsOrder,P as default};
