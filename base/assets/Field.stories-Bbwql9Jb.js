import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{at as s,au as a,V as v,av as b,D as y}from"./Card-iCNsRmt0.js";import"./Details-DhircH7M.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{L as t}from"./label-CRl1GVLX.js";import"./index-BNURykns.js";import"./index-oiHgbqC6.js";import"./index-CE0WYpVZ.js";import"./lite-DaUVFjkg.js";import"./index-DVavdBNq.js";import"./heading-CSzZkkgN.js";import"./index-LL6r61Qw.js";const K={title:"Form/Field",component:s,tags:["autodocs","ds"],parameters:{customStyles:{maxWidth:600,width:"90vw"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/field/overview)"}}}},r=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Etternavn"}),e.jsx(s.Description,{children:"Etternavn kan ikke inneholde mellomrom"}),e.jsx(a,{defaultValue:"Nordmann Svenske"}),e.jsx(v,{children:"Du kan ikke ha mellomrom i etternavnet ditt"})]}),n=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Hvor mange kroner koster det per måned?"}),e.jsxs(s.Affixes,{children:[e.jsx(s.Affix,{children:"NOK"}),e.jsx(a,{}),e.jsx(s.Affix,{children:"pr. mnd."})]})]}),o=()=>e.jsxs(s,{children:[e.jsx(t,{children:"Legg til en beskrivelse"}),e.jsx(b,{rows:2}),e.jsx(s.Counter,{limit:10})]}),i=()=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{position:"end",children:[e.jsx(t,{children:"Flymodus"}),e.jsx(a,{type:"checkbox",role:"switch"})]}),e.jsx(y,{}),e.jsxs(s,{position:"end",children:[e.jsx(t,{children:"Lydløs"}),e.jsx(a,{type:"checkbox",role:"switch"})]})]});i.decorators=[g=>e.jsx("div",{style:{maxWidth:200,margin:"auto"},children:e.jsx(g,{})})];r.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[],displayName:"Affix"};o.__docgenInfo={description:"",methods:[],displayName:"Counter"};i.__docgenInfo={description:"",methods:[],displayName:"Position"};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Field>
      <Label>Etternavn</Label>
      <Field.Description>Etternavn kan ikke inneholde mellomrom</Field.Description>
      <Input defaultValue="Nordmann Svenske" />
      <ValidationMessage>Du kan ikke ha mellomrom i etternavnet ditt</ValidationMessage>
    </Field>;
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Field>
    <Label>Hvor mange kroner koster det per måned?</Label>
    <Field.Affixes>
      <Field.Affix>NOK</Field.Affix>
      <Input />
      <Field.Affix>pr. mnd.</Field.Affix>
    </Field.Affixes>
  </Field>`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Field>
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
  </>`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const T=["Preview","Affix","Counter","Position"];export{n as Affix,o as Counter,i as Position,r as Preview,T as __namedExportsOrder,K as default};
