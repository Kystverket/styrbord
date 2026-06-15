import{S as Z,j as Q,r as $}from"./iframe-BaKPPD1J.js";import{D as ee}from"./Dialog-C0HmbON9.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-CDM62wRo.js";import"./index-7tPpMOen.js";import"./index-BmhFWFPc.js";import"./Details-BWJIXiH8.js";import"./KyvDivider-BXv4n0ob.js";import"./typography-BIz6NTof.js";import"./KyvSpinner-shXAIoyL.js";import"./skillingsbuoye-X1pHeasA.js";import"./Logo-BsbRAMgD.js";const ae=a=>{const[U,X]=$.useState(a.value),Y=m=>{var g;X(m),(g=a.onChange)==null||g.call(a,m)};return Q.jsx(ee,{...a,value:U,onChange:Y})},ge={title:"Form/Datepicker",component:ae,decorators:[Z,a=>Q.jsx(a,{})],tags:["autodocs","kyv"],argTypes:{}},e={label:"Datepicker",description:"Description",value:void 0,onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,description:""}},s={args:{...e,value:new Date}},o={args:{...e,value:new Date,optional:!0}},n={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},i={args:{...e,value:new Date,required:!0}},c={args:{...e,value:new Date,error:"Error message"}},d={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},u={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},l={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},p={args:{...e,value:new Date,disabled:!0}};var D,f,w;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: defaultProps
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var v,x,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,k,W;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(W=(k=s.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var b,P,M;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(M=(P=o.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var E,V,O;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(O=(V=n.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var j,q,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(y=(q=i.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var C,K,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(R=(K=c.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var T,A,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var F,z,B;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,L,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    disabled: true
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const De=["Default","WithoutDescription","WithValue","Optional","OptionalText","Required","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","Disabled"];export{r as Default,p as Disabled,o as Optional,n as OptionalText,i as Required,c as WithError,u as WithMaxDate,l as WithMinAndMaxDate,d as WithMinDate,s as WithValue,t as WithoutDescription,De as __namedExportsOrder,ge as default};
