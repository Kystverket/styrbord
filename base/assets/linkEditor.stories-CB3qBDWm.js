import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CCmo06Ot.js";import{S as j}from"./styrbordDecorator-Bqj8vWOR.js";import{am as R,an as E}from"./SlotDialog-DC_ZdIh1.js";import"./preload-helper-Dp1pzeXC.js";import"./translations-C4IlanDA.js";import"./Details-D-kSN_Sd.js";import"./index-D0LssxAE.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-DHA6JEJB.js";import"./index-DQorIgya.js";import"./index-BNTvVDpB.js";import"./heading-CwIomwvw.js";import"./label-C3szw36r.js";import"./index-DhhjbttY.js";const Q={title:"Form/RichTextArea/LinkEditor",component:R,decorators:[j],tags:["autodocs","kyv","beta"],argTypes:{onSave:{action:"onSave"},onClose:{action:"onClose"},onRemove:{action:"onRemove"},hasSelection:{control:"boolean"}}},p=e=>{const[C,o]=d.useState(!0),[x,c]=d.useState(e.href??"https://www.kystverket.no");return n.jsxs("div",{style:{padding:"2rem",display:"grid",gap:"0.75rem",maxWidth:"28rem"},children:[n.jsx("div",{children:n.jsx(E,{variant:"secondary",popovertarget:e.anchorId,onClick:()=>{o(r=>!r)},children:"Toggle link editor"})}),n.jsx(R,{...e,href:x,open:C,hasSelection:e.hasSelection,onClose:()=>{o(!1),e.onClose()},onSave:r=>{c(r),e.onSave(r),o(!1)},onRemove:()=>{c(""),e.onRemove(),o(!1)}})]})},t={args:{open:!0,anchorId:"link-editor-story-popover",href:"https://www.kystverket.no",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:p},s={args:{open:!0,anchorId:"link-editor-story-popover",href:"",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:p},a={args:{open:!0,anchorId:"link-editor-story-popover",href:"https://www.kystverket.no",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:p},i={args:{open:!0,anchorId:"link-editor-story-popover",href:"",hasSelection:!1,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:p};var m,l,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorId: 'link-editor-story-popover',
    href: 'https://www.kystverket.no',
    hasSelection: true,
    onSave: () => {},
    onClose: () => {},
    onRemove: () => {}
  },
  render: renderInteractive
}`,...(v=(l=t.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var h,u,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorId: 'link-editor-story-popover',
    href: '',
    hasSelection: true,
    onSave: () => {},
    onClose: () => {},
    onRemove: () => {}
  },
  render: renderInteractive
}`,...(S=(u=s.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var f,k,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorId: 'link-editor-story-popover',
    href: 'https://www.kystverket.no',
    hasSelection: true,
    onSave: () => {},
    onClose: () => {},
    onRemove: () => {}
  },
  render: renderInteractive
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,g,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: true,
    anchorId: 'link-editor-story-popover',
    href: '',
    hasSelection: false,
    onSave: () => {},
    onClose: () => {},
    onRemove: () => {}
  },
  render: renderInteractive
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const U=["Default","WithoutHref","WithHref","NoSelection"];export{t as Default,i as NoSelection,a as WithHref,s as WithoutHref,U as __namedExportsOrder,Q as default};
