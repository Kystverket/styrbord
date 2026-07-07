import{S as v,r as I,j as e}from"./iframe-CILDSxky.js";import{t as u,B as r,I as S,T as f}from"./Dialog-sln7EyTu.js";import"./shipTypes-hFnSBndP.js";import"./Details-Bwizq5wO.js";import"./KyvDivider-D2QPxZka.js";import{a,B as d}from"./typography-BSLUl-_v.js";import"./KyvSpinner-Bngn4aYP.js";import"./skillingsbuoye-XUDUPq-H.js";import"./Logo-Dq-cpADU.js";import{H as l,P as m}from"./tooltip-_x5OyY6J.js";import"./preload-helper-Dp1pzeXC.js";import"./index-FIPjUDlT.js";import"./index-Dk2GYvad.js";const H={title:"Components/SaksbehandlingShell",component:u,decorators:[v],tags:["autodocs","beta"],parameters:{layout:"fullscreen"}},t={inbound:{icon:"mail",iconIndicator:"arrow_forward",iconColor:"sol"},outbound:{icon:"mail",iconIndicator:"arrow_back",iconColor:"hav"},discussion:{icon:"chat",iconColor:"skog"},note:{icon:"format_list_bulleted",iconColor:"lyng"},task:{icon:"text_snippet",iconColor:"fyr"}},n=[{id:"1",title:"Søknad om utslippstillatelse",description:"Innkommet brev fra Sandnessjøen havn",...t.inbound},{id:"2",title:"Svar på søknad",description:"Utgående brev til søker",...t.outbound},{id:"3",title:"Avklaring med jurist",description:"Diskusjon om hjemmelsgrunnlag",...t.discussion},{id:"4",title:"Sjekkliste for saksbehandling",description:"Standard sjekkliste for utslippssaker",...t.note},{id:"5",title:"Intern kommentar",description:"Husk å følge opp med kystverket region nord",...t.task},{id:"6",title:"Purring fra søker",description:"Innkommet brev med spørsmål om status",...t.inbound},{id:"7",title:"Statusoppdatering til søker",description:"Utgående brev om forventet behandlingstid",...t.outbound},{id:"8",title:"Vurdering med fagansvarlig",description:"Diskusjon om miljøkonsekvenser",...t.discussion},{id:"9",title:"Sjekkliste for høring",description:"Kontroll av høringsfrister og parter",...t.note},{id:"10",title:"Notat til saksmappe",description:"Oppsummering av telefonsamtale med søker",...t.task},{id:"11",title:"Vedlegg til søknad",description:"Innkommet brev med oppdatert kartskisse",...t.inbound},{id:"12",title:"Vedtak sendt til søker",description:"Utgående brev med endelig vedtak",...t.outbound},{id:"13",title:"Intern avklaring om klagefrist",description:"Diskusjon med jurist om klagerett",...t.discussion},{id:"14",title:"Sjekkliste for arkivering",description:"Kontroll før saken arkiveres",...t.note}],i=()=>{const[o,k]=I.useState(n[0].id),s=n.find(h=>h.id===o);return e.jsx("div",{style:{height:"100vh"},children:e.jsx(u,{headerContent:e.jsxs(d,{horizontal:!0,align:"center",gap:8,justify:"between",width:"full",children:[e.jsx(l,{level:1,"data-size":"sm",style:{margin:0},children:"Sak 2026-0142 — Søknad om utslippstillatelse"}),e.jsxs(d,{horizontal:!0,align:"center",gap:4,children:[e.jsx(S,{material:"pin_drop",size:"sm"}),e.jsx(a,{size:"sm",inline:!0,children:"Sandnessjøen havn"})]}),e.jsx(f,{"data-color":"success","data-size":"sm",children:"Under behandling"})]}),caseActions:e.jsx(r,{size:"sm",children:"Avslutt sak"}),itemActions:s&&e.jsx(r,{size:"sm",children:"Svar"}),items:n,selectedItemId:o,onSelectItemId:k,comparisonContent:e.jsx(m,{children:"Sammenligningsinnhold, for eksempel en tidligere versjon av det valgte elementet."}),children:s?e.jsxs(e.Fragment,{children:[e.jsx(l,{level:2,"data-size":"sm",children:s.title}),e.jsx(a,{children:s.description})]}):e.jsx(m,{children:"Velg et element i listen til venstre."})})})};i.storyName="Standard";i.__docgenInfo={description:"",methods:[],displayName:"Default"};var c,p,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(ITEMS[0].id);
  const selectedItem = ITEMS.find(item => item.id === selectedItemId);
  return <div style={{
    height: '100vh'
  }}>
      <SaksbehandlingShell headerContent={<Box horizontal align="center" gap={8} justify="between" width="full">
            <Heading level={1} data-size="sm" style={{
        margin: 0
      }}>
              Sak 2026-0142 — Søknad om utslippstillatelse
            </Heading>
            <Box horizontal align="center" gap={4}>
              <Icon material="pin_drop" size="sm" />
              <Body size="sm" inline>
                Sandnessjøen havn
              </Body>
            </Box>
            <Tag data-color="success" data-size="sm">
              Under behandling
            </Tag>
          </Box>} caseActions={<Button size="sm">Avslutt sak</Button>} itemActions={selectedItem && <Button size="sm">Svar</Button>} items={ITEMS} selectedItemId={selectedItemId} onSelectItemId={setSelectedItemId} comparisonContent={<Paragraph>Sammenligningsinnhold, for eksempel en tidligere versjon av det valgte elementet.</Paragraph>}>
        {selectedItem ? <>
            <Heading level={2} data-size="sm">
              {selectedItem.title}
            </Heading>
            <Body>{selectedItem.description}</Body>
          </> : <Paragraph>Velg et element i listen til venstre.</Paragraph>}
      </SaksbehandlingShell>
    </div>;
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default"];export{i as Default,P as __namedExportsOrder,H as default};
