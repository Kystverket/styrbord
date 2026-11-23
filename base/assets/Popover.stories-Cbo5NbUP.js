import{r,j as e}from"./iframe-DncuAvYS.js";import{B as s,I as U,S as h}from"./Dialog-BpWCuj19.js";import"./shipTypes-hFnSBndP.js";import"./Details-D-udYoVy.js";import"./KyvDivider-CVzGKaMV.js";import"./KyvSpinner-wfpj2dLC.js";import"./skillingsbuoye-BnPBUKSA.js";import"./Logo-D5H4F85i.js";import{q as i,P as u}from"./tooltip-DHPLQYnL.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BWmLKHwz.js";import"./index-hTEmueRI.js";import"./index-CRQLSSLM.js";const{expect:R,userEvent:W,within:q}=__STORYBOOK_MODULE_TEST__,ae={title:"Components/Popover",component:i,tags:["autodocs","ds"],parameters:{chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/popover/overview)"}}},argTypes:{"data-color":{control:"select",options:[void 0,"neutral","accent","danger","info","warning","success"]},"data-size":{control:"radio",options:["sm","md","lg"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},variant:{control:"radio",options:[void 0,"tinted"]}},play:async t=>{const n=q(t.canvasElement).getByRole("button");await W.click(n);const a=t.canvasElement.querySelector("[popover]");await R(a).toBeVisible()}},d=t=>{const o=r.useId(),[n,a]=r.useState(!1);return e.jsxs(h,{gap:2,align:"start",children:[e.jsx(u,{children:"This popover is kept open for testing purposes. Normally, it closes when clicking outside of it."}),e.jsx(s,{popoverTarget:o,onClick:()=>a(f=>!f),children:"My trigger!"}),e.jsx(i,{...t,id:o,open:n,children:"popover content"})]})};d.args={placement:"top","data-size":"md","data-color":void 0,variant:void 0};const p=()=>{const t=r.useId();return e.jsxs(e.Fragment,{children:[e.jsx(s,{popoverTarget:t,"data-color":"danger","aria-label":"Slett rad",children:e.jsx(U,{material:"delete",title:"Slett rad"})}),e.jsxs(i,{id:t,"data-color":"danger",children:[e.jsx(u,{children:"Er du sikker på at du vil slette raden? Handlingen kan ikke angres."}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)",marginTop:"var(--ds-size-2)"},children:[e.jsx(s,{"data-size":"sm",children:"Ja, slett den"}),e.jsx(s,{"data-size":"sm",variant:"outline",children:"Avbryt"})]})]})]})};p.parameters={customStyles:{padding:"12rem 6rem 1rem"}};const l=()=>{const t=r.useId();return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Vi bruker"," ",e.jsx("button",{type:"button",popoverTarget:t,"data-popover":"inline",children:"design tokens"})," ","for å sikre at vi har en konsistent design."]}),e.jsx(i,{id:t,"data-color":"neutral",children:e.jsxs(u,{children:[e.jsx("strong",{style:{display:"block"},children:"Design tokens"}),"Design tokens er en samling av variabler som definerer designet i et designsystem."]})})]})};l.parameters={customStyles:{padding:"10rem 6rem 1rem"}};const A={neutralDefault:{"data-color":"neutral"},neutralTinted:{"data-color":"neutral",variant:"tinted"},dangerDefault:{"data-color":"danger"},dangerTinted:{"data-color":"danger",variant:"tinted"},infoDefault:{"data-color":"info"},infoTinted:{"data-color":"info",variant:"tinted"},warningDefault:{"data-color":"warning"},warningTinted:{"data-color":"warning",variant:"tinted"}},c=()=>{const t=r.useId(),[o,n]=r.useState(!1);return r.useEffect(()=>n(!0),[]),e.jsx(h,{gap:30,align:"start",px:30,children:Object.entries(A).map(([a,f],V)=>e.jsxs(r.Fragment,{children:[e.jsx(s,{popoverTarget:`${t}-${a}`,children:"popover"}),e.jsx(i,{id:`${t}-${a}`,open:o,placement:V>=4?"bottom":"top",autoPlacement:!1,...f,children:a})]},a))})};c.parameters={customStyles:{padding:"5rem 1rem"}};const m=()=>{const t=r.useId(),[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{popoverTarget:t,onClick:()=>n(!o),children:"My trigger"}),e.jsxs(i,{id:t,open:o,onClose:()=>n(!1),"data-color":"neutral",children:[e.jsx(u,{children:"Er du sikker på at du vil slette?"}),e.jsx(s,{"data-color":"danger",onClick:()=>n(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};m.parameters={customStyles:{padding:"8rem 6rem 1rem"}};const g=()=>{const t=r.useId(),[o,n]=r.useState(!1);return r.useEffect(()=>n(!0),[]),e.jsx(h,{gap:30,align:"start",px:30,children:["sm","md","lg"].map(a=>e.jsxs(r.Fragment,{children:[e.jsx(s,{popoverTarget:`${t}-${a}`,children:"popover"}),e.jsx(i,{id:`${t}-${a}`,open:o,placement:"top",autoPlacement:!1,"data-size":a,children:a})]},a))})},v=()=>{const[t,o]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{popovertarget:"my-popover",onClick:()=>o(!t),children:"My trigger"}),e.jsxs(i,{id:"my-popover",open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(u,{children:"Er du sikker på at du vil slette?"}),e.jsx(s,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Preview"};p.__docgenInfo={description:"",methods:[],displayName:"Interactive"};l.__docgenInfo={description:"",methods:[],displayName:"DottedUnderline"};c.__docgenInfo={description:"",methods:[],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"Controlled"};g.__docgenInfo={description:"",methods:[],displayName:"Sizes"};v.__docgenInfo={description:"",methods:[],displayName:"WithoutContext"};var k,x,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const id = useId();
  const [open, setOpen] = useState(false);
  return <Surface gap={2} align="start">
      <Paragraph>
        This popover is kept open for testing purposes. Normally, it closes when clicking outside of it.
      </Paragraph>
      <Button popoverTarget={id} onClick={() => setOpen(prev => !prev)}>
        My trigger!
      </Button>
      <Popover {...args} id={id} open={open}>
        popover content
      </Popover>
    </Surface>;
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,j,P;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const id = useId();
  return <>
      <Button popoverTarget={id} data-color="danger" aria-label="Slett rad">
        <Icon material="delete" title="Slett rad" />
      </Button>
      <Popover id={id} data-color="danger">
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
    </>;
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var T,b,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const id = useId();
  return <>
      <Paragraph>
        Vi bruker{' '}
        <button type="button" popoverTarget={id} data-popover="inline">
          design tokens
        </button>{' '}
        for å sikre at vi har en konsistent design.
      </Paragraph>
      <Popover id={id} data-color="neutral">
        <Paragraph>
          <strong style={{
          display: 'block'
        }}>
            Design tokens
          </strong>
          Design tokens er en samling av variabler som definerer designet i et designsystem.
        </Paragraph>
      </Popover>
    </>;
}`,...(O=(b=l.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var z,B,I;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const id = useId();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(true), []);
  return <Surface gap={30} align="start" px={30}>
      {Object.entries(VariantsMap).map(([key, props], index) => <Fragment key={key}>
          <Button popoverTarget={\`\${id}-\${key}\`}>popover</Button>
          <Popover id={\`\${id}-\${key}\`} open={open} placement={index >= 4 ? 'bottom' : 'top'} autoPlacement={false} {...props}>
            {key}
          </Popover>
        </Fragment>)}
    </Surface>;
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var _,C,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const id = useId();
  const [open, setOpen] = useState(false);
  return <>
      <Button popoverTarget={id} onClick={() => setOpen(!open)}>
        My trigger
      </Button>
      <Popover id={id} open={open} onClose={() => setOpen(false)} data-color="neutral">
        <Paragraph>Er du sikker på at du vil slette?</Paragraph>
        <Button data-color="danger" onClick={() => setOpen(false)} data-size="sm" style={{
        marginTop: 'var(--ds-size-2)'
      }}>
          Slett
        </Button>
      </Popover>
    </>;
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var $,w,D;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const id = useId();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(true), []);
  return <Surface gap={30} align="start" px={30}>
      {(['sm', 'md', 'lg'] as const).map(size => <Fragment key={size}>
          <Button popoverTarget={\`\${id}-\${size}\`}>popover</Button>
          <Popover id={\`\${id}-\${size}\`} open={open} placement="top" autoPlacement={false} data-size={size}>
            {size}
          </Popover>
        </Fragment>)}
    </Surface>;
}`,...(D=(w=g.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var F,M,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(N=(M=v.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const ne=["Preview","Interactive","DottedUnderline","Variants","Controlled","Sizes","WithoutContext"];export{m as Controlled,l as DottedUnderline,p as Interactive,d as Preview,g as Sizes,c as Variants,v as WithoutContext,ne as __namedExportsOrder,ae as default};
