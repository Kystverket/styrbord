import{r as d,j as e}from"./iframe-Czv3AHya.js";import{B as _}from"./SlotDialog-DWY9LpQH.js";import"./Details-32TxQ_PH.js";import"./kyvDivider-BCRc_Uf9.js";import"./typography-hnOE2O5i.js";import"./skillingsbuoye-CCNtNPj1.js";import"./Logo-C52OS84m.js";import{r as a,D as m,P as V,d as D,L as F}from"./tooltip-DjKviRXa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1vxHnYL.js";import"./index-BU31YQ6P.js";const G={title:"Components/Search",component:a,tags:["autodocs","ds"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/search/overview)"}}}},t=r=>e.jsxs(a,{...r,children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),s=()=>{const[r,l]=d.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk",value:r,onChange:c=>l(c.target.value)}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),e.jsx(m,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(V,{style:{margin:"var(--ds-size-2) 0"},children:["Du har skrevet inn: ",r]}),e.jsx(_,{onClick:()=>l("Pizza"),children:"Jeg vil ha Pizza"})]})},n=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{})]}),e.jsx(m,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),e.jsx(m,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{variant:"primary"})]})]}),o=()=>e.jsxs(D,{children:[e.jsx(F,{children:"Søk etter katter"}),e.jsxs(a,{children:[e.jsx(a.Input,{name:"cat-search"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]})]}),i=()=>{const[r,l]=d.useState(),[c,P]=d.useState();return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:u=>{u.preventDefault(),P(r)},children:e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk",value:r,onChange:u=>l(u.target.value)}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]})}),e.jsxs(V,{"data-size":"md",style:{marginTop:"var(--ds-size-2)"},children:["Submitted value: ",c]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};i.__docgenInfo={description:"",methods:[],displayName:"Form"};var p,h,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Search {...args}>
    <Search.Input aria-label="Søk" />
    <Search.Clear />
    <Search.Button />
  </Search>`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>();
  return <>
      <Search>
        <Search.Input aria-label="Søk" value={value} onChange={e => setValue(e.target.value)} />
        <Search.Clear />
        <Search.Button />
      </Search>

      <Divider style={{
      marginTop: 'var(--ds-size-4)'
    }} />

      <Paragraph style={{
      margin: 'var(--ds-size-2) 0'
    }}>Du har skrevet inn: {value}</Paragraph>
      <Button onClick={() => setValue('Pizza')}>Jeg vil ha Pizza</Button>
    </>;
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,b,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
    </Search>

    <Divider style={{
    marginTop: 'var(--ds-size-4)'
  }} />

    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
      <Search.Button />
    </Search>

    <Divider style={{
    marginTop: 'var(--ds-size-4)'
  }} />

    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
      <Search.Button variant="primary" />
    </Search>
  </>`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,y,z;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Field>
    <Label>Søk etter katter</Label>
    <Search>
      <Search.Input name="cat-search" />
      <Search.Clear />
      <Search.Button />
    </Search>
  </Field>`,...(z=(y=o.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var I,f,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>();
  const [submittedValue, setSubmittedValue] = useState<string>();
  return <>
      <form onSubmit={e => {
      // Prevent navigation from Storybook
      e.preventDefault();
      setSubmittedValue(value);
    }}>
        <Search>
          <Search.Input aria-label="Søk" value={value} onChange={e => setValue(e.target.value)} />
          <Search.Clear />
          <Search.Button />
        </Search>
      </form>

      <Paragraph data-size="md" style={{
      marginTop: 'var(--ds-size-2)'
    }}>
        Submitted value: {submittedValue}
      </Paragraph>
    </>;
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const H=["Preview","Controlled","Variants","WithLabel","Form"];export{s as Controlled,i as Form,t as Preview,n as Variants,o as WithLabel,H as __namedExportsOrder,G as default};
