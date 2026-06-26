import{S as x,r as o,j as s}from"./iframe-CPuhykfl.js";import{f as L}from"./Dialog-CO49LTj7.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-Dzmlct3D.js";import"./index-D9Nw6Yhx.js";import"./index-R4Mc1a11.js";import"./shipTypes-hFnSBndP.js";import"./Details-CJKZ-vdv.js";import"./KyvDivider-BVoBm50f.js";import"./typography-Dc7Rvq6V.js";import"./KyvSpinner-DBrydDBs.js";import"./skillingsbuoye-nl-brODA.js";import"./Logo-C27TizVx.js";const G={title:"Form/RichTextArea/Toolbar",component:L,decorators:[x],tags:["autodocs","kyv","beta"],argTypes:{onBold:{action:"onBold"},onItalic:{action:"onItalic"},onBulletList:{action:"onBulletList"},onOrderedList:{action:"onOrderedList"},onUndo:{action:"onUndo"},onRedo:{action:"onRedo"},onFormatChange:{action:"onFormatChange"},onLink:{action:"onLink"}}},p=e=>{const[u,v]=o.useState(e.isBoldActive),[A,B]=o.useState(e.isItalicActive),[I,f]=o.useState(e.isBulletListActive),[k,F]=o.useState(e.isOrderedListActive),[O,S]=o.useState(e.isLinkActive),[b,h]=o.useState(e.selectedFormat);return s.jsx("div",{style:{padding:"1rem"},children:s.jsx(L,{...e,isBoldActive:u,isItalicActive:A,isBulletListActive:I,isOrderedListActive:k,isLinkActive:O,selectedFormat:b,onBold:()=>{v(t=>!t),e.onBold()},onItalic:()=>{B(t=>!t),e.onItalic()},onBulletList:()=>{f(t=>!t),e.onBulletList()},onOrderedList:()=>{F(t=>!t),e.onOrderedList()},onLink:()=>{S(t=>!t),e.onLink()},onFormatChange:t=>{h(t),e.onFormatChange(t)},onUndo:()=>e.onUndo(),onRedo:()=>e.onRedo()})})},n={args:{disabled:!1,isBoldActive:!1,isItalicActive:!1,isBulletListActive:!1,isOrderedListActive:!1,isLinkActive:!1,selectedFormat:"paragraph",onBold:()=>{},onItalic:()=>{},onBulletList:()=>{},onOrderedList:()=>{},onUndo:()=>{},onRedo:()=>{},onFormatChange:()=>{},onLink:()=>{}},render:p},i={args:{...n.args,disabled:!0},render:p};var r,a,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
