import{aj as T}from"./Avatar-ByE1-G29.js";import{S as j}from"./styrbordDecorator-DZIjBdHE.js";import"./jsx-runtime-D_zvdyIk.js";import"./Details-BRc03RtG.js";import"./index-CW454lWB.js";import"./lite-DaUVFjkg.js";import"./iframe-Fup_5jJr.js";import"./preload-helper-Dp1pzeXC.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import"./index-BThTE4hJ.js";import"./index-EFqP11ex.js";import"./index-MbVUQDGA.js";import"./label-D6ACcJ2B.js";import"./heading-DWGgcp9w.js";import"./index-CxaBHavo.js";const X={title:"Form/Select",component:T,decorators:[j],tags:["autodocs","ds-override"],argTypes:{},parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)"}}}},e={label:"Hmm",onChange:R=>console.log("onChange "+R),value:void 0,placeholder:"Velg en",options:[{label:"Donald Duck",value:"dd"},{label:"Skrue McDuck",value:"smd"},{label:"Gulbrand Gråstein",value:"gg"},{label:"Rikerud",value:"rr"}]},r={args:e},o={args:{...e,value:e.options[1].value}},a={args:{...e,value:void 0,placeholder:void 0}},s={args:{...e,value:e.options[1].value,placeholder:void 0}},t={args:{...e,value:e.options[1].value,optional:!0}},l={args:{...e,value:e.options[1].value,optional:"Spesialtilpasset Verdi"}},n={args:{...e,value:e.options[1].value,required:!0}};var p,u,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: defaultProps
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var v,g,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: undefined,
    placeholder: undefined
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,P,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
    placeholder: undefined
  }
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var W,V,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
    optional: true
  }
}`,...(D=(V=t.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var b,k,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var q,x,y;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
    required: true
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const Y=["Default","WithValue","WithoutPlaceholderWithoutValue","WithoutPlaceholderWithValue","Optional","OptionalText","Required"];export{r as Default,t as Optional,l as OptionalText,n as Required,o as WithValue,s as WithoutPlaceholderWithValue,a as WithoutPlaceholderWithoutValue,Y as __namedExportsOrder,X as default};
