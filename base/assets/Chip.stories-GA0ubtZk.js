import{j as s}from"./iframe-CPuhykfl.js";import{C as t}from"./Dialog-CO49LTj7.js";import"./shipTypes-hFnSBndP.js";import"./Details-CJKZ-vdv.js";import"./KyvDivider-BVoBm50f.js";import{B as D}from"./typography-Dc7Rvq6V.js";import"./KyvSpinner-DBrydDBs.js";import"./skillingsbuoye-nl-brODA.js";import"./Logo-C27TizVx.js";import"./tooltip-Dzmlct3D.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D9Nw6Yhx.js";import"./index-R4Mc1a11.js";const E=["Radio","Checkbox","Removable","Button"],P=["none","neutral"],U=["sm","md","lg"],m={variant:"Radio",label:"Nynorsk"},u={variant:{control:{type:"select"},options:E},label:{control:{type:"text"}}},g=(r,a,e,n)=>{switch(r){case"Radio":return s.jsx(t.Radio,{"data-size":e,"data-color":n,name:"preview-radio",value:e??"preview",defaultChecked:!0,children:a});case"Checkbox":return s.jsx(t.Checkbox,{"data-size":e,"data-color":n,name:"preview-checkbox",value:e??"preview",defaultChecked:!0,children:a});case"Removable":return s.jsx(t.Removable,{"data-size":e,"data-color":n,"aria-label":`Slett ${a}`,children:a});case"Button":return s.jsx(t.Button,{"data-size":e,"data-color":n,children:a})}},Y={title:"Components/Chip",component:t.Radio,tags:["autodocs","ds"],parameters:{customStyles:{display:"flex",gap:"var(--ds-size-2)"},docs:{description:{component:"[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/chip/overview)"}}}},i={render:({variant:r,label:a})=>g(r,a),args:m,argTypes:u},o={render:({variant:r,label:a})=>s.jsx(D,{gap:8,children:U.map(e=>s.jsx("span",{children:g(r,`${a} ${e.toUpperCase()}`,e)},e))}),args:m,argTypes:u},p={render:({variant:r,label:a})=>s.jsx(D,{gap:8,children:P.map(e=>s.jsx("span",{children:g(r,`${a} ${e}`,"md",e)},e))}),args:{...m,label:""},argTypes:u,parameters:{customStyles:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--ds-size-2)",width:"100%"}}},c={render:r=>s.jsx(t.Checkbox,{...r,children:"Nynorsk"})},d={render:r=>s.jsx(t.Removable,{...r,children:"Norge"}),args:{"aria-label":"Slett Norge"}},l={render:r=>s.jsx(t.Button,{...r,children:"Tøm alle filtre"}),parameters:{customStyles:{flexWrap:"wrap",justifyContent:"center"}}};var h,C,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    variant,
    label
  }) => renderChip(variant, label),
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,x,b,f,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    variant,
    label
  }) => <Box gap={8}>
      {sizes.map(size => {
      return <span key={size}>{renderChip(variant, \`\${label} \${size.toUpperCase()}\`, size)}</span>;
    })}
    </Box>,
  args: defaultVariantArgs,
  argTypes: variantArgTypes
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"Go into the story itself to have an option to switch between variants",...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var S,k,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    variant,
    label
  }) => <Box gap={8}>
      {chipColors.map(color => {
      return <span key={color}>{renderChip(variant, \`\${label} \${color}\`, 'md', color)}</span>;
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
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,w,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>
} satisfies StoryObj<typeof Chip.Checkbox>`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var $,z,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Chip.Removable {...args}>Norge</Chip.Removable>,
  args: {
    'aria-label': 'Slett Norge'
  }
} satisfies StoryObj<typeof Chip.Removable>`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var N,V,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Chip.Button {...args}>Tøm alle filtre</Chip.Button>,
  parameters: {
    customStyles: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }
} satisfies StoryObj<typeof Chip.Button>`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const Z=["Preview","Sizes","Colors","Checkbox","Removable","Button"];export{l as Button,c as Checkbox,p as Colors,i as Preview,d as Removable,o as Sizes,Z as __namedExportsOrder,Y as default};
