import { type ComponentRef, type SyntheticEvent, useRef, useState } from 'react';
import {
  Alert,
  BorderedRadioGroup,
  Button,
  Checkbox,
  Datepicker,
  ErrorSummary,
  Heading,
  Paragraph,
  Select,
  Surface,
  TextArea,
  TextInput,
} from '~/main';

type Values = {
  navn: string;
  epost: string;
  telefon: string;
  kommune: string;
  tiltak: string;
  startdato: Date | undefined;
  beskrivelse: string;
  bekreftet: boolean;
};

type Field = keyof Values;
type Errors = Partial<Record<Field, string>>;

const initialValues: Values = {
  navn: '',
  epost: '',
  telefon: '',
  kommune: '',
  tiltak: '',
  startdato: undefined,
  beskrivelse: '',
  bekreftet: false,
};

// Feltene i den rekkefølgen de står i skjemaet. Feiloppsummeringen følger samme rekkefølge,
// så brukeren leser feilene ovenfra og ned, slik skjemaet er bygget opp.
const fieldOrder: Field[] = ['navn', 'epost', 'telefon', 'kommune', 'tiltak', 'startdato', 'beskrivelse', 'bekreftet'];

// id-ene må være unike på siden: ErrorSummary.Link peker på dem med href="#id".
const fieldId = (field: Field) => `soknad-${field}`;

const kommuner = [
  { value: '4601', label: 'Bergen' },
  { value: '1508', label: 'Ålesund' },
  { value: '5501', label: 'Tromsø' },
  { value: '1804', label: 'Bodø' },
];

const tiltakstyper = [
  { value: 'kai', label: 'Kai eller brygge' },
  { value: 'mudring', label: 'Mudring' },
  { value: 'kabel', label: 'Kabel eller rør i sjø' },
];

const startOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

// Validering er en ren funksjon av verdiene. Da kan den kjøres både ved innsending og
// fortløpende etterpå, og den kan testes uten å rendre noe.
// Feilmeldingene sier hva brukeren må gjøre, ikke bare at noe er feil.
export const validate = (values: Values): Errors => {
  const errors: Errors = {};
  if (!values.navn.trim()) errors.navn = 'Skriv inn navnet ditt';
  if (!values.epost.trim()) errors.epost = 'Skriv inn e-postadressen din';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.epost)) errors.epost = 'Skriv inn en gyldig e-postadresse';
  if (values.telefon && !/^\d{8}$/.test(values.telefon.replace(/\s/g, '')))
    errors.telefon = 'Telefonnummeret må ha 8 siffer';
  if (!values.kommune) errors.kommune = 'Velg kommunen tiltaket gjelder';
  if (!values.tiltak) errors.tiltak = 'Velg type tiltak';
  if (!values.startdato) errors.startdato = 'Velg når arbeidet skal starte';
  else if (values.startdato < startOfToday()) errors.startdato = 'Startdatoen kan ikke være tilbake i tid';
  if (values.beskrivelse.trim().length < 20) errors.beskrivelse = 'Beskriv tiltaket med minst 20 tegn';
  if (!values.bekreftet) errors.bekreftet = 'Du må bekrefte at opplysningene er riktige';
  return errors;
};

export const Soknadsskjema = () => {
  const [values, setValues] = useState<Values>(initialValues);
  // Feil vises først etter første innsendingsforsøk. Å få «Skriv inn navnet ditt» før man har
  // rukket å begynne er støy. Etter første forsøk valideres det fortløpende, så feilen
  // forsvinner i det øyeblikket brukeren har rettet den.
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<ComponentRef<typeof ErrorSummary>>(null);

  const errors = attempted ? validate(values) : {};
  const errorFields = fieldOrder.filter((field) => errors[field]);

  const set =
    <F extends Field>(field: F) =>
    (value: Values[F]) =>
      setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (Object.keys(validate(values)).length > 0) {
      // Flytt fokus til oppsummeringen, så skjermleserbrukere får vite at innsendingen stoppet
      // og hvorfor. Vent én frame, for oppsummeringen rendres først etter setAttempted.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <Surface width="form" gap={6}>
        <Alert data-color="success" title="Søknaden er sendt" role="status">
          Du får svar på e-post til {values.epost}. Vanlig saksbehandlingstid er fire uker.
        </Alert>
      </Surface>
    );
  }

  return (
    // noValidate: vi viser våre egne feilmeldinger i stedet for nettleserens, så de ser like ut og
    // havner i feiloppsummeringen.
    <form onSubmit={handleSubmit} noValidate>
      <Surface width="form" gap={8}>
        <Surface gap={2}>
          <Heading level={1} data-size="lg">
            Søknad om tiltak i sjø
          </Heading>
          <Paragraph>Felt merket med «valgfritt» kan du la stå tomt. Alle andre felt må fylles ut.</Paragraph>
        </Surface>

        {errorFields.length > 0 && (
          <ErrorSummary ref={summaryRef}>
            <ErrorSummary.Heading>For å sende søknaden må du rette opp følgende:</ErrorSummary.Heading>
            <ErrorSummary.List>
              {errorFields.map((field) => (
                <ErrorSummary.Item key={field}>
                  <ErrorSummary.Link href={`#${fieldId(field)}`}>{errors[field]}</ErrorSummary.Link>
                </ErrorSummary.Item>
              ))}
            </ErrorSummary.List>
          </ErrorSummary>
        )}

        {/* Del lange skjemaer i grupper med en overskrift. Det gir brukeren oversikt og skjermlesere noe å navigere etter. */}
        <Surface gap={5}>
          <Heading level={2} data-size="sm">
            Om deg
          </Heading>
          <TextInput
            id={fieldId('navn')}
            label="Fullt navn"
            autoComplete="name"
            value={values.navn}
            onChange={set('navn')}
            error={errors.navn}
          />
          <TextInput
            id={fieldId('epost')}
            label="E-post"
            type="email"
            autoComplete="email"
            value={values.epost}
            onChange={set('epost')}
            error={errors.epost}
          />
          {/* Merk det valgfrie feltet, ikke de påkrevde: de fleste feltene er påkrevd. */}
          <TextInput
            id={fieldId('telefon')}
            label="Telefon"
            optional
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            width="sm"
            value={values.telefon}
            onChange={set('telefon')}
            error={errors.telefon}
          />
        </Surface>

        <Surface gap={5}>
          <Heading level={2} data-size="sm">
            Om tiltaket
          </Heading>
          <Select
            id={fieldId('kommune')}
            label="Kommune"
            placeholder="Velg kommune"
            options={kommuner}
            value={values.kommune}
            onChange={set('kommune')}
            error={errors.kommune}
          />
          <BorderedRadioGroup
            id={fieldId('tiltak')}
            label="Type tiltak"
            options={tiltakstyper}
            value={values.tiltak}
            onChange={(value) => set('tiltak')(String(value))}
            error={errors.tiltak}
          />
          <Datepicker
            id={fieldId('startdato')}
            label="Planlagt oppstart"
            minDate={startOfToday()}
            value={values.startdato}
            onChange={set('startdato')}
            error={errors.startdato}
          />
          <TextArea
            id={fieldId('beskrivelse')}
            label="Beskrivelse av tiltaket"
            description="Hva skal gjøres, og hvor lenge varer arbeidet?"
            maxLength={1000}
            value={values.beskrivelse}
            onChange={set('beskrivelse')}
            error={errors.beskrivelse}
          />
        </Surface>

        <Checkbox
          id={fieldId('bekreftet')}
          label="Jeg bekrefter at opplysningene er riktige"
          checked={values.bekreftet}
          onChange={(event) => set('bekreftet')(event.target.checked)}
          error={errors.bekreftet}
        />

        {/* Knappen er aldri deaktivert. En deaktivert knapp sier ikke hva som mangler; en innsending som feiler gjør det. */}
        <Surface horizontal gap={4}>
          <Button type="submit" variant="filled">
            Send søknad
          </Button>
          <Button type="button" variant="ghost" onClick={() => setValues(initialValues)}>
            Tøm skjema
          </Button>
        </Surface>
      </Surface>
    </form>
  );
};
