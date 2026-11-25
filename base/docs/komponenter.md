# Velge komponenter

## Styrbord eller Designsystemet?

Alt importeres fra `@kystverket/styrbord`. Pakken eksporterer tre slags komponenter:

- **Styrbords egne** (`Surface`, `PageHeading`, `Header`, `Footer`, `Datepicker`, `FileUploader`,
  `BorderedRadioGroup`, `Stepper`, `Summary` …). Finnes bare her.
- **Designsystemet-komponenter med Styrbord-tilpasning** (`Button`, `TextInput`, `TextArea`, `Select`,
  `NumberInput`, `Tabs`, `Tag` …). API-et kan avvike fra Designsystemets. Les typene, ikke Designsystemets
  eksempler.
- **Uendrede Designsystemet-komponenter** (`Heading`, `Paragraph`, `Checkbox`, `ErrorSummary`, `Dialog` …).
  Designsystemets dokumentasjon gjelder.

Der begge finnes, bruk Styrbords: `TextInput` framfor `Textfield`, `TextArea` framfor `Textarea`.
Styrbords felt tar `value` og `onChange(value)` med selve verdien, ikke en event, og merker påkrevde og
valgfrie felt likt overalt.

## Button

`variant` er `filled | outline | ghost | subtle | dashed`. Designsystemets `primary | secondary | tertiary`
virker ikke:

| Designsystemet | Styrbord  |
| -------------- | --------- |
| `primary`      | `filled`  |
| `secondary`    | `outline` |
| `tertiary`     | `ghost`   |

Bruk én `filled`-knapp for hovedhandlingen i en visning, og `outline` eller `ghost` for resten.

## Layout: Surface

`Surface` er en flex-boks med avstand, farge, kantlinje og bredde som props. Ingenting er satt før du ber om
det.

```tsx
<Surface horizontal gap={4} p={6} data-color="neutral" data-color-variant="subtle" radius="md">
  …
</Surface>
```

- **Avstand** (`gap`, `p`, `px`, `m`, `mt` …) er steg på størrelsesskalaen: `gap={4}` er
  `var(--ds-size-4)`. Skalaen følger `data-size`.
- **`horizontal`** legger barna på rad. Med en skjermstørrelse (`horizontal="md"`) blir det rad fra den
  bredden og opp, så det stables på mobil.
- **`width="form"`** gir en lesbar maksbredde for skjemaer og tekst.
- `Box` er utgått. Bytt den ut med `Surface` når du er innom koden: del spacing på 4 (`gap={16}` →
  `gap={4}`), og `color="x"` blir `data-color="x" data-color-variant="subtle"`.

## Farger

- Sett farge med `data-color` (`primary`, `neutral`, `success`, `warning`, `danger`, `info`, `accent` og
  palettfargene) og eventuelt `data-color-variant` (`default`, `subtle`, `tinted`, `base`).
- I CSS: `var(--ds-color-…)`. Aldri hex-verdier. Fargene bytter verdi i mørk modus, hex-verdier gjør ikke det.
- Trenger du fargenavnene i TypeScript, importer `DataColor` fra `@kystverket/styrbord` eller
  fargelistene fra `@kystverket/styrbord-tokens/colors`. Ikke skriv en egen union av fargenavn.

## Typografi

- `Heading` med `level` for dokumentstrukturen og `data-size` for størrelsen. Hold overskriftsnivåene i
  rekkefølge (én `level={1}` per side).
- `Paragraph` for brødtekst. `data-size`, `data-weight` (`regular | medium | semibold`) og
  `data-color-variant="subtle"` for dempet tekst.
- Inne i tekst: `<span>` med de samme data-attributtene. `Text` og `Body` finnes ikke lenger.

## Sider

- `Header` og `Footer` rundt innholdet, `PageHeading` for sidetittelen.
- Saksbehandlingsløsninger med liste og detaljvisning: `SaksbehandlingShell`.
- Hele sideoppsett finnes under [mønstre](patterns/README.md).

## Utgått

Komponenter som eksporteres med `Deprecated` foran navnet (`DeprecatedCard`, `DeprecatedDetails` …) og
`Box` skal ikke brukes i ny kode. Se [migrering-v2.md](migrering-v2.md) for hva som erstatter dem.
