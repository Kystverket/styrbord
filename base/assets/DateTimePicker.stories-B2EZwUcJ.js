import{S as se,j as D,r as ie}from"./iframe-C7tA2xSz.js";import{d as ce}from"./SlotDialog-DIQx9pin.js";import"./preload-helper-Dp1pzeXC.js";import"./Details-3HQoGh0z.js";import"./tooltip-ZhU706QZ.js";import"./index-tUJvpiO3.js";import"./index-C1wVKGee.js";import"./KyvDivider-CiDLYp0E.js";import"./typography-BV5413IT.js";import"./KyvSpinner-RWcTLr8l.js";import"./skillingsbuoye-Bw5auSze.js";import"./Logo-BV6c5AD7.js";const de=a=>{const[te,oe]=ie.useState(a.value),ne=w=>{var h;oe(w),(h=a.onChange)==null||h.call(a,w)};return D.jsx(ce,{...a,value:te,onChange:ne})},We={title:"Form/DateTimePicker",component:de,decorators:[se,a=>D.jsx("div",{style:{margin:"0 auto",width:"fit-content"},children:D.jsx(a,{})})],tags:["autodocs","kyv"],argTypes:{}},e={label:"DateTimePicker",description:"Description",value:void 0,onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,showCalendarIcon:!1}},o={args:{...e,value:new Date,optional:!0}},n={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},s={args:{...e,value:new Date,required:!0}},i={args:{...e,description:""}},c={args:{...e,value:new Date}},d={args:{...e,value:new Date,error:"Error message"}},u={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},p={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},l={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+336*60*60*1e3)}},m={args:{...e,withPortal:!0}},g={args:{...e,showYearDropdown:!0,showMonthDropdown:!0,value:new Date,minDate:new Date(2015,1,1),maxDate:new Date,description:"Også begrenset med minDate og maxDate"}};var f,v,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultProps
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,W,S;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showCalendarIcon: false
  }
}`,...(S=(W=t.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var k,M,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(b=(M=o.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var C,E,O;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var V,T,j;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var y,q,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var I,K,Y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(Y=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var R,_,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var z,B,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(G=(B=u.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(L=(J=p.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var N,Q,U;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    withPortal: true
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showYearDropdown: true,
    showMonthDropdown: true,
    value: new Date(),
    minDate: new Date(2015, 1, 1),
    maxDate: new Date(),
    description: 'Også begrenset med minDate og maxDate'
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Se=["Default","WithoutCalendarIcon","Optional","OptionalText","Required","WithoutDescription","WithValue","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate","WithPortal","WithYearAndMonthDropdown"];export{r as Default,o as Optional,n as OptionalText,s as Required,d as WithError,p as WithMaxDate,l as WithMinAndMaxDate,u as WithMinDate,m as WithPortal,c as WithValue,g as WithYearAndMonthDropdown,t as WithoutCalendarIcon,i as WithoutDescription,Se as __namedExportsOrder,We as default};
