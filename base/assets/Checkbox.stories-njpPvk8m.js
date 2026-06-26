import{r as B,j as e}from"./iframe-CcRwlcHT.js";import{B as w,I as _,a}from"./Dialog-BUIqbhtH.js";import"./shipTypes-hFnSBndP.js";import"./Details-B3M6BjQ7.js";import"./KyvDivider-CSqLkURi.js";import"./typography-DBGIi4O5.js";import"./KyvSpinner-D69tDHsA.js";import"./skillingsbuoye-DQ3cnKkE.js";import"./Logo-DIy8URU2.js";import{C as n,F as l,V as O,D as E,P as V,a as De,b as p}from"./tooltip-BWbZtot7.js";import{u as F}from"./use-checkbox-group-BaStAtq9.js";import{u as Be}from"./use-pagination-BjuJtb-P.js";import"./preload-helper-Dp1pzeXC.js";import"./index-hn6V7SU2.js";import"./index-Cx5WKcyR.js";const Ue={title:"Form/Checkbox",component:n,tags:["autodocs","ds-override"],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/checkbox/overview)"}}}},h={args:{label:"Checkbox label",description:"Description",disabled:!1,readOnly:!1,value:"value"}},S={args:{value:"value","aria-label":"Checkbox"}},d=c=>{const{getCheckboxProps:s,validationMessageProps:t}=F({value:["epost"],...c});return e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),e.jsx(l.Description,{children:"Velg alle alternativene som er relevante for deg."}),e.jsx(n,{label:"E-post",...s("epost")}),e.jsx(n,{label:"Telefon",...s("telefon")}),e.jsx(n,{label:"SMS",...s("sms")}),e.jsx(O,{...t})]})};d.args={name:"my-group",disabled:!1,error:""};const x=()=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Bekreft at du er over 18 år"}),e.jsx(l.Description,{children:"For at vi skal kunne sende deg opplysningen du ber om, må du bekrefte at du er myndig."}),e.jsx(n,{label:"Jeg bekrefter at jeg er over 18 år",value:"samtykke"})]}),H={render:d,args:{...d.args,name:"my-error",error:"Du må velge minst to kontaktalternativ"}},v=(c,s)=>{const t={barnehage:{label:"Barnehage"},grunnskole:{label:"Grunnskole"},videregaende:{label:"Videregående"}},{getCheckboxProps:i,validationMessageProps:b,value:u,setValue:m}=F({name:"my-controlled",value:["barnehage","videregaende"],...c}),D=(o,g)=>o.includes(g)?o.filter(Ie=>Ie!==g):o.concat(g),r=u.length>0;return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Utdanningsnivå"}),Object.entries(t).map(([o,{label:g}])=>e.jsx(n,{id:`${s.id}-${o}`,label:g,...i(o)},o))]}),e.jsx(O,{...b}),e.jsx(E,{}),e.jsx(V,{children:"(Annet innhold)"}),e.jsx(E,{}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)"},children:[e.jsx(V,{children:r?"Viser innhold for:":"Viser alt innhold"}),r&&u.map(o=>e.jsx(De.Removable,{"aria-label":`Slett ${t[o].label}`,onClick:()=>m(D(u,o)),children:t[o].label},o))]}),r&&e.jsx(w,{style:{width:"fit-content"},variant:"outline",onClick:()=>m([]),children:"Tøm filtre"})]})};v.parameters={layout:"padded",customStyles:{display:"flex",gap:"var(--ds-size-4)",flexDirection:"column"}};const L={args:{...d.args,name:"my-readonly",readOnly:!0},render:d},I={args:{...h.args,name:"my-disabled",disabled:!0},render:d},M=[{id:1,navn:"Lise Nordmann",epost:"lise@nordmann.no",telefon:"68051156"},{id:2,navn:"Kari Nordmann",epost:"kari@nordmann.no",telefon:"68059679"},{id:3,navn:"Ola Nordmann",epost:"ola@nordmann.no",telefon:"68055731"},{id:4,navn:"Per Nordmann",epost:"per@nordmann.no",telefon:"68059631"}],k=(c,s)=>{const{getCheckboxProps:t}=F({name:s.id,value:["2","3"],...c});return e.jsxs(a,{children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"1px"}}),e.jsx("col",{}),e.jsx("col",{})]}),e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(n,{"aria-label":"Velg alle",...t({allowIndeterminate:!0,value:"all"})})}),e.jsx(a.HeaderCell,{children:"Navn"}),e.jsx(a.HeaderCell,{children:"E-post"})]})}),e.jsx(a.Body,{children:M.map(i=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:e.jsx(n,{"aria-labelledby":`${s.id}-${i.id}-name`,...t(i.id.toString())})}),e.jsx(a.Cell,{id:`${s.id}-${i.id}-name`,children:i.navn}),e.jsx(a.Cell,{children:i.epost})]},i.id))})]})},C=c=>{const{getCheckboxProps:s,validationMessageProps:t,value:i}=F({value:["epost"],...c}),[b,u]=B.useState(!1);return e.jsxs(e.Fragment,{children:["Dine kommunikasjonskanaler: ",i.join(", "),b?e.jsxs(e.Fragment,{children:[e.jsxs(w,{onClick:()=>u(!1),children:[e.jsx(_,{material:"download","aria-hidden":!0})," Lagre"]}),e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Hvordan vil du helst at vi skal kontakte deg?"}),e.jsx(l.Description,{children:"Velg alle alternativene som er relevante for deg."}),e.jsx(n,{label:"E-post",...s("epost")}),e.jsx(n,{label:"Telefon",...s("telefon")}),e.jsx(n,{label:"SMS",...s("sms")}),e.jsx(O,{...t})]})]}):e.jsxs(w,{onClick:()=>u(!0),variant:"outline",children:[e.jsx(_,{material:"edit","aria-hidden":!0})," Rediger"]})]})},j=c=>{const[t,i]=B.useState(1),{getCheckboxProps:b}=F({...c}),u=Math.ceil(M.length/3),m=Be({currentPage:t,setCurrentPage:i,totalPages:u,showPages:u}),D=B.useMemo(()=>{const r=(t-1)*3;return M.slice(r,r+3)},[t]);return e.jsxs("div",{children:[e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(n,{"aria-label":"Select all",...b({allowIndeterminate:!0,value:"all"})})}),e.jsx(a.HeaderCell,{children:"Navn"}),e.jsx(a.HeaderCell,{children:"Epost"}),e.jsx(a.HeaderCell,{children:"Telefon"})]})}),e.jsx(a.Body,{children:D.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:e.jsx(n,{"aria-label":"Check "+r.id,...b({value:r.id.toString()})})}),e.jsx(a.Cell,{children:r.navn}),e.jsx(a.Cell,{children:r.epost}),e.jsx(a.Cell,{children:r.telefon})]},r.id))})]}),e.jsx(p,{children:e.jsxs(p.List,{children:[e.jsx(p.Item,{children:e.jsx(p.Button,{...m.prevButtonProps,children:"Forrige"})}),m.pages.map(({itemKey:r,buttonProps:o,page:g})=>e.jsx(p.Item,{children:typeof g=="number"&&e.jsx(p.Button,{...o,"aria-label":`Side ${g}`,children:g})},r)),e.jsx(p.Item,{children:e.jsx(p.Button,{...m.nextButtonProps,children:"Neste"})})]})})]})},P=()=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Hvor lenge har du jobbet i det offentlige?"}),e.jsx(n,{label:"I under ett år",value:"0-3"}),e.jsx(n,{label:"Fra 1-3 år",value:"1-3"}),e.jsx(n,{label:"Mer enn 3 år",value:"3+"})]}),f=()=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Hva liker du best med jobben din?"}),e.jsx(n,{label:"Jeg liker å jobbe med selvstendige oppgaver",value:"selvstendige"}),e.jsx(n,{label:"Jeg elsker møter",value:"moter"}),e.jsx(n,{label:"Lunsjen er best",value:"lunsj"}),e.jsx(n,{label:"Jeg liker å møte kolleger",value:"kolleger"})]}),y=()=>e.jsxs(l,{children:[e.jsx(l.Legend,{children:"Hva liker du best med jobben din?"}),e.jsx(n,{label:"Selvstendige oppgaver",value:"selvstendige"}),e.jsx(n,{label:"Møter",value:"moter"}),e.jsx(n,{label:"Lunsj",value:"lunsj"}),e.jsx(n,{label:"Kolleger",value:"kolleger"})]}),T=()=>e.jsxs(l,{style:{maxHeight:"300px"},children:[e.jsx(l.Legend,{children:"Hva liker du best med jobben din?"}),e.jsx(n,{label:"Selvstendige oppgaver",value:"selvstendige",variant:"outline"}),e.jsx(n,{label:"Møter",value:"moter",variant:"outline"}),e.jsx(n,{label:"Lunsj",value:"lunsj",variant:"outline"}),e.jsx(n,{label:"Kolleger",value:"kolleger",variant:"outline"}),e.jsx(n,{label:"Selvstendige oppgaver",value:"selvstendige",variant:"outline"}),e.jsx(n,{label:"Møter",value:"moter",variant:"outline"}),e.jsx(n,{label:"Lunsj",value:"lunsj",variant:"outline"}),e.jsx(n,{label:"Kolleger",value:"kolleger",variant:"outline"})]});d.__docgenInfo={description:"",methods:[],displayName:"Group"};x.__docgenInfo={description:"",methods:[],displayName:"OneOption"};v.__docgenInfo={description:"",methods:[],displayName:"Controlled"};k.__docgenInfo={description:"",methods:[],displayName:"InTable"};C.__docgenInfo={description:"",methods:[],displayName:"Conditional"};j.__docgenInfo={description:"",methods:[],displayName:"InTableWithPagination"};P.__docgenInfo={description:"",methods:[],displayName:"ContentEx1"};f.__docgenInfo={description:"",methods:[],displayName:"ContentEx2"};y.__docgenInfo={description:"",methods:[],displayName:"ContentEx3"};T.__docgenInfo={description:"",methods:[],displayName:"Outline"};var N,R,G;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox label',
    description: 'Description',
    disabled: false,
    readOnly: false,
    value: 'value'
  }
}`,...(G=(R=h.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var $,K,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 'value',
    'aria-label': 'Checkbox'
  }
}`,...(J=(K=S.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var W,A,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(z=(A=d.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var U,q,Q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Bekreft at du er over 18 år</Fieldset.Legend>
    <Fieldset.Description>
      For at vi skal kunne sende deg opplysningen du ber om, må du bekrefte at du er myndig.
    </Fieldset.Description>
    <Checkbox label="Jeg bekrefter at jeg er over 18 år" value="samtykke" />
  </Fieldset>`,...(Q=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Y,Z;H.parameters={...H.parameters,docs:{...(X=H.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: Group,
  args: {
    ...Group.args,
    name: 'my-error',
    error: 'Du må velge minst to kontaktalternativ' // TODO: useCheckbox when hook is ready
  }
}`,...(Z=(Y=H.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`(args, context) => {
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
}`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,re,se;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Group.args,
    name: 'my-readonly',
    readOnly: true
  },
  render: Group
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Preview.args,
    name: 'my-disabled',
    disabled: true
  },
  render: Group
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,ce,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`(args, context) => {
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
}`,...(ue=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,pe,be;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
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
}`,...(be=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var me,ve,he;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
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
}`,...(he=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var xe,ke,Ce;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hvor lenge har du jobbet i det offentlige?</Fieldset.Legend>
    <Checkbox label="I under ett år" value="0-3" />
    <Checkbox label="Fra 1-3 år" value="1-3" />
    <Checkbox label="Mer enn 3 år" value="3+" />
  </Fieldset>`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var je,Pe,fe;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hva liker du best med jobben din?</Fieldset.Legend>
    <Checkbox label="Jeg liker å jobbe med selvstendige oppgaver" value="selvstendige" />
    <Checkbox label="Jeg elsker møter" value="moter" />
    <Checkbox label="Lunsjen er best" value="lunsj" />
    <Checkbox label="Jeg liker å møte kolleger" value="kolleger" />
  </Fieldset>`,...(fe=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:fe.source}}};var ye,Te,Fe;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`() => <Fieldset>
    <Fieldset.Legend>Hva liker du best med jobben din?</Fieldset.Legend>
    <Checkbox label="Selvstendige oppgaver" value="selvstendige" />
    <Checkbox label="Møter" value="moter" />
    <Checkbox label="Lunsj" value="lunsj" />
    <Checkbox label="Kolleger" value="kolleger" />
  </Fieldset>`,...(Fe=(Te=y.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var Se,He,Le;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => <Fieldset style={{
  maxHeight: '300px'
}}>
    <Fieldset.Legend>Hva liker du best med jobben din?</Fieldset.Legend>

    <Checkbox label="Selvstendige oppgaver" value="selvstendige" variant="outline" />
    <Checkbox label="Møter" value="moter" variant="outline" />
    <Checkbox label="Lunsj" value="lunsj" variant="outline" />
    <Checkbox label="Kolleger" value="kolleger" variant="outline" />
    <Checkbox label="Selvstendige oppgaver" value="selvstendige" variant="outline" />
    <Checkbox label="Møter" value="moter" variant="outline" />
    <Checkbox label="Lunsj" value="lunsj" variant="outline" />
    <Checkbox label="Kolleger" value="kolleger" variant="outline" />
  </Fieldset>`,...(Le=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};const qe=["Preview","AriaLabel","Group","OneOption","WithError","Controlled","ReadOnly","Disabled","InTable","Conditional","InTableWithPagination","ContentEx1","ContentEx2","ContentEx3","Outline"];export{S as AriaLabel,C as Conditional,P as ContentEx1,f as ContentEx2,y as ContentEx3,v as Controlled,I as Disabled,d as Group,k as InTable,j as InTableWithPagination,x as OneOption,T as Outline,h as Preview,L as ReadOnly,H as WithError,qe as __namedExportsOrder,Ue as default};
