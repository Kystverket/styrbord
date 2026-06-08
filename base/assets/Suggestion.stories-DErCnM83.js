import{r as T,j as e}from"./iframe-D4Hqf4fa.js";import{o as n,B as D,i as B}from"./Dialog-C-Mo4nZa.js";import"./Details-p7PQ4c_S.js";import"./KyvDivider-DK8meRzL.js";import"./typography-DPFVxrBX.js";import"./KyvSpinner-Bu4DO5TP.js";import"./skillingsbuoye-B-7AkoVV.js";import"./Logo-ChR1aG-J.js";import{D as P,P as I}from"./tooltip-Cy3PTerb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPs2pr-R.js";import"./index-BvaNcRuL.js";const u=()=>e.jsx(B,{title:"Under utvikling",level:"warning",text:"Komponenten er fortsatt under utvikling og kan endre seg.",style:{marginBottom:"var(--ds-size-6)"}}),W={title:"Components/Suggestion",component:n,tags:["autodocs","ds-override"],args:{label:"",error:""},parameters:{docs:{description:{component:`**USE AT YOUR OWN RISK**

[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/suggestion/overview)`}}}},i={args:{label:"Velg en destinasjon"},render:r=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsxs(n,{...r,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(t=>e.jsxs(n.Option,{label:t,value:t,children:[t,e.jsx("div",{children:"Kommune"})]},t))]})]})]})}},a={args:{label:"Velg en destinasjon",multiple:!0},render:r=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsxs(n,{...r,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),s.map(t=>e.jsx(n.Option,{children:t},t))]})]})]})}},l={args:{label:"Velg destinasjoner",multiple:!0},render:function(s){const t=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"],f=s,[m,d]=T.useState(["Oslo"]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsxs(n,{...f,selected:m,onSelectedChange:o=>d(o.map(O=>O.value)),children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff"}),t.map(o=>e.jsxs(n.Option,{label:o,value:o,children:[o,e.jsx("div",{children:"Kommune"})]},o))]})]}),e.jsx(P,{style:{marginTop:"var(--ds-size-4)"}}),e.jsxs(I,{style:{margin:"var(--ds-size-2) 0"},children:["Valgte reisemål: ",m.join(", ")]}),e.jsx(D,{onClick:()=>{d(["Sogndal","Stavanger"])},children:"Sett reisemål til Sogndal, Stavanger"})]})}},g={args:{label:"Velg destinasjon",creatable:!0,multiple:!0},render:r=>{const s=["Sogndal","Oslo","Brønnøysund","Stavanger","Trondheim","Bergen","Lillestrøm"];return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsxs(n,{...r,children:[e.jsx(n.Input,{}),e.jsx(n.Clear,{}),e.jsxs(n.List,{children:[e.jsx(n.Empty,{children:"Ingen treff, trykk enter for å legge til"}),s.map(t=>e.jsx(n.Option,{children:t},t))]})]})]})}};var p,c,S;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Velg en destinasjon'
  },
  render: args => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
    return <>
        <DevelopmentNotice />
        <Suggestion {...args}>
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
      </>;
  }
}`,...(S=(c=i.parameters)==null?void 0:c.docs)==null?void 0:S.source}}};var j,v,x;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Velg en destinasjon',
    multiple: true
  },
  render: args => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
    return <>
        <DevelopmentNotice />
        <Suggestion {...args}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {DATA_PLACES.map(place => <Suggestion.Option key={place}>{place}</Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </>;
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,h,y;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Velg destinasjoner',
    multiple: true
  },
  render: function Render(args) {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
    const multipleArgs = args as MultipleSuggestionProps;
    const [selected, setSelected] = useState<string[]>(['Oslo']);
    return <>
        <DevelopmentNotice />
        <Suggestion {...multipleArgs} selected={selected} onSelectedChange={(items: SuggestionItem[]) => setSelected(items.map(item => item.value))}>
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
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var L,C,E;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Velg destinasjon',
    creatable: true,
    multiple: true
  },
  render: args => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
    return <>
        <DevelopmentNotice />
        <Suggestion {...args}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff, trykk enter for å legge til</Suggestion.Empty>
            {DATA_PLACES.map(place => <Suggestion.Option key={place}>{place}</Suggestion.Option>)}
          </Suggestion.List>
        </Suggestion>
      </>;
  }
}`,...(E=(C=g.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Y=["Preview","Multiple","ControlledMultiple","Creatable"];export{l as ControlledMultiple,g as Creatable,a as Multiple,i as Preview,Y as __namedExportsOrder,W as default};
