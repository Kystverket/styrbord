import{j as p}from"./iframe-iZ4XiIu8.js";import{B as x}from"./Dialog-Cwm0YOOu.js";import"./shipTypes-hFnSBndP.js";import"./Details-DhLcoDEo.js";import"./KyvDivider--tXNW3JF.js";import"./typography-BWYFi2sF.js";import"./KyvSpinner-DdPSQ1xt.js";import"./skillingsbuoye-Bxnw_i0Q.js";import"./Logo-BVdDHpoI.js";import{q as B}from"./tooltip-DyQpg3_0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUIFYONC.js";import"./index-BrsAFw8f.js";const{expect:a,userEvent:v,within:_}=__STORYBOOK_MODULE_TEST__,f=p.jsx(x,{children:"My trigger"}),k={title:"Components/Tooltip",component:B,tags:["autodocs","ds"],parameters:{customStyles:{margin:"2rem",padding:"4rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tooltip/overview)"}}},play:async e=>{const o=_(e.canvasElement),i=o.getByRole("button");await v.hover(i),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await a(r).toBeInTheDocument(),await a(r).toBeVisible()}},t=e=>p.jsx(B,{...e,children:p.jsx(x,{children:"My trigger"})});t.args={content:"Tooltip text",placement:"top"};const n={args:{content:"Tooltip text",children:"My trigger"}};n.play=async e=>{const o=_(e.canvasElement),i=o.getByText("My trigger");await v.hover(i),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await a(r).toBeInTheDocument(),await a(r).toBeVisible()};const s={args:{content:"Tooltip text",placement:"bottom",children:f}};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip {...args}>
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
