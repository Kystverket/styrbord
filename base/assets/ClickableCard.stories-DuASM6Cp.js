import{S as j,j as e}from"./iframe-WmfM_TXr.js";import{r,S as s}from"./Dialog-C6NzUDpm.js";import"./shipTypes-hFnSBndP.js";import"./Details-43oGIX-L.js";import"./KyvDivider-B58VPbFT.js";import"./KyvSpinner-D8OHfops.js";import"./skillingsbuoye-gWL5LpQA.js";import"./Logo-DdOTpVWd.js";import{P as c}from"./tooltip-CwqJONax.js";import{s as M,a as N}from"./color-tokens-DRys5hYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DSQ9LxGG.js";import"./index-DdJPEpml.js";const T={title:"Components/ClickableCard",component:r,decorators:[j],tags:["autodocs","kyv"],argTypes:{"data-color-variant":{options:["base","tinted"],control:{type:"radio"}},"data-color":{options:[...M,...N],control:{type:"radio"}},headingLevel:{options:[1,2,3,4,5,6],control:{type:"select"}},icon:{control:{type:"text"}},"data-size":{options:["sm","md","lg"],control:{type:"radio"}}}},n={args:{heading:"Card title",description:"Lorem ipsum dolor mit amet.",icon:"anchor",chevron:!0,"border-style":"solid","data-color-variant":"base","data-color":"neutral",onClick:()=>alert("Clicked!")}},t=()=>{const d=[{label:"Liten","data-size":"sm"},{label:"Middels","data-size":"md"},{label:"Stor","data-size":"lg"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:d.map(a=>e.jsxs(e.Fragment,{children:[e.jsx(r,{heading:a.label,description:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this.",icon:"anchor",chevron:!0,"border-style":"solid","data-size":a["data-size"]},`first-${a["data-size"]}`),e.jsx(r,{heading:a.label,icon:"article",chevron:!0,"border-style":"solid","data-size":a["data-size"]},`second-${a["data-size"]}`)]}))})};t.storyName="Størrelser";const o=()=>{const d=[{label:"Neutral, default",color:"neutral",variant:"base"},{label:"Main, default",color:"primary",variant:"base"},{label:"Neutral, tinted",color:"neutral",variant:"tinted"},{label:"Main, tinted",color:"primary",variant:"tinted"},{label:"Lyng, tinted",color:"lyng",variant:"tinted"},{label:"Gress, tinted",color:"gress",variant:"tinted"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:d.map(a=>e.jsx(r,{heading:a.label,description:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this.",icon:"anchor",chevron:!0,"border-style":"solid","data-color":a.color,"data-color-variant":a.variant},`${a.color}-${a.variant}`))})};o.storyName="Farge og variant";const i=()=>e.jsxs("div",{style:{maxWidth:"500px",padding:"24px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs(s,{gap:4,children:[e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,"data-size":"sm","data-color-variant":"base","data-color":"neutral"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,"data-color-variant":"tinted","data-color":"neutral"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,"data-color-variant":"base","data-color":"primary"}),e.jsx(r,{heading:"Forespørsel om nautisk vurdering",icon:"picture_as_pdf",chevron:!0,"data-size":"sm","data-color-variant":"tinted","data-color":"primary"})]}),e.jsxs(s,{gap:2,children:[e.jsx(c,{"data-size":"sm",children:"Alle elementer skrudd på"}),e.jsx(s,{width:"fit",children:e.jsx(r,{heading:"Card title",description:"Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this.",icon:"anchor",chevron:!0,"border-style":"solid","data-color-variant":"base","data-color":"neutral",children:e.jsxs(s,{gap:1,p:1,children:[e.jsx(c,{"data-size":"xs",children:"SLOT"}),e.jsx(c,{"data-size":"xs",children:"Erstatt med eget innhold"})]})})})]})]});i.storyName="Eksempel";const l={args:{heading:"Gå til designsystemet",description:"Åpner lenken i ny fane.",icon:"anchor",chevron:!0,"border-style":"solid","data-color-variant":"tinted","data-color":"primary",href:"https://designsystemet.no",target:"_blank",rel:"noopener noreferrer"},storyName:"Som lenke (href)"};t.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.__docgenInfo={description:"",methods:[],displayName:"ColorVariants"};i.__docgenInfo={description:"",methods:[],displayName:"Eksempel"};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    heading: 'Card title',
    description: 'Lorem ipsum dolor mit amet.',
    icon: 'anchor',
    chevron: true,
    'border-style': 'solid',
    'data-color-variant': 'base',
    'data-color': 'neutral',
    onClick: () => alert('Clicked!')
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const combos: {
    label: string;
    'data-size': 'sm' | 'md' | 'lg';
  }[] = [{
    label: 'Liten',
    'data-size': 'sm'
  }, {
    label: 'Middels',
    'data-size': 'md'
  }, {
    label: 'Stor',
    'data-size': 'lg'
  }];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {combos.map(c => <>
          <ClickableCard key={\`first-\${c['data-size']}\`} heading={c.label} description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this." icon="anchor" chevron border-style="solid" data-size={c['data-size']} />
          <ClickableCard key={\`second-\${c['data-size']}\`} heading={c.label} icon="article" chevron border-style="solid" data-size={c['data-size']} />
        </>)}
    </div>;
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const combos: {
    label: string;
    color: DataColor;
    variant: DataColorVariant;
  }[] = [{
    label: 'Neutral, default',
    color: 'neutral',
    variant: 'base'
  }, {
    label: 'Main, default',
    color: 'primary',
    variant: 'base'
  }, {
    label: 'Neutral, tinted',
    color: 'neutral',
    variant: 'tinted'
  }, {
    label: 'Main, tinted',
    color: 'primary',
    variant: 'tinted'
  }, {
    label: 'Lyng, tinted',
    color: 'lyng',
    variant: 'tinted'
  }, {
    label: 'Gress, tinted',
    color: 'gress',
    variant: 'tinted'
  }];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {combos.map(c => <ClickableCard key={\`\${c.color}-\${c.variant}\`} heading={c.label} description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this." icon="anchor" chevron border-style="solid" data-color={c.color} data-color-variant={c.variant} />)}
    </div>;
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,k,C;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div style={{
    maxWidth: '500px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <Surface gap={4}>
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron data-size="sm" data-color-variant="base" data-color="neutral" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron data-color-variant="tinted" data-color="neutral" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron data-color-variant="base" data-color="primary" />
        <ClickableCard heading="Forespørsel om nautisk vurdering" icon="picture_as_pdf" chevron data-size="sm" data-color-variant="tinted" data-color="primary" />
      </Surface>

      <Surface gap={2}>
        <Paragraph data-size="sm">Alle elementer skrudd på</Paragraph>
        <Surface width="fit">
          <ClickableCard heading="Card title" description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this." icon="anchor" chevron border-style="solid" data-color-variant="base" data-color="neutral">
            <Surface gap={1} p={1}>
              <Paragraph data-size="xs">SLOT</Paragraph>
              <Paragraph data-size="xs">Erstatt med eget innhold</Paragraph>
            </Surface>
          </ClickableCard>
        </Surface>
      </Surface>
    </div>;
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var z,S,_;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    heading: 'Gå til designsystemet',
    description: 'Åpner lenken i ny fane.',
    icon: 'anchor',
    chevron: true,
    'border-style': 'solid',
    'data-color-variant': 'tinted',
    'data-color': 'primary',
    href: 'https://designsystemet.no',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  storyName: 'Som lenke (href)'
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const R=["Default","Sizes","ColorVariants","Eksempel","AsLink"];export{l as AsLink,o as ColorVariants,n as Default,i as Eksempel,t as Sizes,R as __namedExportsOrder,T as default};
