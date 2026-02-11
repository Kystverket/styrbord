import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{S as K}from"./styrbordDecorator-DRAyl1VQ.js";import{k as M}from"./Card-KeqL4nDM.js";import{r as N}from"./index-BWu4c2F4.js";/* empty css                        */import"./Details-8YZFjHTH.js";import"./index-BtN5BFRV.js";import"./lite-DaUVFjkg.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const Q=({values:z,...r})=>{const[H,I]=N.useState(z),J=d=>{var m;I(d),(m=r.onChanges)==null||m.call(r,d)};return c.jsx(M,{...r,values:H,onChanges:J})},de={title:"Form/BorderedToggleGroup",component:Q,decorators:[K],tags:["autodocs","kyv"],argTypes:{}},e={label:"Title for group",description:"Description for group",values:[{key:"a",label:"Option A",value:!0},{key:"b",label:"Option B",value:!1},{key:"c",label:"Option C",value:!1},{key:"d",label:"Option D",value:!0},{key:"e",label:"Option E",value:!1},{key:"f",label:"Option F",value:!1}]},a={args:e},o={args:{...e,values:[{key:"a",label:"Option A er en lang og rar tekst som burde vært kortere slik at brukeren ikke blir forvirret",value:!1},{key:"b",label:"Option B er også tilsvarende lang og verbos for å si det på godt norsk",value:!0},{key:"c",label:"Option C er kortere",value:!0},{key:"d",label:"Option D er veldig lang også, og nå burde noen fatte seg i korthet",value:!1}]}},s={args:{...e,description:c.jsxs(c.Fragment,{children:["Description containing a ",c.jsx("a",{href:"#",children:"link"})]})}},t={args:{...e,error:"This is an error message"}},n={args:{...e,optional:!0}},i={args:{...e,optional:"Spesialtilpasset Verdi"}},l={args:{...e,required:!0}},p={args:{...e,readonly:!0}},u={args:{...e,disabled:!0}};var g,f,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: defaultProps
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,v,O;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    values: [{
      key: 'a',
      label: 'Option A er en lang og rar tekst som burde vært kortere slik at brukeren ikke blir forvirret',
      value: false
    }, {
      key: 'b',
      label: 'Option B er også tilsvarende lang og verbos for å si det på godt norsk',
      value: true
    }, {
      key: 'c',
      label: 'Option C er kortere',
      value: true
    }, {
      key: 'd',
      label: 'Option D er veldig lang også, og nå burde noen fatte seg i korthet',
      value: false
    }]
  }
}`,...(O=(v=o.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var y,h,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    description: <>
        Description containing a <a href="#">link</a>
      </>
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var D,x,P;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    error: 'This is an error message'
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var T,E,R;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: true
  }
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,j,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    optional: 'Spesialtilpasset Verdi'
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,q,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    required: true
  }
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,V,G;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    readonly: true
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var L,_,w;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    disabled: true
  }
}`,...(w=(_=u.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const me=["Default","WithLongOptionText","WithReactElementDescription","WithError","Optional","OptionalText","Required","ReadOnly","Disabled"];export{a as Default,u as Disabled,n as Optional,i as OptionalText,p as ReadOnly,l as Required,t as WithError,o as WithLongOptionText,s as WithReactElementDescription,me as __namedExportsOrder,de as default};
