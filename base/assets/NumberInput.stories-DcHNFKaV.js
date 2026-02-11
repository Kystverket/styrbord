import{j as ae}from"./jsx-runtime-BjG_zV1W.js";import{N as se}from"./Card-KeqL4nDM.js";import{S as oe}from"./styrbordDecorator-DRAyl1VQ.js";import{r as v}from"./index-BWu4c2F4.js";import"./Details-8YZFjHTH.js";import"./index-BtN5BFRV.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";/* empty css                        */const te=r=>{const[f,h]=v.useState(r.value),re=a=>{var x;h(a),(x=r.onChange)==null||x.call(r,a),console.log("Wrapper onChange",a)};return r.externallyChanging&&v.useEffect(()=>{const a=setInterval(()=>h((f??0)+1),1e3);return()=>clearInterval(a)},[f,r.externallyChanging]),ae.jsx(se,{...r,value:f,onChange:re})},Ce={title:"Form/NumberInput",component:te,decorators:[oe],tags:["autodocs","ds-override"],argTypes:{}},e={onBlur:()=>console.log("onBlur"),onChange:r=>console.log(`onChange value: ${r}`),value:0,label:"This is a label"},s={args:e},o={args:{...e,inputMode:"decimal",suffix:"m"}},t={args:{...e,required:!0}},n={args:{...e,value:null}},l={args:{...e,optional:!0}},c={args:{...e,optional:"Spesialtilpasset verdi"}},u={args:{...e,placeholder:"placeholder",value:void 0}},i={args:{...e,error:"error"}},d={args:{...e,error:!1,readOnly:!0}},m={args:{...e,error:!1,disabled:!0}},p={args:{...e,align:"right",value:123,suffix:"kr"}},g={args:{...e,label:"Value changes every second, wonky behavior is expected",externallyChanging:!0}};var S,A,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(y=(A=s.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var b,C,O;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inputMode: 'decimal',
    suffix: 'm'
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,D,R;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    required: true
  }
}`,...(R=(D=t.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,N,V;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: null
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var k,q,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: true
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var T,j,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi'
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var B,M,P;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'placeholder',
    value: undefined
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,F,$;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'error'
  }
}`,...($=(F=i.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var z,G,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: false,
    readOnly: true
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: false,
    disabled: true
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    align: 'right',
    value: 123,
    suffix: 'kr'
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Value changes every second, wonky behavior is expected',
    externallyChanging: true
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Oe=["Default","Decimal","Required","NullValue","Optional","OptionalText","WithPlaceholder","WithError","ReadOnly","Disabled","AlignRight","ExternalChanges"];export{p as AlignRight,o as Decimal,s as Default,m as Disabled,g as ExternalChanges,n as NullValue,l as Optional,c as OptionalText,d as ReadOnly,t as Required,i as WithError,u as WithPlaceholder,Oe as __namedExportsOrder,Ce as default};
