# Styrbord

Styrbord er et komponentbibliotek som vi kan ta i bruk i Kystverkets interne og eksterne
applikasjoner. Det er _ikke_ en profilguide, men en teknisk ressurs om kan trekkes inn for å la
applikasjonen ha et Kystverket uttrykk samtidig som det følger moderne prinsipper for design.

Styrbord tar i bruk [designsystemet.no](https://www.designsystemet.no/) sine komponenter og prinsipper.
Komponentene til Designsystemet blir eksportert videre av Styrbord med Kystverkets farger og tekststil.
Dette betyr at [dokumentasjonen til Designsystemet](https://storybook.designsystemet.no/) er vel så viktig
som den du finner her.

Alle komponentene og typene i Designsystemet er tilgjengelig i Styrbord med følgende merknader:

- Noen komponenter blir overskrevet av Styrbord og har ikke nødvendigvis samme interface som Designsystemet. De er merket med 'ds+kyv' i Storybook. De kan være basert på tilsvarende komponent i Designsystemet, men ikke nødvendigvis.

## Versjonering

- Major følger major-versjon til Designsystemet.
- Minor inkrementeres ved en eller flere knekkende endringer, eller ny versjon av Designsystemet.
- Patch inkrementeres ved alle endringer, store eller små, som ikke knekker noe eksisterende.

## Bruk

Det holder å importere CSS én gang globalt.

```js
import '@kystverket/styrbord/style.css';
```

Importering av enkeltkomponenter.

```js
import { Heading, Ingress, Tabs } from '@kystverket/styrbord';
```

## Design Tokens

Styrbords design tokens hentes fra [@Kystverket/styrbord-tokens](https://github.com/Kystverket/styrbord-tokens).

## Endringslogg

### 2025-11-11 -- v1.2.1

- Oppdatert Alert til å ikke være egenprodusert, men istedet være en variant av Alert fra Designsystemet. Deler av interfacet endres til å være likere Designsystemet (size).

### 2025-11-11 -- v1.1.0

- Oppdatert til Designsystemet versjon 1.7.2 fra 1.6.1.
- Fjernet unødvendig dependency til @navikt/aksel-icons.

### 2025-10-24 -- v1.0

Offisielt versjon 1.0.

- Fjernet all duplisering av CSS-variabler. Tidligere har vi for bakoverkompatibilitet duplisert alle Designsystemvariabler til en variabel uten `--ds-` foran. Disse variablene er nå ikke lenger tilstede. Versjon 1.0 var en god anledning til å rydde i dette.
- `--spacing-#`-variablene er flyttet fra styrbord-tokens til styrbord. Skal ikke ha noen effekt. Oppfordrer til å bruke `--ds-size-#` over `--spacing-#`.

### 2025-10-23

Oppdatert til Designsystemet 1.6.1 fra 1.4.0.

Endret Avatar.

- Størrelser er nå `2x` og `3x` fra `xxs` og `xxxs`.
- Endret fargevalg. `data-color` er nå kun vanlige farger, men man kan legge på `data-color-variant="surface-tinted"` for å få dusere farger.

### 2025-10-16

Footer har blitt endret. Den er ikke bakoverkompatibel, men siden footer stort sett settes en gang bør
dette gå bra. Se [Footer.stories.tsx](https://github.com/Kystverket/styrbord/blob/main/src/components/kystverket/Footer/Footer.stories.tsx) for hvordan den skal brukes i din applikasjon.

### 2025-09-08

Box har fått noen endringer på fargene og interfacet. Dette er gjort for å gjøre default-fargene
mer attraktive og bruke, og samtidig endre fargenavn til å matche variabelnavn fra Designsystemet.

- Fargen `action` er fjernet og endret til `primary`.
- Attributten `subtle` er fjernet. Default-farge er nå mye likere `subtle`.
- Fargevarianter kan velges ved å sette `color="farge/variant"`. For å matche den gamle `action`-fargen
  kan man ha `color="primary/active"`. Se Box-storyen for alle variantene.

### 2025-08-15

Arbeid for å gjøre Styrbord mindre forskjellig fra Designsystemet. Dette gjør at det forhåpentligvis blir lettere å lære, og lettere å ta i bruk dokumentasjonen til Designsystemet.

- `<InputLabel>` er fjernet. Man kan bruke `<Label>` med `<LabelContent>` (ny) for å oppnå samme visning.
- `<ErrorLabel>` er fjernet. Man kan bruke `<ValidationMessage>` (fra Designsystemet) for å oppnå samme visning.
- `<Label>` (fra typografi) er fjernet fra vanlig eksport. Svært lite brukt, og blokkerer `<Label>`-komponenten fra Designsystemet. Har man fortsatt behov for den er den tilgjengelig som `<Typography.Label>`.
- Overskrivingen av `<Card>` er fjernet. For å oppnå samme stil kan man plassere `<CardTitle>` (ny) i et Card.
- Overskrivingen av `<Details>` er fjernet. Dette gjør at man må gi innhold til `<Details>` som komponenter og ikke attributter slik vi gjorde det før.
- Tillater ikke lenger å sende en boolsk verdi til error attributter i input-komponenter.

Komponentene `<Button>`, `<Tabs>`, `<Select>`, `<NumberInput>`, `<TextInput>` og `<TextArea>` overskriver fortsatt noen Designsystem-komponenter med mer eller mindre inkompatible interface.

### 2025-06-17

Vi har fjernet alle egne tittelkomponenter og henviser istedet til Designsystemets `Heading`-komponent.

- `Display size="lg"` ➡️ `Heading data-size="2xl"`
- `Display size="md"` ➡️ `Heading data-size="xl"`
- `Display size="sm"` ➡️ `Heading data-size="lg"`
- `Headline size="lg"` ➡️ `Heading data-size="md"`
- `Headline size="md"` ➡️ `Heading data-size="sm"`
- `Headline size="sm"` ➡️ `Heading data-size="xs"`
- `Title size="lg"` ➡️ `Heading data-size="sm"`
- `Title size="md"` ➡️ `Heading data-size="xs"`
- `Title size="sm"` ➡️ `Heading data-size="2xs"`
