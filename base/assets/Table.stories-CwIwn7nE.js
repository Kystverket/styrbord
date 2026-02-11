import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as l,c as g,d as be}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import{B as Ce}from"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as R}from"./index-BWu4c2F4.js";import{u as Te}from"./use-checkbox-group-CJZ2xYnz.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const Fe={title:"Components/Table",component:l,tags:["autodocs","ds-override"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/table/overview)"}}}},i=n=>e.jsxs(l,{...n,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{children:"Header 2"}),e.jsx(l.HeaderCell,{children:"Header 3"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 1"}),e.jsx(l.Cell,{children:"Cell 2"}),e.jsx(l.Cell,{children:"Cell 3"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 4"}),e.jsx(l.Cell,{children:"Cell 5"}),e.jsx(l.Cell,{children:"Cell 6"})]})]}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Footer 1"}),e.jsx(l.HeaderCell,{children:"Footer 2"}),e.jsx(l.HeaderCell,{children:"Footer 3"})]})})]});i.args={zebra:!1,stickyHeader:!1,header:"opaque",border:!0,hover:!1,body:"white"};const c=n=>e.jsxs(l,{style:{tableLayout:"fixed",fontVariantNumeric:"tabular-nums"},...n,children:[e.jsx("caption",{children:"Antall søknader per måned"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Måned"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"2023"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"2024"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Januar"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"1 230"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"1 450"})]}),e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Februar"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"980"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"1 120"})]}),e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"row",children:"Mars"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"1 150"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"1 300"})]})]})]});c.args={zebra:!0,border:!0};const he=[{id:1,navn:"Lise Nordmann",epost:"lise@nordmann.no",telefon:"22345678"},{id:2,navn:"Kari Nordmann",epost:"kari@nordmann.no",telefon:"87654321"},{id:3,navn:"Ola Nordmann",epost:"ola@nordmann.no",telefon:"32345678"},{id:4,navn:"Per Nordmann",epost:"per@nordmann.no",telefon:"12345678"}],b=n=>{const[r,a]=R.useState(null),[o,w]=R.useState(void 0),u=d=>{r===d&&o==="descending"?(a(null),w(void 0)):(a(d),w(r===d&&o==="ascending"?"descending":"ascending"))},ce=[...he].sort((d,y)=>r===null?0:d[r]<y[r]?o==="ascending"?-1:1:d[r]>y[r]?o==="ascending"?1:-1:0);return e.jsxs(l,{...n,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:r==="navn"?o:"none",onClick:()=>u("navn"),children:"Navn"}),e.jsx(l.HeaderCell,{children:"Epost"}),e.jsx(l.HeaderCell,{sort:r==="telefon"?o:"none",onClick:()=>u("telefon"),children:"Telefon"})]})}),e.jsx(l.Body,{children:ce.map(d=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:d.navn}),e.jsx(l.Cell,{children:d.epost}),e.jsx(l.Cell,{children:d.telefon})]},d.id))})]})};b.parameters={docs:{source:{type:"code"}}};const s=n=>{const r=Array.from({length:50},(a,o)=>o+1);return e.jsxs(l,{...n,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{children:"Header 2"}),e.jsx(l.HeaderCell,{children:"Header 3"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))})]})};s.args={stickyHeader:!0,tabIndex:0};s.parameters={customStyles:{height:"280px",overflow:"auto",padding:0}};const C=n=>{const{getCheckboxProps:r}=Te({name:"my-checkbox",value:["Kari Nordmann"]});return e.jsxs(l,{...n,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:e.jsx(g,{"aria-label":"Velg alle ansatte",...r({allowIndeterminate:!0})})}),e.jsx(l.HeaderCell,{children:"Navn"}),e.jsx(l.HeaderCell,{children:"Stilling"}),e.jsx(l.HeaderCell,{children:"Kommentar"})]})}),e.jsx(l.Body,{children:["Kari Nordmann","Ola Nordmann","Jens Nordmann"].map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(g,{"aria-label":`Velg ${a}`,...r(String(a))})}),e.jsx(l.Cell,{children:a}),e.jsx(l.Cell,{children:"Rådgiver"}),e.jsx(l.Cell,{children:e.jsx(be,{"data-size":"sm","aria-label":`Textfield ${a}`})})]},a))})]})};C.parameters={docs:{source:{type:"code"}}};const T=n=>{const r=Array.from({length:3},(a,o)=>o+1);return e.jsxs(l,{...n,style:{tableLayout:"fixed"},children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{children:"Header 2"}),e.jsx(l.HeaderCell,{children:"Header 3"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))})]})},h=n=>{const r=Array.from({length:50},(a,o)=>o+1);return e.jsxs(l,{...n,children:[e.jsxs(l.Head,{children:[e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]}),e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 3"}),e.jsx(l.HeaderCell,{children:"Header 4"}),e.jsx(l.HeaderCell,{children:"Header 5"})]})]}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))})]})},t=n=>{const r=Array.from({length:3},(a,o)=>o+1);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{...n,children:[e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))})]}),e.jsxs(l,{...n,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 3"}),e.jsx(l.HeaderCell,{children:"Header 4"}),e.jsx(l.HeaderCell,{children:"Header 5"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))})]}),e.jsxs(l,{...n,children:[e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`}),e.jsx(l.Cell,{children:`Cell ${a}3`})]},a))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Footer 1"}),e.jsx(l.HeaderCell,{children:"Footer 2"}),e.jsx(l.HeaderCell,{children:"Footer 3"})]})})]})]})};t.args={border:!0};t.parameters={customStyles:{display:"grid",gap:"1rem"}};const m=n=>{const r=Array.from({length:4},(a,o)=>o+1);return e.jsxs(Ce,{gap:16,children:[e.jsxs(l,{...n,header:"opaque",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Neutral"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]}),e.jsxs(l,{...n,border:!0,header:"opaque","data-color":"primary",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Primary with Border"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]}),e.jsxs(l,{...n,header:"opaque","data-color":"accent",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Accent"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]})]})},H=n=>{const r=Array.from({length:20},(a,o)=>o+1);return e.jsxs(l,{...n,"data-color":"primary",zebra:!0,children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Zebra 1"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]})},x=n=>{const r=Array.from({length:10},(a,o)=>o+1);return e.jsxs(l,{...n,"data-color":"primary",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]})},p=n=>{const r=Array.from({length:10},(a,o)=>o+1);return e.jsxs(l,{...n,"data-color":"accent",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Header 1"}),e.jsx(l.HeaderCell,{colSpan:2,children:"Header 2"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsx(l.Cell,{children:`Cell ${a}2`})]},a))})]})},j=n=>{const r=Array.from({length:30},(a,o)=>o+1);return e.jsxs(l,{...n,"data-color":"neutral","cell-padding":"md",border:!0,header:!0,radius:"md",body:"white",children:[e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{children:"Saksnr."}),e.jsx(l.HeaderCell,{children:"Tittel"}),e.jsx(l.HeaderCell,{sort:"ascending",children:"Opprettet"})]})}),e.jsx(l.Body,{children:r.map(a=>e.jsxs(l.Row,{"data-unread":a%5===0?!0:void 0,"data-clickable":!0,children:[e.jsx(l.Cell,{children:`Cell ${a}1`}),e.jsxs(l.Cell,{children:[`Cell ${a}2`," lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"]}),e.jsx(l.Cell,{"data-nowrap":!0,children:`Cell ${a}3`})]},a))})]})};i.__docgenInfo={description:"",methods:[],displayName:"Preview"};c.__docgenInfo={description:"",methods:[],displayName:"Numbers"};b.__docgenInfo={description:"",methods:[],displayName:"Sortable"};s.__docgenInfo={description:"",methods:[],displayName:"StickyHeader"};C.__docgenInfo={description:"",methods:[],displayName:"WithFormElements"};T.__docgenInfo={description:"",methods:[],displayName:"FixedTable"};h.__docgenInfo={description:"",methods:[],displayName:"MultipleHeaderRows"};t.__docgenInfo={description:"",methods:[],displayName:"WithBorder"};m.__docgenInfo={description:"",methods:[],displayName:"OpaqueHeader"};H.__docgenInfo={description:"",methods:[],displayName:"Zebra"};x.__docgenInfo={description:"",methods:[],displayName:"ColorPrimary"};p.__docgenInfo={description:"",methods:[],displayName:"ColorAccent"};j.__docgenInfo={description:"",methods:[],displayName:"Datatable"};var f,$,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Table {...args}>
      <caption>Table caption</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell 1</Table.Cell>
          <Table.Cell>Cell 2</Table.Cell>
          <Table.Cell>Cell 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell 4</Table.Cell>
          <Table.Cell>Cell 5</Table.Cell>
          <Table.Cell>Cell 6</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.HeaderCell>Footer 1</Table.HeaderCell>
          <Table.HeaderCell>Footer 2</Table.HeaderCell>
          <Table.HeaderCell>Footer 3</Table.HeaderCell>
        </Table.Row>
      </Table.Foot>
    </Table>;
}`,...(B=($=i.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var S,_,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => <Table style={{
  tableLayout: 'fixed',
  fontVariantNumeric: 'tabular-nums'
}} {...args}>
    <caption>Antall søknader per måned</caption>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell scope="col">Måned</Table.HeaderCell>
        <Table.HeaderCell scope="col" style={{
        textAlign: 'right'
      }}>
          2023
        </Table.HeaderCell>
        <Table.HeaderCell scope="col" style={{
        textAlign: 'right'
      }}>
          2024
        </Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.HeaderCell scope="row">Januar</Table.HeaderCell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>1 230</Table.Cell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>1 450</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell scope="row">Februar</Table.HeaderCell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>980</Table.Cell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>1 120</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell scope="row">Mars</Table.HeaderCell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>1 150</Table.Cell>
        <Table.Cell style={{
        textAlign: 'right'
      }}>1 300</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var F,A,N;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [sortField, setSortField] = useState<keyof (typeof dummyData)[0] | null>(null);
  const [sortDirection, setSortDirection] = useState<TableHeaderCellProps['sort']>(undefined);
  const handleSort = (field: keyof (typeof dummyData)[0]) => {
    if (sortField === field && sortDirection === 'descending') {
      setSortField(null);
      setSortDirection(undefined);
    } else {
      setSortField(field);
      setSortDirection(sortField === field && sortDirection === 'ascending' ? 'descending' : 'ascending');
    }
  };
  const sortedData = [...dummyData].sort((a, b) => {
    if (sortField === null) return 0;
    if (a[sortField] < b[sortField]) return sortDirection === 'ascending' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'ascending' ? 1 : -1;
    return 0;
  });
  return <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell sort={sortField === 'navn' ? sortDirection : 'none'} onClick={() => handleSort('navn')}>
            Navn
          </Table.HeaderCell>
          <Table.HeaderCell>Epost</Table.HeaderCell>
          <Table.HeaderCell sort={sortField === 'telefon' ? sortDirection : 'none'} onClick={() => handleSort('telefon')}>
            Telefon
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.navn}</Table.Cell>
            <Table.Cell>{row.epost}</Table.Cell>
            <Table.Cell>{row.telefon}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(N=(A=b.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var v,D,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 50
  }, (_, i) => i + 1);
  return <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,q,O;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const {
    getCheckboxProps
  } = useCheckboxGroup({
    name: 'my-checkbox',
    value: ['Kari Nordmann']
  });
  return <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox aria-label="Velg alle ansatte" {...getCheckboxProps({
            allowIndeterminate: true
          })} />
          </Table.HeaderCell>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>Stilling</Table.HeaderCell>
          <Table.HeaderCell>Kommentar</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {['Kari Nordmann', 'Ola Nordmann', 'Jens Nordmann'].map(row => <Table.Row key={row}>
            <Table.Cell>
              <Checkbox aria-label={\`Velg \${row}\`} {...getCheckboxProps(String(row))} />
            </Table.Cell>
            <Table.Cell>{row}</Table.Cell>
            <Table.Cell>Rådgiver</Table.Cell>
            <Table.Cell>
              <Textfield data-size="sm" aria-label={\`Textfield \${row}\`} />
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(O=(q=C.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var E,K,M;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 3
  }, (_, i) => i + 1);
  return <Table {...args} style={{
    tableLayout: 'fixed'
  }}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(M=(K=T.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var z,V,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 50
  }, (_, i) => i + 1);
  return <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
          <Table.HeaderCell>Header 4</Table.HeaderCell>
          <Table.HeaderCell>Header 5</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var L,Z,J;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 3
  }, (_, i) => i + 1);
  return <>
      <Table {...args}>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      <Table {...args}>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Header 3</Table.HeaderCell>
            <Table.HeaderCell>Header 4</Table.HeaderCell>
            <Table.HeaderCell>Header 5</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      <Table {...args}>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}3\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            <Table.HeaderCell>Footer 1</Table.HeaderCell>
            <Table.HeaderCell>Footer 2</Table.HeaderCell>
            <Table.HeaderCell>Footer 3</Table.HeaderCell>
          </Table.Row>
        </Table.Foot>
      </Table>
    </>;
}`,...(J=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var G,Q,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 4
  }, (_, i) => i + 1);
  return <Box gap={16}>
      <Table {...args} header="opaque">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Neutral</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      <Table {...args} border header="opaque" data-color="primary">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Primary with Border</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      <Table {...args} header="opaque" data-color="accent">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Accent</Table.HeaderCell>
            <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map(row => <Table.Row key={row}>
              <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
              <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </Box>;
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;H.parameters={...H.parameters,docs:{...(X=H.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 20
  }, (_, i) => i + 1);
  return <Table {...args} data-color="primary" zebra>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Zebra 1</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(ee=(Y=H.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var le,ae,re;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 10
  }, (_, i) => i + 1);
  return <Table {...args} data-color="primary">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,oe,de;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 10
  }, (_, i) => i + 1);
  return <Table {...args} data-color="accent">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell colSpan={2}>Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row}>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>{\`Cell \${row}2\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(de=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,te,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const rows = Array.from({
    length: 30
  }, (_, i) => i + 1);
  return <Table {...args} data-color="neutral" cell-padding="md" border header radius="md" body="white">
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Saksnr.</Table.HeaderCell>
          <Table.HeaderCell>Tittel</Table.HeaderCell>
          <Table.HeaderCell sort="ascending">Opprettet</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => <Table.Row key={row} data-unread={row % 5 === 0 ? true : undefined} data-clickable>
            <Table.Cell>{\`Cell \${row}1\`}</Table.Cell>
            <Table.Cell>
              {\`Cell \${row}2\`} lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
              ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </Table.Cell>
            <Table.Cell data-nowrap>{\`Cell \${row}3\`}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(ie=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};const Ae=["Preview","Numbers","Sortable","StickyHeader","WithFormElements","FixedTable","MultipleHeaderRows","WithBorder","OpaqueHeader","Zebra","ColorPrimary","ColorAccent","Datatable"];export{p as ColorAccent,x as ColorPrimary,j as Datatable,T as FixedTable,h as MultipleHeaderRows,c as Numbers,m as OpaqueHeader,i as Preview,b as Sortable,s as StickyHeader,t as WithBorder,C as WithFormElements,H as Zebra,Ae as __namedExportsOrder,Fe as default};
