# Skjemaer

Mønsteret [Søknadsskjema](patterns/Forms/Soknadsskjema/README.md) viser det meste av dette i ett komplett
skjema. Start med det når du lager et nytt skjema.

Retningslinjene bygger på Designsystemets mønstre for
[feilmeldinger](https://designsystemet.no/no/patterns/errors),
[påkrevde og valgfrie felt](https://designsystemet.no/no/patterns/required-and-optional-fields) og
[dato og klokkeslett](https://designsystemet.no/no/patterns/date-and-time), oversatt til Styrbords komponenter.

## Felt

| Behov                               | Komponent                                                      |
| ----------------------------------- | -------------------------------------------------------------- |
| Kort tekst, e-post, telefon         | `TextInput` (sett `type`, `inputMode`, `autoComplete`)         |
| Tall                                | `NumberInput`                                                  |
| Lang tekst                          | `TextArea` (med `maxLength` får den tegnteller)                |
| Ett valg av få (2–5)                | `BorderedRadioGroup`                                           |
| Ett valg av mange                   | `Select`, eller `Suggestion` når listen er lang                |
| Flere valg                          | `Checkbox` med `useCheckboxGroup`, eller `BorderedToggleGroup` |
| Ja/nei som får virkning med en gang | `Switch`                                                       |
| Dato og klokkeslett                 | Se [egen seksjon](#dato-og-klokkeslett)                        |
| Filer                               | `FileUploader`                                                 |
| Formatert tekst                     | `RichTextArea`                                                 |

Styrbords felt er kontrollerte: `value` og `onChange(value)`, der `onChange` får selve verdien. De har
`label`, `description`, `error`, `onBlur` og `id`, og de fleste har `required` og `optional`. `Checkbox` og
`Switch` er Designsystemets og bruker vanlige events.

## Spør om minst mulig

- Spør bare om det tjenesten faktisk trenger. Da blir det sjelden valgfrie felt.
- Ikke for mange spørsmål på én side, og spørsmålene på samme side hører sammen.
- Gi brukeren det hen trenger å vite **før** hen begynner, ikke bak et spørsmålstegn.
- Godta ulike skrivemåter for telefonnummer, datoer og lignende i stedet for å kreve ett format.
- La brukeren gå tilbake og endre, og pause eller avbryte.

## Påkrevd og valgfritt

- **Alle feltene er påkrevd:** skriv det én gang øverst («Alle feltene må fylles ut»), og ikke merk feltene.
  Har skjemaet bare ett felt, kan det stå i spørsmålet eller beskrivelsen.
- **Noen er påkrevd, noen valgfrie:** merk **hvert** felt, med «Må fylles ut» eller «Valgfritt» etter
  ledeteksten. Da trengs ingen forklaring øverst.
- Bruk ikke stjerne, «Obligatorisk» eller «Påkrevd».

I Styrbord gir `optional` merket «Valgfritt». For «Må fylles ut», send teksten inn: `required="Må fylles ut"`.
`required={true}` gir en stjerne, som Designsystemet fraråder.

## Feilmeldinger

### Når de vises

- Når brukeren **forlater feltet** (`onBlur`), trykker **Neste** eller **sender inn**. Aldri mens hen skriver.
- «Må fylles ut»-feil vises ikke før brukeren har prøvd å gå videre. Å tabbe seg gjennom et tomt felt er ikke
  en feil, og tastaturbrukere må gjøre nettopp det.
- En feil forsvinner i det øyeblikket den er rettet, både fra feltet og fra oppsummeringen.

### Hvor de vises

- **På feltet**, med `error`. Styrbords felt viser den under feltet med ikon og rød farge, og kobler den til
  feltet (`aria-invalid`, `aria-describedby`).
- **I `ErrorSummary`** når det er flere feil, **rett over send- eller Neste-knappen**. Flytt den til toppen
  av siden hvis siden lastes på nytt ved Neste, hvis brukeren kommer tilbake til skjemaet, eller hvis
  løsningen ikke stopper brukeren fra å gå videre.
- Oppsummeringen har alle feilene på siden eller steget, i samme rekkefølge som feltene. Hver feil er en
  `ErrorSummary.Link` med `href="#<feltets id>"`, og lenketeksten er den samme som feilmeldingen på feltet.
- **Flytt fokus til oppsummeringen** når innsendingen stopper (`ref` + `focus()`).
- **Deaktiver ikke send-knappen** for å hindre innsending. Vis oppsummeringen i stedet.

### Feil som gjelder flere felt

- Når en feil skyldes et annet felt (sluttdato før startdato), merk alle feltene det gjelder, og si hvilket
  felt feilen kommer fra og hvordan den rettes.
- I en gruppe der minst ett felt må fylles ut, blir hele gruppen rød med én melding under. En feil i ett av
  feltene vises bare under det feltet.

### Formulering

- Kort, vennlig og konkret. Si hva brukeren skal gjøre: «Skriv inn e-postadressen din», ikke «Feltet er ikke
  fylt ut korrekt» eller «Ugyldig verdi».
- Gjenta nøkkelordet fra ledeteksten, og tidlig i meldingen.
- Bestemt form når feltet har et fast navn («Postnummeret må ha fire siffer»), ubestemt når navnet er en
  variabel («Postnummer må ha 4 siffer»).

### Informasjon som ikke er en feil

Noe brukeren bør vite, men som ikke stopper hen (for eksempel at et navn allerede er i bruk), vises med
`Alert data-color="info"` eller `"success"` etter at hen har fylt inn, ikke som feil.

## Dato og klokkeslett

Start med hva tjenesten trenger å vite, og be ikke om mer presisjon enn det. Nettleserens egne felt er
nesten alltid bedre enn en egenutviklet datovelger.

| Behov                                       | Løsning                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Dato brukeren kan (fødselsdato, utløpsdato) | Tre `TextInput` for dag, måned og år i en `Fieldset`, med `inputMode="numeric"` og `autoComplete="bday-day"` osv. |
| Dato i nær fortid eller framtid             | `Datepicker` (nettleserens `type="date"`)                                                                         |
| Start- og sluttdato                         | To `Datepicker` i riktig rekkefølge. Valider at slutt ikke er før start, og si hvordan feilen rettes              |
| Klokkeslett eller tidsrom                   | `TimePicker`, eller to merket «Fra kl.» og «Til kl.»                                                              |
| Omtrentlig tidspunkt                        | `Select` for måned og år                                                                                          |
| Få, faste tidspunkt (ledige timer)          | `BorderedRadioGroup`. Vis bare ledige tider, ikke deaktiverte                                                     |
| Relativt tidspunkt (påminnelse)             | `Select` med for eksempel «1 time før», «1 dag før»                                                               |

- Ikke bruk `type="number"` til dag, måned eller år: tallfelt har piler og validering som ikke passer.
- Formatet i `type="date"` følger operativsystemet, ikke språket på siden. Vis gjerne valgt dato med ord, eller
  be om bekreftelse før lagring, når datoen er viktig.

## Knapper og oppsett

- Bruk `Surface width="form"` rundt skjemaet, og del lange skjemaer i grupper med `Heading level={2}` eller i
  steg med `Stepper`.
- Sett `noValidate` på `<form>`, så nettleserens egne feilbobler ikke vises i tillegg.
- Knapperekkefølge, plassering og tekst: se [knapper.md](knapper.md).
- Bekreft innsendingen med `Alert data-color="success"` inne i et `role="status"`-element som finnes på siden
  fra start, så kvitteringen blir lest opp (se [varsler.md](varsler.md)).
