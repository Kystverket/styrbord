import{j as n}from"./iframe-BoZQqqIr.js";import{l as g,a as d,C as i,b as m,c as u}from"./ConsentDemo-DGQ9KzZt.js";import"./preload-helper-Dp1pzeXC.js";const v={title:"Samtykke/ConsentBanner",component:i,tags:["autodocs","kyv"],parameters:{layout:"fullscreen"},argTypes:d,args:g},e={render:({language:l})=>n.jsxs(m,{language:l,children:[n.jsx(i,{}),n.jsx(u,{})]})};var r,s,t,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
    language
  }) => <ConsentDemo language={language}>
      <ConsentBanner />
      <ConsentPreferencesDialog />
    </ConsentDemo>
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source},description:{story:`Banneret er ikke en modal: det låser verken fokus eller siden bak seg. Et samtykke som er
framtvunget ved å sperre innholdet er ikke gyldig etter GDPR, og de tre valgene er derfor
også likestilte visuelt.

\`ConsentPreferencesDialog\` står mountet ved siden av, som den må gjøre i en applikasjon også:
«Velg selv» setter \`activeUI\` til \`dialog\`, og da skjuler banneret seg selv. Er ikke dialogen
der til å ta over, forsvinner banneret uten at noe kommer i stedet, og brukeren sitter igjen
uten vei videre.`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.description}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,v as default};
