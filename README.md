# Styrbord

Styrbord er et komponentbibliotek som vi kan ta i bruk i Kystverkets interne og eksterne
applikasjoner. Det er *ikke* en profilguide, men en teknisk ressurs om kan trekkes inn for å la
applikasjonen ha et Kystverket uttrykk samtidig som det følger moderne prinsipper for design.

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

## Bruk

Det holder å importere CSS én gang globalt.

```js
import '@kystverket/styrbord/style.css';
```

Importering av enkeltkomponenter.

```js
import { Heading, Ingress, Tabs } from '@kystverket/styrbord';
```
