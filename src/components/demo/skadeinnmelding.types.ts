export type SkadeinnmeldingData = {
  skade: SkadeData;
  kontakt: KontaktData;
};

export type SkadeData = {
  hvor: AdresseData;
  hva: string;
  alvorlighetsgrad?: 'kosmetisk' | 'nedsattFunksjon' | 'uteAvDrift' | 'fareForPersoner';
  kommentar: string;
};

export type KontaktData = {
  navn: string;
  epost: string;
  telefon: string;
  kommentar: string;
};

export interface PostnummerSted {
  postnummer: string;
  poststed: string;
}

export interface AdresseData extends PostnummerSted {
  vegadresse: string;
}
