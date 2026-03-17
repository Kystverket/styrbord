'use client';
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-lDInlNZE.js";import{P as l,B as g,I as w}from"./idContext-CXOGsIH1.js";import"./Details-B2DfsxXZ.js";import"./kyvDivider-GkhM6YIE.js";import{B as M}from"./typography-CdiQYpGP.js";import"./skillingsbuoye-BG85ofhS.js";import"./Logo-DajRw6N7.js";import{P as N,a as V,b as U}from"./popover-trigger-oFvNv_V4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Btbm0Jje.js";import"./index-DqzA1BE0.js";import"./index-CHdvFyKM.js";import"./lite-DaUVFjkg.js";import"./index-iaBY1BsK.js";import"./label-sgXnIPs0.js";import"./heading-8BSrokmy.js";import"./index-DXwRgFn0.js";import"./translations-DBitQYLv.js";const r=Object.assign(N,{TriggerContext:U,Trigger:V});r.TriggerContext.displayName="Popover.TriggerContext";r.Trigger.displayName="Popover.Trigger";const{expect:R,userEvent:W,within:A}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Popover",component:r,tags:["autodocs","ds"],parameters:{layout:"fullscreen",customStyles:{display:"flex",placeItems:"end",placeContent:"center",padding:"1rem 2rem"},chromatic:{disableSnapshot:!1},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/popover/overview)"}}},play:async t=>{const c=A(t.canvasElement).getByRole("button");await W.click(c);const u=t.canvasElement.querySelector("[popover]");await R(u).toBeVisible()}},s=t=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"My trigger!"}),e.jsx(r,{...t,children:"popover content"})]});s.args={placement:"top"};s.parameters={customStyles:{paddingTop:"5rem"}};const n=()=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{"data-color":"danger","aria-label":"Slett rad",children:e.jsx(w,{material:"delete",title:"Slett rad"})}),e.jsxs(r,{"data-color":"danger",children:[e.jsx(l,{children:"Er du sikker på at du vil slette raden? Handlingen kan ikke angres."}),e.jsxs("div",{style:{display:"flex",gap:"var(--ds-size-2)",marginTop:"var(--ds-size-2)"},children:[e.jsx(g,{"data-size":"sm",children:"Ja, slett den"}),e.jsx(g,{"data-size":"sm",variant:"outline",children:"Avbryt"})]})]})]});n.parameters={customStyles:{padding:"12rem 6rem 1rem"}};const i=()=>e.jsx(e.Fragment,{children:e.jsxs(r.TriggerContext,{children:[e.jsxs(l,{children:["Vi bruker ",e.jsx(r.Trigger,{inline:!0,children:"design tokens"})," for å sikre at vi har en konsistent design."]}),e.jsx(r,{"data-color":"neutral",children:e.jsxs(l,{children:[e.jsx("strong",{style:{display:"block"},children:"Design tokens"}),"Design tokens er en samling av variabler som definerer designet i et designsystem."]})})]})});i.parameters={customStyles:{padding:"10rem 6rem 1rem"}};const F={neutralDefault:{"data-color":"neutral"},neutralTinted:{"data-color":"neutral",variant:"tinted"},dangerDefault:{"data-color":"danger"},dangerTinted:{"data-color":"danger",variant:"tinted"},infoDefault:{"data-color":"info"},infoTinted:{"data-color":"info",variant:"tinted"},warningDefault:{"data-color":"warning"},warningTinted:{"data-color":"warning",variant:"tinted"}},a=()=>{const[t,o]=m.useState(!1);return m.useEffect(()=>o(!0),[]),e.jsx(M,{gap:64,align:"start",px:64,children:Object.entries(F).map(([c,u],I)=>e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{children:"popover"}),e.jsx(r,{open:t,placement:I>=4?"bottom":"top",autoPlacement:!1,...u,children:c})]},c))})};a.parameters={customStyles:{padding:"5rem 1rem"}};a.play=()=>{};a.parameters={customStyles:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"var(--ds-size-2)",height:"100%",width:"100%",placeItems:"center",padding:"5rem 3rem"}};const p=()=>{const[t,o]=m.useState(!1);return e.jsxs(r.TriggerContext,{children:[e.jsx(r.Trigger,{onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(l,{children:"Er du sikker på at du vil slette?"}),e.jsx(g,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};p.parameters={customStyles:{padding:"8rem 6rem 1rem"}};const d=()=>{const[t,o]=m.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{popovertarget:"my-popover",onClick:()=>o(!t),children:"My trigger"}),e.jsxs(r,{id:"my-popover",open:t,onClose:()=>o(!1),"data-color":"neutral",children:[e.jsx(l,{children:"Er du sikker på at du vil slette?"}),e.jsx(g,{"data-color":"danger",onClick:()=>o(!1),"data-size":"sm",style:{marginTop:"var(--ds-size-2)"},children:"Slett"})]})]})};d.parameters={customStyles:{padding:"8rem 6rem 1rem"}};s.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[],displayName:"Interactive"};i.__docgenInfo={description:"",methods:[],displayName:"DottedUnderline"};a.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.__docgenInfo={description:"",methods:[],displayName:"WithoutContext"};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Popover.TriggerContext>
      <Popover.Trigger>My trigger!</Popover.Trigger>
      <Popover {...args}>popover content</Popover>
    </Popover.TriggerContext>;
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var P,y,T;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,S,b;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var O,_,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var z,E,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const de=["Preview","Interactive","DottedUnderline","Variants","Controlled","WithoutContext"];export{p as Controlled,i as DottedUnderline,n as Interactive,s as Preview,a as Variants,d as WithoutContext,de as __namedExportsOrder,pe as default};
