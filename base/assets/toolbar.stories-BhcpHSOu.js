import{S as x,r as o,j as s}from"./iframe-a92PiZDk.js";import{j as p}from"./Dialog-US4NiUe7.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BhTvqi4o.js";import"./index-C0JGS7j4.js";import"./index-CjcbQYLd.js";import"./shipTypes-hFnSBndP.js";import"./Details-BKt2vF5d.js";import"./KyvDivider-D0cQWsm2.js";import"./typography-B3Xe137V.js";import"./KyvSpinner-CStDtRO-.js";import"./skillingsbuoye-CnuVz1Kf.js";import"./Logo-BlFH4ZLF.js";import"./color-tokens-BaFqaga0.js";const H={title:"Form/RichTextArea/Toolbar",component:p,decorators:[x],tags:["autodocs","kyv","beta"],argTypes:{onBold:{action:"onBold"},onItalic:{action:"onItalic"},onBulletList:{action:"onBulletList"},onOrderedList:{action:"onOrderedList"},onUndo:{action:"onUndo"},onRedo:{action:"onRedo"},onFormatChange:{action:"onFormatChange"},onLink:{action:"onLink"},onImageUpload:{action:"onImageUpload"}}},L=e=>{const[u,v]=o.useState(e.isBoldActive),[A,B]=o.useState(e.isItalicActive),[I,f]=o.useState(e.isBulletListActive),[k,F]=o.useState(e.isOrderedListActive),[O,S]=o.useState(e.isLinkActive),[b,h]=o.useState(e.selectedFormat);return s.jsx("div",{style:{padding:"1rem"},children:s.jsx(p,{...e,isBoldActive:u,isItalicActive:A,isBulletListActive:I,isOrderedListActive:k,isLinkActive:O,selectedFormat:b,onBold:()=>{v(t=>!t),e.onBold()},onItalic:()=>{B(t=>!t),e.onItalic()},onBulletList:()=>{f(t=>!t),e.onBulletList()},onOrderedList:()=>{F(t=>!t),e.onOrderedList()},onLink:()=>{S(t=>!t),e.onLink()},onFormatChange:t=>{h(t),e.onFormatChange(t)},onUndo:()=>e.onUndo(),onRedo:()=>e.onRedo()})})},n={args:{disabled:!1,isBoldActive:!1,isItalicActive:!1,isBulletListActive:!1,isOrderedListActive:!1,isLinkActive:!1,selectedFormat:"paragraph",onBold:()=>{},onItalic:()=>{},onBulletList:()=>{},onOrderedList:()=>{},onUndo:()=>{},onRedo:()=>{},onFormatChange:()=>{},onLink:()=>{}},render:L},i={args:{...n.args,disabled:!0},render:L};var r,a,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const J=["Default","Disabled"];export{n as Default,i as Disabled,J as __namedExportsOrder,H as default};
