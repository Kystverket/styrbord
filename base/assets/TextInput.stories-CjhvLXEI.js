import{S as M,j as a}from"./iframe-Ccq3OV6b.js";import{k as s,S as N}from"./Dialog-DOnpb3hu.js";import"./shipTypes-hFnSBndP.js";import"./Details-odWxZYUY.js";import"./KyvDivider-BVBMyOmU.js";import"./KyvSpinner-YPDo_c9L.js";import"./skillingsbuoye-BRXVEwkJ.js";import"./Logo-BXu3XPm8.js";import"./tooltip-Bgifg7WJ.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-D5L0FOws.js";import"./index-C3opyzbR.js";const ie={title:"Form/TextInput",component:s,decorators:[M],tags:["autodocs","ds-override"],argTypes:{},parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textfield/overview)"}}}},e={onBlur:()=>console.log("onBlur"),onChange:r=>console.log(`onChange value: ${r}`),value:"",label:"This is a label",description:"This is a description"},t={args:e},n={args:{...e,required:!0}},i={args:{...e,optional:!0}},l={args:{...e,optional:"Spesialtilpasset verdi"}},d={args:{...e,placeholder:"placeholder"}},p={args:{...e,error:"error"}},c={args:{...e,disabled:!0}},u={args:{...e,readOnly:!0}},m={args:{...e,loading:!0}},o={render:r=>a.jsxs(N,{horizontal:!0,gap:4,align:"start",children:[a.jsx(s,{...r,label:"Optional",optional:!0}),a.jsx(s,{...r,label:"Required",required:!0}),a.jsx(s,{...r,label:"Required with text",required:"Påkrevd"}),a.jsx(s,{...r,label:"Plain"}),a.jsx(s,{...r,label:"Read only",readOnly:!0}),a.jsx(s,{...r,label:"Disabled",disabled:!0})]}),args:{...e,description:void 0}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,x,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,O,q;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: true
  }
}`,...(q=(O=i.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var T,v,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi'
  }
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var R,j,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'placeholder'
  }
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,I,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'error'
  }
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var P,z,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,W,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    readOnly: true
  }
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var C,F,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    loading: true
  }
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var $,G,H,J,K;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Surface horizontal gap={4} align="start">
      <TextInput {...args} label="Optional" optional />
      <TextInput {...args} label="Required" required />
      <TextInput {...args} label="Required with text" required="Påkrevd" />
      <TextInput {...args} label="Plain" />
      <TextInput {...args} label="Read only" readOnly />
      <TextInput {...args} label="Disabled" disabled />
    </Surface>,
  args: {
    ...defaultArgs,
    description: undefined
  }
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:`Optional, required and plain side by side, top-aligned, so any height difference in the label row shows.

For obligatoriske felter som ønskes markert med tag, bruker man “warning”-variant.`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};const le=["Default","Required","Optional","OptionalText","WithPlaceholder","WithError","Disabled","ReadOnly","Loading","LabelSizes"];export{t as Default,c as Disabled,o as LabelSizes,m as Loading,i as Optional,l as OptionalText,u as ReadOnly,n as Required,p as WithError,d as WithPlaceholder,le as __namedExportsOrder,ie as default};
