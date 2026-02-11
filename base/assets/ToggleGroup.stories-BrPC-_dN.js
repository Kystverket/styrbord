import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as o,D as T,P as x,B as k,f as s}from"./Card-KeqL4nDM.js";import"./Details-8YZFjHTH.js";import"./kyvDivider-DSk0K4x1.js";import"./typography-9ubeq_Vx.js";import"./skillingsbuoye-mzpk6Jp8.js";import"./Logo-CEva0-QL.js";import{r as j}from"./index-BWu4c2F4.js";import{T as t}from"./index-Ci7PneUx.js";import"./index-B8jaNLVP.js";import"./index-DtgyEQ7Q.js";import"./lite-DaUVFjkg.js";import"./index-BtN5BFRV.js";import"./label-CT_xXrm7.js";import"./heading-B8SX_GYc.js";import"./index-eaWjzoNI.js";const K={title:"Components/ToggleGroup",component:t,tags:["autodocs","ds"],decorators:[r=>e.jsx("div",{style:{maxWidth:"80vw"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/toggle-group/overview)"}}}},a=r=>e.jsxs(t,{...r,children:[e.jsx(t.Item,{value:"innboks",children:"Innboks"}),e.jsx(t.Item,{value:"utkast",children:"Utkast"}),e.jsx(t.Item,{value:"arkiv",children:"Arkiv"}),e.jsx(t.Item,{value:"sendt",children:"Sendt"})]});a.args={defaultValue:"innboks",name:"toggle-group-nuts"};const n=()=>e.jsxs(t,{defaultValue:"option-1",children:[e.jsx(s,{content:"Venstrestilt",children:e.jsx(t.Item,{value:"option-1",icon:!0,children:e.jsx(o,{material:"format_align_left",title:"AlignLeftIcon"})})}),e.jsx(s,{content:"Midtstilt",children:e.jsx(t.Item,{value:"option-2",icon:!0,children:e.jsx(o,{material:"format_align_center",title:"AlignCenterIcon"})})}),e.jsx(s,{content:"Høyrestilt",children:e.jsx(t.Item,{value:"option-3",icon:!0,children:e.jsx(o,{material:"format_align_right",title:"AlignRightIcon"})})})]}),i=()=>{const[r,l]=j.useState("utkast");return e.jsxs(e.Fragment,{children:[e.jsxs(t,{value:r,onChange:l,children:[e.jsxs(t.Item,{value:"innboks",children:[e.jsx(o,{material:"mail","aria-hidden":!0}),"Innboks"]}),e.jsxs(t.Item,{value:"utkast",children:[e.jsx(o,{material:"edit_document","aria-hidden":!0}),"Utkast"]}),e.jsxs(t.Item,{value:"arkiv",children:[e.jsx(o,{material:"archive","aria-hidden":!0}),"Arkiv"]}),e.jsxs(t.Item,{value:"sendt",children:[e.jsx(o,{material:"send","aria-hidden":!0}),"Sendt"]})]}),e.jsx(T,{}),e.jsxs(x,{children:["Du har valgt: ",r]}),e.jsx(k,{"data-size":"sm",onClick:()=>l("arkiv"),children:"Velg Arkiv"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Preview"};n.__docgenInfo={description:"",methods:[],displayName:"OnlyIcons"};i.__docgenInfo={description:"",methods:[],displayName:"Kontrollert"};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <ToggleGroup {...args}>
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
    </ToggleGroup>;
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <ToggleGroup defaultValue={'option-1'}>
      <Tooltip content="Venstrestilt">
        <ToggleGroup.Item value="option-1" icon>
          <Icon material="format_align_left" title="AlignLeftIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Midtstilt">
        <ToggleGroup.Item value="option-2" icon>
          <Icon material="format_align_center" title="AlignCenterIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Høyrestilt">
        <ToggleGroup.Item value="option-3" icon>
          <Icon material="format_align_right" title="AlignRightIcon" />
        </ToggleGroup.Item>
      </Tooltip>
    </ToggleGroup>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var I,v,h;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('utkast');
  return <>
      <ToggleGroup value={value} onChange={setValue}>
        <ToggleGroup.Item value="innboks">
          <Icon material="mail" aria-hidden />
          Innboks
        </ToggleGroup.Item>
        <ToggleGroup.Item value="utkast">
          <Icon material="edit_document" aria-hidden />
          Utkast
        </ToggleGroup.Item>
        <ToggleGroup.Item value="arkiv">
          <Icon material="archive" aria-hidden />
          Arkiv
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <Icon material="send" aria-hidden />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
      <Divider />
      <Paragraph>Du har valgt: {value}</Paragraph>
      <Button data-size="sm" onClick={() => setValue('arkiv')}>
        Velg Arkiv
      </Button>
    </>;
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const N=["Preview","OnlyIcons","Kontrollert"];export{i as Kontrollert,n as OnlyIcons,a as Preview,N as __namedExportsOrder,K as default};
