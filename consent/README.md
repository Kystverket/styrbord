# Styrbord Consent

Samtykke for informasjonskapsler (cookie-banner, innstillingsdialog og tilhørende logikk) for
Kystverkets interne og eksterne applikasjoner.

Pakken står på egne bein: den bruker ikke `@kystverket/styrbord`, bare designtokenene, slik at
også applikasjoner som ikke kan ta inn hele designsystemet får et samtykkebanner som ser ut som
resten av Kystverket. Kontrollene den trenger — knapp, bryter, dialog — ligger i pakken og er
bygget på de samme tokenene.

Bygger på [c15t](https://c15t.com) i offline-modus: ingen backend, ingen nettverkskall, alt
lagres i nettleseren.

## Versjonering

- Prosjektet følger semantisk versjonering (`major.minor.patch`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.

## Bruk

Importer CSS globalt én gang. I en applikasjon som bruker `@kystverket/styrbord` er dette alt:

```js
import '@kystverket/styrbord-consent/style.css';
```

Bruker applikasjonen ikke Styrbord, må den også laste Designsystemet-temaet, som komponentene
henter farger, avstander og typografi fra:

```js
import '@kystverket/styrbord-consent/theme.css';
import '@kystverket/styrbord-consent/style.css';
```

> Uten `theme.css` i en slik app blir komponentene ustilte, og ingenting feiler. Temaet ligger i
> samme cascade layer som i Styrbord (`dsno`), så importeres det likevel i en Styrbord-app, slår
> kopiene seg sammen i stedet for å overstyre hverandre.

Legg `ConsentProvider` rundt applikasjonen og `CookieConsent` inni. Sistnevnte gir banner,
innstillingsdialog og den flytende knappen som åpner innstillingene igjen.

> Plasserer du flatene hver for seg i stedet, må `ConsentPreferencesDialog` alltid være med.
> Både banneret og innstillingsknappen skjuler seg selv når de åpner innstillingene, så uten
> dialogen forsvinner flaten uten at noe kommer i stedet. Pakken advarer i konsollet om den
> oppdager det.

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

PostHog ligger bak statistikk, fordi det alltid teller sidevisninger og klikk:

```tsx
postHogService({
  apiKey: 'phc_...',
  sessionReplay: true, // sesjonsopptak og varmekart
  capturePageview: false, // appen teller sidevisninger selv ved ruteendring
});
```

Med `sessionReplay` gjør PostHog i tillegg det samme som Hotjar, og det hører hjemme under
brukeropplevelse. Siden en tjeneste bare kan stå i én kategori i dialogen, løses det i kjøretid:
skriptet starter med opptak avslått og slår det på når brukeren gir brukeropplevelse — også uten
at siden lastes på nytt. Varmekart settes ved oppstart og er først med ved neste sidelast.

API-nøkkelen er offentlig og hører hjemme i klientkoden, men send den likevel inn som en prop
framfor å lese den i biblioteket — se avsnittet om `cookieDomain` over. CSP må åpne for både
`eu.i.posthog.com` og `eu-assets.i.posthog.com`.

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

### Utseende

Alt av farger, avstander, typografi og skygger leses fra `@kystverket/styrbord-tokens`. Flatene
setter selv `data-color` på rotelementet sitt, slik at de ser like ut uansett hva applikasjonen
rundt gjør.

Skriften er `--ds-font-family` (Museo Sans) med en systemfont som reserve. Laster applikasjonen
webfonten, brukes den; ellers faller teksten pent tilbake.

Mørk modus følger `data-color-scheme` på et element lenger opp, på samme måte som i Styrbord.

## Avhengigheter

Følgende peer dependencies må være tilgjengelige i applikasjonen:

- `react` (18.2 eller nyere)
- `react-dom` (18.2 eller nyere)

`c15t` og `@kystverket/styrbord-tokens` følger med som vanlige avhengigheter.
