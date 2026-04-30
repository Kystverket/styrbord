import{S as j,j as e}from"./iframe-DEa5CtWz.js";import{a0 as o}from"./KyvSpinner-DyyCEFVM.js";import"./preload-helper-Dp1pzeXC.js";const k={title:"Components/KyvSpinner",component:o,decorators:[j],tags:["autodocs","kyv"],parameters:{docs:{description:{component:`
Indeterminate laste-animasjon med et fyrtårn som sender ut lysstråler.

Brukes når en operasjon tar ubestemt tid og brukeren trenger visuell tilbakemelding om at noe skjer.

**Egnet til:**
- Sidelasting
- API-kall uten kjent varighet
- Bakgrunnsoperasjoner

**Tilgjengelighet:**
Komponenten har \`role="status"\` og \`aria-label\` (standard: "Laster"). Animasjonen stoppes automatisk ved \`prefers-reduced-motion: reduce\`.
        `}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},r={args:{size:"md"}},s={args:{size:"sm"}},a={args:{size:"lg"}},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2rem"},children:[e.jsx(o,{size:"sm"}),e.jsx(o,{size:"md"}),e.jsx(o,{size:"lg"})]})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var S,z,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '2rem'
  }}>
      <KyvSpinner size="sm" />
      <KyvSpinner size="md" />
      <KyvSpinner size="lg" />
    </div>
}`,...(y=(z=t.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const K=["Default","Small","Large","AllSizes"];export{t as AllSizes,r as Default,a as Large,s as Small,K as __namedExportsOrder,k as default};
