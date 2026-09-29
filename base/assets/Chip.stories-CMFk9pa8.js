import{j as t}from"./iframe-DR0OYCpq.js";import{S as D}from"./Dialog-ZBxDd1Uk.js";import"./shipTypes-hFnSBndP.js";import"./Details-gblrFMVs.js";import"./KyvDivider-D67Jstwx.js";import"./KyvSpinner-zXYCJit5.js";import"./skillingsbuoye-DjMihQYC.js";import"./Logo-BKoiHjcJ.js";import{a as o}from"./tooltip-DnfQk6b_.js";import{s as U,a as W}from"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNwtzyee.js";import"./index-CPkxmeg0.js";const _=["Radio","Checkbox","Removable","Button"],E=[...U,...W],G=["sm","md","lg"],u={variant:"Radio",label:"Nynorsk",color:"none",disabled:!1},g={variant:{control:{type:"select"},options:_},label:{control:{type:"text"}},color:{control:{type:"select"},description:"Subtle is mainly used for Removable variant",options:E},disabled:{control:{type:"boolean"}}},h=(r,s,a,e,i)=>{switch(r){case"Radio":return t.jsx(o.Radio,{"data-size":a,"data-color":e,disabled:i,name:"preview-radio",value:a??"preview",defaultChecked:!0,children:s});case"Checkbox":return t.jsx(o.Checkbox,{"data-size":a,"data-color":e,disabled:i,name:"preview-checkbox",value:a??"preview",defaultChecked:!0,children:s});case"Removable":return t.jsx(o.Removable,{"data-size":a,"data-color":e,disabled:i,"aria-label":`Slett ${s}`,children:s});case"Button":return t.jsx(o.Button,{"data-size":a,"data-color":e,disabled:i,children:s})}},re={title:"Components/Chip",component:o.Radio,tags:["autodocs","ds"],parameters:{customStyles:{display:"flex",gap:"var(--ds-size-2)"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/chip/overview)"}}}},p={render:({variant:r,label:s,color:a,disabled:e})=>h(r,s,"md",a,e),args:u,argTypes:g},n={render:({variant:r,label:s,disabled:a})=>t.jsx(D,{gap:2,children:G.map(e=>t.jsx("span",{children:h(r,`${s} ${e.toUpperCase()}`,e,void 0,a)},e))}),args:u,argTypes:g},c={render:({variant:r,label:s,disabled:a})=>t.jsx(D,{gap:2,children:E.map(e=>t.jsx("span",{children:h(r,`${s} ${e}`,"md",e,a)},e))}),args:{...u,label:""},argTypes:g,parameters:{customStyles:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--ds-size-2)",width:"100%"}}},d={render:r=>t.jsx(o.Checkbox,{...r,children:"Nynorsk"})},l={render:r=>t.jsx(o.Removable,{...r,children:"Norge"}),args:{"aria-label":"Slett Norge"}},m={render:r=>t.jsx(o.Button,{...r,children:"Tøm alle filtre"}),parameters:{customStyles:{flexWrap:"wrap",justifyContent:"center"}}};var b,y,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    color,
    disabled
  }) => renderChip(variant, label, 'md', color, disabled),
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(C=(y=p.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,f,x,S,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    disabled
  }) => <Surface gap={2}>
      {sizes.map(size => {
      return <span key={size}>{renderChip(variant, \`\${label} \${size.toUpperCase()}\`, size, undefined, disabled)}</span>;
    })}
    </Surface>,
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Go into the story itself to have an option to switch between variants",...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var k,R,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    disabled
  }) => <Surface gap={2}>
      {chipColors.map(color => {
      return <span key={color}>{renderChip(variant, \`\${label} \${color}\`, 'md', color, disabled)}</span>;
    })}
    </Surface>,
  args: {
    ...defaultVariantArgs,
    label: ''
  },
  argTypes: variantArgTypes,
  parameters: {
    customStyles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ds-size-2)',
      width: '100%'
    }
  }
}`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var T,B,$;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>
} satisfies StoryObj<typeof Chip.Checkbox>`,...($=(B=d.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var z,A,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Chip.Removable {...args}>Norge</Chip.Removable>,
  args: {
    'aria-label': 'Slett Norge'
  }
} satisfies StoryObj<typeof Chip.Removable>`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,O,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Chip.Button {...args}>Tøm alle filtre</Chip.Button>,
  parameters: {
    customStyles: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }
} satisfies StoryObj<typeof Chip.Button>`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ae=["Preview","Sizes","Colors","Checkbox","Removable","Button"];export{m as Button,d as Checkbox,c as Colors,p as Preview,l as Removable,n as Sizes,ae as __namedExportsOrder,re as default};
