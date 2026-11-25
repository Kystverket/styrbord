import{j as e}from"./iframe-XfBZCEPN.js";import{u as t,M as d}from"./blocks-CYjH-bNq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bq4C9D42.js";import"./index-f2TudgNm.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Patterns/Introduksjon"}),`
`,e.jsx(r.h1,{id:"mønstre",children:"Mønstre"}),`
`,e.jsxs(r.p,{children:["Komponentene viser hver byggekloss for seg. Her under ",e.jsx(r.strong,{children:"Patterns"}),` viser vi hvordan de settes sammen til
noe en løsning faktisk trenger: skjemaer, dashbord, hele sider.`]}),`
`,e.jsx(r.h2,{id:"kategorier",children:"Kategorier"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Gruppe"}),e.jsx(r.th,{children:"Innhold"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"Patterns/Showcase"})}),e.jsx(r.td,{children:"Oversikt over Designsystemet-temaet med Kystverket-profil"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"Patterns/Forms"})}),e.jsx(r.td,{children:"Eksempelskjemaer: felter, validering, feiloppsummering, steg"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"Patterns/Dashboards"})}),e.jsx(r.td,{children:"Oversikter med kort, tabeller, nøkkeltall og filtre"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"Patterns/Pages"})}),e.jsxs(r.td,{children:["Hele sider med ",e.jsx(r.code,{children:"Header"}),", ",e.jsx(r.code,{children:"PageHeading"}),", innhold og ",e.jsx(r.code,{children:"Footer"})]})]})]})]}),`
`,e.jsxs(r.p,{children:["Finnes ikke gruppen du trenger, legg til en ny under ",e.jsx(r.code,{children:"Patterns/"}),"."]}),`
`,e.jsx(r.h2,{id:"slik-legger-du-til-et-mønster",children:"Slik legger du til et mønster"}),`
`,e.jsxs(r.p,{children:["Se ",e.jsx(r.code,{children:"Forms/Soknadsskjema/"}),` for et komplett eksempel. Et mønster er tre filer i
`,e.jsx(r.code,{children:"base/storybook/stories/patterns/<Gruppe>/<Navn>/"}),":"]}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Fil"}),e.jsx(r.th,{children:"Innhold"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"README.md"})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:"# Tittel"}),", ett avsnitt om hva det er, så når det brukes, reglene og korte kodeeksempler. Det er denne som følger med pakken"]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<Navn>.tsx"})}),e.jsx(r.td,{children:"En levende demo av mønsteret, som vises i Storybook"})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"<Navn>.stories.tsx"})}),e.jsxs(r.td,{children:["Historien, med tittelen ",e.jsx(r.code,{children:"Patterns/<Gruppe>/<Navn>"})," og README-en som dokumentasjon"]})]})]})]}),`
`,e.jsx(r.p,{children:"Regler:"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsx(r.li,{children:`README-en er mønsteret. Skriv reglene og begrunnelsen der, og vis bare kode for det som handler om
Styrbord: hvilke komponenter, hvilke props, hvordan de kobles sammen. La validering, tilstand og
datahenting være opp til applikasjonen.`}),`
`,e.jsxs(r.li,{children:["Kodeeksemplene i README-en importerer fra ",e.jsx(r.code,{children:"@kystverket/styrbord"}),`. Bygget stopper hvis et eksempel
importerer fra `,e.jsx(r.code,{children:"~/"}),"."]}),`
`,e.jsxs(r.li,{children:["Demoen importerer fra ",e.jsx(r.code,{children:"~/main"}),`, ikke fra komponentmappene, så den bare bruker det en applikasjon har
tilgang til.`]}),`
`,e.jsxs(r.li,{children:["Bruk ",e.jsx(r.code,{children:"Surface"})," til layout, ikke ",e.jsx(r.code,{children:"Box"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"mønstrene-følger-med-pakken",children:"Mønstrene følger med pakken"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"npm run build"})," kopierer README-en (ikke demoen eller historien) til ",e.jsx(r.code,{children:"dist/docs/patterns/"}),` og lager en
oversikt. Applikasjoner og KI-verktøy finner dem i
`,e.jsx(r.code,{children:"node_modules/@kystverket/styrbord/dist/docs/"}),`, for den versjonen de har installert. Mapper uten
`,e.jsx(r.code,{children:"README.md"})," (som Showcase) blir bare i Storybook."]})]})}function a(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
