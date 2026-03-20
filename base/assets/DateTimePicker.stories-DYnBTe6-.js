import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{ad as re}from"./SlotDialog-C5Lg-BCL.js";import{S as te}from"./styrbordDecorator-DKvNoSk1.js";import{r as oe}from"./iframe-DRtFUu2e.js";import"./Details-CBkinJ6F.js";import"./index-nl2E8QXt.js";import"./lite-DaUVFjkg.js";import"./translations-C2PytieX.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-D-EJa-tB.js";import"./index-MKNTW25W.js";import"./index-v0GhfBho.js";import"./heading-BKDgwg3b.js";import"./label-BU1o1r0q.js";import"./index-Z82sfZ5z.js";import"./preload-helper-Dp1pzeXC.js";const ne=a=>{const[$,ee]=oe.useState(a.value),ae=D=>{var w;ee(D),(w=a.onChange)==null||w.call(a,D)};return g.jsx(re,{...a,value:$,onChange:ae})},Me={title:"Form/DateTimePicker",component:ne,decorators:[te,a=>g.jsx("div",{style:{margin:"0 auto",width:"fit-content"},children:g.jsx(a,{})})],tags:["autodocs","kyv"],argTypes:{}},e={label:"DateTimePicker",description:"Description",value:void 0,onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,showCalendarIcon:!1}},o={args:{...e,value:new Date,optional:!0}},n={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},s={args:{...e,value:new Date,required:!0}},i={args:{...e,description:""}},c={args:{...e,value:new Date}},d={args:{...e,value:new Date,error:"Error message"}},p={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},m={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},u={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},l={args:{...e,showYearDropdown:!0,showMonthDropdown:!0,value:new Date,minDate:new Date(2015,1,1),maxDate:new Date,description:"Også begrenset med minDate og maxDate"}};var f,h,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultProps
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,S,W;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showCalendarIcon: false
  }
}`,...(W=(S=t.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var P,k,M;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var b,C,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,V,T;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(T=(V=s.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var j,y,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(q=(y=i.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var A,I,K;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var Y,R,_;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var F,z,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,N,Q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Z;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showYearDropdown: true,
    showMonthDropdown: true,
    value: new Date(),
    minDate: new Date(2015, 1, 1),
    maxDate: new Date(),
    description: 'Også begrenset med minDate og maxDate'
  }
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const be=["Default","WithoutCalendarIcon","Optional","OptionalText","Required","WithoutDescription","WithValue","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","WithYearAndMonthDropdown"];export{r as Default,o as Optional,n as OptionalText,s as Required,d as WithError,m as WithMaxDate,u as WithMinAndMaxDate,p as WithMinDate,c as WithValue,l as WithYearAndMonthDropdown,t as WithoutCalendarIcon,i as WithoutDescription,be as __namedExportsOrder,Me as default};
