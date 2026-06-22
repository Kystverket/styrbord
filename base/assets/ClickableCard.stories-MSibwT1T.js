import{S as C,j as e}from"./iframe-CCe_dCCr.js";import{n as r}from"./Dialog-UXwq2wM8.js";import"./Details-CAHUgFkq.js";import"./KyvDivider-HRHuqgBx.js";import{B as o}from"./typography-SIsVzqlb.js";import"./KyvSpinner-BWw3or9j.js";import"./skillingsbuoye-BtcJADm-.js";import"./Logo-D1-psF0u.js";import{P as l}from"./tooltip-BYKdyOlq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFWOv3TC.js";import"./index-D6INI_Eg.js";const L={title:"Components/ClickableCard",component:r,decorators:[C],tags:["autodocs"],argTypes:{variant:{options:["default","tinted"],control:{type:"radio"}},color:{options:["neutral","main"],control:{type:"radio"}},headingLevel:{options:[1,2,3,4,5,6],control:{type:"select"}},headingSize:{options:["2xs","xs","sm","md","lg","xl","2xl"],control:{type:"select"}},icon:{control:{type:"text"}}}},i={args:{heading:"Card title",description:"Lorem ipsum dolor mit amet.",icon:"anchor",chevron:!0,showBorder:!0,variant:"default",color:"neutral",onClick:()=>alert("Clicked!")}},a=()=>{const y=[{label:"Neutral, default",color:"neutral",variant:"default"},{label:"Main, default",color:"main",variant:"default"},{label:"Neutral, tinted",color:"neutral",variant:"tinted"},{label:"Main, tinted",color:"main",variant:"tinted"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:y.map(t=>e.jsx(r,{heading:t.label,description:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this.",icon:"anchor",chevron:!0,showBorder:!0,color:t.color,variant:t.variant},`${t.color}-${t.variant}`))})};a.storyName="Farge og variant";const n=()=>e.jsxs("div",{style:{maxWidth:"500px",padding:"24px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs(o,{gap:16,children:[e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,headingSize:"xs",variant:"default",color:"neutral"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,headingSize:"xs",variant:"tinted",color:"neutral"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,headingSize:"xs",variant:"default",color:"main"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,headingSize:"xs",variant:"tinted",color:"main"})]}),e.jsxs(o,{gap:8,children:[e.jsx(l,{"data-size":"sm",children:"Alle elementer skrudd på"}),e.jsx(o,{width:"fit",children:e.jsx(r,{heading:"Card title",description:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this.",icon:"anchor",chevron:!0,showBorder:!0,variant:"default",color:"neutral",children:e.jsxs(o,{gap:4,p:4,children:[e.jsx(l,{"data-size":"xs",children:"SLOT"}),e.jsx(l,{"data-size":"xs",children:"Erstatt med eget innhold"})]})})})]})]});n.storyName="Eksempel";const s={args:{heading:"Gå til designsystemet",description:"Åpner lenken i ny fane.",icon:"anchor",chevron:!0,showBorder:!0,variant:"tinted",color:"main",href:"https://designsystemet.no",target:"_blank",rel:"noopener noreferrer"},storyName:"Som lenke (href)"};a.__docgenInfo={description:"",methods:[],displayName:"ColorVariants"};n.__docgenInfo={description:"",methods:[],displayName:"Eksempel"};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: 'Card title',
    description: 'Lorem ipsum dolor mit amet.',
    icon: 'anchor',
    chevron: true,
    showBorder: true,
    variant: 'default',
    color: 'neutral',
    onClick: () => alert('Clicked!')
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,h,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const combos: {
    label: string;
    color: ClickableCardColor;
    variant: ClickableCardVariant;
  }[] = [{
    label: 'Neutral, default',
    color: 'neutral',
    variant: 'default'
  }, {
    label: 'Main, default',
    color: 'main',
    variant: 'default'
  }, {
    label: 'Neutral, tinted',
    color: 'neutral',
    variant: 'tinted'
  }, {
    label: 'Main, tinted',
    color: 'main',
    variant: 'tinted'
  }];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {combos.map(c => <ClickableCard key={\`\${c.color}-\${c.variant}\`} heading={c.label} description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this." icon="anchor" chevron showBorder color={c.color} variant={c.variant} />)}
    </div>;
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    maxWidth: '500px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <Box gap={16}>
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron headingSize="xs" variant="default" color="neutral" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron headingSize="xs" variant="tinted" color="neutral" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron headingSize="xs" variant="default" color="main" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron headingSize="xs" variant="tinted" color="main" />
      </Box>

      <Box gap={8}>
        <Paragraph data-size="sm">Alle elementer skrudd på</Paragraph>
        <Box width="fit">
          <ClickableCard heading="Card title" description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this." icon="anchor" chevron showBorder variant="default" color="neutral">
            <Box gap={4} p={4}>
              <Paragraph data-size="xs">SLOT</Paragraph>
              <Paragraph data-size="xs">Erstatt med eget innhold</Paragraph>
            </Box>
          </ClickableCard>
        </Box>
      </Box>
    </div>;
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,b,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    heading: 'Gå til designsystemet',
    description: 'Åpner lenken i ny fane.',
    icon: 'anchor',
    chevron: true,
    showBorder: true,
    variant: 'tinted',
    color: 'main',
    href: 'https://designsystemet.no',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  storyName: 'Som lenke (href)'
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const W=["Default","ColorVariants","Eksempel","AsLink"];export{s as AsLink,a as ColorVariants,i as Default,n as Eksempel,W as __namedExportsOrder,L as default};
