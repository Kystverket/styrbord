# Søknadsskjema

Et komplett skjema med gruppering, valgfrie felt, validering ved innsending og feiloppsummering som tar fokus.

## Når du bruker mønsteret

Når brukeren skal fylle ut og sende inn noe som blir behandlet videre: søknader, meldinger, registreringer.
Er skjemaet langt nok til at brukeren mister oversikten, del det i steg med `Stepper`. Valideringen er den
samme.

## Det mønsteret gjør, og hvorfor

- **Feil vises først når brukeren prøver å sende inn.** Etter det valideres feltene fortløpende, så en
  feil forsvinner i det øyeblikket den er rettet. Feil før brukeren har begynt er bare støy.
- **`ErrorSummary` øverst, med lenker til feltene.** Lenkene bruker `href="#<feltets id>"`, så hvert felt
  må ha en `id` som er unik på siden. Rekkefølgen følger skjemaet.
- **Fokus flyttes til oppsummeringen** når innsendingen stopper. Ellers får ikke skjermleserbrukere vite
  at noe gikk galt.
- **Send-knappen er aldri deaktivert.** En deaktivert knapp sier ikke hva som mangler; en innsending som
  feiler gjør det.
- **Merk de valgfrie feltene, ikke de påkrevde** (`optional` på feltet), når de fleste feltene er påkrevd.
  Snu det (`required`) hvis de fleste er valgfrie.
- **Feilmeldingen sier hva brukeren skal gjøre**: «Skriv inn e-postadressen din», ikke «Ugyldig verdi».
- **`noValidate` på `<form>`**, så nettleserens egne meldinger ikke konkurrerer med våre.
- **`autoComplete`, `type` og `inputMode`** på feltene der det finnes en passende verdi. Det gir riktig
  tastatur på mobil og lar nettleseren fylle ut.
- **Grupper med overskrift** (`Heading level={2}`) i lange skjemaer, og `Surface width="form"` rundt det
  hele, så linjene ikke blir for lange.

## Komponenter

`TextInput`, `Select`, `BorderedRadioGroup`, `Datepicker`, `TextArea`, `Checkbox`, `ErrorSummary`, `Button`,
`Alert`, `Surface`, `Heading`, `Paragraph`.

Styrbords felt er kontrollerte og tar `value` og `onChange(value)` med selve verdien, ikke en event.
`Checkbox` er Designsystemets og gir en vanlig `ChangeEvent`.

## Kjent begrensning

`BorderedRadioGroup` legger `id` på gruppen, ikke på en radioknapp. Lenken i feiloppsummeringen ruller
derfor til gruppen, men flytter ikke fokus inn i den.
