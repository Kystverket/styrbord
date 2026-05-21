import{S as j,r as d,j as n}from"./iframe-BuFa6Gq_.js";import{d as E}from"./tooltip-9TaP4YfS.js";import{e as R}from"./SlotDialog-CqCF609r.js";import"./preload-helper-Dp1pzeXC.js";import"./index-4v8xe9Nj.js";import"./index-B3OXXMK5.js";import"./Details-BNTQ8J2X.js";import"./KyvDivider-ClKV3dGk.js";import"./typography-CglXFMgS.js";import"./KyvSpinner-C0s2BANL.js";import"./skillingsbuoye-mmOtJYDd.js";import"./Logo-pwtSLfH6.js";const q={title:"Form/RichTextArea/LinkEditor",component:R,decorators:[j],tags:["autodocs","kyv","beta"],argTypes:{onSave:{action:"onSave"},onClose:{action:"onClose"},onRemove:{action:"onRemove"},hasSelection:{control:"boolean"}}},c=e=>{const[C,o]=d.useState(!0),[x,p]=d.useState(e.href??"https://www.kystverket.no");return n.jsxs("div",{style:{padding:"2rem",display:"grid",gap:"0.75rem",maxWidth:"28rem"},children:[n.jsx("div",{children:n.jsx(E,{variant:"secondary",popovertarget:e.anchorId,onClick:()=>{o(r=>!r)},children:"Toggle link editor"})}),n.jsx(R,{...e,href:x,open:C,hasSelection:e.hasSelection,onClose:()=>{o(!1),e.onClose()},onSave:r=>{p(r),e.onSave(r),o(!1)},onRemove:()=>{p(""),e.onRemove(),o(!1)}})]})},t={args:{open:!0,anchorId:"link-editor-story-popover",href:"https://www.kystverket.no",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:c},s={args:{open:!0,anchorId:"link-editor-story-popover",href:"",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:c},a={args:{open:!0,anchorId:"link-editor-story-popover",href:"https://www.kystverket.no",hasSelection:!0,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:c},i={args:{open:!0,anchorId:"link-editor-story-popover",href:"",hasSelection:!1,onSave:()=>{},onClose:()=>{},onRemove:()=>{}},render:c};var l,m,v;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,u,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const z=["Default","WithoutHref","WithHref","NoSelection"];export{t as Default,i as NoSelection,a as WithHref,s as WithoutHref,z as __namedExportsOrder,q as default};
