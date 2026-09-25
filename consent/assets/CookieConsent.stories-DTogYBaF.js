import{j as e}from"./iframe-q82g95C_.js";import{l as x,a as D,e as o,b as t,M as S,o as b}from"./ConsentDemo-1gJdFAra.js";import"./preload-helper-Dp1pzeXC.js";const M="_prose_t7atr_2",N={prose:M},L={title:"Samtykke/CookieConsent",component:o,tags:["autodocs","kyv"],parameters:{layout:"fullscreen"},argTypes:D,args:x},s={render:({language:n})=>e.jsx(t,{language:n,children:e.jsx(o,{})})},r={render:({language:n})=>e.jsx(t,{language:n,services:b,children:e.jsx(o,{})})},a={render:({language:n})=>e.jsxs(t,{language:n,start:"answered",children:[e.jsxs("section",{className:N.prose,children:[e.jsx("h2",{children:"Informasjonskapsler"}),e.jsxs("p",{children:["Du kan når som helst ",e.jsx(S,{})," og endre hva vi får lov til å måle."]})]}),e.jsx(o,{})]})};var i,l,p,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    language
  }) => <ConsentDemo language={language}>
      <CookieConsent />
    </ConsentDemo>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:`Alle tre flatene på én gang, slik en applikasjon normalt mounter dem: banneret vises til
brukeren har svart, dialogen åpnes derfra, og innstillingsknappen står igjen i hjørnet
etterpå.

Trykk «Nullstill samtykke» for å få banneret tilbake — svaret lagres i en informasjonskapsel
og forsvinner ellers ikke ved reload.`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var g,d,k,u,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    language
  }) => <ConsentDemo language={language} services={onlyNecessaryServices}>
      <CookieConsent />
    </ConsentDemo>
}`,...(k=(d=r.parameters)==null?void 0:d.docs)==null?void 0:k.source},description:{story:"Uten tjenester som avhenger av samtykke er det ingenting å spørre om, og verken banner eller\ninnstillingsknapp vises. Resten av samtykkeløsningen mountes likevel, så `useConsent` virker\nsom før.",...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.description}}};var j,C,y,f,h;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    language
  }) => <ConsentDemo language={language} start="answered">
      <section className={styles.prose}>
        <h2>Informasjonskapsler</h2>
        <p>
          Du kan når som helst <ManageConsentLink /> og endre hva vi får lov til å måle.
        </p>
      </section>
      <CookieConsent />
    </ConsentDemo>
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source},description:{story:"`ManageConsentLink` er alternativet til den flytende knappen: en vanlig tekstlenke som kan\nstå i bunnteksten eller midt i en personvernerklæring.",...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const U=["Default","UtenSporingstjenester","MedTekstlenke"];export{s as Default,a as MedTekstlenke,r as UtenSporingstjenester,U as __namedExportsOrder,L as default};
