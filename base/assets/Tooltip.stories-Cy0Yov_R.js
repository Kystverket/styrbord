import{j as p}from"./iframe-CILDSxky.js";import{B as x}from"./Dialog-sln7EyTu.js";import"./shipTypes-hFnSBndP.js";import"./Details-Bwizq5wO.js";import"./KyvDivider-D2QPxZka.js";import"./typography-BSLUl-_v.js";import"./KyvSpinner-Bngn4aYP.js";import"./skillingsbuoye-XUDUPq-H.js";import"./Logo-Dq-cpADU.js";import{q as B}from"./tooltip-_x5OyY6J.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FIPjUDlT.js";import"./index-Dk2GYvad.js";const{expect:a,userEvent:v,within:_}=__STORYBOOK_MODULE_TEST__,f=p.jsx(x,{children:"My trigger"}),k={title:"Components/Tooltip",component:B,tags:["autodocs","ds"],parameters:{customStyles:{margin:"2rem",padding:"4rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tooltip/overview)"}}},play:async e=>{const o=_(e.canvasElement),i=o.getByRole("button");await v.hover(i),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await a(r).toBeInTheDocument(),await a(r).toBeVisible()}},t=e=>p.jsx(B,{...e,children:p.jsx(x,{children:"My trigger"})});t.args={content:"Tooltip text",placement:"top"};const n={args:{content:"Tooltip text",children:"My trigger"}};n.play=async e=>{const o=_(e.canvasElement),i=o.getByText("My trigger");await v.hover(i),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await a(r).toBeInTheDocument(),await a(r).toBeVisible()};const s={args:{content:"Tooltip text",placement:"bottom",children:f}};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip {...args}>
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const q=["Preview","WithString","Placement"];export{s as Placement,t as Preview,n as WithString,q as __namedExportsOrder,k as default};
