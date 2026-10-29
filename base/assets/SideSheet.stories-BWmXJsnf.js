import{r as i,j as e}from"./iframe-Ccq3OV6b.js";import{z as n,B as l,I as Oe,p as u,E as Ce}from"./Dialog-DOnpb3hu.js";import"./shipTypes-hFnSBndP.js";import"./Details-odWxZYUY.js";import"./KyvDivider-BVBMyOmU.js";import"./KyvSpinner-YPDo_c9L.js";import"./skillingsbuoye-BRXVEwkJ.js";import"./Logo-BXu3XPm8.js";import{P as r,s as Le}from"./tooltip-Bgifg7WJ.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-D5L0FOws.js";import"./index-C3opyzbR.js";const Ee={title:"Components/SideSheet",component:n,tags:["autodocs","beta"],parameters:{layout:"fullscreen",docs:{source:{type:"code"},description:{component:'NB: Anbefales å åpne stories direkte, da det kan bli scroll issues ellers\n\n### Context under panseret\n\nSideSheet består av to uavhengige context-systemer - ingen av dem krever at du bruker context direkte, begge virker bare ut fra hvor du plasserer komponenten i treet:\n\n- **`<SideSheet.Layout>`** pakker inn hovedinnholdet på siden *og* `<SideSheet>` som flex-søsken (se `PageContent` under). Kun nødvendig ved `pinnable` eller `defaultPinned` - det er det som lar det pinnede panelet dytte hovedinnholdet til side via native `position: sticky` + `flex-shrink: 0`. Rene overlay-paneler (uten pinning) trenger den ikke. Glemmer du den, varsler en console-warning.\n- **`<SideSheet.Buttons>`** kan rendres hvor som helst inni en `<SideSheet>`s `children` - f.eks. betinget per "side" (se *Tilbakeknapp*-storyen). Innholdet havner alltid i panelets faste footer, uansett hvor i JSX-en det er deklarert, så footer-knapper kan ligge rett ved innholdet de virker på.'}}},decorators:[a=>e.jsx("div",{style:{height:"150vh"},children:e.jsx(a,{})})]};function p({onOpen:a}){return e.jsxs("div",{style:{padding:"2rem",flex:1,minWidth:0},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"This is the main page content. When the SideSheet is pinned it repositions itself to sit beside it. This text is just extra long to test the wrapping when the element is overlayed or not"}),e.jsx(l,{onClick:a,children:"Open SideSheet"})]})}const h=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",children:e.jsx(r,{children:"Side sheet content goes here."})})]})};h.args={size:"sm"};const g=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",headerAction:e.jsx(Le,{content:"Åpne i ny fane",placement:"bottom",children:e.jsx(l,{variant:"ghost",color:"neutral",size:"sm",icon:!0,"aria-label":"Åpne i ny fane",onClick:()=>window.open("https://vg.no","_blank","noopener,noreferrer"),children:e.jsx(Oe,{material:"open_in_new",size:"md"})})}),children:e.jsx(r,{children:'Side sheet content with an "open in new window" action in the header.'})})]})};g.storyName="Åpne i nytt vindu";const m=a=>{const[s,t]=i.useState(!1),[d,o]=i.useState("page1");return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>{o("page1"),t(!0)}}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:d==="page2"?"Heading to Page 2":"Heading",showBackButton:d==="page2",onBack:()=>o("page1"),children:d==="page1"?e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 1"}),e.jsx(n.Buttons,{children:e.jsx(l,{variant:"filled",onClick:()=>o("page2"),children:"Next page"})})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Page 2. Use the back button in the header or footer to return."}),e.jsx(n.Buttons,{children:e.jsx(l,{onClick:()=>o("page1"),children:"Back"})})]})})]})};m.storyName="Tilbakeknapp";const S=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",children:[Array.from({length:20},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - scroll to see all rows."]},o)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};S.storyName="Buttons, scrollbar og dividers";const f=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",pinnable:!0,defaultPinned:!1,children:[Array.from({length:20},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - klikk pin-ikonet for å feste panelet ved siden av innholdet."]},o)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};f.storyName="Pinnbar (overlay ↔ push)";const c=a=>{const[s,t]=i.useState(!0),[d,o]=i.useState(!0);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Justerbar bredde",pinnable:!0,pinned:d,onPinnedChange:o,children:[e.jsx(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx(r,{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsxs(r,{style:{marginTop:"2rem"},children:["Dra i kanten mot innholdet for å endre bredden, eller fokuser den med Tab og bruk piltastene (hold Shift for større steg). Dobbeltklikk på kanten for å gå tilbake til ",e.jsx("code",{children:"size"}),"."]})]})]})};c.storyName="Justerbar bredde";c.args={allowResize:!0};const y=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Left panel",placement:"left",pinnable:!0,defaultPinned:!1,children:[e.jsx(r,{children:"Left panel content."}),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]}),e.jsx(p,{onOpen:()=>t(!0)})]})};y.storyName="Venstre plassering";const x=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"sm (400px)",size:"sm",children:e.jsx(r,{children:"Small side sheet."})})]})};x.storyName="Størrelse: sm";const b=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"lg (800px)",size:"lg",children:e.jsx(r,{children:"Large side sheet."})})]})};b.storyName="Størrelse: lg";const j=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"50% width",size:"50%",children:e.jsx(r,{children:"Half-width side sheet."})})]})};j.storyName="Størrelse: 50%";const v=a=>{const[s,t]=i.useState(!0),[d,o]=i.useState(!0);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{...a,open:s,onClose:()=>t(!1),title:"Pinned with content",pinnable:!0,pinned:d,onPinnedChange:o,headerDivider:!0,footerDivider:!0,children:[Array.from({length:25},(T,B)=>e.jsxs(r,{children:["Rad ",B+1," - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio"]},B)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>t(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>t(!1),children:"Avbryt"})]})]})]})};v.storyName="Pinned";const k=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Ingen bakgrunn",backdrop:!1,children:e.jsx(r,{children:"Overlay without backdrop dimming."})})]})};k.storyName="Overlay uten bakgrunn";const P=()=>{const[a,s]=i.useState(!0),[t,d]=i.useState(!0),[o,T]=i.useState(!0),[B,ke]=i.useState(!0);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(n,{open:a,onClose:()=>s(!1),title:"Navigasjon",placement:"left",size:"sm",pinnable:!0,pinned:o,onPinnedChange:T,children:Array.from({length:12},(Pe,L)=>e.jsxs(r,{children:["Navigasjonsrad ",L+1]},L))}),e.jsxs("div",{style:{flex:1,minWidth:0,padding:"2rem",overflow:"auto"},children:[e.jsx(r,{style:{marginBottom:"1rem"},children:"Midtinnhold. Begge sidepanelene kan åpnes og festes på hver sin side."}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[!a&&e.jsx(l,{onClick:()=>s(!0),children:"Åpne venstre panel"}),!t&&e.jsx(l,{onClick:()=>d(!0),children:"Åpne høyre panel"})]})]}),e.jsxs(n,{open:t,onClose:()=>d(!1),title:"Detaljer",placement:"right",size:"sm",pinnable:!0,pinned:B,onPinnedChange:ke,children:[Array.from({length:12},(Pe,L)=>e.jsxs(r,{children:["Detaljrad ",L+1]},L)),e.jsxs(n.Buttons,{children:[e.jsx(l,{variant:"filled",onClick:()=>d(!1),children:"Lagre"}),e.jsx(l,{variant:"outline",onClick:()=>d(!1),children:"Avbryt"})]})]})]})};P.storyName="To paneler (venstre + høyre)";const O=a=>{const[s,t]=i.useState(!1);return e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsx(n,{...a,open:s,onClose:()=>t(!1),title:"Heading",headerDivider:!1,children:e.jsx("div",{style:{marginTop:"calc(-1 * var(--ds-size-7))"},children:e.jsxs(u,{defaultValue:"info",children:[e.jsxs(u.List,{children:[e.jsx(u.Tab,{value:"info",children:"Info"}),e.jsx(u.Tab,{value:"details",children:"Detaljer"}),e.jsx(u.Tab,{value:"history",children:"Historikk"})]}),e.jsxs(u.Panel,{value:"info",children:[e.jsx(r,{children:"Her vises generell informasjon om objektet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(r,{children:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})]}),e.jsxs(u.Panel,{value:"details",children:[e.jsx(r,{children:"Her vises detaljert informasjon om objektet."}),e.jsx(r,{children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel."})]}),e.jsxs(u.Panel,{value:"history",children:[e.jsx(r,{children:"Endringshistorikk for objektet."}),Array.from({length:5},(d,o)=>e.jsxs(r,{children:[new Date(2025,11-o,10-o).toLocaleDateString("nb-NO")," — Endring ",o+1]},o))]})]})})})]})};O.storyName="Med Tabs";const _=64,w=56,C=a=>{const[s,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("header",{style:{height:_,display:"flex",alignItems:"center",padding:"0 1rem",background:"var(--ds-color-accent-base-default, #1e3a5f)",color:"#fff"},children:["Topbar (normal i dokumentet, ",_,"px)"]}),e.jsxs(n.Layout,{style:{height:"100%"},children:[e.jsx(p,{onOpen:()=>t(!0)}),e.jsxs(n,{pinnable:!0,...a,open:s,onClose:()=>t(!1),title:"Heading",children:[Array.from({length:100},(d,o)=>e.jsxs(r,{children:["Content row ",o+1," - scroll for å se dem alle."]},o)),e.jsx(Ce,{children:e.jsx(l,{children:"Click me!"})})]})]}),e.jsxs("footer",{style:{height:w,display:"flex",alignItems:"center",padding:"0 1rem",background:"var(--ds-color-neutral-surface-hover, #eee)"},children:["Footer (normal i dokumentet, ",w,"px)"]})]})};C.storyName="Med topbar og footer (sticky)";h.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"OpenInNewWindow"};m.__docgenInfo={description:"",methods:[],displayName:"WithBackButton"};S.__docgenInfo={description:"",methods:[],displayName:"WithActionsScrollbarDividers"};f.__docgenInfo={description:"",methods:[],displayName:"Pinnable"};c.__docgenInfo={description:"",methods:[],displayName:"Resizable"};y.__docgenInfo={description:"",methods:[],displayName:"LeftPlacement"};x.__docgenInfo={description:"",methods:[],displayName:"SmallSize"};b.__docgenInfo={description:"",methods:[],displayName:"LargeSize"};j.__docgenInfo={description:"",methods:[],displayName:"HalfWidth"};v.__docgenInfo={description:"",methods:[],displayName:"PinnedWithContent"};k.__docgenInfo={description:"",methods:[],displayName:"NoBackdrop"};P.__docgenInfo={description:"",methods:[],displayName:"TwoSheets"};O.__docgenInfo={description:"",methods:[],displayName:"WithTabs"};C.__docgenInfo={description:"",methods:[],displayName:"WithTopbarAndFooter"};var N,H,A;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        <Paragraph>Side sheet content goes here.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(A=(H=h.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var I,z,D;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var q,W,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var E,F,G;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
}`,...(G=(F=S.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var V,J,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(M=(J=f.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var U,K,X;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const [pinned, setPinned] = useState(true);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Justerbar bredde" pinnable pinned={pinned} onPinnedChange={setPinned}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
        <Paragraph>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <Paragraph style={{
        marginTop: '2rem'
      }}>
          Dra i kanten mot innholdet for å endre bredden, eller fokuser den med Tab og bruk piltastene (hold Shift for
          større steg). Dobbeltklikk på kanten for å gå tilbake til <code>size</code>.
        </Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(X=(K=c.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,Y,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
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
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="sm (400px)" size="sm">
        <Paragraph>Small side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="lg (800px)" size="lg">
        <Paragraph>Large side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ie;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="50% width" size="50%">
        <Paragraph>Half-width side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(ie=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,de,pe;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,ce,he;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <SideSheet.Layout style={{
    height: '100%'
  }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Ingen bakgrunn" backdrop={false}>
        <Paragraph>Overlay without backdrop dimming.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>;
}`,...(he=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:he.source}}};var ge,me,Se;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Se=(me=P.parameters)==null?void 0:me.docs)==null?void 0:Se.source}}};var fe,ye,xe;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
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
}`,...(xe=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var be,je,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
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
}`,...(ve=(je=C.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};const Fe=["Default","OpenInNewWindow","WithBackButton","WithActionsScrollbarDividers","Pinnable","Resizable","LeftPlacement","SmallSize","LargeSize","HalfWidth","PinnedWithContent","NoBackdrop","TwoSheets","WithTabs","WithTopbarAndFooter"];export{h as Default,j as HalfWidth,b as LargeSize,y as LeftPlacement,k as NoBackdrop,g as OpenInNewWindow,f as Pinnable,v as PinnedWithContent,c as Resizable,x as SmallSize,P as TwoSheets,S as WithActionsScrollbarDividers,m as WithBackButton,O as WithTabs,C as WithTopbarAndFooter,Fe as __namedExportsOrder,Ee as default};
