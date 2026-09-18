import{j as p}from"./iframe-B9-yjDGi.js";import{B as x}from"./Dialog-DpRjgFic.js";import"./shipTypes-hFnSBndP.js";import"./Details-DlH4Y5Bu.js";import"./KyvDivider-CVN2Y6-7.js";import"./typography-lOLIvvUr.js";import"./KyvSpinner-DAFKdaUB.js";import"./skillingsbuoye-BH0NYPEG.js";import"./Logo-CGIJgWOZ.js";import{q as B}from"./tooltip-U8UQRzWx.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-wmdR2T-Z.js";import"./index-DET-fz-T.js";const{expect:i,userEvent:v,within:_}=__STORYBOOK_MODULE_TEST__,f=p.jsx(x,{children:"My trigger"}),q={title:"Components/Tooltip",component:B,tags:["autodocs","ds"],parameters:{customStyles:{margin:"2rem",padding:"4rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tooltip/overview)"}}},play:async e=>{const o=_(e.canvasElement),a=o.getByRole("button");await v.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()}},t=e=>p.jsx(B,{...e,children:p.jsx(x,{children:"My trigger"})});t.args={content:"Tooltip text",placement:"top"};const n={args:{content:"Tooltip text",children:"My trigger"}};n.play=async e=>{const o=_(e.canvasElement),a=o.getByText("My trigger");await v.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()};const s={args:{content:"Tooltip text",placement:"bottom",children:f}};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip {...args}>
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const K=["Preview","WithString","Placement"];export{s as Placement,t as Preview,n as WithString,K as __namedExportsOrder,q as default};
