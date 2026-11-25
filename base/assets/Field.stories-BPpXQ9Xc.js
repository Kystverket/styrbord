import{j as e}from"./iframe-XfBZCEPN.js";import{e as s,L as t,I as a,f as v,D as b,V as y}from"./tooltip-BI6fFoMv.js";import"./Dialog-DJYFinJA.js";import"./shipTypes-hFnSBndP.js";import"./Details-DE_XSW-5.js";import"./KyvDivider-OfUbcri2.js";import"./KyvSpinner-BSg30L3X.js";import"./skillingsbuoye-D5je9UzI.js";import"./Logo-BaU98RJo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq4C9D42.js";import"./index-f2TudgNm.js";import"./color-tokens-BWmLKHwz.js";const O={title:"Components/Form/Field",component:s,tags:["autodocs","ds"],parameters:{customStyles:{maxWidth:600,width:"90vw"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/field/overview)"}}}},n=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Etternavn"}),e.jsx(s.Description,{children:"Etternavn kan ikke inneholde mellomrom"}),e.jsx(a,{defaultValue:"Nordmann Svenske"}),e.jsx(y,{children:"Du kan ikke ha mellomrom i etternavnet ditt"})]}),r=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Hvor mange kroner koster det per måned?"}),e.jsxs(s.Affixes,{children:[e.jsx(s.Affix,{children:"NOK"}),e.jsx(a,{}),e.jsx(s.Affix,{children:"pr. mnd."})]})]}),o=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Legg til en beskrivelse"}),e.jsx(v,{rows:2}),e.jsx(s.Counter,{limit:10})]}),i=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{position:"end",children:[e.jsx(t,{children:"Flymodus"}),e.jsx(a,{type:"checkbox",role:"switch"})]}),e.jsx(b,{}),e.jsxs(s,{position:"end",children:[e.jsx(t,{children:"Lydløs"}),e.jsx(a,{type:"checkbox",role:"switch"})]})]});i.decorators=[g=>e.jsx("div",{style:{maxWidth:200,margin:"auto"},children:e.jsx(g,{})})];n.__docgenInfo={description:"",methods:[],displayName:"Preview"};r.__docgenInfo={description:"",methods:[],displayName:"Affix"};o.__docgenInfo={description:"",methods:[],displayName:"Counter"};i.__docgenInfo={description:"",methods:[],displayName:"Position"};var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Field>
      <Label>Etternavn</Label>
      <Field.Description>Etternavn kan ikke inneholde mellomrom</Field.Description>
      <Input defaultValue="Nordmann Svenske" />
      <ValidationMessage>Du kan ikke ha mellomrom i etternavnet ditt</ValidationMessage>
    </Field>;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Field>
    <Label>Hvor mange kroner koster det per måned?</Label>
    <Field.Affixes>
      <Field.Affix>NOK</Field.Affix>
      <Input />
      <Field.Affix>pr. mnd.</Field.Affix>
    </Field.Affixes>
  </Field>`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Field>
    <Label>Legg til en beskrivelse</Label>
    <Textarea rows={2} />
    <Field.Counter limit={10} />
  </Field>`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,F,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Field position="end">
      <Label>Flymodus</Label>
      <Input type="checkbox" role="switch" />
    </Field>
    <Divider />
    <Field position="end">
      <Label>Lydløs</Label>
      <Input type="checkbox" role="switch" />
    </Field>
  </>`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const H=["Preview","Affix","Counter","Position"];export{r as Affix,o as Counter,i as Position,n as Preview,H as __namedExportsOrder,O as default};
