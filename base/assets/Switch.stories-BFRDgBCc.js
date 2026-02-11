import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{F as l}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{S as s}from"./switch-B7e_GTO5.js";import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const z={title:"Components/Switch",component:s,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/switch/overview)"}}}},r={args:{label:"Switch",description:"",disabled:!1,readOnly:!1,position:"start"}},i={...r,args:{...r.args,checked:!0}},n={render:({"aria-label":f,"aria-labelledby":k,...t})=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Skru av/på en eller flere innstillinger"}),e.jsx(s,{label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"alt1",checked:!0,...t}),e.jsx(s,{label:"Innstilling 2",value:"alt2",...t}),e.jsx(s,{label:"Innstilling 3",value:"alt3",...t}),e.jsx(s,{label:"Innstilling 4",value:"alt4",description:"Du mangler rettigheter for denne instillingen",readOnly:!0,...t})]})},a={...n,args:{position:"end"}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Switch',
    description: '',
    disabled: false,
    readOnly: false,
    position: 'start'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Preview,
  args: {
    ...Preview.args,
    checked: true
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    'aria-label': a,
    'aria-labelledby': b,
    ...args
  }) => <Fieldset>
      <Fieldset.Legend>Skru av/på en eller flere innstillinger</Fieldset.Legend>
      <Switch label="Innstilling 1" description="Beskrivelse av innstilling" value="alt1" checked {...args} />
      <Switch label="Innstilling 2" value="alt2" {...args} />
      <Switch label="Innstilling 3" value="alt3" {...args} />
      <Switch label="Innstilling 4" value="alt4" description="Du mangler rettigheter for denne instillingen" readOnly {...args} />
    </Fieldset>
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,S,w;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Group,
  args: {
    position: 'end'
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const A=["Preview","Checked","Group","GroupEnd"];export{i as Checked,n as Group,a as GroupEnd,r as Preview,A as __namedExportsOrder,z as default};
