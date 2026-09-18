# Styrbord Cookie Banner

Cookie-banner for Kystverkets interne og eksterne applikasjoner. Biblioteket er et tillegg til
Styrbord og bygger på `@kystverket/styrbord`.

Pakken er foreløpig tom — den er satt opp med bygg, lint og publisering, men eksporterer ingen
komponenter ennå.

## Versjonering

- Prosjektet følger semantisk versjonering (`major.minor.patch`).
- Major inkrementeres ved knekkende endringer.
- Minor inkrementeres ved ny funksjonalitet bakoverkompatibelt.
- Patch inkrementeres ved feilrettinger og mindre forbedringer.

## Bruk

Det holder å importere CSS globalt en gang.

```js
import '@kystverket/styrbord/style.css';
import '@kystverket/styrbord-cookie-banner/style.css';
```

## Avhengigheter

Følgende peer dependencies må være tilgjengelige i applikasjonen:

- `@kystverket/styrbord`
- `react`
- `react-dom`
