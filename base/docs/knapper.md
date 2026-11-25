# Knapper

Bygger på Designsystemets mønster for
[plassering, rekkefølge og språk i knapper](https://designsystemet.no/no/patterns/button-placement-and-order).

## Styrbord og Designsystemet

Designsystemet omtaler knapper som primær, sekundær og tertiær. I Styrbord er det `variant`:

| Designsystemet | Styrbord            |
| -------------- | ------------------- |
| Primær         | `variant="filled"`  |
| Sekundær       | `variant="outline"` |
| Tertiær        | `variant="ghost"`   |

## Plassering og rekkefølge

- Bare de knappene situasjonen trenger. Én hovedhandling (`filled`) per visning.
- **Til venstre**, ikke til høyre. Det er lettere å finne, særlig med forstørrelse eller redusert synsfelt.
- Rekkefølge: primær, sekundær, tertiær. Fra venstre mot høyre på stor skjerm, ovenfra og ned på liten.
- Tabulatorrekkefølgen følger den visuelle rekkefølgen. Ikke bytt om DOM-en eller `tabIndex` for å få en knapp
  først.
- Det samme gjelder i `Dialog` og `Popover`. Krysset øverst til høyre i en dialog gjør det samme som Esc og
  klikk utenfor. Må brukeren svare, skal det minst inngripende valget være standard.

## Skjemaer

- **Én side:** «Send inn» er normalt den eneste hovedhandlingen.
- **Flere steg:**
  - Første steg har ingen «Forrige steg»-knapp, heller ikke en deaktivert.
  - Senere steg: «Neste steg» (`filled`) og «Forrige steg» (`outline`) ved siden av hverandre. På liten skjerm
    står «Forrige steg» under.
  - Siste steg: «Send inn» (`filled`) og «Forrige steg» (`outline`).
  - Skriv «Forrige steg», ikke «Tilbake».
- Andre valg, som «Fortsett senere» eller «Slett skjemaet», står ikke i samme gruppe som Neste/Forrige.

## Tekst på knappen

- Si hva som skjer: «Send søknad», «Signer», «Lagre endringer». Kort, helst tre ord eller færre, og start
  med et verb.
- Unngå «OK» og «Avbryt» når et mer presist ord finnes. En dialog som spør «Vil du avslutte uten å lagre?»
  får knappene «Avslutt uten å lagre» og «Fortsett redigering», ikke «OK» og «Avbryt».
- **«Avbryt» betyr at ingenting lagres eller endres.** Kan brukeren miste noe, spør først: «Vil du avbryte?
  Endringene du har gjort, blir ikke lagret.» Vil du tilby noe annet, si det: «Lagre og fortsett senere».

## Knapp eller lenke?

- `Button` når noe skjer på siden: sende, lagre, åpne en dialog.
- `Link` når brukeren går til en annen side. Se [lenker.md](lenker.md).
