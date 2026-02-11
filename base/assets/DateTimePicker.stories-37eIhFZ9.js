import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{l as Z}from"./Card-KeqL4nDM.js";import{S as $}from"./styrbordDecorator-DRAyl1VQ.js";import{r as ee}from"./index-BWu4c2F4.js";import"./Details-8YZFjHTH.js";import"./index-BtN5BFRV.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";/* empty css                        */const ae=a=>{const[U,X]=ee.useState(a.value),Y=g=>{var D;X(g),(D=a.onChange)==null||D.call(a,g)};return m.jsx(Z,{...a,value:U,onChange:Y})},ve={title:"Form/DateTimePicker",component:ae,decorators:[$,a=>m.jsx("div",{style:{margin:"0 auto",width:"fit-content"},children:m.jsx(a,{})})],tags:["autodocs","kyv"],argTypes:{}},e={label:"DateTimePicker",description:"Description",value:void 0,onChange:a=>console.log("onChange ",a)},r={args:e},t={args:{...e,showCalendarIcon:!1}},o={args:{...e,value:new Date,optional:!0}},s={args:{...e,value:new Date,optional:"Spesialtilpasset Verdi"}},n={args:{...e,value:new Date,required:!0}},i={args:{...e,description:""}},c={args:{...e,value:new Date}},d={args:{...e,value:new Date,error:"Error message"}},l={args:{...e,label:"Dato fra i dag",description:"Kun framtidige datoer kan velges",minDate:new Date}},p={args:{...e,label:"Dato til i dag",description:"Kun tidligere og dagens dato kan velges",maxDate:new Date}},u={args:{...e,label:"Velg dato innen 2 uker",description:"Du kan velge dato fra i dag og inntil 2 uker frem i tid",minDate:new Date,maxDate:new Date(Date.now()+14*24*60*60*1e3)}};var f,w,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: defaultProps
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,x,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    showCalendarIcon: false
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,P,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: true
  }
}`,...(W=(P=o.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var b,C,M;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var E,V,T;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    required: true
  }
}`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var j,y,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: ''
  }
}`,...(O=(y=i.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var q,I,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date()
  }
}`,...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var R,A,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: new Date(),
    error: 'Error message'
  }
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var F,z,B;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date()
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date()
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,N,Q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 2 weeks from today
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const xe=["Default","WithoutCalendarIcon","Optional","OptionalText","Required","WithoutDescription","WithValue","WithError","WithMinDate","WithMaxDate","WithMinAndMaxDate"];export{r as Default,o as Optional,s as OptionalText,n as Required,d as WithError,p as WithMaxDate,u as WithMinAndMaxDate,l as WithMinDate,c as WithValue,t as WithoutCalendarIcon,i as WithoutDescription,xe as __namedExportsOrder,ve as default};
