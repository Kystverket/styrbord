import{S as w,r as D,j as e}from"./iframe-XM4Dzqx4.js";import{s as t,S as l,p as O}from"./Dialog-D7-ELyyt.js";import"./shipTypes-hFnSBndP.js";import"./Details-DpCbxRow.js";import"./KyvDivider-B1Jakrv1.js";import"./KyvSpinner-N3quthdO.js";import"./skillingsbuoye-Sxya4neZ.js";import"./Logo-Ce6IYUwn.js";import{P as p}from"./tooltip-DsDhmCFI.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-DRys5hYJ.js";import"./index-BS4A_uQ_.js";import"./index--KFnCWr5.js";const J={title:"Components/CompactDetails",component:t,decorators:[w],tags:["autodocs","kyv","beta"],argTypes:{},parameters:{docs:{description:{component:"En kompakt, sammenleggbar detaljkomponent. Etiketten vises i primærfargen med en pil til høyre, og innholdet får en venstrekant når det åpnes. Egnet for korte hjelpetekster, for eksempel mellom et spørsmål og et svaralternativ."}}}},s={args:{label:"Label",children:"The quick brown fox jumps over the lazy dog"},render:r=>e.jsx(l,{width:"full",children:e.jsx(t,{...r})})},n={args:{label:"Label",defaultOpen:!0,children:"The quick brown fox jumps over the lazy dog"},render:r=>e.jsx(l,{width:"full",children:e.jsx(t,{...r})})},o={args:{label:"Hvorfor spør vi om dette?",children:"Dette feltet brukes til å avgjøre om saken kan behandles automatisk."},render:r=>{const[i,d]=D.useState(!1);return e.jsx(l,{width:"full",children:e.jsx(t,{...r,open:i,onOpenChange:d})})}},a={args:{label:"Hvorfor spør vi om dette?",children:""},render:()=>{const[r,i]=D.useState(void 0);return e.jsx("div",{style:{maxWidth:"32rem"},children:e.jsxs(l,{gap:3,children:[e.jsx(p,{style:{fontWeight:"500"},children:"Er tiltaket i samsvar med kommuneplans arealdel eller reguleringsplan?"}),e.jsx(t,{label:"Hvorfor spør vi om dette?",children:e.jsx(p,{"data-size":"sm",style:{margin:0},children:"Myndigheten etter denne loven og kommunen som plan- og bygningsmyndighet skal foreta en effektiv og samordnet behandling av søknader om tillatelse. Tillatelse til tiltak etter denne paragrafen kan ikke gis i strid med vedtatte arealplaner etter plan- og bygningsloven uten etter dispensasjon fra plan- og bygningsmyndigheten."})}),e.jsx(O,{options:[{label:"Ja",value:"ja"},{label:"Nei",value:"nei"}],value:r,onChange:d=>i(d)})]})})}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    children: 'The quick brown fox jumps over the lazy dog'
  },
  render: args => <Surface width="full">
      <CompactDetails {...args} />
    </Surface>
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var c,f,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    defaultOpen: true,
    children: 'The quick brown fox jumps over the lazy dog'
  },
  render: args => <Surface width="full">
      <CompactDetails {...args} />
    </Surface>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,k,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: 'Dette feltet brukes til å avgjøre om saken kan behandles automatisk.'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <Surface width="full">
        <CompactDetails {...args} open={open} onOpenChange={setOpen} />
      </Surface>;
  }
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var y,j,x,S,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: ''
  },
  render: () => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return <div style={{
      maxWidth: '32rem'
    }}>
        <Surface gap={3}>
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
        </Surface>
      </div>;
  }
}`,...(x=(j=a.parameters)==null?void 0:j.docs)==null?void 0:x.source},description:{story:"Plassert mellom et spørsmål og svaralternativene. Her brukes `BorderedRadioGroup` uten egen `label`,\nog spørsmålet rendres som en egen overskrift slik at `CompactDetails` kan plasseres rett under tittelen,\nmen over radioknappene.",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};const M=["Default","Open","Controlled","PlacementInRadioGroup"];export{o as Controlled,s as Default,n as Open,a as PlacementInRadioGroup,M as __namedExportsOrder,J as default};
