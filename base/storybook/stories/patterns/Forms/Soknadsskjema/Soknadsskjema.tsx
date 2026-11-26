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

// Mønsteret følger Designsystemets retningslinjer for skjemaer:
// https://designsystemet.no/no/patterns/errors
// https://designsystemet.no/no/patterns/required-and-optional-fields
// https://designsystemet.no/no/patterns/button-placement-and-order

type Values = {
  navn: string;
  epost: string;
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
  kommune: '',
  tiltak: '',
  startdato: undefined,
  beskrivelse: '',
  bekreftet: false,
};

// Feltene i den rekkefølgen de står i skjemaet. Feiloppsummeringen følger samme rekkefølge.
const fieldOrder: Field[] = ['navn', 'epost', 'kommune', 'tiltak', 'startdato', 'beskrivelse', 'bekreftet'];

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

const isEmpty = (value: Values[Field]) => value === '' || value === undefined || value === false;

// Validering er en ren funksjon av verdiene, så den kan kjøres ved blur, ved innsending og når
// brukeren retter en feil, og den kan testes uten å rendre noe.
// Feilmeldingen sier hva brukeren skal gjøre, og nøkkelordet fra ledeteksten kommer tidlig.
export const validate = (values: Values): Errors => {
  const errors: Errors = {};
  if (!values.navn.trim()) errors.navn = 'Skriv inn navnet ditt';
  if (!values.epost.trim()) errors.epost = 'Skriv inn e-postadressen din';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.epost.trim()))
    errors.epost = 'E-postadressen må ha med @ og et domene, for eksempel navn@firma.no';
  if (!values.kommune) errors.kommune = 'Velg kommunen tiltaket skal gjøres i';
  if (!values.tiltak) errors.tiltak = 'Velg hvilken type tiltak du søker om';
  if (!values.startdato) errors.startdato = 'Velg når arbeidet skal starte';
  else if (values.startdato < startOfToday()) errors.startdato = 'Startdatoen kan ikke være tilbake i tid';
  if (values.beskrivelse.trim().length < 20) errors.beskrivelse = 'Beskrivelsen må ha minst 20 tegn';
  if (!values.bekreftet) errors.bekreftet = 'Bekreft at opplysningene er riktige før du sender';
  return errors;
};

const withError = (errors: Errors, field: Field, message: string | undefined): Errors => {
  const next = { ...errors };
  if (message) next[field] = message;
  else delete next[field];
  return next;
};

export const Soknadsskjema = () => {
  const [values, setValues] = useState<Values>(initialValues);
  // Feilene som vises. De legges til når brukeren forlater et felt eller sender inn, og fjernes
  // straks de er rettet. De legges aldri til mens brukeren skriver.
  const [shown, setShown] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<ComponentRef<typeof ErrorSummary>>(null);

  const change =
    <F extends Field>(field: F) =>
    (value: Values[F]) => {
      const next = { ...values, [field]: value };
      setValues(next);
      // Står det en feil på feltet, oppdateres den, så den forsvinner når feltet er rettet.
      if (shown[field]) setShown((prev) => withError(prev, field, validate(next)[field]));
    };

  const blur = (field: Field) => () => {
    // «Må fylles ut»-feil vises ikke før brukeren har prøvd å sende inn. Å tabbe seg gjennom et
    // tomt felt er ikke en feil.
    if (!attempted && isEmpty(values[field])) return;
    setShown((prev) => withError(prev, field, validate(values)[field]));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const errors = validate(values);
    setAttempted(true);
    setShown(errors);
    if (Object.keys(errors).length > 0) {
      // Flytt fokus til oppsummeringen, så alle, også skjermleserbrukere, får vite at innsendingen
      // stoppet og hvorfor. Vent én frame, for oppsummeringen rendres først etter setShown.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSent(true);
  };

  const summaryFields = attempted ? fieldOrder.filter((field) => shown[field]) : [];

  return (
    <>
      {/* Statusområdet finnes fra start, og kvitteringen settes inn i det. Rendres det først sammen med
          kvitteringen, er det ikke sikkert skjermleseren leser den opp. */}
      <div role="status">
        {sent && (
          <Surface width="form">
            <Alert data-color="success" title="Søknaden er sendt">
              Du får svar på e-post til {values.epost}. Vanlig saksbehandlingstid er fire uker.
            </Alert>
          </Surface>
        )}
      </div>
      {/* noValidate: vi viser våre egne feilmeldinger i stedet for nettleserens, så de ser like ut og
          havner i feiloppsummeringen. */}
      {!sent && (
        <form onSubmit={handleSubmit} noValidate>
          <Surface width="form" gap={8}>
            <Surface gap={2}>
              <Heading level={1} data-size="lg">
                Søknad om tiltak i sjø
              </Heading>
              {/* Alle feltene er påkrevd, så det står én gang her, og feltene merkes ikke hver for seg.
              Hadde noen vært valgfrie, skulle hvert felt vært merket med «Må fylles ut» eller «Valgfritt». */}
              <Paragraph>Alle feltene må fylles ut.</Paragraph>
            </Surface>

            {/* Del lange skjemaer i grupper med en overskrift. Det gir oversikt og noe å navigere etter. */}
            <Surface gap={5}>
              <Heading level={2} data-size="sm">
                Om deg
              </Heading>
              <TextInput
                id={fieldId('navn')}
                label="Fullt navn"
                autoComplete="name"
                value={values.navn}
                onChange={change('navn')}
                onBlur={blur('navn')}
                error={shown.navn}
              />
              <TextInput
                id={fieldId('epost')}
                label="E-post"
                description="Vi sender svaret på søknaden hit."
                type="email"
                autoComplete="email"
                value={values.epost}
                onChange={change('epost')}
                onBlur={blur('epost')}
                error={shown.epost}
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
                onChange={change('kommune')}
                onBlur={blur('kommune')}
                error={shown.kommune}
              />
              <BorderedRadioGroup
                id={fieldId('tiltak')}
                label="Type tiltak"
                options={tiltakstyper}
                value={values.tiltak}
                onChange={(value) => change('tiltak')(String(value))}
                onBlur={blur('tiltak')}
                error={shown.tiltak}
              />
              {/* En dato i nær framtid: nettleserens egen datovelger (Datepicker er type="date"). */}
              <Datepicker
                id={fieldId('startdato')}
                label="Planlagt oppstart"
                minDate={startOfToday()}
                value={values.startdato}
                onChange={change('startdato')}
                onBlur={blur('startdato')}
                error={shown.startdato}
              />
              {/* maxLength gir en tegnteller, så brukeren ser grensen før den er nådd. */}
              <TextArea
                id={fieldId('beskrivelse')}
                label="Beskrivelse av tiltaket"
                description="Hva skal gjøres, og hvor lenge varer arbeidet?"
                maxLength={1000}
                value={values.beskrivelse}
                onChange={change('beskrivelse')}
                onBlur={blur('beskrivelse')}
                error={shown.beskrivelse}
              />
            </Surface>

            <Checkbox
              id={fieldId('bekreftet')}
              label="Jeg bekrefter at opplysningene er riktige"
              checked={values.bekreftet}
              onChange={(event) => change('bekreftet')(event.target.checked)}
              error={shown.bekreftet}
            />

            {/* Oppsummeringen står rett over send-knappen, der brukeren er når innsendingen stopper.
            Står skjemaet over flere sider som lastes på nytt, flytt den til toppen av siden. */}
            {summaryFields.length > 0 && (
              <ErrorSummary ref={summaryRef}>
                <ErrorSummary.Heading>For å sende søknaden må du rette opp dette:</ErrorSummary.Heading>
                <ErrorSummary.List>
                  {summaryFields.map((field) => (
                    <ErrorSummary.Item key={field}>
                      <ErrorSummary.Link href={`#${fieldId(field)}`}>{shown[field]}</ErrorSummary.Link>
                    </ErrorSummary.Item>
                  ))}
                </ErrorSummary.List>
              </ErrorSummary>
            )}

            {/* Én hovedhandling, til venstre. Knappen er aldri deaktivert: en deaktivert knapp sier ikke
            hva som mangler, det gjør feiloppsummeringen. */}
            <Surface horizontal>
              <Button type="submit" variant="filled">
                Send søknad
              </Button>
            </Surface>
          </Surface>
        </form>
      )}
    </>
  );
};
