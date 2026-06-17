import{S as w,r as D,j as e}from"./iframe-RNqavRLG.js";import{l as t,i as O}from"./Dialog-CAZ518NL.js";import"./Details-DSfKU0DA.js";import"./KyvDivider-CbCLyK77.js";import{B as l}from"./typography-CxXm-3I_.js";import"./KyvSpinner-CbINv1Zi.js";import"./skillingsbuoye-D_UgdBuF.js";import"./Logo-BkHDUDIa.js";import{P as p}from"./tooltip-BCVvXd0b.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CxtmrIYj.js";import"./index-Cj_WH588.js";const I={title:"Components/CompactDetails",component:t,decorators:[w],tags:["autodocs","kyv","beta"],argTypes:{},parameters:{docs:{description:{component:"En kompakt, sammenleggbar detaljkomponent. Etiketten vises i primærfargen med en pil til høyre, og innholdet får en venstrekant når det åpnes. Egnet for korte hjelpetekster, for eksempel mellom et spørsmål og et svaralternativ."}}}},o={args:{label:"Label",children:"The quick brown fox jumps over the lazy dog"},render:r=>e.jsx(l,{width:"full",children:e.jsx(t,{...r})})},s={args:{label:"Label",defaultOpen:!0,children:"The quick brown fox jumps over the lazy dog"},render:r=>e.jsx(l,{width:"full",children:e.jsx(t,{...r})})},n={args:{label:"Hvorfor spør vi om dette?",children:"Dette feltet brukes til å avgjøre om saken kan behandles automatisk."},render:r=>{const[i,d]=D.useState(!1);return e.jsx(l,{width:"full",children:e.jsx(t,{...r,open:i,onOpenChange:d})})}},a={args:{label:"Hvorfor spør vi om dette?",children:""},render:()=>{const[r,i]=D.useState(void 0);return e.jsx("div",{style:{maxWidth:"32rem"},children:e.jsxs(l,{gap:12,children:[e.jsx(p,{style:{fontWeight:"500"},children:"Er tiltaket i samsvar med kommuneplans arealdel eller reguleringsplan?"}),e.jsx(t,{label:"Hvorfor spør vi om dette?",children:e.jsx(p,{"data-size":"sm",style:{margin:0},children:"Myndigheten etter denne loven og kommunen som plan- og bygningsmyndighet skal foreta en effektiv og samordnet behandling av søknader om tillatelse. Tillatelse til tiltak etter denne paragrafen kan ikke gis i strid med vedtatte arealplaner etter plan- og bygningsloven uten etter dispensasjon fra plan- og bygningsmyndigheten."})}),e.jsx(O,{options:[{label:"Ja",value:"ja"},{label:"Nei",value:"nei"}],value:r,onChange:d=>i(d)})]})})}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    children: 'The quick brown fox jumps over the lazy dog'
  },
  render: args => <Box width="full">
      <CompactDetails {...args} />
    </Box>
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var c,h,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    defaultOpen: true,
    children: 'The quick brown fox jumps over the lazy dog'
  },
  render: args => <Box width="full">
      <CompactDetails {...args} />
    </Box>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,k,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: 'Dette feltet brukes til å avgjøre om saken kan behandles automatisk.'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <Box width="full">
        <CompactDetails {...args} open={open} onOpenChange={setOpen} />
      </Box>;
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var x,y,j,C,B;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: ''
  },
  render: () => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <div style={{
      maxWidth: '32rem'
    }}>
        <Box gap={12}>
          <Paragraph style={{
          fontWeight: '500'
        }}>
            Er tiltaket i samsvar med kommuneplans arealdel eller reguleringsplan?
          </Paragraph>
          <CompactDetails label="Hvorfor spør vi om dette?">
            <Paragraph data-size="sm" style={{
            margin: 0
          }}>
              Myndigheten etter denne loven og kommunen som plan- og bygningsmyndighet skal foreta en effektiv og
              samordnet behandling av søknader om tillatelse. Tillatelse til tiltak etter denne paragrafen kan ikke gis
              i strid med vedtatte arealplaner etter plan- og bygningsloven uten etter dispensasjon fra plan- og
              bygningsmyndigheten.
            </Paragraph>
          </CompactDetails>
          <BorderedRadioGroup options={[{
          label: 'Ja',
          value: 'ja'
        }, {
          label: 'Nei',
          value: 'nei'
        }]} value={value} onChange={v => setValue(v)} />
        </Box>
      </div>;
  }
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Plassert mellom et spørsmål og svaralternativene. Her brukes `BorderedRadioGroup` uten egen `label`,\nog spørsmålet rendres som en egen overskrift slik at `CompactDetails` kan plasseres rett under tittelen,\nmen over radioknappene.",...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};const J=["Default","Open","Controlled","PlacementInRadioGroup"];export{n as Controlled,o as Default,s as Open,a as PlacementInRadioGroup,J as __namedExportsOrder,I as default};
