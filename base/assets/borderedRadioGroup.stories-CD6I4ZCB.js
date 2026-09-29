import{S as K,r as s,j as e}from"./iframe-DMKAaGf9.js";import{p as t,S as u}from"./Dialog-ffeW2bp3.js";import"./shipTypes-hFnSBndP.js";import"./Details-0lajeVmw.js";import"./KyvDivider-B8qHsZQy.js";import"./KyvSpinner-DY1MGCQa.js";import"./skillingsbuoye-BrWleNup.js";import"./Logo-CjDqXog2.js";import"./tooltip-CNY8vMwI.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-CviRK8dn.js";import"./index-Du9vRAeu.js";const te={title:"Components/BorderedRadioGroup",component:t,decorators:[K],tags:["autodocs","kyv"],argTypes:{}},i={label:"Title for group",description:"Description for group",options:[{label:"Option A",value:"option-a"},{label:"Option B",value:"option-b"},{label:"Option C",value:"option-c"}]},d={args:{...i},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},l={args:{...i,options:[{label:"Option A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-a"},{label:"Option B Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-b"},{label:"Option C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",value:"option-c"}]},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},c={args:{...i,description:e.jsxs(e.Fragment,{children:["Description containing a ",e.jsx("a",{href:"#",children:"link"})]})},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},p={args:{...i,error:"This is an error message"},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},g={args:{...i,optional:!0},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},m={args:{...i,optional:"Spesialtilpasset Verdi"},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},v={args:{...i,required:!0},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},f={args:{...i,readonly:!0},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}},h={args:{...i,disabled:!0},render:r=>{const[a,n]=s.useState(void 0);return e.jsx(u,{width:"full",children:e.jsx(t,{...r,value:a,onChange:o=>n(o)})})}};var S,V,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(x=(V=d.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var R,j,C;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var G,b,w;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: <>
        Description containing a <a href="#">link</a>
      </>
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var O,T,y;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'This is an error message'
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(y=(T=p.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var D,B,P;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var L,E,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var q,k,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(A=(k=v.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,F,z;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    readonly: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(z=(F=f.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var H,I,J;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disabled: true
  },
  render: args => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <Surface width="full">
        <BorderedRadioGroup {...args} value={value} onChange={v => setValue(v)} />
      </Surface>;
  }
}`,...(J=(I=h.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const se=["Default","WithLongOptionText","WithReactElementDescription","WithError","Optional","OptionalText","Required","ReadOnly","Disabled"];export{d as Default,h as Disabled,g as Optional,m as OptionalText,f as ReadOnly,v as Required,p as WithError,l as WithLongOptionText,c as WithReactElementDescription,se as __namedExportsOrder,te as default};
