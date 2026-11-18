import{r as m,j as e}from"./iframe-dqRYvvps.js";import{Q as a,B as _}from"./Dialog-DKbgxwXy.js";import"./shipTypes-hFnSBndP.js";import"./Details-CVilvbjp.js";import"./KyvDivider-CImnlERV.js";import"./KyvSpinner-BpYBW8TB.js";import"./skillingsbuoye-BvyM3y_D.js";import"./Logo-Cj0NCIYI.js";import{D as d,P as V,c as D,L as F}from"./tooltip-Dbywcoy3.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-CJ-06Lvi.js";import"./index-Dy_OWlc0.js";import"./index-BVjStCxk.js";const H={title:"Components/Search",component:a,tags:["autodocs","kyv"],parameters:{docs:{description:{component:"Søkefelt med tømmeknapp og søkeknapp. Designsystemet fjerner sin `Search` i neste major-versjon ([les mer](https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do)), så Styrbord har sin egen med samme API. `Search.Clear` tømmer bare søkefeltet, ikke resten av skjemaet, og fungerer også når feltet er kontrollert."}}}},t=r=>e.jsxs(a,{...r,children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),s=()=>{const[r,l]=m.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk",value:r,onChange:c=>l(c.target.value)}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),e.jsx(d,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(V,{style:{margin:"var(--ds-size-2) 0"},children:["Du har skrevet inn: ",r]}),e.jsx(_,{onClick:()=>l("Pizza"),children:"Jeg vil ha Pizza"})]})},n=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{})]}),e.jsx(d,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]}),e.jsx(d,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{variant:"outline"})]})]}),o=()=>e.jsxs(D,{children:[e.jsx(F,{children:"Søk etter katter"}),e.jsxs(a,{children:[e.jsx(a.Input,{name:"cat-search"}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]})]}),i=()=>{const[r,l]=m.useState(""),[c,P]=m.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:u=>{u.preventDefault(),P(r)},children:e.jsxs(a,{children:[e.jsx(a.Input,{"aria-label":"Søk",value:r,onChange:u=>l(u.target.value)}),e.jsx(a.Clear,{}),e.jsx(a.Button,{})]})}),e.jsxs(V,{"data-size":"md",style:{marginTop:"var(--ds-size-2)"},children:["Submitted value: ",c]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Preview"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};i.__docgenInfo={description:"",methods:[],displayName:"Form"};var p,h,S;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Search {...args}>
    <Search.Input aria-label="Søk" />
    <Search.Clear />
    <Search.Button />
  </Search>`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,v,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
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
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var x,b,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
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
      <Search.Button variant="outline" />
    </Search>
  </>`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var C,y,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Field>
    <Label>Søk etter katter</Label>
    <Search>
      <Search.Input name="cat-search" />
      <Search.Clear />
      <Search.Button />
    </Search>
  </Field>`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,I,B;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
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
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const K=["Preview","Controlled","Variants","WithLabel","Form"];export{s as Controlled,i as Form,t as Preview,n as Variants,o as WithLabel,K as __namedExportsOrder,H as default};
