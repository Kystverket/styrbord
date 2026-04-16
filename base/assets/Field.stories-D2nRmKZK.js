import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ah as i,ai as a,aj as v,ac as b,ab as y}from"./SlotDialog-CnQ3SUS_.js";import"./Details-BMdYEwlA.js";import"./translations-OfVzj5SL.js";import"./kyvDivider-GkhM6YIE.js";import"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{L as t}from"./label-BY67gJTv.js";import"./iframe-ewzt6dkP.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFM7l1Ma.js";import"./lite-DaUVFjkg.js";import"./index-B8GsB_dD.js";import"./index-B9_Q20xE.js";import"./index-o4nFeMn6.js";import"./heading-D4sxu6oA.js";import"./index-DtimYQR6.js";const R={title:"Form/Field",component:i,tags:["autodocs","ds"],parameters:{customStyles:{maxWidth:600,width:"90vw"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/field/overview)"}}}},s=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Etternavn"}),e.jsx(i.Description,{children:"Etternavn kan ikke inneholde mellomrom"}),e.jsx(a,{defaultValue:"Nordmann Svenske"}),e.jsx(y,{children:"Du kan ikke ha mellomrom i etternavnet ditt"})]}),o=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Hvor mange kroner koster det per måned?"}),e.jsxs(i.Affixes,{children:[e.jsx(i.Affix,{children:"NOK"}),e.jsx(a,{}),e.jsx(i.Affix,{children:"pr. mnd."})]})]}),n=()=>e.jsxs(i,{children:[e.jsx(t,{children:"Legg til en beskrivelse"}),e.jsx(v,{rows:2}),e.jsx(i.Counter,{limit:10})]}),r=()=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{position:"end",children:[e.jsx(t,{children:"Flymodus"}),e.jsx(a,{type:"checkbox",role:"switch"})]}),e.jsx(b,{}),e.jsxs(i,{position:"end",children:[e.jsx(t,{children:"Lydløs"}),e.jsx(a,{type:"checkbox",role:"switch"})]})]});r.decorators=[g=>e.jsx("div",{style:{maxWidth:200,margin:"auto"},children:e.jsx(g,{})})];s.__docgenInfo={description:"",methods:[],displayName:"Preview"};o.__docgenInfo={description:"",methods:[],displayName:"Affix"};n.__docgenInfo={description:"",methods:[],displayName:"Counter"};r.__docgenInfo={description:"",methods:[],displayName:"Position"};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
  </Field>`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,u,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Field>
    <Label>Legg til en beskrivelse</Label>
    <Textarea rows={2} />
    <Field.Counter limit={10} />
  </Field>`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var j,F,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Field position="end">
      <Label>Flymodus</Label>
      <Input type="checkbox" role="switch" />
    </Field>
    <Divider />
    <Field position="end">
      <Label>Lydløs</Label>
      <Input type="checkbox" role="switch" />
    </Field>
  </>`,...(k=(F=r.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const q=["Preview","Affix","Counter","Position"];export{o as Affix,n as Counter,r as Position,s as Preview,q as __namedExportsOrder,R as default};
