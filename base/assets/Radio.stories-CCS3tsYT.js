import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{aw as a,F as i,V as O}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import"./index-BWu4c2F4.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const B={title:"Form/Radio",component:a,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/radio/overview)"}}}},d={args:{label:"Radio",description:"Description",disabled:!1,readOnly:!1,value:"value",name:"name"}},t={args:{value:"value","aria-label":"Radio"}},r=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken iskremsmak er best?"}),e.jsx(i.Description,{children:"Velg din favorittsmak blant alternativene."}),e.jsx(a,{label:"Vanilje",value:"vanilje",name:"icecream"}),e.jsx(a,{label:"Jordbær",description:"Jordbær er best",value:"jordbær",name:"icecream"}),e.jsx(a,{label:"Sjokolade",value:"sjokolade",name:"icecream"}),e.jsx(a,{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is",name:"icecream"})]}),n=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken bydel bor du i?"}),e.jsx(i.Description,{children:"Trondheim er delt inn i fire bydeler"}),e.jsx(a,{label:"Østbyen",value:"ostbyen",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Lerkendal",value:"lerkendal",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Heimdal",value:"heimdal",name:"city","aria-invalid":"true"}),e.jsx(a,{label:"Midtbyen",value:"midtbyen",name:"city","aria-invalid":"true"}),e.jsx(O,{"data-color":"danger",children:"Du må velge en bydel før du kan fortsette."})]}),l=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Hvilken bydel bor du i?"}),e.jsx(i.Description,{children:"Trondheim er delt inn i fire bydeler"}),e.jsx(a,{label:"Østbyen",value:"ostbyen",name:"city",readOnly:!0}),e.jsx(a,{label:"Lerkendal",value:"lerkendal",name:"city",readOnly:!0}),e.jsx(a,{label:"Heimdal",value:"heimdal",name:"city",readOnly:!0,checked:!0}),e.jsx(a,{label:"Midtbyen",value:"midtbyen",name:"city",readOnly:!0})]}),s=()=>e.jsxs(i,{children:[e.jsx(i.Legend,{children:"Kontaktes på e-post?"}),e.jsx(i.Description,{children:"Bekreft om du ønsker å bli kontaktet per e-post."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--ds-size-6)"},children:[e.jsx(a,{name:"my-inline",label:"Ja",value:"ja"}),e.jsx(a,{name:"my-inline",label:"Nei",value:"nei"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Group"};n.__docgenInfo={description:"",methods:[],displayName:"WithError"};l.__docgenInfo={description:"",methods:[],displayName:"ReadOnly"};s.__docgenInfo={description:"",methods:[],displayName:"Inline"};var o,m,c;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Radio',
    description: 'Description',
    disabled: false,
    readOnly: false,
    value: 'value',
    name: 'name'
  }
}`,...(c=(m=d.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'value',
    'aria-label': 'Radio'
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,v,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken iskremsmak er best?</Fieldset.Legend>
      <Fieldset.Description>Velg din favorittsmak blant alternativene.</Fieldset.Description>
      <Radio label="Vanilje" value="vanilje" name="icecream" />
      <Radio label="Jordbær" description="Jordbær er best" value="jordbær" name="icecream" />
      <Radio label="Sjokolade" value="sjokolade" name="icecream" />
      <Radio label="Jeg spiser ikke iskrem" value="spiser-ikke-is" name="icecream" />
    </Fieldset>;
}`,...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var j,g,x;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
      <Fieldset.Description>Trondheim er delt inn i fire bydeler</Fieldset.Description>
      <Radio label="Østbyen" value="ostbyen" name="city" aria-invalid="true" />
      <Radio label="Lerkendal" value="lerkendal" name="city" aria-invalid="true" />
      <Radio label="Heimdal" value="heimdal" name="city" aria-invalid="true" />
      <Radio label="Midtbyen" value="midtbyen" name="city" aria-invalid="true" />
      <ValidationMessage data-color="danger">Du må velge en bydel før du kan fortsette.</ValidationMessage>
    </Fieldset>;
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,F;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Fieldset>
      <Fieldset.Legend>Hvilken bydel bor du i?</Fieldset.Legend>
      <Fieldset.Description>Trondheim er delt inn i fire bydeler</Fieldset.Description>
      <Radio label="Østbyen" value="ostbyen" name="city" readOnly />
      <Radio label="Lerkendal" value="lerkendal" name="city" readOnly />
      <Radio label="Heimdal" value="heimdal" name="city" readOnly checked />
      <Radio label="Midtbyen" value="midtbyen" name="city" readOnly />
    </Fieldset>;
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var R,D,L;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Fieldset>
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
  </Fieldset>`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const K=["Preview","AriaLabel","Group","WithError","ReadOnly","Inline"];export{t as AriaLabel,r as Group,s as Inline,d as Preview,l as ReadOnly,n as WithError,K as __namedExportsOrder,B as default};
