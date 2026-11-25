import{S as J,r as K,j as M}from"./iframe-XfBZCEPN.js";import{au as z}from"./Dialog-DJYFinJA.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BI6fFoMv.js";import"./index-Bq4C9D42.js";import"./index-f2TudgNm.js";import"./shipTypes-hFnSBndP.js";import"./Details-DE_XSW-5.js";import"./KyvDivider-OfUbcri2.js";import"./KyvSpinner-BSg30L3X.js";import"./skillingsbuoye-D5je9UzI.js";import"./Logo-BaU98RJo.js";import"./color-tokens-BWmLKHwz.js";const ne={title:"Components/Form/TextArea",component:z,decorators:[J],tags:["autodocs","ds-override"],argTypes:{},parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textarea/overview)"}}}},e={onBlur:()=>console.log("onBlur"),onChange:a=>console.log(`onChange value: ${a}`),value:"",label:"This is a label"},r=a=>{const[G,H]=K.useState(a.value??"");return M.jsx(z,{...a,value:G,onChange:u=>{var m;H(u),(m=a.onChange)==null||m.call(a,u)}})},s={args:{...e,description:"this is a description"},render:r},t={args:{...e,required:!0},render:r},o={args:{...e,optional:!0},render:r},n={args:{...e,optional:"Spesialtilpasset verdi"},render:r},d={args:{...e,placeholder:"placeholder"},render:r},c={args:{...e,error:"error"},render:r},i={args:{...e,error:!1,readOnly:!0},render:r},p={args:{...e,error:!1,disabled:!0},render:r},l={args:{...e,maxLength:500},render:r};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    description: 'this is a description'
  },
  render: renderInteractive
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,S,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  },
  render: renderInteractive
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,I,O;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: true
  },
  render: renderInteractive
}`,...(O=(I=o.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var y,b,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi'
  },
  render: renderInteractive
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,T,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(F=l.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};const de=["Default","Required","Optional","OptionalText","WithPlaceholder","WithError","ReadOnly","Disabled","WithCounter"];export{s as Default,p as Disabled,o as Optional,n as OptionalText,i as ReadOnly,t as Required,l as WithCounter,c as WithError,d as WithPlaceholder,de as __namedExportsOrder,ne as default};
