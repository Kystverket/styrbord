import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ae as i,af as a,ag as v,a9 as b,a8 as y}from"./Avatar-ddgnVPce.js";import"./Details-DlPQewTY.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{L as t}from"./label-DbP5pGqd.js";import"./iframe-BPnbhDvo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DvCyBrx4.js";import"./index-BW9EFdC8.js";import"./index-CSsowela.js";import"./lite-DaUVFjkg.js";import"./index-BGKMp1Aw.js";import"./heading-D3a9w07B.js";import"./index-Ozye5-UV.js";const W={title:"Form/Field",component:i,tags:["autodocs","ds"],parameters:{customStyles:{maxWidth:600,width:"90vw"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/field/overview)"}}}},s=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Etternavn"}),e.jsx(i.Description,{children:"Etternavn kan ikke inneholde mellomrom"}),e.jsx(a,{defaultValue:"Nordmann Svenske"}),e.jsx(y,{children:"Du kan ikke ha mellomrom i etternavnet ditt"})]}),o=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Hvor mange kroner koster det per måned?"}),e.jsxs(i.Affixes,{children:[e.jsx(i.Affix,{children:"NOK"}),e.jsx(a,{}),e.jsx(i.Affix,{children:"pr. mnd."})]})]}),n=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Legg til en beskrivelse"}),e.jsx(v,{rows:2}),e.jsx(i.Counter,{limit:10})]}),r=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{position:"end",children:[e.jsx(t,{children:"Flymodus"}),e.jsx(a,{type:"checkbox",role:"switch"})]}),e.jsx(b,{}),e.jsxs(i,{position:"end",children:[e.jsx(t,{children:"Lydløs"}),e.jsx(a,{type:"checkbox",role:"switch"})]})]});r.decorators=[g=>e.jsx("div",{style:{maxWidth:200,margin:"auto"},children:e.jsx(g,{})})];s.__docgenInfo={description:"",methods:[],displayName:"Preview"};o.__docgenInfo={description:"",methods:[],displayName:"Affix"};n.__docgenInfo={description:"",methods:[],displayName:"Counter"};r.__docgenInfo={description:"",methods:[],displayName:"Position"};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Field>
      <Label>Etternavn</Label>
      <Field.Description>Etternavn kan ikke inneholde mellomrom</Field.Description>
      <Input defaultValue="Nordmann Svenske" />
      <ValidationMessage>Du kan ikke ha mellomrom i etternavnet ditt</ValidationMessage>
    </Field>;
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Field>
    <Label>Hvor mange kroner koster det per måned?</Label>
    <Field.Affixes>
      <Field.Affix>NOK</Field.Affix>
      <Input />
      <Field.Affix>pr. mnd.</Field.Affix>
    </Field.Affixes>
  </Field>`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,f,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Field>
    <Label>Legg til en beskrivelse</Label>
    <Textarea rows={2} />
    <Field.Counter limit={10} />
  </Field>`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,F,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Field position="end">
      <Label>Flymodus</Label>
      <Input type="checkbox" role="switch" />
    </Field>
    <Divider />
    <Field position="end">
      <Label>Lydløs</Label>
      <Input type="checkbox" role="switch" />
    </Field>
  </>`,...(k=(F=r.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const R=["Preview","Affix","Counter","Position"];export{o as Affix,n as Counter,r as Position,s as Preview,R as __namedExportsOrder,W as default};
