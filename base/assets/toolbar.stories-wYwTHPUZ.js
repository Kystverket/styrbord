import{S as x,r as o,j as s}from"./iframe-iZ4XiIu8.js";import{f as p}from"./Dialog-Cwm0YOOu.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-DyQpg3_0.js";import"./index-BUIFYONC.js";import"./index-BrsAFw8f.js";import"./shipTypes-hFnSBndP.js";import"./Details-DhLcoDEo.js";import"./KyvDivider--tXNW3JF.js";import"./typography-BWYFi2sF.js";import"./KyvSpinner-DdPSQ1xt.js";import"./skillingsbuoye-Bxnw_i0Q.js";import"./Logo-BVdDHpoI.js";const G={title:"Form/RichTextArea/Toolbar",component:p,decorators:[x],tags:["autodocs","kyv","beta"],argTypes:{onBold:{action:"onBold"},onItalic:{action:"onItalic"},onBulletList:{action:"onBulletList"},onOrderedList:{action:"onOrderedList"},onUndo:{action:"onUndo"},onRedo:{action:"onRedo"},onFormatChange:{action:"onFormatChange"},onLink:{action:"onLink"},onImageUpload:{action:"onImageUpload"}}},L=e=>{const[u,v]=o.useState(e.isBoldActive),[A,B]=o.useState(e.isItalicActive),[I,f]=o.useState(e.isBulletListActive),[k,F]=o.useState(e.isOrderedListActive),[O,S]=o.useState(e.isLinkActive),[b,h]=o.useState(e.selectedFormat);return s.jsx("div",{style:{padding:"1rem"},children:s.jsx(p,{...e,isBoldActive:u,isItalicActive:A,isBulletListActive:I,isOrderedListActive:k,isLinkActive:O,selectedFormat:b,onBold:()=>{v(t=>!t),e.onBold()},onItalic:()=>{B(t=>!t),e.onItalic()},onBulletList:()=>{f(t=>!t),e.onBulletList()},onOrderedList:()=>{F(t=>!t),e.onOrderedList()},onLink:()=>{S(t=>!t),e.onLink()},onFormatChange:t=>{h(t),e.onFormatChange(t)},onUndo:()=>e.onUndo(),onRedo:()=>e.onRedo()})})},n={args:{disabled:!1,isBoldActive:!1,isItalicActive:!1,isBulletListActive:!1,isOrderedListActive:!1,isLinkActive:!1,selectedFormat:"paragraph",onBold:()=>{},onItalic:()=>{},onBulletList:()=>{},onOrderedList:()=>{},onUndo:()=>{},onRedo:()=>{},onFormatChange:()=>{},onLink:()=>{}},render:L},i={args:{...n.args,disabled:!0},render:L};var r,a,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: renderInteractive
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const H=["Default","Disabled"];export{n as Default,i as Disabled,H as __namedExportsOrder,G as default};
