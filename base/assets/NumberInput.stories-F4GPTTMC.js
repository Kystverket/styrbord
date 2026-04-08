import{j as ar}from"./jsx-runtime-D_zvdyIk.js";import{ak as sr}from"./SlotDialog-F6hW8fhN.js";import{S as or}from"./styrbordDecorator-BfXgtUUc.js";import{r as v}from"./iframe-D02NDwPW.js";import"./Details-dL8eMSPR.js";import"./index-Du264kYH.js";import"./lite-DaUVFjkg.js";import"./translations-ygyvb3F3.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-DpGbaZvl.js";import"./index-nifpsw8y.js";import"./index-CeyKNI-_.js";import"./heading-Bd_p5-cx.js";import"./label-C3AbJwKw.js";import"./index-C54ICqck.js";import"./preload-helper-Dp1pzeXC.js";const tr=e=>{const[f,h]=v.useState(e.value),er=a=>{var x;h(a),(x=e.onChange)==null||x.call(e,a),console.log("Wrapper onChange",a)};return e.externallyChanging&&v.useEffect(()=>{const a=setInterval(()=>h((f??0)+1),1e3);return()=>clearInterval(a)},[f,e.externallyChanging]),ar.jsx(sr,{...e,value:f,onChange:er})},Er={title:"Form/NumberInput",component:tr,decorators:[or],tags:["autodocs","ds-override"],argTypes:{}},r={onBlur:()=>console.log("onBlur"),onChange:e=>console.log(`onChange value: ${e}`),value:0,label:"This is a label"},s={args:r},o={args:{...r,inputMode:"decimal",suffix:"m"}},t={args:{...r,required:!0}},n={args:{...r,value:null}},l={args:{...r,optional:!0}},c={args:{...r,optional:"Spesialtilpasset verdi"}},i={args:{...r,placeholder:"placeholder",value:void 0}},u={args:{...r,error:"error"}},d={args:{...r,error:!1,readOnly:!0}},m={args:{...r,error:!1,disabled:!0}},p={args:{...r,align:"right",value:123,suffix:"kr"}},g={args:{...r,label:"Value changes every second, wonky behavior is expected",externallyChanging:!0}};var S,A,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(D=t.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,k,V;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: null
  }
}`,...(V=(k=n.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var q,I,N;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: true
  }
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,j,w;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi'
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var B,M,P;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    placeholder: 'placeholder',
    value: undefined
  }
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,F,$;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    error: 'error'
  }
}`,...($=(F=u.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var z,G,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,rr;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Value changes every second, wonky behavior is expected',
    externallyChanging: true
  }
}`,...(rr=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:rr.source}}};const Dr=["Default","Decimal","Required","NullValue","Optional","OptionalText","WithPlaceholder","WithError","ReadOnly","Disabled","AlignRight","ExternalChanges"];export{p as AlignRight,o as Decimal,s as Default,m as Disabled,g as ExternalChanges,n as NullValue,l as Optional,c as OptionalText,d as ReadOnly,t as Required,u as WithError,i as WithPlaceholder,Dr as __namedExportsOrder,Er as default};
