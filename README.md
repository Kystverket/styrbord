# Styrbord

Styrbord er et komponentbibliotek som vi kan ta i bruk i Kystverkets interne og eksterne
applikasjoner. Det er _ikke_ en profilguide, men en teknisk ressurs om kan trekkes inn for å la
applikasjonen ha et Kystverket uttrykk samtidig som det følger moderne prinsipper for design.

Styrbord tar i bruk [designsystemetet.no](https://www.designsystemet.no/) sine komponenter og prinsipper.
Komponentene til Designsystemet blir eksportert videre av Styrbord med Kystverkets farger og tekststil.
Dette betyr at [dokumentasjonen til Designsystemet](https://storybook.designsystemet.no/) er vel så viktig
som den du finner her.

Alle komponentene og typene i Designsystemet er tilgjengelig i Styrbord med følgende merknader:

- Noen komponenter blir overskrevet av Styrbord og har ikke nødvendigvis samme interface som Designsystemet. De er merket med 'ds+kyv' i Storybook. De kan være basert på tilsvarende komponent i Designsystemet, men ikke nødvendigvis.

## Installasjon

Styrbord blir publisert til Github Packages. Du kan lese en [guide om installering av NPM-pakker fra Github packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package), eller følge en kort oppskrift under:

- Lag et `Personal Access Token` (PAT) med lesetilgang på packages. Dette gjøres her: [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Lag en fil som heter `.npmrc` i din hjemmemappe (`cd ~`) med følgende:

```.env
  //npm.pkg.github.com/:_authToken=MITT_TOKEN
  @kystverket:registry=https://npm.pkg.github.com/
```

- Bytt ut `MITT_TOKEN` i `.npmrc` med PAT du lagde i første steg
- Kjør `npm i @kystverket/styrbord` for å installere Styrbord i ditt prosjekt

OBS: `.npmrc` kan også ligge i prosjektets mappe. Da må du huske å legge `.npmrc` til i `.gitignore` slik at du ikke committer en hemmelighet!

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
