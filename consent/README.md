# Styrbord Consent

Samtykke for informasjonskapsler (cookie-banner, innstillingsdialog og tilhørende logikk) for
Kystverkets interne og eksterne applikasjoner. Biblioteket er et tillegg til Styrbord og bygger
på `@kystverket/styrbord`.

Bygger på [c15t](https://c15t.com) i offline-modus: ingen backend, ingen nettverkskall, alt
lagres i nettleseren.

## Versjonering

- Prosjektet følger semantisk versjonering (`major.minor.patch`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.

## Bruk

Det holder å importere CSS globalt en gang.

```js
import '@kystverket/styrbord/style.css';
import '@kystverket/styrbord-consent/style.css';
```

Legg `ConsentProvider` rundt applikasjonen og `CookieConsent` inni. Sistnevnte gir banner,
innstillingsdialog og den flytende knappen som åpner innstillingene igjen.

```tsx
import { ConsentProvider, CookieConsent, hotjarService, plausibleService } from '@kystverket/styrbord-consent';

<ConsentProvider
  language="nb-NO"
  cookieDomain=".kystverket.no"
  services={[plausibleService({ domain: 'kystverket.no' }), hotjarService({ siteId: 1234567 })]}
>
  {children}
  <CookieConsent />
</ConsentProvider>;
```

Les samtykke i egen kode med `useConsent`:

```tsx
const { hasConsent, showPreferences } = useConsent();

if (hasConsent('measurement')) {
  // ...
}
```

### Felles samtykke på tvers av subdomener

`cookieDomain` er mekanismen som gjør at ett svar gjelder flere applikasjoner: settes den til
`.kystverket.no`, deler alle tjenester under domenet den samme informasjonskapselen, og
brukeren slipper å ta stilling til det samme flere ganger.

Appene må da bruke samme `storageKey` (standard `kystverket_consent`) og være enige om hvilken
kategori hver tjeneste hører til — bruk `services.ts` framfor å definere tjenestene på nytt i
hver app.

La `cookieDomain` stå udefinert lokalt; da settes kapselen på gjeldende vertsnavn.

> Send alltid inn `cookieDomain` som en prop utenfra. Biblioteket leser aldri miljøvariabler
> selv, fordi rammeverk som Next.js og Vite baker dem inn på byggetidspunktet — en verdi lest
> inne i biblioteket ville blitt låst til byggemiljøet.

### Tjenester

`plausibleService`, `hotjarService`, `postHogService` og `consentCookieService` er ferdige
oppsett med riktig kategori og kapselliste. Andre tjenester defineres som vanlige
`ConsentService`-objekter.

Plausible lastes uten samtykke (`alwaysLoad`), fordi det verken setter informasjonskapsler
eller lagrer noe som kan knyttes til enheten. `plausibleService({ domain, requireConsent: true })`
legger det bak statistikk-kategorien i stedet.

### Kategorier

Kategoriene er c15t sitt faste vokabular: `necessary`, `functionality`, `experience`,
`measurement`, `marketing`. Det kan ikke utvides. Etikettene er våre egne, så det er usynlig
for brukeren — og et fast vokabular er nettopp det som gjør at flere apper kan lese den samme
informasjonskapselen og tolke den likt.

### Tekster

Bokmål, nynorsk og engelsk følger med. Overstyr enkelttekster med `translations`-propen:

```tsx
<ConsentProvider translations={{ banner: { heading: 'Egen overskrift' } }} …>
```

Tekstene ligger i biblioteket framfor i applikasjonens i18n-oppsett, slik at komponentene
fungerer uavhengig av om appen bruker i18next, `@kystverket/sprak-react` eller ingenting.

## Avhengigheter

Følgende peer dependencies må være tilgjengelige i applikasjonen:

- `@kystverket/styrbord`
- `react`
- `react-dom`

`c15t` følger med som vanlig avhengighet.
