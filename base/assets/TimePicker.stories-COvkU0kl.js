import{S as K,j as G,r as L}from"./iframe-DMKAaGf9.js";import{l as M}from"./Dialog-ffeW2bp3.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-CNY8vMwI.js";import"./index-CviRK8dn.js";import"./index-Du9vRAeu.js";import"./shipTypes-hFnSBndP.js";import"./Details-0lajeVmw.js";import"./KyvDivider-B8qHsZQy.js";import"./KyvSpinner-DY1MGCQa.js";import"./skillingsbuoye-BrWleNup.js";import"./Logo-CjDqXog2.js";import"./color-tokens-DRys5hYJ.js";const N=["2xs","xs","sm","md","lg","fit","full"],Q=e=>{const[H,I]=L.useState(e.value),J=p=>{var d;I(p),(d=e.onChange)==null||d.call(e,p)};return G.jsx(M,{...e,value:H,onChange:J})},ie={title:"Form/TimePicker",component:Q,decorators:[K,e=>G.jsx(e,{})],tags:["autodocs","kyv"],argTypes:{width:{control:"select",options:N}}},r={label:"TimePicker",description:"Description",value:void 0,width:"full",onChange:e=>console.log("onChange ",e)},a={args:r},s={args:{...r,description:""}},t={args:{...r,value:new Date}},o={args:{...r,value:new Date,optional:!0}},n={args:{...r,value:new Date,optional:"Spesialtilpasset Verdi"}},c={args:{...r,value:new Date,required:!0}},i={args:{...r,value:new Date,error:"Error message"}},u={args:{...r,value:new Date,disabled:!0}},l={args:{...r,value:new Date,readOnly:!0}};var m,g,D;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: defaultProps
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var f,v,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,P,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var x,O,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var E,W,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var T,R,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var j,k,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var C,_,z;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    disabled: true
  }
}`,...(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,A,B;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    readOnly: true
  }
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ue=["Default","WithoutDescription","WithValue","Optional","OptionalText","Required","WithError","Disabled","ReadOnly"];export{a as Default,u as Disabled,o as Optional,n as OptionalText,l as ReadOnly,c as Required,i as WithError,t as WithValue,s as WithoutDescription,ue as __namedExportsOrder,ie as default};
