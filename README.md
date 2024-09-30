# Styrbord, et komponentbiblioteketet

## Installasjon

Styrbord blir publisert til Github Packages. [Her](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package) er en ordrik guide for å kunne installere slike.

Kort forklart:

- Lag en `Personal Access Token` med lesetilgang på packages. Denne må være autorisert for Kystverket organisasjonen. Dette gjøres her: [https://github.com/settings/tokens](https://github.com/settings/tokens)
- Lag en fil som heter `.npmrc` i din hjemmemappe (`cd ~`) med følgende:

```.env
//npm.pkg.github.com/:_authToken=MITT_TOKEN
@kystverket:registry=https://npm.pkg.github.com/
```

- Bytt ut MITT_TOKEN med PAT du lagde over

Nå skal du kunne kjøre følgende

`npm i @kystverket/styrbord`

## I bruk

CSS holder å importere én gang globalt.

```js
import "@kystverket/styrbord/style.css";
```

Importering av enkeltkomponenter.

```js
import { Heading, Ingress, Tabs } from "@kystverket/styrbord";
```
