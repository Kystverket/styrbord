import{S as re,j as Z,r as te}from"./iframe-tRSwKzMd.js";import{D as se}from"./Dialog-CZ3oo3rE.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-_q7BVRen.js";import"./index-B9GFplko.js";import"./index-Bk76LeD0.js";import"./shipTypes-hFnSBndP.js";import"./Details-jtp_IHP_.js";import"./KyvDivider-DFwcKNrN.js";import"./typography-D8gUJzsN.js";import"./KyvSpinner-5-aYBCtr.js";import"./skillingsbuoye-B7g4mHO_.js";import"./Logo-BgXoLW5i.js";import"./color-tokens-BaFqaga0.js";const oe=["2xs","xs","sm","md","lg","fit","full"],ne=a=>{const[$,ee]=te.useState(a.value),ae=g=>{var D;ee(g),(D=a.onChange)==null||D.call(a,g)};return Z.jsx(se,{...a,value:$,onChange:ae})},he={title:"Form/Datepicker",component:ne,decorators:[re,a=>Z.jsx(a,{})],tags:["autodocs","kyv"],argTypes:{size:{control:"select",options:oe}}},e={label:"Datepicker",description:"Description",value:void 0,size:"full",onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,description:""}},s={args:{...e,value:new Date}},o={args:{...e,value:new Date,optional:!0}},n={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},i={args:{...e,value:new Date,required:!0}},c={args:{...e,value:new Date,error:"Error message"}},d={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},l={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},u={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},p={args:{...e,value:new Date,disabled:!0}},m={args:{...e,value:new Date,readOnly:!0}};var f,w,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultProps
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,P,W;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(W=(P=s.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var b,O,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var M,E,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var R,j,q;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var C,K,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(z=(K=c.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var T,A,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var F,B,G;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(G=(B=l.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,I,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var L,N,Q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    disabled: true
  }
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    readOnly: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ke=["Default","WithoutDescription","WithValue","Optional","OptionalText","Required","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","Disabled","ReadOnly"];export{r as Default,p as Disabled,o as Optional,n as OptionalText,m as ReadOnly,i as Required,c as WithError,l as WithMaxDate,u as WithMinAndMaxDate,d as WithMinDate,s as WithValue,t as WithoutDescription,ke as __namedExportsOrder,he as default};
