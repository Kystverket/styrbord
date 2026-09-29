import{m as V}from"./Dialog-ffeW2bp3.js";import{S as X}from"./iframe-DMKAaGf9.js";import"./tooltip-CNY8vMwI.js";import"./index-CviRK8dn.js";import"./index-Du9vRAeu.js";import"./shipTypes-hFnSBndP.js";import"./Details-0lajeVmw.js";import"./KyvDivider-B8qHsZQy.js";import"./KyvSpinner-DY1MGCQa.js";import"./skillingsbuoye-BrWleNup.js";import"./Logo-CjDqXog2.js";import"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";const mr={title:"Components/Alert",component:V,decorators:[X],tags:["autodocs","ds-override"],argTypes:{},parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/alert/overview)"}}}},r={text:"Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har behov for, men prøv likevel å være kort og konsis."},e={args:r},s={args:{...r,title:"Informativ tittel","data-color":"warning"}},a={args:{...r,"data-color":"success"}},t={args:{...r,"data-color":"danger"}},o={args:{...r,"data-color":"danger"}},n={args:{...r,title:"Informativ tittel","data-size":"sm"}},i={args:{...r,title:"Informativ tittel","data-size":"md"}},c={args:{...r,title:"Informativ tittel","data-size":"lg",onDismiss:()=>{}}},d={args:{...r,text:"Kort melding",onDismiss:()=>{}}},m={args:{...r,title:"",text:"Feil under opplasting","data-color":"danger",onDismiss:()=>{}}},l={args:{...r,title:"",text:"Feil under opplasting","data-color":"danger","border-style":"none",onDismiss:()=>{}}},p={args:{...r,"data-color":"lyng"}};var g,u,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultProps
}`,...(f=(u=e.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var D,S,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Informativ tittel',
    'data-color': 'warning'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var P,z,h;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'data-color': 'success'
  }
}`,...(h=(z=a.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var y,k,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'data-color': 'danger'
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var I,W,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'data-color': 'danger'
  }
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var A,F,K;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Informativ tittel',
    'data-size': 'sm'
  }
}`,...(K=(F=n.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,w,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Informativ tittel',
    'data-size': 'md'
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,E,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: 'Informativ tittel',
    'data-size': 'lg',
    onDismiss: () => {}
  }
}`,...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var N,R,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    text: 'Kort melding',
    onDismiss: () => {}
  }
}`,...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,T,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: '',
    text: 'Feil under opplasting',
    'data-color': 'danger',
    onDismiss: () => {}
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var G,H,J;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    title: '',
    text: 'Feil under opplasting',
    'data-color': 'danger',
    'border-style': 'none',
    onDismiss: () => {}
  }
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    'data-color': 'lyng'
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const lr=["Default","Warning","Success","Danger","DangerAlt","SmallSize","NormalSize","LargeSizeWithDismiss","DefaultKort","WithErrorDismiss","WithoutBorderAndRoundedCorners","Lyng"];export{t as Danger,o as DangerAlt,e as Default,d as DefaultKort,c as LargeSizeWithDismiss,p as Lyng,i as NormalSize,n as SmallSize,a as Success,s as Warning,m as WithErrorDismiss,l as WithoutBorderAndRoundedCorners,lr as __namedExportsOrder,mr as default};
