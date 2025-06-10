import { SkadeinnmeldingData } from './skadeinnmelding.types';

export const defaultSkadeinnmeldingData: SkadeinnmeldingData = {
  skade: {
    hvor: {
      postnummer: '',
      poststed: '',
      vegadresse: '',
    },
    hva: '',
    alvorlighetsgrad: undefined,
    kommentar: '',
  },
  kontakt: {
    navn: '',
    epost: '',
    telefon: '',
    kommentar: '',
  },
};

export const mockSkadeinnmeldingData: SkadeinnmeldingData = {
  skade: {
    hvor: {
      postnummer: '',
      poststed: '',
      vegadresse: '',
    },
    hva: '',
    alvorlighetsgrad: undefined,
    kommentar: '',
  },
  kontakt: {
    navn: '',
    epost: '',
    telefon: '',
    kommentar: '',
  },
};
