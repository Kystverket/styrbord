import{j as J}from"./jsx-runtime-BjG_zV1W.js";import{r as K}from"./index-BWu4c2F4.js";import{h as z}from"./Card-C-4CJZyn.js";import{S as M}from"./styrbordDecorator-DRAyl1VQ.js";import"./Details-8YZFjHTH.js";import"./index-BtN5BFRV.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";/* empty css                        */const pr={title:"Form/TextArea",component:z,decorators:[M],tags:["autodocs","ds-override"],argTypes:{},parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textarea/overview)"}}}},r={onBlur:()=>console.log("onBlur"),onChange:a=>console.log(`onChange value: ${a}`),value:"",label:"This is a label"},e=a=>{const[G,H]=K.useState(a.value??"");return J.jsx(z,{...a,value:G,onChange:m=>{var u;H(m),(u=a.onChange)==null||u.call(a,m)}})},o={args:r,render:e},s={args:{...r,required:!0},render:e},t={args:{...r,optional:!0},render:e},n={args:{...r,optional:"Spesialtilpasset verdi"},render:e},d={args:{...r,placeholder:"placeholder"},render:e},c={args:{...r,error:"error"},render:e},i={args:{...r,error:!1,readOnly:!0},render:e},p={args:{...r,error:!1,disabled:!0},render:e},l={args:{...r,maxLength:500},render:e};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultArgs,
  render: renderInteractive
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,S,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  },
  render: renderInteractive
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,I,O;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: true
  },
  render: renderInteractive
}`,...(O=(I=t.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var y,b,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi'
  },
  render: renderInteractive
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var C,T,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'placeholder'
  },
  render: renderInteractive
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var E,R,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'error'
  },
  render: renderInteractive
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,B,L;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: false,
    readOnly: true
  },
  render: renderInteractive
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,_,k;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: false,
    disabled: true
  },
  render: renderInteractive
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,F,$;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    maxLength: 500
  },
  render: renderInteractive
}`,...($=(F=l.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};const lr=["Default","Required","Optional","OptionalText","WithPlaceholder","WithError","ReadOnly","Disabled","WithCounter"];export{o as Default,p as Disabled,t as Optional,n as OptionalText,i as ReadOnly,s as Required,l as WithCounter,c as WithError,d as WithPlaceholder,lr as __namedExportsOrder,pr as default};
