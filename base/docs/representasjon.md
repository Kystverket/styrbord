# Innlogging og representasjon

Bygger på Designsystemets mønster for
[representasjon og innlogging på vegne av andre](https://designsystemet.no/no/patterns/representation).
Gjelder tjenester der brukeren kan handle for en virksomhet eller en annen person.

## Prinsipper

1. **Vis hvem brukeren er logget inn som**, synlig og på samme sted gjennom hele tjenesten («Du er logget inn
   som Kari Nordmann»). I Styrbord: profilen i `Header`.
2. **Vis hvem brukeren handler på vegne av**, ikke bare hvem som er logget inn.
3. **Forklar hvorfor brukeren kan handle for noen**: «Du er daglig leder», «Du har fullmakt». Er retten
   tidsbegrenset, vis når den går ut.
4. **Valget av hvem man representerer kommer rett etter innlogging**, og bare når det finnes et valg. Har
   brukeren mange å velge mellom, gi søk eller filter, og vis organisasjonsnummer eller fødselsdato når navn
   kan forveksles.
5. **Det er lett å bytte**, for eksempel fra en meny øverst. Går det ikke, forklar hvorfor. Byttes det
   automatisk (fordi brukeren kom fra en annen tjeneste), si fra.
6. **Brukeren kan se hvem som kan handle for hen, og hva de har gjort**: hvem, hva og når.

## Ord

| Bruk         | Ikke                                                   |
| ------------ | ------------------------------------------------------ |
| på vegne av  | representere                                           |
| virksomhet   | aktør, bedrift, selskap, hovedenhet (som generelt ord) |
| fullmakt     | tilgang, rettighet, delegering, tillatelse             |
| organisasjon | om andre enn frivillige organisasjoner                 |

- Med en kjent handling: «Hvem søker du på vegne av?». Ellers: «Hvem vil du gjøre noe på vegne av?»
- Bruker bare én type virksomhet tjenesten, kall den det den er («rederi», «havn»).
- Ikke kall de innloggede sidene «Min side» når brukeren kan være logget inn for andre. Si konkret hvor
  brukeren er, og bruk «din» framfor «min».
