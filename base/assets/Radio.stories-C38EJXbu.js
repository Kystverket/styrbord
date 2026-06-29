import{j as e}from"./iframe-C7v4yl2J.js";import"./Dialog-DK_STYvC.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";import{R as a,F as i,V as N}from"./tooltip-TyAXlcCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";const P={title:"Form/Radio",component:a,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/radio/overview)"}}}},d={args:{label:"Radio",description:"Description",disabled:!1,readOnly:!1,value:"value",name:"name"}},o={args:{value:"value","aria-label":"Radio"}},n=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken iskremsmak er best?"}),e.jsx(i.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(a,{label:"Vanilje",value:"vanilje",name:"icecream"}),e.jsx(a,{label:"Jordbær",description:"Jordbær er best",value:"jordbær",name:"icecream"}),e.jsx(a,{label:"Sjokolade",value:"sjokolade",name:"icecream"}),e.jsx(a,{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is",name:"icecream"})]}),r=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken bydel bor du i?"}),e.jsx(i.Description,{children:"Trondheim er delt inn i fire bydeler"}),e.jsx(a,{label:"Østbyen",value:"ostbyen",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Lerkendal",value:"lerkendal",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Heimdal",value:"heimdal",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Midtbyen",value:"midtbyen",name:"city","aria-invalid":"true"}),e.jsx(N,{"data-color":"danger",children:"Du må velge en bydel før du kan fortsette."})]}),l=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken bydel bor du i?"}),e.jsx(i.Description,{children:"Trondheim er delt inn i fire bydeler"}),e.jsx(a,{label:"Østbyen",value:"ostbyen",name:"city",readOnly:!0}),e.jsx(a,{label:"Lerkendal",value:"lerkendal",name:"city",readOnly:!0}),e.jsx(a,{label:"Heimdal",value:"heimdal",name:"city",readOnly:!0,checked:!0}),e.jsx(a,{label:"Midtbyen",value:"midtbyen",name:"city",readOnly:!0})]}),s=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Kontaktes på e-post?"}),e.jsx(i.Description,{children:"Bekreft om du ønsker å bli kontaktet per e-post."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-6)"},children:[e.jsx(a,{name:"my-inline",label:"Ja",value:"ja"}),e.jsx(a,{name:"my-inline",label:"Nei",value:"nei"})]})]}),t=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Kontaktes på e-post?"}),e.jsx(i.Description,{children:"Bekreft om du ønsker å bli kontaktet per e-post."}),e.jsx(a,{variant:"outline",name:"my-inline",label:"Ja",value:"ja"}),e.jsx(a,{variant:"outline",name:"my-inline",label:"Nei",value:"nei"})]});n.__docgenInfo={description:"",methods:[],displayName:"Group"};r.__docgenInfo={description:"",methods:[],displayName:"WithError"};l.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};s.__docgenInfo={description:"",methods:[],displayName:"Inline"};t.__docgenInfo={description:"",methods:[],displayName:"Outline"};var m,c,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Radio',
    description: 'Description',
    disabled: false,
    readOnly: false,
    value: 'value',
    name: 'name'
  }
}`,...(p=(c=d.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,b,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'value',
    'aria-label': 'Radio'
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,k,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken iskremsmak er best?</Fieldset.Legend>
      <Fieldset.Description>Velg din favorittsmak blant alternativene.</Fieldset.Description>
      <Radio label="Vanilje" value="vanilje" name="icecream" />
      <Radio label="Jordbær" description="Jordbær er best" value="jordbær" name="icecream" />
      <Radio label="Sjokolade" value="sjokolade" name="icecream" />
      <Radio label="Jeg spiser ikke iskrem" value="spiser-ikke-is" name="icecream" />
    </Fieldset>;
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
      <Fieldset.Description>Trondheim er delt inn i fire bydeler</Fieldset.Description>
      <Radio label="Østbyen" value="ostbyen" name="city" aria-invalid="true" />
      <Radio label="Lerkendal" value="lerkendal" name="city" aria-invalid="true" />
      <Radio label="Heimdal" value="heimdal" name="city" aria-invalid="true" />
      <Radio label="Midtbyen" value="midtbyen" name="city" aria-invalid="true" />
      <ValidationMessage data-color="danger">Du må velge en bydel før du kan fortsette.</ValidationMessage>
    </Fieldset>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var F,f,R;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
      <Fieldset.Description>Trondheim er delt inn i fire bydeler</Fieldset.Description>
      <Radio label="Østbyen" value="ostbyen" name="city" readOnly />
      <Radio label="Lerkendal" value="lerkendal" name="city" readOnly />
      <Radio label="Heimdal" value="heimdal" name="city" readOnly checked />
      <Radio label="Midtbyen" value="midtbyen" name="city" readOnly />
    </Fieldset>;
}`,...(R=(f=l.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var D,L,O;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Kontaktes på e-post?</Fieldset.Legend>
    <Fieldset.Description>Bekreft om du ønsker å bli kontaktet per e-post.</Fieldset.Description>
    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--ds-size-6)'
  }}>
      <Radio name="my-inline" label="Ja" value="ja" />
      <Radio name="my-inline" label="Nei" value="nei" />
    </div>
  </Fieldset>`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,H,J;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Kontaktes på e-post?</Fieldset.Legend>
    <Fieldset.Description>Bekreft om du ønsker å bli kontaktet per e-post.</Fieldset.Description>

    <Radio variant="outline" name="my-inline" label="Ja" value="ja" />
    <Radio variant="outline" name="my-inline" label="Nei" value="nei" />
  </Fieldset>`,...(J=(H=t.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const C=["Preview","AriaLabel","Group","WithError","ReadOnly","Inline","Outline"];export{o as AriaLabel,n as Group,s as Inline,t as Outline,d as Preview,l as ReadOnly,r as WithError,C as __namedExportsOrder,P as default};
