import{S as B,j as e}from"./iframe-BKKWLs7J.js";import{K as r}from"./KyvSpinner-CPx0vDAt.js";import"./preload-helper-Dp1pzeXC.js";const _={title:"Components/KyvSpinner",component:r,decorators:[B],tags:["autodocs","kyv"],parameters:{docs:{description:{component:`
Indeterminate laste-animasjon: et fyrtårn på en grønn øy, med roterende lysstråle og bølger som ruller forbi.

Standard er en strektegning på gjennomsiktig bakgrunn, i samme stil som fyr-ikonet. Med \`variant="scene"\` får du en fargelagt scene med himmel, hav og øy.

Begge følger fargemodus — sol i lys modus, måne og stjerner i mørk modus (\`data-color-scheme\`, også \`auto\`).

Brukes når en operasjon tar ubestemt tid og brukeren trenger visuell tilbakemelding om at noe skjer.

**Egnet til:**
- Sidelasting
- API-kall uten kjent varighet
- Bakgrunnsoperasjoner

**Tilgjengelighet:**
Komponenten har \`role="status"\` og \`aria-label\` (standard: "Laster"). Animasjonen stoppes automatisk ved \`prefers-reduced-motion: reduce\`; da står strålen stille.
        `}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]},variant:{control:"radio",options:["outline","scene"]}}},s={args:{size:"md"}},a={args:{size:"sm"}},n={args:{size:"lg"}},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2rem"},children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("div",{"data-color-scheme":"light",style:{background:"var(--ds-color-neutral-background-default)",padding:"1rem"},children:e.jsx(r,{size:"md"})}),e.jsx("div",{"data-color-scheme":"dark",style:{background:"var(--ds-color-neutral-background-default)",padding:"1rem"},children:e.jsx(r,{size:"md"})})]})},d={args:{size:"md",variant:"scene"}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("div",{"data-color-scheme":"light",children:e.jsx(r,{size:"md",variant:"scene"})}),e.jsx("div",{"data-color-scheme":"dark",children:e.jsx(r,{size:"md",variant:"scene"})})]})};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,p,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,y,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '2rem'
  }}>
      <KyvSpinner size="sm" />
      <KyvSpinner size="md" />
      <KyvSpinner size="lg" />
    </div>
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var f,j,z;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div data-color-scheme="light" style={{
      background: 'var(--ds-color-neutral-background-default)',
      padding: '1rem'
    }}>
        <KyvSpinner size="md" />
      </div>
      <div data-color-scheme="dark" style={{
      background: 'var(--ds-color-neutral-background-default)',
      padding: '1rem'
    }}>
        <KyvSpinner size="md" />
      </div>
    </div>
}`,...(z=(j=t.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var b,K,A;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'scene'
  }
}`,...(A=(K=d.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var D,I,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div data-color-scheme="light">
        <KyvSpinner size="md" variant="scene" />
      </div>
      <div data-color-scheme="dark">
        <KyvSpinner size="md" variant="scene" />
      </div>
    </div>
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const C=["Default","Small","Large","AllSizes","DayAndNight","Scene","SceneDayAndNight"];export{o as AllSizes,t as DayAndNight,s as Default,n as Large,d as Scene,i as SceneDayAndNight,a as Small,C as __namedExportsOrder,_ as default};
