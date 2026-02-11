import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as K}from"./styrbordDecorator-DRAyl1VQ.js";import{j as t}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import{B as s}from"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as u}from"./index-BWu4c2F4.js";/* empty css                        */import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const de={title:"Form/BorderedRadioGroup",component:t,decorators:[K],tags:["autodocs","kyv"],argTypes:{}},i={label:"Title for group",description:"Description for group",options:[{label:"Option A",value:"option-a"},{label:"Option B",value:"option-b"},{label:"Option C",value:"option-c"}]},d={args:{...i},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},l={args:{...i,options:[{label:"Option A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-a"},{label:"Option B Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-b"},{label:"Option C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-c"}]},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},p={args:{...i,description:e.jsxs(e.Fragment,{children:["Description containing a ",e.jsx("a",{href:"#",children:"link"})]})},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},c={args:{...i,error:"This is an error message"},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},m={args:{...i,optional:!0},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},g={args:{...i,optional:"Spesialtilpasset Verdi"},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},v={args:{...i,required:!0},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},f={args:{...i,readonly:!0},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}},h={args:{...i,disabled:!0},render:r=>{const[o,a]=u.useState(void 0);return e.jsx(s,{width:"full",children:e.jsx(t,{...r,value:o,onChange:n=>a(n)})})}};var x,V,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(B=(V=d.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var S,R,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    options: [{
      label: 'Option A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      value: 'option-a'
    }, {
      label: 'Option B Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      value: 'option-b'
    }, {
      label: 'Option C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
      value: 'option-c'
    }]
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var C,G,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: <>
        Description containing a <a href="#">link</a>
      </>
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(b=(G=p.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var w,O,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'This is an error message'
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var y,D,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var L,E,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,k,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(A=(k=v.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,_,z;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    readonly: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(z=(_=f.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var H,I,J;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disabled: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Box>;
  }
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const le=["Default","WithLongOptionText","WithReactElementDescription","WithError","Optional","OptionalText","Required","ReadOnly","Disabled"];export{d as Default,h as Disabled,m as Optional,g as OptionalText,f as ReadOnly,v as Required,c as WithError,l as WithLongOptionText,p as WithReactElementDescription,le as __namedExportsOrder,de as default};
