import{S as K,r as s,j as e}from"./iframe-C7v4yl2J.js";import{l as t}from"./Dialog-DK_STYvC.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import{B as u}from"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";import"./tooltip-TyAXlcCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";const te={title:"Components/BorderedRadioGroup",component:t,decorators:[K],tags:["autodocs","kyv"],argTypes:{}},i={label:"Title for group",description:"Description for group",options:[{label:"Option A",value:"option-a"},{label:"Option B",value:"option-b"},{label:"Option C",value:"option-c"}]},d={args:{...i},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},l={args:{...i,options:[{label:"Option A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-a"},{label:"Option B Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-b"},{label:"Option C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-c"}]},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},p={args:{...i,description:e.jsxs(e.Fragment,{children:["Description containing a ",e.jsx("a",{href:"#",children:"link"})]})},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},c={args:{...i,error:"This is an error message"},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},g={args:{...i,optional:!0},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},m={args:{...i,optional:"Spesialtilpasset Verdi"},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},v={args:{...i,required:!0},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},h={args:{...i,readonly:!0},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}},f={args:{...i,disabled:!0},render:r=>{const[a,o]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:n=>o(n)})})}};var x,V,B;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var y,D,P;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var L,E,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,k,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(k=v.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,F,z;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(F=h.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var H,I,J;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(I=f.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const se=["Default","WithLongOptionText","WithReactElementDescription","WithError","Optional","OptionalText","Required","ReadOnly","Disabled"];export{d as Default,f as Disabled,g as Optional,m as OptionalText,h as ReadOnly,v as Required,c as WithError,l as WithLongOptionText,p as WithReactElementDescription,se as __namedExportsOrder,te as default};
