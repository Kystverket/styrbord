import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as a,B as D,a as E,F as r,V as M,D as O,P as V,T as n}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as B}from"./index-BWu4c2F4.js";import{u as T}from"./use-checkbox-group-CJZ2xYnz.js";import{C as Se}from"./index-BTPDvBi0.js";import{u as He,P as u}from"./index-7YueyGDK.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const ze={title:"Form/Checkbox",component:a,tags:["autodocs","ds-override"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/checkbox/overview)"}}}},x={args:{label:"Checkbox label",description:"Description",disabled:!1,readOnly:!1,value:"value"}},F={args:{value:"value","aria-label":"Checkbox"}},d=c=>{const{getCheckboxProps:s,validationMessageProps:t}=T({value:["epost"],...c});return e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),e.jsx(r.Description,{children:"Velg alle alternativene som er relevante for deg."}),e.jsx(a,{label:"E-post",...s("epost")}),e.jsx(a,{label:"Telefon",...s("telefon")}),e.jsx(a,{label:"SMS",...s("sms")}),e.jsx(M,{...t})]})};d.args={name:"my-group",disabled:!1,error:""};const v=()=>e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Bekreft at du er over 18 år"}),e.jsx(r.Description,{children:"For at vi skal kunne sende deg opplysningen du ber om, må du bekrefte at du er myndig."}),e.jsx(a,{label:"Jeg bekrefter at jeg er over 18 år",value:"samtykke"})]}),S={render:d,args:{...d.args,name:"my-error",error:"Du må velge minst to kontaktalternativ"}},h=(c,s)=>{const t={barnehage:{label:"Barnehage"},grunnskole:{label:"Grunnskole"},videregaende:{label:"Videregående"}},{getCheckboxProps:i,validationMessageProps:b,value:g,setValue:m}=T({name:"my-controlled",value:["barnehage","videregaende"],...c}),L=(o,p)=>o.includes(p)?o.filter(Fe=>Fe!==p):o.concat(p),l=g.length>0;return e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Utdanningsnivå"}),Object.entries(t).map(([o,{label:p}])=>e.jsx(a,{id:`${s.id}-${o}`,label:p,...i(o)},o))]}),e.jsx(M,{...b}),e.jsx(O,{}),e.jsx(V,{children:"(Annet innhold)"}),e.jsx(O,{}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)"},children:[e.jsx(V,{children:l?"Viser innhold for:":"Viser alt innhold"}),l&&g.map(o=>e.jsx(Se.Removable,{"aria-label":`Slett ${t[o].label}`,onClick:()=>m(L(g,o)),children:t[o].label},o))]}),l&&e.jsx(D,{style:{width:"fit-content"},variant:"outline",onClick:()=>m([]),children:"Tøm filtre"})]})};h.parameters={layout:"padded",customStyles:{display:"flex",gap:"var(--ds-size-4)",flexDirection:"column"}};const H={args:{...d.args,name:"my-readonly",readOnly:!0},render:d},I={args:{...x.args,name:"my-disabled",disabled:!0},render:d},w=[{id:1,navn:"Lise Nordmann",epost:"lise@nordmann.no",telefon:"68051156"},{id:2,navn:"Kari Nordmann",epost:"kari@nordmann.no",telefon:"68059679"},{id:3,navn:"Ola Nordmann",epost:"ola@nordmann.no",telefon:"68055731"},{id:4,navn:"Per Nordmann",epost:"per@nordmann.no",telefon:"68059631"}],C=(c,s)=>{const{getCheckboxProps:t}=T({name:s.id,value:["2","3"],...c});return e.jsxs(n,{children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"1px"}}),e.jsx("col",{}),e.jsx("col",{})]}),e.jsx(n.Head,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{children:e.jsx(a,{"aria-label":"Velg alle",...t({allowIndeterminate:!0,value:"all"})})}),e.jsx(n.HeaderCell,{children:"Navn"}),e.jsx(n.HeaderCell,{children:"E-post"})]})}),e.jsx(n.Body,{children:w.map(i=>e.jsxs(n.Row,{children:[e.jsx(n.Cell,{children:e.jsx(a,{"aria-labelledby":`${s.id}-${i.id}-name`,...t(i.id.toString())})}),e.jsx(n.Cell,{id:`${s.id}-${i.id}-name`,children:i.navn}),e.jsx(n.Cell,{children:i.epost})]},i.id))})]})},k=c=>{const{getCheckboxProps:s,validationMessageProps:t,value:i}=T({value:["epost"],...c}),[b,g]=B.useState(!1);return e.jsxs(e.Fragment,{children:["Dine kommunikasjonskanaler: ",i.join(", "),b?e.jsxs(e.Fragment,{children:[e.jsxs(D,{onClick:()=>g(!1),children:[e.jsx(E,{material:"download","aria-hidden":!0})," Lagre"]}),e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),e.jsx(r.Description,{children:"Velg alle alternativene som er relevante for deg."}),e.jsx(a,{label:"E-post",...s("epost")}),e.jsx(a,{label:"Telefon",...s("telefon")}),e.jsx(a,{label:"SMS",...s("sms")}),e.jsx(M,{...t})]})]}):e.jsxs(D,{onClick:()=>g(!0),variant:"outline",children:[e.jsx(E,{material:"edit","aria-hidden":!0})," Rediger"]})]})},j=c=>{const[t,i]=B.useState(1),{getCheckboxProps:b}=T({...c}),g=Math.ceil(w.length/3),m=He({currentPage:t,setCurrentPage:i,totalPages:g,showPages:g}),L=B.useMemo(()=>{const l=(t-1)*3;return w.slice(l,l+3)},[t]);return e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(n.Head,{children:e.jsxs(n.Row,{children:[e.jsx(n.HeaderCell,{children:e.jsx(a,{"aria-label":"Select all",...b({allowIndeterminate:!0,value:"all"})})}),e.jsx(n.HeaderCell,{children:"Navn"}),e.jsx(n.HeaderCell,{children:"Epost"}),e.jsx(n.HeaderCell,{children:"Telefon"})]})}),e.jsx(n.Body,{children:L.map(l=>e.jsxs(n.Row,{children:[e.jsx(n.Cell,{children:e.jsx(a,{"aria-label":"Check "+l.id,...b({value:l.id.toString()})})}),e.jsx(n.Cell,{children:l.navn}),e.jsx(n.Cell,{children:l.epost}),e.jsx(n.Cell,{children:l.telefon})]},l.id))})]}),e.jsx(u,{children:e.jsxs(u.List,{children:[e.jsx(u.Item,{children:e.jsx(u.Button,{...m.prevButtonProps,children:"Forrige"})}),m.pages.map(({itemKey:l,buttonProps:o,page:p})=>e.jsx(u.Item,{children:typeof p=="number"&&e.jsx(u.Button,{...o,"aria-label":`Side ${p}`,children:p})},l)),e.jsx(u.Item,{children:e.jsx(u.Button,{...m.nextButtonProps,children:"Neste"})})]})})]})},P=()=>e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Hvor lenge har du jobbet i det offentlige?"}),e.jsx(a,{label:"I under ett år",value:"0-3"}),e.jsx(a,{label:"Fra 1-3 år",value:"1-3"}),e.jsx(a,{label:"Mer enn 3 år",value:"3+"})]}),f=()=>e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Hva liker du best med jobben din?"}),e.jsx(a,{label:"Jeg liker å jobbe med selvstendige oppgaver",value:"selvstendige"}),e.jsx(a,{label:"Jeg elsker møter",value:"moter"}),e.jsx(a,{label:"Lunsjen er best",value:"lunsj"}),e.jsx(a,{label:"Jeg liker å møte kolleger",value:"kolleger"})]}),y=()=>e.jsxs(r,{children:[e.jsx(r.Legend,{children:"Hva liker du best med jobben din?"}),e.jsx(a,{label:"Selvstendige oppgaver",value:"selvstendige"}),e.jsx(a,{label:"Møter",value:"moter"}),e.jsx(a,{label:"Lunsj",value:"lunsj"}),e.jsx(a,{label:"Kolleger",value:"kolleger"})]});d.__docgenInfo={description:"",methods:[],displayName:"Group"};v.__docgenInfo={description:"",methods:[],displayName:"OneOption"};h.__docgenInfo={description:"",methods:[],displayName:"Controlled"};C.__docgenInfo={description:"",methods:[],displayName:"InTable"};k.__docgenInfo={description:"",methods:[],displayName:"Conditional"};j.__docgenInfo={description:"",methods:[],displayName:"InTableWithPagination"};P.__docgenInfo={description:"",methods:[],displayName:"ContentEx1"};f.__docgenInfo={description:"",methods:[],displayName:"ContentEx2"};y.__docgenInfo={description:"",methods:[],displayName:"ContentEx3"};var _,R,N;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox label',
    description: 'Description',
    disabled: false,
    readOnly: false,
    value: 'value'
  }
}`,...(N=(R=x.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var G,$,J;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 'value',
    'aria-label': 'Checkbox'
  }
}`,...(J=($=F.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,W,A;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const {
    getCheckboxProps,
    validationMessageProps
  } = useCheckboxGroup({
    value: ['epost'],
    ...args
  });
  return <Fieldset>
      <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
      <Fieldset.Description>Velg alle alternativene som er relevante for deg.</Fieldset.Description>
      <Checkbox label="E-post" {...getCheckboxProps('epost')} />
      <Checkbox label="Telefon" {...getCheckboxProps('telefon')} />
      <Checkbox label="SMS" {...getCheckboxProps('sms')} />
      <ValidationMessage {...validationMessageProps} />
    </Fieldset>;
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var z,U,q;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Bekreft at du er over 18 år</Fieldset.Legend>
    <Fieldset.Description>
      For at vi skal kunne sende deg opplysningen du ber om, må du bekrefte at du er myndig.
    </Fieldset.Description>
    <Checkbox label="Jeg bekrefter at jeg er over 18 år" value="samtykke" />
  </Fieldset>`,...(q=(U=v.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Group,
  args: {
    ...Group.args,
    name: 'my-error',
    error: 'Du må velge minst to kontaktalternativ' // TODO: useCheckbox when hook is ready
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`(args, context) => {
  const choices: Choices = {
    barnehage: {
      label: 'Barnehage'
    },
    grunnskole: {
      label: 'Grunnskole'
    },
    videregaende: {
      label: 'Videregående'
    }
  };
  const {
    getCheckboxProps,
    validationMessageProps,
    value,
    setValue
  } = useCheckboxGroup({
    name: 'my-controlled',
    value: ['barnehage', 'videregaende'],
    ...args
  });
  const toggle = (haystack: string[], needle: string) => haystack.includes(needle) ? haystack.filter(v => v !== needle) : haystack.concat(needle);
  const isFiltered = value.length > 0;
  return <>
      <Fieldset>
        <Fieldset.Legend>Utdanningsnivå</Fieldset.Legend>
        {Object.entries(choices).map(([v, {
        label
      }]) => <Checkbox key={v} id={\`\${context.id}-\${v}\`} label={label} {...getCheckboxProps(v)} />)}
      </Fieldset>
      <ValidationMessage {...validationMessageProps} />
      <Divider />
      <Paragraph>(Annet innhold)</Paragraph>
      <Divider />
      <div style={{
      display: 'flex',
      gap: 'var(--ds-size-2)'
    }}>
        <Paragraph>{isFiltered ? 'Viser innhold for:' : 'Viser alt innhold'}</Paragraph>
        {isFiltered && value.map(v => <Chip.Removable key={v} aria-label={\`Slett \${choices[v].label}\`} onClick={() => setValue(toggle(value, v))}>
              {choices[v].label}
            </Chip.Removable>)}
      </div>
      {isFiltered && <Button style={{
      width: 'fit-content'
    }} variant="outline" onClick={() => setValue([])}>
          Tøm filtre
        </Button>}
    </>;
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,le;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Group.args,
    name: 'my-readonly',
    readOnly: true
  },
  render: Group
}`,...(le=(re=H.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,te,oe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Preview.args,
    name: 'my-disabled',
    disabled: true
  },
  render: Group
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,de,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`(args, context) => {
  const {
    getCheckboxProps
  } = useCheckboxGroup({
    name: context.id,
    value: ['2', '3'],
    ...args
  });
  return <Table>
      <colgroup>
        {/* ensure the first column only takes up the necessary space */}
        <col style={{
        width: '1px'
      }} />
        <col />
        <col />
      </colgroup>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>
            <Checkbox aria-label="Velg alle" {...getCheckboxProps({
            allowIndeterminate: true,
            value: 'all'
          })} />
          </Table.HeaderCell>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>E-post</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {tableData.map(person => <Table.Row key={person.id}>
            <Table.Cell>
              <Checkbox aria-labelledby={\`\${context.id}-\${person.id}-name\`} {...getCheckboxProps(person.id.toString())} />
            </Table.Cell>
            <Table.Cell id={\`\${context.id}-\${person.id}-name\`}>{person.navn}</Table.Cell>
            <Table.Cell>{person.epost}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>;
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ge,pe,ue;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const {
    getCheckboxProps,
    validationMessageProps,
    value
  } = useCheckboxGroup({
    value: ['epost'],
    ...args
  });
  const [open, setOpen] = useState(false);
  return <>
      Dine kommunikasjonskanaler: {value.join(', ')}
      {open ? <>
          <Button onClick={() => setOpen(false)}>
            <Icon material="download" aria-hidden /> Lagre
          </Button>
          <Fieldset>
            <Fieldset.Legend>Hvordan vil du helst at vi skal kontakte deg?</Fieldset.Legend>
            <Fieldset.Description>Velg alle alternativene som er relevante for deg.</Fieldset.Description>
            <Checkbox label="E-post" {...getCheckboxProps('epost')} />
            <Checkbox label="Telefon" {...getCheckboxProps('telefon')} />
            <Checkbox label="SMS" {...getCheckboxProps('sms')} />
            <ValidationMessage {...validationMessageProps} />
          </Fieldset>
        </> : <Button onClick={() => setOpen(true)} variant="outline">
          <Icon material="edit" aria-hidden /> Rediger
        </Button>}
    </>;
}`,...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,me,he;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    getCheckboxProps
  } = useCheckboxGroup({
    ...args
  });
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const pagination = usePagination({
    currentPage,
    setCurrentPage,
    totalPages,
    showPages: totalPages
  });

  // Compute the slice of users to display on the current page
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return tableData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);
  return <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox aria-label="Select all" {...getCheckboxProps({
              allowIndeterminate: true,
              value: 'all'
            })} />
            </Table.HeaderCell>
            <Table.HeaderCell>Navn</Table.HeaderCell>
            <Table.HeaderCell>Epost</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {currentData.map(user => <Table.Row key={user.id}>
              <Table.Cell>
                <Checkbox aria-label={'Check ' + user.id} {...getCheckboxProps({
              value: user.id.toString()
            })} />
              </Table.Cell>
              <Table.Cell>{user.navn}</Table.Cell>
              <Table.Cell>{user.epost}</Table.Cell>
              <Table.Cell>{user.telefon}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
      <Pagination>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...pagination.prevButtonProps}>Forrige</Pagination.Button>
          </Pagination.Item>
          {pagination.pages.map(({
          itemKey,
          buttonProps,
          page
        }) => <Pagination.Item key={itemKey}>
              {typeof page === 'number' && <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </Pagination.Button>}
            </Pagination.Item>)}
          <Pagination.Item>
            <Pagination.Button {...pagination.nextButtonProps}>Neste</Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    </div>;
}`,...(he=(me=j.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,ve,Ce;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hvor lenge har du jobbet i det offentlige?</Fieldset.Legend>
    <Checkbox label="I under ett år" value="0-3" />
    <Checkbox label="Fra 1-3 år" value="1-3" />
    <Checkbox label="Mer enn 3 år" value="3+" />
  </Fieldset>`,...(Ce=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var ke,je,Pe;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hva liker du best med jobben din?</Fieldset.Legend>
    <Checkbox label="Jeg liker å jobbe med selvstendige oppgaver" value="selvstendige" />
    <Checkbox label="Jeg elsker møter" value="moter" />
    <Checkbox label="Lunsjen er best" value="lunsj" />
    <Checkbox label="Jeg liker å møte kolleger" value="kolleger" />
  </Fieldset>`,...(Pe=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var fe,ye,Te;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hva liker du best med jobben din?</Fieldset.Legend>
    <Checkbox label="Selvstendige oppgaver" value="selvstendige" />
    <Checkbox label="Møter" value="moter" />
    <Checkbox label="Lunsj" value="lunsj" />
    <Checkbox label="Kolleger" value="kolleger" />
  </Fieldset>`,...(Te=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};const Ue=["Preview","AriaLabel","Group","OneOption","WithError","Controlled","ReadOnly","Disabled","InTable","Conditional","InTableWithPagination","ContentEx1","ContentEx2","ContentEx3"];export{F as AriaLabel,k as Conditional,P as ContentEx1,f as ContentEx2,y as ContentEx3,h as Controlled,I as Disabled,d as Group,C as InTable,j as InTableWithPagination,v as OneOption,x as Preview,H as ReadOnly,S as WithError,Ue as __namedExportsOrder,ze as default};
