import { Box, Button, Fieldset, Headline, Radio, TextArea, TextInput, useRadioGroup } from '~/main';
import { SkadeinnmeldingData } from '../skadeinnmelding.types';
import FormSection from '~/components/kystverket/Form/FormSection/formSection';
import classes from './skadeinnmeldingForm.module.css';
import { AdresseFormPart } from '../AdresseFormPart/adresseFormPart';

export interface SkadeinnmeldingFormProps {
  data: SkadeinnmeldingData;
  onChange?: (data: SkadeinnmeldingData) => void;
  onSubmit?: () => void;
}

export function SkadeinnmeldingForm({ data, onChange, onSubmit }: SkadeinnmeldingFormProps) {
  const { getRadioProps } = useRadioGroup({
    name: 'alvorlighetsgrad',
    value: data.skade.alvorlighetsgrad,
  });

  return (
    <div className={classes.formArea}>
      <FormSection>
        <Headline size="lg">Skade på fasade eller inngangsparti</Headline>
        <TextInput
          label="Hva er ødelagt?"
          description='Beskriv hva som er ødelagt, for eksempel "vindu" eller "dør".'
          value={data.skade.hva}
          onChange={(text) => onChange?.({ ...data, skade: { ...data?.skade, hva: text } })}
        />
        <Fieldset>
          <Fieldset.Legend>Alvorlighetsgrad</Fieldset.Legend>
          <Fieldset.Description>Angi din vurdering av alvorlighetsgraden på skaden.</Fieldset.Description>

          <Radio
            label="Objektet er farlig for liv og helse"
            {...getRadioProps('fareForPersoner')}
            onChange={() => onChange?.({ ...data, skade: { ...data?.skade, alvorlighetsgrad: 'fareForPersoner' } })}
          />
          <Radio
            label="Objektet fungerer ikke"
            {...getRadioProps('uteAvDrift')}
            onChange={() => onChange?.({ ...data, skade: { ...data?.skade, alvorlighetsgrad: 'uteAvDrift' } })}
          />
          <Radio
            label="Objektet fungerer, men har nedsatt funksjon"
            {...getRadioProps('nedsattFunksjon')}
            onChange={() => onChange?.({ ...data, skade: { ...data?.skade, alvorlighetsgrad: 'nedsattFunksjon' } })}
          />
          <Radio
            label="Objektet fungerer, men har kosmetisk skade"
            {...getRadioProps('kosmetisk')}
            onChange={() => onChange?.({ ...data, skade: { ...data?.skade, alvorlighetsgrad: 'kosmetisk' } })}
          />
        </Fieldset>
        <TextArea
          label="Utfyllende kommentar"
          description="Legg til en utfyllende kommentar om skaden."
          value={data.skade.kommentar}
          onChange={(text) => onChange?.({ ...data, skade: { ...data?.skade, kommentar: text } })}
        />
      </FormSection>
      <FormSection title="Hvor er skaden" description="Oppgi hvor skaden er oppstått.">
        <AdresseFormPart
          data={data.skade.hvor}
          onChange={(adresseData) => onChange?.({ ...data, skade: { ...data?.skade, hvor: adresseData } })}
        />
      </FormSection>
      <FormSection title="Kontaktinformasjon" description="Angi kontaktinformasjon hvis vi trenger å kontakte deg.">
        <TextInput
          label="Navn"
          value={data.kontakt.navn}
          onChange={(text) => onChange?.({ ...data, kontakt: { ...data?.kontakt, navn: text } })}
        />
        <TextInput
          label="Epost"
          type="email"
          inputMode="email"
          value={data.kontakt.epost}
          onChange={(text) => onChange?.({ ...data, kontakt: { ...data?.kontakt, epost: text } })}
        />
        <TextInput
          label="Telefon"
          type="tel"
          inputMode="tel"
          value={data.kontakt.telefon}
          onChange={(text) => onChange?.({ ...data, kontakt: { ...data?.kontakt, telefon: text } })}
        />
        <TextArea
          label="Kommentar"
          value={data.kontakt.kommentar}
          onChange={(text) => onChange?.({ ...data, kontakt: { ...data?.kontakt, kommentar: text } })}
        />
        <Box gap={12} horizontal align="center" justify="start">
          <Button variant="filled" onClick={onSubmit}>
            Send inn
          </Button>
        </Box>
      </FormSection>
    </div>
  );
}
