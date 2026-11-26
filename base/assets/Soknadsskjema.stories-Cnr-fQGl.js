import{r as p,j as n}from"./iframe-BpVtr7CM.js";import{S as m,at as H,a9 as y,ar as w,ac as T,af as L,au as V,a5 as A}from"./Dialog-BW_2LQd8.js";import"./shipTypes-hFnSBndP.js";import"./Details-VCOZg20P.js";import"./KyvDivider-DRhHbJ6A.js";import"./KyvSpinner-D5cQy2tq.js";import"./skillingsbuoye-CADBPjxz.js";import"./Logo-C0BiL7KQ.js";import{H as g,P as D,b as _,E as u}from"./tooltip-DJ-pYRYM.js";import"./preload-helper-Dp1pzeXC.js";import"./color-tokens-BWmLKHwz.js";import"./index-D4eKPnKn.js";import"./index-kRWVY6wU.js";const I={navn:"",epost:"",kommune:"",tiltak:"",startdato:void 0,beskrivelse:"",bekreftet:!1},O=["navn","epost","kommune","tiltak","startdato","beskrivelse","bekreftet"],o=e=>`soknad-${e}`,z=[{value:"4601",label:"Bergen"},{value:"1508",label:"Ålesund"},{value:"5501",label:"Tromsø"},{value:"1804",label:"Bodø"}],P=[{value:"kai",label:"Kai eller brygge"},{value:"mudring",label:"Mudring"},{value:"kabel",label:"Kabel eller rør i sjø"}],x=()=>{const e=new Date;return e.setHours(0,0,0,0),e},K=e=>e===""||e===void 0||e===!1,f=e=>{const r={};return e.navn.trim()||(r.navn="Skriv inn navnet ditt"),e.epost.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.epost.trim())||(r.epost="E-postadressen må ha med @ og et domene, for eksempel navn@firma.no"):r.epost="Skriv inn e-postadressen din",e.kommune||(r.kommune="Velg kommunen tiltaket skal gjøres i"),e.tiltak||(r.tiltak="Velg hvilken type tiltak du søker om"),e.startdato?e.startdato<x()&&(r.startdato="Startdatoen kan ikke være tilbake i tid"):r.startdato="Velg når arbeidet skal starte",e.beskrivelse.trim().length<20&&(r.beskrivelse="Beskrivelsen må ha minst 20 tegn"),e.bekreftet||(r.bekreftet="Bekreft at opplysningene er riktige før du sender"),r},S=(e,r,s)=>{const a={...e};return s?a[r]=s:delete a[r],a},E=()=>{const[e,r]=p.useState(I),[s,a]=p.useState({}),[c,B]=p.useState(!1),[v,C]=p.useState(!1),h=p.useRef(null),i=t=>d=>{const k={...e,[t]:d};r(k),s[t]&&a(F=>S(F,t,f(k)[t]))},l=t=>()=>{!c&&K(e[t])||a(d=>S(d,t,f(e)[t]))},R=t=>{t.preventDefault();const d=f(e);if(B(!0),a(d),Object.keys(d).length>0){requestAnimationFrame(()=>{var k;return(k=h.current)==null?void 0:k.focus()});return}C(!0)},b=c?O.filter(t=>s[t]):[];return n.jsxs(n.Fragment,{children:[n.jsx("div",{role:"status",children:v&&n.jsx(m,{width:"form",children:n.jsxs(H,{"data-color":"success",title:"Søknaden er sendt",children:["Du får svar på e-post til ",e.epost,". Vanlig saksbehandlingstid er fire uker."]})})}),!v&&n.jsx("form",{onSubmit:R,noValidate:!0,children:n.jsxs(m,{width:"form",gap:8,children:[n.jsxs(m,{gap:2,children:[n.jsx(g,{level:1,"data-size":"lg",children:"Søknad om tiltak i sjø"}),n.jsx(D,{children:"Alle feltene må fylles ut."})]}),n.jsxs(m,{gap:5,children:[n.jsx(g,{level:2,"data-size":"sm",children:"Om deg"}),n.jsx(y,{id:o("navn"),label:"Fullt navn",autoComplete:"name",value:e.navn,onChange:i("navn"),onBlur:l("navn"),error:s.navn}),n.jsx(y,{id:o("epost"),label:"E-post",description:"Vi sender svaret på søknaden hit.",type:"email",autoComplete:"email",value:e.epost,onChange:i("epost"),onBlur:l("epost"),error:s.epost})]}),n.jsxs(m,{gap:5,children:[n.jsx(g,{level:2,"data-size":"sm",children:"Om tiltaket"}),n.jsx(w,{id:o("kommune"),label:"Kommune",placeholder:"Velg kommune",options:z,value:e.kommune,onChange:i("kommune"),onBlur:l("kommune"),error:s.kommune}),n.jsx(T,{id:o("tiltak"),label:"Type tiltak",options:P,value:e.tiltak,onChange:t=>i("tiltak")(String(t)),onBlur:l("tiltak"),error:s.tiltak}),n.jsx(L,{id:o("startdato"),label:"Planlagt oppstart",minDate:x(),value:e.startdato,onChange:i("startdato"),onBlur:l("startdato"),error:s.startdato}),n.jsx(V,{id:o("beskrivelse"),label:"Beskrivelse av tiltaket",description:"Hva skal gjøres, og hvor lenge varer arbeidet?",maxLength:1e3,value:e.beskrivelse,onChange:i("beskrivelse"),onBlur:l("beskrivelse"),error:s.beskrivelse})]}),n.jsx(_,{id:o("bekreftet"),label:"Jeg bekrefter at opplysningene er riktige",checked:e.bekreftet,onChange:t=>i("bekreftet")(t.target.checked),error:s.bekreftet}),b.length>0&&n.jsxs(u,{ref:h,children:[n.jsx(u.Heading,{children:"For å sende søknaden må du rette opp dette:"}),n.jsx(u.List,{children:b.map(t=>n.jsx(u.Item,{children:n.jsx(u.Link,{href:`#${o(t)}`,children:s[t]})},t))})]}),n.jsx(m,{horizontal:!0,children:n.jsx(A,{type:"submit",variant:"filled",children:"Send søknad"})})]})})]})};E.__docgenInfo={description:"",methods:[],displayName:"Soknadsskjema"};const G=`# Søknadsskjema

Et skjema med gruppering, feil som vises når brukeren forlater et felt eller sender inn, og feiloppsummering over send-knappen som tar fokus.

## Når du bruker mønsteret

Når brukeren skal fylle ut og sende inn noe som blir behandlet videre: søknader, meldinger, registreringer.
Er skjemaet langt nok til at brukeren mister oversikten, del det i steg med \`Stepper\`. Reglene er de samme,
men knappene blir «Neste steg» og «Forrige steg» (se \`knapper.md\` i veiledningen).

Mønsteret sier hvordan skjemaet skal oppføre seg og hvordan Styrbord-komponentene settes sammen. _Hvordan_ du
validerer (egne funksjoner, react-hook-form, zod, på serveren) bestemmer applikasjonen.

## Regler

Bygger på Designsystemets retningslinjer for [feilmeldinger](https://designsystemet.no/no/patterns/errors),
[påkrevde og valgfrie felt](https://designsystemet.no/no/patterns/required-and-optional-fields) og
[knapper](https://designsystemet.no/no/patterns/button-placement-and-order).

- **Feil vises når brukeren forlater feltet eller sender inn, aldri mens hen skriver.** «Må fylles ut»-feil
  vises først når brukeren prøver å sende inn; å tabbe seg gjennom et tomt felt er ikke en feil. En feil
  forsvinner i det øyeblikket den er rettet.
- **\`ErrorSummary\` rett over send-knappen**, med én lenke per feil i samme rekkefølge som feltene. Står
  skjemaet over flere sider som lastes på nytt, flytt den til toppen.
- **Fokus flyttes til oppsummeringen** når innsendingen stopper.
- **Send-knappen er aldri deaktivert**, og den er skjemaets eneste hovedhandling, til venstre.
- **Er alle feltene påkrevd, står det én gang øverst**, og feltene merkes ikke. Er noen valgfrie, merk hvert
  felt (se \`skjema.md\`).
- **Feilmeldingen sier hva brukeren skal gjøre**, med nøkkelordet fra ledeteksten tidlig: «Beskrivelsen må ha
  minst 20 tegn», ikke «Feltet er ikke fylt ut korrekt».
- **\`autoComplete\` og \`type\`** der det finnes en passende verdi.
- **Grupper med overskrift** (\`Heading level={2}\`), og \`Surface width="form"\` rundt det hele.

## Slik settes det sammen

### Skjelett

\`noValidate\` slår av nettleserens egne feilbobler, så bare våre meldinger vises.

\`\`\`tsx
import { Button, Heading, Paragraph, Surface } from '@kystverket/styrbord';

<form onSubmit={handleSubmit} noValidate>
  <Surface width="form" gap={8}>
    <Surface gap={2}>
      <Heading level={1} data-size="lg">
        Søknad om tiltak i sjø
      </Heading>
      <Paragraph>Alle feltene må fylles ut.</Paragraph>
    </Surface>

    <Surface gap={5}>
      <Heading level={2} data-size="sm">
        Om deg
      </Heading>
      {/* feltene */}
    </Surface>

    {/* ErrorSummary her, rett over knappen */}

    <Surface horizontal>
      <Button type="submit" variant="filled">
        Send søknad
      </Button>
    </Surface>
  </Surface>
</form>;
\`\`\`

### Felt

Hvert felt trenger en \`id\` som er unik på siden, fordi feiloppsummeringen lenker til den. \`error\` viser
meldingen under feltet og kobler den til feltet for skjermlesere. Styrbords felt tar \`onChange(value)\` med
selve verdien, ikke en event.

\`\`\`tsx
<TextInput
  id="soknad-epost"
  label="E-post"
  type="email"
  autoComplete="email"
  value={epost}
  onChange={setEpost}
  onBlur={() => validerFelt('epost')}
  error={feil.epost}
/>
\`\`\`

\`Checkbox\` og \`Switch\` er Designsystemets og gir en vanlig \`ChangeEvent\`: \`onChange={(e) => setBekreftet(e.target.checked)}\`.

### Feiloppsummering

Vis den bare etter et innsendingsforsøk, med feilene i samme rekkefølge som feltene. Lenketeksten er den
samme som meldingen på feltet.

\`\`\`tsx
import { type ComponentRef, useRef } from 'react';
import { ErrorSummary } from '@kystverket/styrbord';

const summaryRef = useRef<ComponentRef<typeof ErrorSummary>>(null);

// I submit-handleren, når valideringen feiler. Vent én frame, så oppsummeringen er rendret.
requestAnimationFrame(() => summaryRef.current?.focus());

// feilListe: [{ id: 'soknad-epost', melding: 'Skriv inn e-postadressen din' }, …] i feltenes rekkefølge
const oppsummering = feilListe.length > 0 && (
  <ErrorSummary ref={summaryRef}>
    <ErrorSummary.Heading>For å sende søknaden må du rette opp dette:</ErrorSummary.Heading>
    <ErrorSummary.List>
      {feilListe.map(({ id, melding }) => (
        <ErrorSummary.Item key={id}>
          <ErrorSummary.Link href={\`#\${id}\`}>{melding}</ErrorSummary.Link>
        </ErrorSummary.Item>
      ))}
    </ErrorSummary.List>
  </ErrorSummary>
);
\`\`\`

### Kvittering

Elementet med \`role="status"\` må finnes på siden før kvitteringen settes inn, ellers er det ikke sikkert
skjermleseren leser den opp.

\`\`\`tsx
<div role="status">
  {sendt && (
    <Alert data-color="success" title="Søknaden er sendt">
      Du får svar på e-post til {epost}.
    </Alert>
  )}
</div>
\`\`\`

## Komponenter

\`TextInput\`, \`Select\`, \`BorderedRadioGroup\`, \`Datepicker\`, \`TextArea\`, \`Checkbox\`, \`ErrorSummary\`, \`Button\`,
\`Alert\`, \`Surface\`, \`Heading\`, \`Paragraph\`.

## Kjent begrensning

\`BorderedRadioGroup\` legger \`id\` på gruppen, ikke på en radioknapp. Lenken i feiloppsummeringen ruller
derfor til gruppen, men flytter ikke fokus inn i den.
`,{expect:j,userEvent:M,within:N}=__STORYBOOK_MODULE_TEST__,se={title:"Patterns/Forms/Søknadsskjema",component:E,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:G.replace(/^# .*\n/,"")}}}},ae={},oe={play:async({canvasElement:e})=>{const r=N(e);await M.click(r.getByRole("button",{name:"Send søknad"}));const a=(await r.findByText("For å sende søknaden må du rette opp dette:")).closest("[tabindex]");await j(a).toHaveFocus(),await j(r.getByRole("link",{name:"Skriv inn navnet ditt"})).toHaveAttribute("href","#soknad-navn")}},ie=["Default","TomInnsending"];export{ae as Default,oe as TomInnsending,ie as __namedExportsOrder,se as default};
