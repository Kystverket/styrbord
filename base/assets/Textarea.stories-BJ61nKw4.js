import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{av as n,D as j,P as b,B as f}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as z}from"./index-BWu4c2F4.js";import{L as l}from"./label-CT_xXrm7.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const J={title:"Form/Textarea 2",component:n,tags:["autodocs","ds"],decorators:[(r,{parameters:s})=>e.jsxs("div",{id:"story-render",style:{display:"flex",flexDirection:"column",gap:"var(--ds-size-2)",maxWidth:"100%",width:s.layout==="padded"?"":"20rem"},children:[e.jsx("style",{children:"#storybook-root{max-width:100vw}"}),e.jsx(r,{})]})],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textarea/overview)"}}}},t={args:{disabled:!1,readOnly:!1,cols:40,id:"my-textarea"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Label"}),e.jsx(n,{...r})]})},o={args:{cols:40,id:"my-textarea"},parameters:{layout:"padded"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Label"}),e.jsx(n,{...r})]})},a=r=>{const[s,i]=z.useState(`${r.value||""}`);return e.jsxs(e.Fragment,{children:[e.jsx(l,{htmlFor:r.id,children:"Kontroller meg!"}),e.jsx(n,{cols:40,onChange:y=>i(y.target.value),value:s,...r}),e.jsx(j,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(b,{style:{margin:"var(--ds-size-2) 0"},children:["Du har skrevet inn: ",s]}),e.jsx(f,{onClick:()=>i("Pizza"),children:"Jeg vil ha Pizza"})]})};a.args={id:"my-textarea"};a.parameters={docs:{source:{type:"code"}}};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const K=["Preview","FullWidth","Controlled"];export{a as Controlled,o as FullWidth,t as Preview,K as __namedExportsOrder,J as default};
