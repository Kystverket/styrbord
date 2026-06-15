import{r as s,j as e}from"./iframe-BaKPPD1J.js";import{B as v,I as R}from"./Dialog-C0HmbON9.js";import"./Details-BWJIXiH8.js";import"./KyvDivider-BXv4n0ob.js";import{B as x}from"./typography-BIz6NTof.js";import"./KyvSpinner-shXAIoyL.js";import"./skillingsbuoye-X1pHeasA.js";import"./Logo-BsbRAMgD.js";import{p as r,P as c}from"./tooltip-CDM62wRo.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7tPpMOen.js";import"./index-BmhFWFPc.js";const{expect:W,userEvent:A,within:H}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Popover",component:r,tags:["autodocs","ds"],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/popover/overview)"}}},argTypes:{"data-color":{control:"select",options:[void 0,"neutral","accent","danger","info","warning","success"]},"data-size":{control:"radio",options:["sm","md","lg"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},variant:{control:"radio",options:[void 0,"tinted"]}},play:async t=>{const a=H(t.canvasElement).getByRole("button");await A.click(a);const g=t.canvasElement.querySelector("[popover]");await W(g).toBeVisible()}},n=t=>{const[o,a]=s.useState(!1);return e.jsxs(x,{gap:8,align:"start",children:[e.jsx(c,{children:"This popover is kept open for testing purposes. Normally, it closes when clicking outside of it."}),e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{onClick:()=>a(g=>!g),children:"My trigger!"}),e.jsx(r,{open:o,...t,children:"popover content"})]})]})};n.args={placement:"top","data-size":"md","data-color":void 0,variant:void 0};const i=()=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{"data-color":"danger","aria-label":"Slett rad",children:e.jsx(R,{material:"delete",title:"Slett rad"})}),e.jsxs(r,{"data-color":"danger",children:[e.jsx(c,{children:"Er du sikker på at du vil slette raden? Handlingen kan ikke angres."}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)",marginTop:"var(--ds-size-2)"},children:[e.jsx(v,{"data-size":"sm",children:"Ja, slett den"}),e.jsx(v,{"data-size":"sm",variant:"outline",children:"Avbryt"})]})]})]});i.parameters={customStyles:{padding:"12rem 6rem 1rem"}};const p=()=>e.jsxs(r.TriggerContext,{children:[e.jsxs(c,{children:["Vi bruker ",e.jsx(r.Trigger,{inline:!0,children:"design tokens"})," for å sikre at vi har en konsistent design."]}),e.jsx(r,{"data-color":"neutral",children:e.jsxs(c,{children:[e.jsx("strong",{style:{display:"block"},children:"Design tokens"}),"Design tokens er en samling av variabler som definerer designet i et designsystem."]})})]});p.parameters={customStyles:{padding:"10rem 6rem 1rem"}};const J={neutralDefault:{"data-color":"neutral"},neutralTinted:{"data-color":"neutral",variant:"tinted"},dangerDefault:{"data-color":"danger"},dangerTinted:{"data-color":"danger",variant:"tinted"},infoDefault:{"data-color":"info"},infoTinted:{"data-color":"info",variant:"tinted"},warningDefault:{"data-color":"warning"},warningTinted:{"data-color":"warning",variant:"tinted"}},l=()=>{const[t,o]=s.useState(!1);return s.useEffect(()=>o(!0),[]),e.jsx(x,{gap:64,align:"start",px:64,children:Object.entries(J).map(([a,g],U)=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"popover"}),e.jsx(r,{open:t,placement:U>=4?"bottom":"top",autoPlacement:!1,...g,children:a})]},a))})};l.parameters={customStyles:{padding:"5rem 1rem"}};const d=()=>{const[t,o]=s.useState(!1);return e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(c,{children:"Er du sikker på at du vil slette?"}),e.jsx(v,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};d.parameters={customStyles:{padding:"8rem 6rem 1rem"}};const m=()=>{const[t,o]=s.useState(!1);return s.useEffect(()=>o(!0),[]),e.jsx(x,{gap:64,align:"start",px:64,children:["sm","md","lg"].map(a=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"popover"}),e.jsx(r,{open:t,placement:"top",autoPlacement:!1,"data-size":a,children:a})]},a))})},u=()=>{const[t,o]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(v,{popovertarget:"my-popover",onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{id:"my-popover",open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(c,{children:"Er du sikker på at du vil slette?"}),e.jsx(v,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Preview"};i.__docgenInfo={description:"",methods:[],displayName:"Interactive"};p.__docgenInfo={description:"",methods:[],displayName:"DottedUnderline"};l.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Controlled"};m.__docgenInfo={description:"",methods:[],displayName:"Sizes"};u.__docgenInfo={description:"",methods:[],displayName:"WithoutContext"};var h,f,P;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <Box gap={8} align="start">
      <Paragraph>
        This popover is kept open for testing purposes. Normally, it closes when clicking outside of it.
      </Paragraph>
      <Popover.TriggerContext>
        <Popover.Trigger onClick={() => setOpen(prev => !prev)}>My trigger!</Popover.Trigger>
        <Popover open={open} {...args}>
          popover content
        </Popover>
      </Popover.TriggerContext>
    </Box>;
}`,...(P=(f=n.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var k,T,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var j,C,S;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Popover.TriggerContext>
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
    </Popover.TriggerContext>;
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var O,z,B;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var _,b,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(E=(b=d.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var w,D,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(true), []);
  return <Box gap={64} align="start" px={64}>
      {(['sm', 'md', 'lg'] as const).map(size => <Popover.TriggerContext key={size}>
          <Popover.Trigger>popover</Popover.Trigger>
          <Popover open={open} placement="top" autoPlacement={false} data-size={size}>
            {size}
          </Popover>
        </Popover.TriggerContext>)}
    </Box>;
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var M,N,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const oe=["Preview","Interactive","DottedUnderline","Variants","Controlled","Sizes","WithoutContext"];export{d as Controlled,p as DottedUnderline,i as Interactive,n as Preview,m as Sizes,l as Variants,u as WithoutContext,oe as __namedExportsOrder,te as default};
