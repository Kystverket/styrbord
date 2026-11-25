# Søknadsskjema

Et komplett skjema med gruppering, validering når brukeren forlater et felt eller sender inn, og feiloppsummering over send-knappen som tar fokus.

## Når du bruker mønsteret

Når brukeren skal fylle ut og sende inn noe som blir behandlet videre: søknader, meldinger, registreringer.
Er skjemaet langt nok til at brukeren mister oversikten, del det i steg med `Stepper`. Valideringen er den
samme, men knappene blir «Neste steg» og «Forrige steg» (se `knapper.md` i veiledningen).

## Det mønsteret gjør, og hvorfor

Mønsteret følger Designsystemets retningslinjer for
[feilmeldinger](https://designsystemet.no/no/patterns/errors),
[påkrevde og valgfrie felt](https://designsystemet.no/no/patterns/required-and-optional-fields) og
[knapper](https://designsystemet.no/no/patterns/button-placement-and-order).

- **Feil vises når brukeren forlater feltet eller sender inn, aldri mens hen skriver.** «Må fylles ut»-feil
  vises først når brukeren prøver å sende inn; å tabbe seg gjennom et tomt felt er ikke en feil. En feil
  forsvinner i det øyeblikket den er rettet.
- **`ErrorSummary` rett over send-knappen**, med en lenke per feil i samme rekkefølge som feltene. Lenkene
  bruker `href="#<feltets id>"`, så hvert felt må ha en `id` som er unik på siden. Står skjemaet over flere
  sider som lastes på nytt, flytt oppsummeringen til toppen.
- **Fokus flyttes til oppsummeringen** når innsendingen stopper.
- **Send-knappen er aldri deaktivert**, og den er skjemaets eneste hovedhandling, til venstre.
- **Alle feltene er påkrevd, så det står én gang øverst** og feltene merkes ikke hver for seg. Spør bare om
  det tjenesten trenger; da blir det sjelden valgfrie felt.
- **Feilmeldingen sier hva brukeren skal gjøre**, med nøkkelordet fra ledeteksten tidlig: «Beskrivelsen må ha
  minst 20 tegn», ikke «Feltet er ikke fylt ut korrekt».
- **`noValidate` på `<form>`**, så nettleserens egne meldinger ikke konkurrerer med våre.
- **`autoComplete` og `type`** der det finnes en passende verdi. Det gir riktig tastatur på mobil og lar
  nettleseren fylle ut.
- **Kvitteringen settes inn i et `role="status"`-element som finnes fra start**, så skjermlesere leser den
  opp.
- **Grupper med overskrift** (`Heading level={2}`) og `Surface width="form"` rundt det hele.

## Komponenter

`TextInput`, `Select`, `BorderedRadioGroup`, `Datepicker`, `TextArea`, `Checkbox`, `ErrorSummary`, `Button`,
`Alert`, `Surface`, `Heading`, `Paragraph`.

Styrbords felt er kontrollerte og tar `value` og `onChange(value)` med selve verdien, ikke en event.
`Checkbox` er Designsystemets og gir en vanlig `ChangeEvent`.

## Kjent begrensning

`BorderedRadioGroup` legger `id` på gruppen, ikke på en radioknapp. Lenken i feiloppsummeringen ruller
derfor til gruppen, men flytter ikke fokus inn i den.
