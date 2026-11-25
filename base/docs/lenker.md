# Lenker

Bygger på Designsystemets mønster for [merking av lenker](https://designsystemet.no/no/patterns/external-links).
Bruk `Link` fra Styrbord.

## Lenketekst

- Lenketeksten sier hvor lenken går, og gir mening alene. Skjermleserbrukere hopper ofte mellom lenkene på en
  side uten teksten rundt.
- Nøkkelordene først, og kort.
- Ikke «klikk her», «gå til» eller ordet «lenke» (skjermleseren sier det allerede). Ikke «Les mer» alene.
- Ikke URL-en som lenketekst. Skriv «Merverdiavgift (skatteetaten.no)», ikke «www.skatteetaten.no/…».
- Samme lenketekst skal ikke gå til ulike steder på samme side.

| I stedet for                           | Skriv                                          |
| -------------------------------------- | ---------------------------------------------- |
| «Klikk her for å lese mer om farleder» | «Farleder og merking (kystverket.no)»          |
| «Rediger»                              | «Rediger denne siden på github.com»            |
| Et telefonnummer alene                 | «Ring kundesenteret på …» (med `href="tel:…"`) |

## Ny fane

- **Åpne ikke lenker i ny fane.** Brukeren bestemmer selv, og Tilbake-knappen virker som forventet.
- Unntak: når brukeren ellers ville blitt logget ut, eller er midt i en oppgave og kan miste det hen har fylt
  inn. Skriv det da i lenketeksten: «Søk om støtte hos nav.no (åpnes i ny fane)». `target="_blank"` alene
  blir ikke alltid lest opp.

## Eksterne lenker og ikoner

- Unngå ikonet for ekstern lenke. Brukere tolker det ulikt, og det kan aldri være eneste måte å si noe på.
- Lenker til andre nettsteder trenger ikke merkes når det går fram av teksten («Flekkefjord kommune»).

## Filer

- Skriv filtypen i lenketeksten («Årsrapport 2025 (PDF, 3 MB)»), ikke bare som ikon. Ta med størrelsen på
  store filer.
- Bruk `download` med et filnavn som viser typen: `download="årsrapport-2025.pdf"`. Nettleseren kan likevel
  velge å vise PDF-er i stedet for å laste dem ned.
