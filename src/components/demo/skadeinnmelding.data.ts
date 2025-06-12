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
      postnummer: '6057',
      poststed: 'Ellingsøy',
      vegadresse: 'Storfarvegen 270',
    },
    hva: 'Ankring forbudt skilt er ødelagt',
    alvorlighetsgrad: 'uteAvDrift',
    kommentar: 'Dette kan være farlig hvis båter ankrer her.',
  },
  kontakt: {
    navn: 'Magnus Ekse',
    epost: 'mfekse@gmail.com',
    telefon: '12341234',
    kommentar: 'Call me maybe',
  },
};
