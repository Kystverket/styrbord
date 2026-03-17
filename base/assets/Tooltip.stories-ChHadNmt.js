import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{av as x,B as v}from"./SlotDialog-BM8LdznX.js";import"./Details-DvI0Ks8B.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./iframe-Dc5NlUOZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DW1CWfez.js";import"./index-Ch6ENo7_.js";import"./index-CXfN6wGo.js";import"./lite-DaUVFjkg.js";import"./index-CctbcuWN.js";import"./heading-BpFGGURx.js";import"./label-DhsYcHK5.js";import"./index-DTygHeDf.js";import"./translations-B0sosGYM.js";const{expect:i,userEvent:B,within:_}=__STORYBOOK_MODULE_TEST__,S=p.jsx(v,{children:"My trigger"}),Y={title:"Components/Tooltip",component:x,tags:["autodocs","ds"],parameters:{customStyles:{margin:"2rem",padding:"4rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tooltip/overview)"}}},play:async e=>{const o=_(e.canvasElement),a=o.getByRole("button");await B.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()}},t=e=>p.jsx(x,{...e,children:p.jsx(v,{children:"My trigger"})});t.args={content:"Tooltip text",placement:"top"};const n={args:{content:"Tooltip text",children:"My trigger"}};n.play=async e=>{const o=_(e.canvasElement),a=o.getByText("My trigger");await B.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()};const s={args:{content:"Tooltip text",placement:"bottom",children:S}};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip {...args}>
    <Button>My trigger</Button>
  </Tooltip>`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip text',
    children: 'My trigger'
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,T,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip text',
    placement: 'bottom',
    children: defaultChildren
  }
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const q=["Preview","WithString","Placement"];export{s as Placement,t as Preview,n as WithString,q as __namedExportsOrder,Y as default};
