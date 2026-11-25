# Skjemaer

Mønsteret [Søknadsskjema](patterns/Forms/Soknadsskjema/README.md) viser alt dette i ett komplett skjema.
Start med det når du lager et nytt skjema.

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
| Dato, klokkeslett                   | `Datepicker`, `TimePicker`, `DateTimePicker`                   |
| Filer                               | `FileUploader`                                                 |
| Formatert tekst                     | `RichTextArea`                                                 |

Styrbords felt er kontrollerte: `value` og `onChange(value)`, der `onChange` får selve verdien.
De har `label`, `description`, `error` og `id`, og de fleste har `required` og `optional`. `Checkbox` og
`Switch` er Designsystemets og bruker vanlige events.

## Påkrevd og valgfritt

Merk det som er i mindretall. Er de fleste feltene påkrevd, sett `optional` på de valgfrie, og skriv det
øverst i skjemaet. Er de fleste valgfrie, sett `required` på de påkrevde.

## Validering og feilmeldinger

- **Valider ved innsending**, ikke mens brukeren skriver første gang. Etter første forsøk kan du validere
  fortløpende, så feilen forsvinner når den er rettet.
- **Vis feilen på feltet** med `error`, og **samle alle i `ErrorSummary`** øverst i skjemaet. Hver feil er en
  `ErrorSummary.Link` med `href="#<feltets id>"`, i samme rekkefølge som feltene.
- **Flytt fokus til `ErrorSummary`** når innsendingen stopper (`ref` + `focus()`).
- **Skriv hva brukeren skal gjøre**: «Skriv inn e-postadressen din», ikke «Feltet er påkrevd» eller
  «Ugyldig verdi».
- **Deaktiver ikke send-knappen** for å hindre innsending. Den sier ikke hva som mangler.
- Sett `noValidate` på `<form>`, så nettleserens egne feilbobler ikke vises i tillegg.

## Oppsett

- Bruk `Surface width="form"` rundt skjemaet, så feltene ikke blir for brede.
- Del lange skjemaer i grupper med `Heading level={2}`, eller i steg med `Stepper`.
- Én `Button variant="filled" type="submit"` for innsending. Sekundære handlinger med `variant="ghost"` eller
  `"outline"` og `type="button"`.
- Bekreft innsendingen med `Alert data-color="success" role="status"`.
