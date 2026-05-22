import{r as D,j as e}from"./iframe-Cd9osEDc.js";import{B,i as P}from"./SlotDialog-BMdG5_OK.js";import"./Details-BXXb3W8_.js";import"./KyvDivider-BTGv_RzA.js";import"./typography-CvteIT1N.js";import"./KyvSpinner-CEVIWl8i.js";import"./skillingsbuoye-BRhM6PEv.js";import"./Logo-PHwD-nxz.js";import{E as n,c as d,L as m,D as b,P as k}from"./tooltip-BnARmx_x.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BL-ZXW-0.js";import"./index-Bdgah_EL.js";const u=()=>e.jsx(P,{title:"Under utvikling",level:"warning",text:"Komponenten er fortsatt under utvikling og kan endre seg.",style:{marginBottom:"var(--ds-size-6)"}}),q={title:"Components/Suggestion",component:n,tags:["autodocs","ds-override"],parameters:{docs:{description:{component:`**USE AT YOUR OWN RISK**

[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/suggestion/overview)`}}}},i=()=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(d,{children:[e.jsx(u,{}),e.jsx(m,{children:"Velg en destinasjon"}),e.jsxs(n,{children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(t=>e.jsxs(n.Option,{label:t,value:t,children:[t,e.jsx("div",{children:"Kommune"})]},t))]})]})]})},o=()=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(d,{children:[e.jsx(u,{}),e.jsx(m,{children:"Velg en destinasjon"}),e.jsxs(n,{multiple:!0,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(t=>e.jsx(n.Option,{children:t},t))]})]})]})},l=()=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(d,{children:[e.jsx(u,{}),e.jsx(m,{children:"Skriv inn et tall mellom 1-6"}),e.jsxs(n,{filter:!1,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(t=>e.jsx(n.Option,{value:t.toLowerCase(),children:t},t))]})]})]})},a=()=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"],[t,p]=D.useState(["Oslo"]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsxs(d,{children:[e.jsx(m,{children:"Velg destinasjoner"}),e.jsxs(n,{multiple:!0,selected:t,onSelectedChange:r=>p(r.map(I=>I.value)),children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(r=>e.jsxs(n.Option,{label:r,value:r,children:[r,e.jsx("div",{children:"Kommune"})]},r))]})]})]}),e.jsx(b,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(k,{style:{margin:"var(--ds-size-2) 0"},children:["Valgte reisemål: ",t.join(", ")]}),e.jsx(B,{onClick:()=>{p(["Sogndal","Stavanger"])},children:"Sett reisemål til Sogndal, Stavanger"})]})},g=()=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(d,{children:[e.jsx(u,{}),e.jsx(m,{children:"Velg destinasjon"}),e.jsxs(n,{creatable:!0,multiple:!0,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff, trykk enter for å legge til"}),s.map(t=>e.jsx(n.Option,{children:t},t))]})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Preview"};o.__docgenInfo={description:"",methods:[],displayName:"Multiple"};l.__docgenInfo={description:"",methods:[],displayName:"Filter"};a.__docgenInfo={description:"",methods:[],displayName:"ControlledMultiple"};g.__docgenInfo={description:"",methods:[],displayName:"Creatable"};var c,S,j;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return <Field>
      <DevelopmentNotice />
      <Label>Velg en destinasjon</Label>
      <Suggestion>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map(place => <Suggestion.Option key={place} label={place} value={place}>
              {place}
              <div>Kommune</div>
            </Suggestion.Option>)}
        </Suggestion.List>
      </Suggestion>
    </Field>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var x,h,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return <Field>
      <DevelopmentNotice />
      <Label>Velg en destinasjon</Label>
      <Suggestion multiple>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map(place => <Suggestion.Option key={place}>{place}</Suggestion.Option>)}
        </Suggestion.List>
      </Suggestion>
    </Field>;
}`,...(L=(h=o.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var v,A,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return <Field>
      <DevelopmentNotice />
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion filter={false}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map(label => <Suggestion.Option key={label} value={label.toLowerCase()}>
              {label}
            </Suggestion.Option>)}
        </Suggestion.List>
      </Suggestion>
    </Field>;
}`,...(y=(A=l.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var C,E,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  const [selected, setSelected] = useState<string[]>(['Oslo']);
  return <>
      <DevelopmentNotice />
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion multiple selected={selected} onSelectedChange={items => setSelected(items.map(item => item.value))}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {DATA_PLACES.map(place => <Suggestion.Option key={place} label={place} value={place}>
                {place}
                <div>Kommune</div>
              </Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{
      marginTop: 'var(--ds-size-4)'
    }} />

      <Paragraph style={{
      margin: 'var(--ds-size-2) 0'
    }}>Valgte reisemål: {selected.join(', ')}</Paragraph>

      <Button onClick={() => {
      setSelected(['Sogndal', 'Stavanger']);
    }}>
        Sett reisemål til Sogndal, Stavanger
      </Button>
    </>;
}`,...(f=(E=a.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var O,T,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return <Field>
      <DevelopmentNotice />
      <Label>Velg destinasjon</Label>
      <Suggestion creatable multiple>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff, trykk enter for å legge til</Suggestion.Empty>
          {DATA_PLACES.map(place => <Suggestion.Option key={place}>{place}</Suggestion.Option>)}
        </Suggestion.List>
      </Suggestion>
    </Field>;
}`,...(_=(T=g.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const G=["Preview","Multiple","Filter","ControlledMultiple","Creatable"];export{a as ControlledMultiple,g as Creatable,l as Filter,o as Multiple,i as Preview,G as __namedExportsOrder,q as default};
