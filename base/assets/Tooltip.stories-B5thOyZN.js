import{j as p}from"./iframe-D-VFJ9wl.js";import{B as x}from"./Dialog-B4323eIv.js";import"./shipTypes-hFnSBndP.js";import"./Details-CUx_98-M.js";import"./KyvDivider-BADDM6iT.js";import"./typography-BHlq0B5P.js";import"./KyvSpinner-DkO0d7XD.js";import"./skillingsbuoye-CFTg2uZf.js";import"./Logo-DhA-F7Vh.js";import{p as B}from"./tooltip-BzjkVrro.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BaFqaga0.js";import"./index-DWlR0cZg.js";import"./index-Cve22tcg.js";const{expect:i,userEvent:v,within:_}=__STORYBOOK_MODULE_TEST__,f=p.jsx(x,{children:"My trigger"}),K={title:"Components/Tooltip",component:B,tags:["autodocs","ds"],parameters:{customStyles:{margin:"2rem",padding:"4rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tooltip/overview)"}}},play:async e=>{const o=_(e.canvasElement),a=o.getByRole("button");await v.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()}},t=e=>p.jsx(B,{...e,children:p.jsx(x,{children:"My trigger"})});t.args={content:"Tooltip text",placement:"top"};const n={args:{content:"Tooltip text",children:"My trigger"}};n.play=async e=>{const o=_(e.canvasElement),a=o.getByText("My trigger");await v.hover(a),await new Promise(c=>{setTimeout(()=>{c(!0)},1e3)});const r=o.getByRole("tooltip");await i(r).toBeInTheDocument(),await i(r).toBeVisible()};const s={args:{content:"Tooltip text",placement:"bottom",children:f}};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};var m,l,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip {...args}>
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
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const L=["Preview","WithString","Placement"];export{s as Placement,t as Preview,n as WithString,L as __namedExportsOrder,K as default};
