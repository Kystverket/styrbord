import{r as i,j as e}from"./iframe-a92PiZDk.js";import{G as n,B as l,I as ve,p as h,J as Pe}from"./Dialog-US4NiUe7.js";import"./shipTypes-hFnSBndP.js";import"./Details-BKt2vF5d.js";import"./KyvDivider-D0cQWsm2.js";import{P as r}from"./typography-B3Xe137V.js";import"./KyvSpinner-CStDtRO-.js";import"./skillingsbuoye-CnuVz1Kf.js";import"./Logo-BlFH4ZLF.js";import{p as be}from"./tooltip-BhTvqi4o.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BaFqaga0.js";import"./index-C0JGS7j4.js";import"./index-CjcbQYLd.js";const ze={title:"Components/SideSheet",component:n,tags:["autodocs","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"},description:{component:'NB: Anbefales å åpne stories direkte, da det kan bli scroll issues ellers\n\n### Context under panseret\n\nSideSheet består av to uavhengige context-systemer - ingen av dem krever at du bruker context direkte, begge virker bare ut fra hvor du plasserer komponenten i treet:\n\n- **`<SideSheet.Layout>`** pakker inn hovedinnholdet på siden *og* `<SideSheet>` som flex-søsken (se `PageContent` under). Kun nødvendig ved `pinnable` eller `defaultPinned` - det er det som lar det pinnede panelet dytte hovedinnholdet til side via native `position: sticky` + `flex-shrink: 0`. Rene overlay-paneler (uten pinning) trenger den ikke. Glemmer du den, varsler en console-warning.\n- **`<SideSheet.Buttons>`** kan rendres hvor som helst inni en `<SideSheet>`s `children` - f.eks. betinget per "side" (se *Tilbakeknapp*-storyen). Innholdet havner alltid i panelets faste footer, uansett hvor i JSX-en det er deklarert, så footer-knapper kan ligge rett ved innholdet de virker på.'}}},decorators:[s=>e.jsx("div",{style:{height:"150vh"},children:e.jsx(s,{})})]};function p({onOpen:s}){return e.jsxs("div",{style:{padding:"2rem",flex:1,minWidth:0},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"This is the main page content. When the SideSheet is pinned it repositions itself to sit beside it. This text is just extra long to test the wrapping when the element is overlayed or not"}),e.jsx(l,{onClick:s,children:"Open SideSheet"})]})}const c=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"Heading",children:e.jsx(r,{children:"Side sheet content goes here."})})]})};c.args={size:"sm"};const u=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"Heading",headerAction:e.jsx(be,{content:"Åpne i ny fane",placement:"bottom",children:e.jsx(l,{variant:"ghost",color:"neutral",size:"sm",icon:!0,"aria-label":"Åpne i ny fane",onClick:()=>window.open("https://vg.no","_blank","noopener,noreferrer"),children:e.jsx(ve,{material:"open_in_new",size:"md"})})}),children:e.jsx(r,{children:'Side sheet content with an "open in new window" action in the header.'})})]})};u.storyName="Åpne i nytt vindu";const g=s=>{const[a,t]=i.useState(!1),[d,o]=i.useState("page1");return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>{o("page1"),t(!0)}}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:d==="page2"?"Heading to Page 2":"Heading",showBackButton:d==="page2",onBack:()=>o("page1"),children:d==="page1"?e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 1"}),e.jsx(n.Buttons,{children:e.jsx(l,{variant:"filled",onClick:()=>o("page2"),children:"Next page"})})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 2. Use the back button in the header or footer to return."}),e.jsx(n.Buttons,{children:e.jsx(l,{onClick:()=>o("page1"),children:"Back"})})]})})]})};g.storyName="Tilbakeknapp";const m=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...s,open:a,onClose:()=>t(!1),title:"Heading",children:[Array.from({length:20},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - scroll to see all rows."]},o)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};m.storyName="Buttons, scrollbar og dividers";const S=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...s,open:a,onClose:()=>t(!1),title:"Heading",pinnable:!0,defaultPinned:!1,children:[Array.from({length:20},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - klikk pin-ikonet for å feste panelet ved siden av innholdet."]},o)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};S.storyName="Pinnbar (overlay ↔ push)";const f=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsxs(n,{...s,open:a,onClose:()=>t(!1),title:"Left panel",placement:"left",pinnable:!0,defaultPinned:!1,children:[e.jsx(r,{children:"Left panel content."}),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]}),e.jsx(p,{onOpen:()=>t(!0)})]})};f.storyName="Venstre plassering";const y=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"sm (400px)",size:"sm",children:e.jsx(r,{children:"Small side sheet."})})]})};y.storyName="Størrelse: sm";const x=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"lg (800px)",size:"lg",children:e.jsx(r,{children:"Large side sheet."})})]})};x.storyName="Størrelse: lg";const j=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"50% width",size:"50%",children:e.jsx(r,{children:"Half-width side sheet."})})]})};j.storyName="Størrelse: 50%";const v=s=>{const[a,t]=i.useState(!0),[d,o]=i.useState(!0);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...s,open:a,onClose:()=>t(!1),title:"Pinned with content",pinnable:!0,pinned:d,onPinnedChange:o,headerDivider:!0,footerDivider:!0,children:[Array.from({length:25},(L,B)=>e.jsxs(r,{children:["Rad ",B+1," - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio"]},B)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};v.storyName="Pinned";const P=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"Ingen bakgrunn",backdrop:!1,children:e.jsx(r,{children:"Overlay without backdrop dimming."})})]})};P.storyName="Overlay uten bakgrunn";const b=()=>{const[s,a]=i.useState(!0),[t,d]=i.useState(!0),[o,L]=i.useState(!0),[B,xe]=i.useState(!0);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(n,{open:s,onClose:()=>a(!1),title:"Navigasjon",placement:"left",size:"sm",pinnable:!0,pinned:o,onPinnedChange:L,children:Array.from({length:12},(je,C)=>e.jsxs(r,{children:["Navigasjonsrad ",C+1]},C))}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:"2rem",overflow:"auto"},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"Midtinnhold. Begge sidepanelene kan åpnes og festes på hver sin side."}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[!s&&e.jsx(l,{onClick:()=>a(!0),children:"Åpne venstre panel"}),!t&&e.jsx(l,{onClick:()=>d(!0),children:"Åpne høyre panel"})]})]}),e.jsxs(n,{open:t,onClose:()=>d(!1),title:"Detaljer",placement:"right",size:"sm",pinnable:!0,pinned:B,onPinnedChange:xe,children:[Array.from({length:12},(je,C)=>e.jsxs(r,{children:["Detaljrad ",C+1]},C)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>d(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>d(!1),children:"Avbryt"})]})]})]})};b.storyName="To paneler (venstre + høyre)";const k=s=>{const[a,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...s,open:a,onClose:()=>t(!1),title:"Heading",headerDivider:!1,children:e.jsx("div",{style:{marginTop:"calc(-1 * var(--ds-size-7))"},children:e.jsxs(h,{defaultValue:"info",children:[e.jsxs(h.List,{children:[e.jsx(h.Tab,{value:"info",children:"Info"}),e.jsx(h.Tab,{value:"details",children:"Detaljer"}),e.jsx(h.Tab,{value:"history",children:"Historikk"})]}),e.jsxs(h.Panel,{value:"info",children:[e.jsx(r,{children:"Her vises generell informasjon om objektet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(r,{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})]}),e.jsxs(h.Panel,{value:"details",children:[e.jsx(r,{children:"Her vises detaljert informasjon om objektet."}),e.jsx(r,{children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel."})]}),e.jsxs(h.Panel,{value:"history",children:[e.jsx(r,{children:"Endringshistorikk for objektet."}),Array.from({length:5},(d,o)=>e.jsxs(r,{children:[new Date(2025,11-o,10-o).toLocaleDateString("nb-NO")," — Endring ",o+1]},o))]})]})})})]})};k.storyName="Med Tabs";const T=64,_=56,O=s=>{const[a,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{style:{height:T,display:"flex",alignItems:"center",padding:"0 1rem",background:"var(--ds-color-accent-base-default, #1e3a5f)",color:"#fff"},children:["Topbar (normal i dokumentet, ",T,"px)"]}),e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{pinnable:!0,...s,open:a,onClose:()=>t(!1),title:"Heading",children:[Array.from({length:100},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - scroll for å se dem alle."]},o)),e.jsx(Pe,{children:e.jsx(l,{children:"Click me!"})})]})]}),e.jsxs("footer",{style:{height:_,display:"flex",alignItems:"center",padding:"0 1rem",background:"var(--ds-color-neutral-surface-hover, #eee)"},children:["Footer (normal i dokumentet, ",_,"px)"]})]})};O.storyName="Med topbar og footer (sticky)";c.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"OpenInNewWindow"};g.__docgenInfo={description:"",methods:[],displayName:"WithBackButton"};m.__docgenInfo={description:"",methods:[],displayName:"WithActionsScrollbarDividers"};S.__docgenInfo={description:"",methods:[],displayName:"Pinnable"};f.__docgenInfo={description:"",methods:[],displayName:"LeftPlacement"};y.__docgenInfo={description:"",methods:[],displayName:"SmallSize"};x.__docgenInfo={description:"",methods:[],displayName:"LargeSize"};j.__docgenInfo={description:"",methods:[],displayName:"HalfWidth"};v.__docgenInfo={description:"",methods:[],displayName:"PinnedWithContent"};P.__docgenInfo={description:"",methods:[],displayName:"NoBackdrop"};b.__docgenInfo={description:"",methods:[],displayName:"TwoSheets"};k.__docgenInfo={description:"",methods:[],displayName:"WithTabs"};O.__docgenInfo={description:"",methods:[],displayName:"WithTopbarAndFooter"};var w,N,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        <Paragraph>Side sheet content goes here.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(H=(N=c.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var A,I,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var D,z,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<'page1' | 'page2'>('page1');
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => {
      setPage('page1');
      setOpen(true);
    }} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title={page === 'page2' ? 'Heading to Page 2' : 'Heading'} showBackButton={page === 'page2'} onBack={() => setPage('page1')}>
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
}`,...(R=(z=g.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var E,F,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(q=(F=m.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var G,V,M;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(M=(V=S.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var J,U,K;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(K=(U=f.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var X,Q,Y;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="sm (400px)" size="sm">
        <Paragraph>Small side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="lg (800px)" size="lg">
        <Paragraph>Large side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="50% width" size="50%">
        <Paragraph>Half-width side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(se=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,re,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const [pinned, setPinned] = useState(true);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,de;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Ingen bakgrunn" backdrop={false}>
        <Paragraph>Overlay without backdrop dimming.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,he,ce;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [leftPinned, setLeftPinned] = useState(true);
  const [rightPinned, setRightPinned] = useState(true);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(ce=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ce.source}}};var ue,ge,me;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
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
}`,...(me=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Se,fe,ye;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return (
    // Plain position: sticky (see SideSheet.module.css) confined to SideSheet.Layout's own box
    // (Layout doesn't clip overflow, so native sticky containment works) - no offset props,
    // no measurement JS. The panel sticks while scrolling through Layout, and releases before
    // reaching the footer since that's outside Layout's box.
    <>
      <header style={{
        height: TOPBAR_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        background: 'var(--ds-color-accent-base-default, #1e3a5f)',
        color: '#fff'
      }}>
        Topbar (normal i dokumentet, {TOPBAR_HEIGHT}px)
      </header>

      <SideSheet.Layout style={{
        height: '100%'
      }}>
        <PageContent onOpen={() => setOpen(true)} />
        <SideSheet pinnable {...args} open={open} onClose={() => setOpen(false)} title="Heading">
          {Array.from({
            length: 100
          }, (_, i) => <Paragraph key={i}>Content row {i + 1} - scroll for å se dem alle.</Paragraph>)}
          <SideSheetButtons>
            <Button>Click me!</Button>
          </SideSheetButtons>
        </SideSheet>
      </SideSheet.Layout>

      <footer style={{
        height: FOOTER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        background: 'var(--ds-color-neutral-surface-hover, #eee)'
      }}>
        Footer (normal i dokumentet, {FOOTER_HEIGHT}px)
      </footer>
    </>
  );
}`,...(ye=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const Re=["Default","OpenInNewWindow","WithBackButton","WithActionsScrollbarDividers","Pinnable","LeftPlacement","SmallSize","LargeSize","HalfWidth","PinnedWithContent","NoBackdrop","TwoSheets","WithTabs","WithTopbarAndFooter"];export{c as Default,j as HalfWidth,x as LargeSize,f as LeftPlacement,P as NoBackdrop,u as OpenInNewWindow,S as Pinnable,v as PinnedWithContent,y as SmallSize,b as TwoSheets,m as WithActionsScrollbarDividers,g as WithBackButton,k as WithTabs,O as WithTopbarAndFooter,Re as __namedExportsOrder,ze as default};
