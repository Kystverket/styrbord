import{j as t}from"./iframe-C7v4yl2J.js";import{C as o}from"./Dialog-DK_STYvC.js";import"./shipTypes-hFnSBndP.js";import"./Details-DeY5olzK.js";import"./KyvDivider-RgI2IJq0.js";import{B as E}from"./typography-C-2Dk0qU.js";import"./KyvSpinner-KzT_Z5P3.js";import"./skillingsbuoye-DlbTSsj7.js";import"./Logo-B3_tIxfF.js";import"./tooltip-TyAXlcCq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj9QRynV.js";import"./index-BCXsrxGj.js";const U=["Radio","Checkbox","Removable","Button"],P=["none","primary","neutral","primary/subtle","neutral/subtle"],W=["sm","md","lg"],u={variant:"Radio",label:"Nynorsk",color:"none",disabled:!1},g={variant:{control:{type:"select"},options:U},label:{control:{type:"text"}},color:{control:{type:"select"},description:"Subtle is mainly used for Removable variant",options:P},disabled:{control:{type:"boolean"}}},h=(r,s,a,e,i)=>{switch(r){case"Radio":return t.jsx(o.Radio,{"data-size":a,"data-color":e,disabled:i,name:"preview-radio",value:a??"preview",defaultChecked:!0,children:s});case"Checkbox":return t.jsx(o.Checkbox,{"data-size":a,"data-color":e,disabled:i,name:"preview-checkbox",value:a??"preview",defaultChecked:!0,children:s});case"Removable":return t.jsx(o.Removable,{"data-size":a,"data-color":e,disabled:i,"aria-label":`Slett ${s}`,children:s});case"Button":return t.jsx(o.Button,{"data-size":a,"data-color":e,disabled:i,children:s})}},Z={title:"Components/Chip",component:o.Radio,tags:["autodocs","ds"],parameters:{customStyles:{display:"flex",gap:"var(--ds-size-2)"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/chip/overview)"}}}},p={render:({variant:r,label:s,color:a,disabled:e})=>h(r,s,"md",a,e),args:u,argTypes:g},n={render:({variant:r,label:s,disabled:a})=>t.jsx(E,{gap:8,children:W.map(e=>t.jsx("span",{children:h(r,`${s} ${e.toUpperCase()}`,e,void 0,a)},e))}),args:u,argTypes:g},c={render:({variant:r,label:s,disabled:a})=>t.jsx(E,{gap:8,children:P.map(e=>t.jsx("span",{children:h(r,`${s} ${e}`,"md",e,a)},e))}),args:{...u,label:""},argTypes:g,parameters:{customStyles:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--ds-size-2)",width:"100%"}}},d={render:r=>t.jsx(o.Checkbox,{...r,children:"Nynorsk"})},l={render:r=>t.jsx(o.Removable,{...r,children:"Norge"}),args:{"aria-label":"Slett Norge"}},m={render:r=>t.jsx(o.Button,{...r,children:"Tøm alle filtre"}),parameters:{customStyles:{flexWrap:"wrap",justifyContent:"center"}}};var b,y,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    color,
    disabled
  }) => renderChip(variant, label, 'md', color, disabled),
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,x,f,S,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    disabled
  }) => <Box gap={8}>
      {sizes.map(size => {
      return <span key={size}>{renderChip(variant, \`\${label} \${size.toUpperCase()}\`, size, undefined, disabled)}</span>;
    })}
    </Box>,
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Go into the story itself to have an option to switch between variants",...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var k,R,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    variant,
    label,
    disabled
  }) => <Box gap={8}>
      {chipColors.map(color => {
      return <span key={color}>{renderChip(variant, \`\${label} \${color}\`, 'md', color, disabled)}</span>;
    })}
    </Box>,
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
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var w,T,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>
} satisfies StoryObj<typeof Chip.Checkbox>`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var z,A,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Chip.Removable {...args}>Norge</Chip.Removable>,
  args: {
    'aria-label': 'Slett Norge'
  }
} satisfies StoryObj<typeof Chip.Removable>`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,O,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Chip.Button {...args}>Tøm alle filtre</Chip.Button>,
  parameters: {
    customStyles: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }
} satisfies StoryObj<typeof Chip.Button>`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const ee=["Preview","Sizes","Colors","Checkbox","Removable","Button"];export{m as Button,d as Checkbox,c as Colors,p as Preview,l as Removable,n as Sizes,ee as __namedExportsOrder,Z as default};
