import{S as r,j as e}from"./iframe-BpVtr7CM.js";import{K as s}from"./KyvSpinner-D5cQy2tq.js";import"./preload-helper-Dp1pzeXC.js";const o={title:"Components/Feedback/KyvSpinner",component:s,decorators:[r],tags:["autodocs","kyv"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]},variant:{control:"radio",options:["outline","scene"]}}},i={args:{size:"md"}},d={args:{size:"sm"}},l={args:{size:"lg"}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"2rem"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("div",{"data-color-scheme":"light",style:{background:"var(--ds-color-neutral-background-default)",padding:"1rem"},children:e.jsx(s,{size:"md"})}),e.jsx("div",{"data-color-scheme":"dark",style:{background:"var(--ds-color-neutral-background-default)",padding:"1rem"},children:e.jsx(s,{size:"md"})})]})},c={args:{size:"md",variant:"scene"}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx("div",{"data-color-scheme":"light",children:e.jsx(s,{size:"md",variant:"scene"})}),e.jsx("div",{"data-color-scheme":"dark",children:e.jsx(s,{size:"md",variant:"scene"})})]})},u=["Default","Small","Large","AllSizes","DayAndNight","Scene","SceneDayAndNight"];export{m as AllSizes,g as DayAndNight,i as Default,l as Large,c as Scene,p as SceneDayAndNight,d as Small,u as __namedExportsOrder,o as default};
