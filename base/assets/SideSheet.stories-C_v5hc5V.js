import{r as o,j as e}from"./iframe-RURyLk5M.js";import{r as n,B as l,I as me,j as c}from"./Dialog-WcwNGnFw.js";import"./Details-CLar5ZsU.js";import"./KyvDivider-BZgdx-hu.js";import"./typography-CqfE70Aw.js";import"./KyvSpinner-BjspyfAu.js";import"./skillingsbuoye-C84g7947.js";import"./Logo-BCxdJsuH.js";import{P as r,r as Se}from"./tooltip-srqks4OZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DkpUIaZ9.js";import"./index-l_paPnZM.js";const _e={title:"Components/SideSheet",component:n,tags:["autodocs","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"}}}};function p({onOpen:a}){return e.jsxs("div",{style:{padding:"2rem",flex:1,minWidth:0},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"This is the main page content. When the SideSheet is pinned it repositions itself to sit beside it."}),e.jsx(l,{onClick:a,children:"Open SideSheet"})]})}const h=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",children:e.jsx(r,{children:"Side sheet content goes here."})})]})};h.args={size:"sm"};const u=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",headerAction:e.jsx(Se,{content:"Åpne i ny fane",placement:"bottom",children:e.jsx(l,{variant:"ghost",color:"neutral",size:"sm",icon:!0,"aria-label":"Åpne i ny fane",onClick:()=>window.open("https://vg.no","_blank","noopener,noreferrer"),children:e.jsx(me,{material:"open_in_new",size:"md"})})}),children:e.jsx(r,{children:'Side sheet content with an "open in new window" action in the header.'})})]})};u.storyName="Åpne i nytt vindu";const g=a=>{const[s,t]=o.useState(!1),[d,i]=o.useState("page1");return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>{i("page1"),t(!0)}}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:d==="page2"?"Heading to Page 2":"Heading",headingSize:"sm",showBackButton:d==="page2",onBack:()=>i("page1"),children:d==="page1"?e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 1"}),e.jsx(n.Buttons,{children:e.jsx(l,{variant:"filled",onClick:()=>i("page2"),children:"Next page"})})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 2. Use the back button in the header or footer to return."}),e.jsx(n.Buttons,{children:e.jsx(l,{onClick:()=>i("page1"),children:"Back"})})]})})]})};g.storyName="Tilbakeknapp";const m=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",children:[Array.from({length:20},(d,i)=>e.jsxs(r,{children:["Content row ",i+1," - scroll to see all rows."]},i)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};m.storyName="Buttons, scrollbar og dividers";const S=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{height:"100vh"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",pinnable:!0,defaultPinned:!1,children:[Array.from({length:20},(d,i)=>e.jsxs(r,{children:["Content row ",i+1," - klikk pin-ikonet for å feste panelet ved siden av innholdet."]},i)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};S.storyName="Pinnbar (overlay ↔ push)";const f=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Left panel",placement:"left",pinnable:!0,defaultPinned:!1,children:[e.jsx(r,{children:"Left panel content."}),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]}),e.jsx(p,{onOpen:()=>t(!0)})]})};f.storyName="Venstre plassering";const y=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"sm (400px)",size:"sm",children:e.jsx(r,{children:"Small side sheet."})})]})};y.storyName="Størrelse: sm";const x=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"lg (800px)",size:"lg",children:e.jsx(r,{children:"Large side sheet."})})]})};x.storyName="Størrelse: lg";const j=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"50% width",size:"50%",children:e.jsx(r,{children:"Half-width side sheet."})})]})};j.storyName="Størrelse: 50%";const P=a=>{const[s,t]=o.useState(!0),[d,i]=o.useState(!0);return e.jsxs(n.Layout,{style:{height:"100vh"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Pinned with content",pinnable:!0,pinned:d,onPinnedChange:i,headerDivider:!0,footerDivider:!0,children:[Array.from({length:25},(B,C)=>e.jsxs(r,{children:["Rad ",C+1," - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio"]},C)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};P.storyName="Pinned";const O=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Ingen bakgrunn",backdrop:!1,children:e.jsx(r,{children:"Overlay without backdrop dimming."})})]})};O.storyName="Overlay uten bakgrunn";const v=()=>{const[a,s]=o.useState(!0),[t,d]=o.useState(!0),[i,B]=o.useState(!0),[C,ue]=o.useState(!0);return e.jsxs(n.Layout,{style:{height:"80vh"},children:[e.jsx(n,{open:a,onClose:()=>s(!1),title:"Navigasjon",placement:"left",size:"sm",pinnable:!0,pinned:i,onPinnedChange:B,children:Array.from({length:12},(ge,k)=>e.jsxs(r,{children:["Navigasjonsrad ",k+1]},k))}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:"2rem",overflow:"auto"},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"Midtinnhold. Begge sidepanelene kan åpnes og festes på hver sin side."}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[!a&&e.jsx(l,{onClick:()=>s(!0),children:"Åpne venstre panel"}),!t&&e.jsx(l,{onClick:()=>d(!0),children:"Åpne høyre panel"})]})]}),e.jsxs(n,{open:t,onClose:()=>d(!1),title:"Detaljer",placement:"right",size:"sm",pinnable:!0,pinned:C,onPinnedChange:ue,children:[Array.from({length:12},(ge,k)=>e.jsxs(r,{children:["Detaljrad ",k+1]},k)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>d(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>d(!1),children:"Avbryt"})]})]})]})};v.storyName="To paneler (venstre + høyre)";const b=a=>{const[s,t]=o.useState(!1);return e.jsxs(n.Layout,{style:{minHeight:"400px"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",headerDivider:!1,children:e.jsx("div",{style:{marginTop:"calc(-1 * var(--ds-size-7))"},children:e.jsxs(c,{defaultValue:"info",children:[e.jsxs(c.List,{children:[e.jsx(c.Tab,{value:"info",children:"Info"}),e.jsx(c.Tab,{value:"details",children:"Detaljer"}),e.jsx(c.Tab,{value:"history",children:"Historikk"})]}),e.jsxs(c.Panel,{value:"info",children:[e.jsx(r,{children:"Her vises generell informasjon om objektet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(r,{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})]}),e.jsxs(c.Panel,{value:"details",children:[e.jsx(r,{children:"Her vises detaljert informasjon om objektet."}),e.jsx(r,{children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel."})]}),e.jsxs(c.Panel,{value:"history",children:[e.jsx(r,{children:"Endringshistorikk for objektet."}),Array.from({length:5},(d,i)=>e.jsxs(r,{children:[new Date(2025,11-i,10-i).toLocaleDateString("nb-NO")," — Endring ",i+1]},i))]})]})})})]})};b.storyName="Med Tabs";h.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"OpenInNewWindow"};g.__docgenInfo={description:"",methods:[],displayName:"WithBackButton"};m.__docgenInfo={description:"",methods:[],displayName:"WithActionsScrollbarDividers"};S.__docgenInfo={description:"",methods:[],displayName:"Pinnable"};f.__docgenInfo={description:"",methods:[],displayName:"LeftPlacement"};y.__docgenInfo={description:"",methods:[],displayName:"SmallSize"};x.__docgenInfo={description:"",methods:[],displayName:"LargeSize"};j.__docgenInfo={description:"",methods:[],displayName:"HalfWidth"};P.__docgenInfo={description:"",methods:[],displayName:"PinnedWithContent"};O.__docgenInfo={description:"",methods:[],displayName:"NoBackdrop"};v.__docgenInfo={description:"",methods:[],displayName:"TwoSheets"};b.__docgenInfo={description:"",methods:[],displayName:"WithTabs"};var L,_,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        <Paragraph>Side sheet content goes here.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(H=(_=h.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var w,T,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading" headerAction={<Tooltip content="Åpne i ny fane" placement="bottom">
            <Button variant="ghost" color="neutral" size="sm" icon aria-label="Åpne i ny fane" onClick={() => window.open('https://vg.no', '_blank', 'noopener,noreferrer')}>
              <Icon material="open_in_new" size="md" />
            </Button>
          </Tooltip>}>
        <Paragraph>Side sheet content with an "open in new window" action in the header.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(N=(T=u.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var A,z,D;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<'page1' | 'page2'>('page1');
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => {
      setPage('page1');
      setOpen(true);
    }} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title={page === 'page2' ? 'Heading to Page 2' : 'Heading'} headingSize="sm" showBackButton={page === 'page2'} onBack={() => setPage('page1')}>
        {page === 'page1' ? <>
            <Paragraph>Page 1</Paragraph>
            <SideSheet.Buttons>
              <Button variant="filled" onClick={() => setPage('page2')}>
                Next page
              </Button>
            </SideSheet.Buttons>
          </> : <>
            <Paragraph>Page 2. Use the back button in the header or footer to return.</Paragraph>
            <SideSheet.Buttons>
              <Button onClick={() => setPage('page1')}>Back</Button>
            </SideSheet.Buttons>
          </>}
      </SideSheet>
    </SideSheet.Layout>;
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,I,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        {Array.from({
        length: 20
      }, (_, i) => <Paragraph key={i}>Content row {i + 1} - scroll to see all rows.</Paragraph>)}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,E,V;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100vh'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading" pinnable defaultPinned={false}>
        {Array.from({
        length: 20
      }, (_, i) => <Paragraph key={i}>
            Content row {i + 1} - klikk pin-ikonet for å feste panelet ved siden av innholdet.
          </Paragraph>)}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(V=(E=S.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var M,F,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Left panel" placement="left" pinnable defaultPinned={false}>
        <Paragraph>Left panel content.</Paragraph>
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
      <PageContent onOpen={() => setOpen(true)} />
    </SideSheet.Layout>;
}`,...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="sm (400px)" size="sm">
        <Paragraph>Small side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="lg (800px)" size="lg">
        <Paragraph>Large side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="50% width" size="50%">
        <Paragraph>Half-width side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(ee=($=j.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,ae;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const [pinned, setPinned] = useState(true);
  return <SideSheet.Layout style={{
    height: '100vh'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Pinned with content" pinnable pinned={pinned} onPinnedChange={setPinned} headerDivider footerDivider>
        {Array.from({
        length: 25
      }, (_, i) => <Paragraph key={i}>
            Rad {i + 1} - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati
            assumenda odio
          </Paragraph>)}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(ae=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,ie;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Ingen bakgrunn" backdrop={false}>
        <Paragraph>Overlay without backdrop dimming.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(ie=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,de;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [leftPinned, setLeftPinned] = useState(true);
  const [rightPinned, setRightPinned] = useState(true);
  return <SideSheet.Layout style={{
    height: '80vh'
  }}>
      {/* Venstre side */}
      <SideSheet open={leftOpen} onClose={() => setLeftOpen(false)} title="Navigasjon" placement="left" size="sm" pinnable pinned={leftPinned} onPinnedChange={setLeftPinned}>
        {Array.from({
        length: 12
      }, (_, i) => <Paragraph key={i}>Navigasjonsrad {i + 1}</Paragraph>)}
      </SideSheet>

      {/* Midtinnhold */}
      <div style={{
      flex: 1,
      minWidth: 0,
      padding: '2rem',
      overflow: 'auto'
    }}>
        <Paragraph style={{
        marginBottom: '1rem'
      }}>
          Midtinnhold. Begge sidepanelene kan åpnes og festes på hver sin side.
        </Paragraph>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
          {!leftOpen && <Button onClick={() => setLeftOpen(true)}>Åpne venstre panel</Button>}
          {!rightOpen && <Button onClick={() => setRightOpen(true)}>Åpne høyre panel</Button>}
        </div>
      </div>

      {/* Høyre side */}
      <SideSheet open={rightOpen} onClose={() => setRightOpen(false)} title="Detaljer" placement="right" size="sm" pinnable pinned={rightPinned} onPinnedChange={setRightPinned}>
        {Array.from({
        length: 12
      }, (_, i) => <Paragraph key={i}>Detaljrad {i + 1}</Paragraph>)}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setRightOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setRightOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ce,he;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    minHeight: '400px'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading" headerDivider={false}>
        <div style={{
        marginTop: 'calc(-1 * var(--ds-size-7))'
      }}>
          <Tabs defaultValue="info">
            <Tabs.List>
              <Tabs.Tab value="info">Info</Tabs.Tab>
              <Tabs.Tab value="details">Detaljer</Tabs.Tab>
              <Tabs.Tab value="history">Historikk</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="info">
              <Paragraph>
                Her vises generell informasjon om objektet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <Paragraph>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </Paragraph>
            </Tabs.Panel>
            <Tabs.Panel value="details">
              <Paragraph>Her vises detaljert informasjon om objektet.</Paragraph>
              <Paragraph>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit
                neque, auctor sit amet aliquam vel.
              </Paragraph>
            </Tabs.Panel>
            <Tabs.Panel value="history">
              <Paragraph>Endringshistorikk for objektet.</Paragraph>
              {Array.from({
              length: 5
            }, (_, i) => <Paragraph key={i}>
                  {new Date(2025, 11 - i, 10 - i).toLocaleDateString('nb-NO')} — Endring {i + 1}
                </Paragraph>)}
            </Tabs.Panel>
          </Tabs>
        </div>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(he=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:he.source}}};const He=["Default","OpenInNewWindow","WithBackButton","WithActionsScrollbarDividers","Pinnable","LeftPlacement","SmallSize","LargeSize","HalfWidth","PinnedWithContent","NoBackdrop","TwoSheets","WithTabs"];export{h as Default,j as HalfWidth,x as LargeSize,f as LeftPlacement,O as NoBackdrop,u as OpenInNewWindow,S as Pinnable,P as PinnedWithContent,y as SmallSize,v as TwoSheets,m as WithActionsScrollbarDividers,g as WithBackButton,b as WithTabs,He as __namedExportsOrder,_e as default};
