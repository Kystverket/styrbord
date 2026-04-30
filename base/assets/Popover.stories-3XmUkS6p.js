import{r as m,j as e}from"./iframe-DEa5CtWz.js";import{B as l,I as w}from"./SlotDialog-DxuGsvIF.js";import"./Details-NCjmJlGS.js";import"./KyvDivider-DbG94LfO.js";import{B as M}from"./typography-Bh1pBJ3-.js";import"./KyvSpinner-DyyCEFVM.js";import"./skillingsbuoye-DGmhGI5B.js";import"./Logo-B699lny2.js";import{q as r,P as c}from"./tooltip-CLj5ps21.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CCrF873T.js";import"./index-aK8o0k8i.js";const{expect:V,userEvent:N,within:U}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Popover",component:r,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"flex",placeItems:"end",placeContent:"center",padding:"1rem 2rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/popover/overview)"}}},play:async t=>{const g=U(t.canvasElement).getByRole("button");await N.click(g);const u=t.canvasElement.querySelector("[popover]");await V(u).toBeVisible()}},s=t=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"My trigger!"}),e.jsx(r,{...t,children:"popover content"})]});s.args={placement:"top"};s.parameters={customStyles:{paddingTop:"5rem"}};const n=()=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{"data-color":"danger","aria-label":"Slett rad",children:e.jsx(w,{material:"delete",title:"Slett rad"})}),e.jsxs(r,{"data-color":"danger",children:[e.jsx(c,{children:"Er du sikker på at du vil slette raden? Handlingen kan ikke angres."}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)",marginTop:"var(--ds-size-2)"},children:[e.jsx(l,{"data-size":"sm",children:"Ja, slett den"}),e.jsx(l,{"data-size":"sm",variant:"outline",children:"Avbryt"})]})]})]});n.parameters={customStyles:{padding:"12rem 6rem 1rem"}};const i=()=>e.jsx(e.Fragment,{children:e.jsxs(r.TriggerContext,{children:[e.jsxs(c,{children:["Vi bruker ",e.jsx(r.Trigger,{inline:!0,children:"design tokens"})," for å sikre at vi har en konsistent design."]}),e.jsx(r,{"data-color":"neutral",children:e.jsxs(c,{children:[e.jsx("strong",{style:{display:"block"},children:"Design tokens"}),"Design tokens er en samling av variabler som definerer designet i et designsystem."]})})]})});i.parameters={customStyles:{padding:"10rem 6rem 1rem"}};const R={neutralDefault:{"data-color":"neutral"},neutralTinted:{"data-color":"neutral",variant:"tinted"},dangerDefault:{"data-color":"danger"},dangerTinted:{"data-color":"danger",variant:"tinted"},infoDefault:{"data-color":"info"},infoTinted:{"data-color":"info",variant:"tinted"},warningDefault:{"data-color":"warning"},warningTinted:{"data-color":"warning",variant:"tinted"}},a=()=>{const[t,o]=m.useState(!1);return m.useEffect(()=>o(!0),[]),e.jsx(M,{gap:64,align:"start",px:64,children:Object.entries(R).map(([g,u],I)=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"popover"}),e.jsx(r,{open:t,placement:I>=4?"bottom":"top",autoPlacement:!1,...u,children:g})]},g))})};a.parameters={customStyles:{padding:"5rem 1rem"}};a.play=()=>{};a.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center",padding:"5rem 3rem"}};const p=()=>{const[t,o]=m.useState(!1);return e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(c,{children:"Er du sikker på at du vil slette?"}),e.jsx(l,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};p.parameters={customStyles:{padding:"8rem 6rem 1rem"}};const d=()=>{const[t,o]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{popovertarget:"my-popover",onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{id:"my-popover",open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(c,{children:"Er du sikker på at du vil slette?"}),e.jsx(l,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};d.parameters={customStyles:{padding:"8rem 6rem 1rem"}};s.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[],displayName:"Interactive"};i.__docgenInfo={description:"",methods:[],displayName:"DottedUnderline"};a.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.__docgenInfo={description:"",methods:[],displayName:"WithoutContext"};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Popover.TriggerContext>
      <Popover.Trigger>My trigger!</Popover.Trigger>
      <Popover {...args}>popover content</Popover>
    </Popover.TriggerContext>;
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,P,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Popover.TriggerContext>
      <Popover.Trigger data-color="danger" aria-label="Slett rad">
        <Icon material="delete" title="Slett rad" />
      </Popover.Trigger>
      <Popover data-color="danger">
        <Paragraph>Er du sikker på at du vil slette raden? Handlingen kan ikke angres.</Paragraph>
        <div style={{
        display: 'flex',
        gap: 'var(--ds-size-2)',
        marginTop: 'var(--ds-size-2)'
      }}>
          <Button data-size="sm">Ja, slett den</Button>
          <Button data-size="sm" variant="outline">
            Avbryt
          </Button>
        </div>
      </Popover>
    </Popover.TriggerContext>;
}`,...(f=(P=n.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var k,T,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <>
      <Popover.TriggerContext>
        <Paragraph>
          Vi bruker <Popover.Trigger inline>design tokens</Popover.Trigger> for å sikre at vi har en konsistent design.
        </Paragraph>
        <Popover data-color="neutral">
          <Paragraph>
            <strong style={{
            display: 'block'
          }}>
              Design tokens
            </strong>
            Design tokens er en samling av variabler som definerer designet i et designsystem.
          </Paragraph>
        </Popover>
      </Popover.TriggerContext>
    </>;
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,S,_;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(true), []);
  return <Box gap={64} align="start" px={64}>
      {Object.entries(VariantsMap).map(([key, props], index) => <Popover.TriggerContext key={key}>
          <Popover.Trigger>popover</Popover.Trigger>
          <Popover open={open} placement={index >= 4 ? 'bottom' : 'top'} autoPlacement={false} {...props}>
            {key}
          </Popover>
        </Popover.TriggerContext>)}
    </Box>;
}`,...(_=(S=a.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var O,b,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Popover.TriggerContext>
      <Popover.Trigger onClick={() => setOpen(!open)}>My trigger</Popover.Trigger>
      <Popover open={open} onClose={() => setOpen(false)} data-color="neutral">
        <Paragraph>Er du sikker på at du vil slette?</Paragraph>
        <Button data-color="danger" onClick={() => setOpen(false)} data-size="sm" style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Slett
        </Button>
      </Popover>
    </Popover.TriggerContext>;
}`,...(B=(b=p.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var z,E,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>
      <Button popovertarget="my-popover" onClick={() => setOpen(!open)}>
        My trigger
      </Button>
      <Popover id="my-popover" open={open} onClose={() => setOpen(false)} data-color="neutral">
        <Paragraph>Er du sikker på at du vil slette?</Paragraph>
        <Button data-color="danger" onClick={() => setOpen(false)} data-size="sm" style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Slett
        </Button>
      </Popover>
    </>;
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const $=["Preview","Interactive","DottedUnderline","Variants","Controlled","WithoutContext"];export{p as Controlled,i as DottedUnderline,n as Interactive,s as Preview,a as Variants,d as WithoutContext,$ as __namedExportsOrder,Z as default};
