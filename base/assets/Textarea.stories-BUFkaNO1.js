import{r as j,j as e}from"./iframe-DEa5CtWz.js";import{B as b}from"./SlotDialog-DxuGsvIF.js";import"./Details-NCjmJlGS.js";import"./KyvDivider-DbG94LfO.js";import"./typography-Bh1pBJ3-.js";import"./KyvSpinner-DyyCEFVM.js";import"./skillingsbuoye-DGmhGI5B.js";import"./Logo-B699lny2.js";import{T as n,L as l,D as z,P as f}from"./tooltip-CLj5ps21.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CCrF873T.js";import"./index-aK8o0k8i.js";const E={title:"Form/Textarea 2",component:n,tags:["autodocs","ds"],decorators:[(r,{parameters:s})=>e.jsxs("div",{id:"story-render",style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)",maxWidth:"100%",width:s.layout==="padded"?"":"20rem"},children:[e.jsx("style",{children:"#storybook-root{max-width:100vw}"}),e.jsx(r,{})]})],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textarea/overview)"}}}},t={args:{disabled:!1,readOnly:!1,cols:40,id:"my-textarea"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Label"}),e.jsx(n,{...r})]})},o={args:{cols:40,id:"my-textarea"},parameters:{layout:"padded"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Label"}),e.jsx(n,{...r})]})},a=r=>{const[s,i]=j.useState(`${r.value||""}`);return e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Kontroller meg!"}),e.jsx(n,{cols:40,onChange:y=>i(y.target.value),value:s,...r}),e.jsx(z,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(f,{style:{margin:"var(--ds-size-2) 0"},children:["Du har skrevet inn: ",s]}),e.jsx(b,{onClick:()=>i("Pizza"),children:"Jeg vil ha Pizza"})]})};a.args={id:"my-textarea"};a.parameters={docs:{source:{type:"code"}}};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    cols: 40,
    id: 'my-textarea'
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Textarea {...args} />
    </>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cols: 40,
    id: 'my-textarea'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Textarea {...args} />
    </>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(\`\${args.value || ''}\`);
  return <>
      <Label htmlFor={args.id}>Kontroller meg!</Label>
      <Textarea cols={40} onChange={e => setValue(e.target.value)} value={value} {...args} />

      <Divider style={{
      marginTop: 'var(--ds-size-4)'
    }} />

      <Paragraph style={{
      margin: 'var(--ds-size-2) 0'
    }}>Du har skrevet inn: {value}</Paragraph>
      <Button onClick={() => setValue('Pizza')}>Jeg vil ha Pizza</Button>
    </>;
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const O=["Preview","FullWidth","Controlled"];export{a as Controlled,o as FullWidth,t as Preview,O as __namedExportsOrder,E as default};
