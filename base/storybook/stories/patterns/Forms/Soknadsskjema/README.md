# Søknadsskjema

Et skjema med gruppering, feil som vises når brukeren forlater et felt eller sender inn, og feiloppsummering over send-knappen som tar fokus.

## Når du bruker mønsteret

Når brukeren skal fylle ut og sende inn noe som blir behandlet videre: søknader, meldinger, registreringer.
Er skjemaet langt nok til at brukeren mister oversikten, del det i steg med `Stepper`. Reglene er de samme,
men knappene blir «Neste steg» og «Forrige steg» (se `knapper.md` i veiledningen).

Mønsteret sier hvordan skjemaet skal oppføre seg og hvordan Styrbord-komponentene settes sammen. _Hvordan_ du
validerer (egne funksjoner, react-hook-form, zod, på serveren) bestemmer applikasjonen.

## Regler

Bygger på Designsystemets retningslinjer for [feilmeldinger](https://designsystemet.no/no/patterns/errors),
[påkrevde og valgfrie felt](https://designsystemet.no/no/patterns/required-and-optional-fields) og
[knapper](https://designsystemet.no/no/patterns/button-placement-and-order).

- **Feil vises når brukeren forlater feltet eller sender inn, aldri mens hen skriver.** «Må fylles ut»-feil
  vises først når brukeren prøver å sende inn; å tabbe seg gjennom et tomt felt er ikke en feil. En feil
  forsvinner i det øyeblikket den er rettet.
- **`ErrorSummary` rett over send-knappen**, med én lenke per feil i samme rekkefølge som feltene. Står
  skjemaet over flere sider som lastes på nytt, flytt den til toppen.
- **Fokus flyttes til oppsummeringen** når innsendingen stopper.
- **Send-knappen er aldri deaktivert**, og den er skjemaets eneste hovedhandling, til venstre.
- **Er alle feltene påkrevd, står det én gang øverst**, og feltene merkes ikke. Er noen valgfrie, merk hvert
  felt (se `skjema.md`).
- **Feilmeldingen sier hva brukeren skal gjøre**, med nøkkelordet fra ledeteksten tidlig: «Beskrivelsen må ha
  minst 20 tegn», ikke «Feltet er ikke fylt ut korrekt».
- **`autoComplete` og `type`** der det finnes en passende verdi.
- **Grupper med overskrift** (`Heading level={2}`), og `Surface width="form"` rundt det hele.

## Slik settes det sammen

### Skjelett

`noValidate` slår av nettleserens egne feilbobler, så bare våre meldinger vises.

```tsx
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
```

### Felt

Hvert felt trenger en `id` som er unik på siden, fordi feiloppsummeringen lenker til den. `error` viser
meldingen under feltet og kobler den til feltet for skjermlesere. Styrbords felt tar `onChange(value)` med
selve verdien, ikke en event.

```tsx
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
```

`Checkbox` og `Switch` er Designsystemets og gir en vanlig `ChangeEvent`: `onChange={(e) => setBekreftet(e.target.checked)}`.

### Feiloppsummering

Vis den bare etter et innsendingsforsøk, med feilene i samme rekkefølge som feltene. Lenketeksten er den
samme som meldingen på feltet.

```tsx
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
          <ErrorSummary.Link href={`#${id}`}>{melding}</ErrorSummary.Link>
        </ErrorSummary.Item>
      ))}
    </ErrorSummary.List>
  </ErrorSummary>
);
```

### Kvittering

Elementet med `role="status"` må finnes på siden før kvitteringen settes inn, ellers er det ikke sikkert
skjermleseren leser den opp.

```tsx
<div role="status">
  {sendt && (
    <Alert data-color="success" title="Søknaden er sendt">
      Du får svar på e-post til {epost}.
    </Alert>
  )}
</div>
```

## Komponenter

`TextInput`, `Select`, `BorderedRadioGroup`, `Datepicker`, `TextArea`, `Checkbox`, `ErrorSummary`, `Button`,
`Alert`, `Surface`, `Heading`, `Paragraph`.

## Kjent begrensning

`BorderedRadioGroup` legger `id` på gruppen, ikke på en radioknapp. Lenken i feiloppsummeringen ruller
derfor til gruppen, men flytter ikke fokus inn i den.
