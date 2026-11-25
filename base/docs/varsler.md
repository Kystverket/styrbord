# Systemvarsler

Bygger på Designsystemets mønster for [systemvarsler](https://designsystemet.no/no/patterns/systemnotifications).

Systemvarsler gjelder feil og hendelser i systemet, ikke noe brukeren har gjort. Feil i det brukeren har
fylt inn er feilmeldinger: se [skjema.md](skjema.md).

## Hvilken løsning

| Situasjon                                                                | Løsning                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| Hele tjenesten er nede, eller siden finnes ikke (500, 404)               | Egen feilside                                           |
| Brukeren må gjøre noe nå (blir logget ut, ulagrede data, et valg må tas) | `Dialog` (modal)                                        |
| Viktig melding for hele tjenesten                                        | `Alert` øverst på siden                                 |
| Noe er feil i én del av tjenesten, resten virker                         | `Alert` der feilen er                                   |
| Brukeren kan ikke fortsette i denne delen                                | `Alert data-color="danger"` som står til feilen er løst |
| Deler er utilgjengelige, men navigasjonen virker                         | `Alert data-color="warning"` øverst                     |
| Informasjon: planlagt vedlikehold, ny versjon                            | `Alert data-color="info"`                               |

- Ikke `Alert` for feil på et felt (bruk `error` på feltet), for fast informasjon (bruk `Card`) eller som
  eneste innhold på en side (bruk en feilside).
- Ikke `Dialog` for meldinger som kommer ofte eller kan vente.
- Varsler om liv og helse går foran systemvarsler, og skal ikke se ut som dem.

## Feilsider

- **500:** si at feilen ikke skyldes noe brukeren gjorde, og tilby å prøve igjen eller gå tilbake.
- **404:** tilby søk, forslag til sider som ligner adressen brukeren prøvde, og lenke til forsiden.
- Ikke bruk en hel feilside når bare én funksjon feiler og resten virker.

## Tekst

- Si kort hva som er galt og hvordan brukeren kan komme videre. Underoverskrifter og punktlister hjelper.
- Gjør det klart at feilen er hos oss, ikke hos brukeren. «Beklager» og «dessverre» er greit.
- Si hva brukeren kan prøve, og hvor hen får hjelp. Ta med feilkoden hvis brukerstøtte trenger den.
- Unngå «vennligst». Skriv «Du kan kontakte brukerstøtte».
- Vær forsiktig med humor.

## Kode og tilgjengelighet

- Et varsel som er der når siden lastes, trenger ingen ekstra attributter. Pass på overskriftsnivået.
- Et varsel som dukker opp etterpå, må leses opp:
  - `role="alert"` når det må avbryte brukeren (kritisk feil).
  - `role="status"` når det kan vente («Endringen er lagret»).
  - Elementet med `role` må finnes på siden **før** meldingen settes inn, ellers leses den ikke opp.
- `Dialog` setter riktig rolle og fokus selv. Gi den en overskrift, og la fokus gå tilbake dit brukeren var
  når den lukkes.
