import{S as re,j as Z,r as te}from"./iframe-a92PiZDk.js";import{f as se}from"./Dialog-US4NiUe7.js";import"./preload-helper-Dp1pzeXC.js";import"./tooltip-BhTvqi4o.js";import"./index-C0JGS7j4.js";import"./index-CjcbQYLd.js";import"./shipTypes-hFnSBndP.js";import"./Details-BKt2vF5d.js";import"./KyvDivider-D0cQWsm2.js";import"./typography-B3Xe137V.js";import"./KyvSpinner-CStDtRO-.js";import"./skillingsbuoye-CnuVz1Kf.js";import"./Logo-BlFH4ZLF.js";import"./color-tokens-BaFqaga0.js";const oe=["2xs","xs","sm","md","lg","fit","full"],ne=a=>{const[$,ee]=te.useState(a.value),ae=g=>{var D;ee(g),(D=a.onChange)==null||D.call(a,g)};return Z.jsx(se,{...a,value:$,onChange:ae})},he={title:"Form/DateTimePicker",component:ne,decorators:[re,a=>Z.jsx(a,{})],tags:["autodocs","kyv"],argTypes:{size:{control:"select",options:oe}}},e={label:"DateTimePicker",description:"Description",value:void 0,size:"full",onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,value:new Date,optional:!0}},s={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},o={args:{...e,value:new Date,required:!0}},n={args:{...e,description:""}},i={args:{...e,value:new Date}},c={args:{...e,value:new Date,error:"Error message"}},d={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},l={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},u={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},p={args:{...e,value:new Date,disabled:!0}},m={args:{...e,value:new Date,readOnly:!0}};var f,w,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultProps
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var P,k,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(W=(k=s.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var b,O,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(y=(O=o.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var M,E,V;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var T,R,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,C,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(K=(C=c.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var z,A,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Pe=["Default","Optional","OptionalText","Required","WithoutDescription","WithValue","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","Disabled","ReadOnly"];export{r as Default,p as Disabled,t as Optional,s as OptionalText,m as ReadOnly,o as Required,c as WithError,l as WithMaxDate,u as WithMinAndMaxDate,d as WithMinDate,i as WithValue,n as WithoutDescription,Pe as __namedExportsOrder,he as default};
