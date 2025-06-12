import { Box, TextInput } from '~/main';
import { AdresseData } from '../skadeinnmelding.types';
import { useContext, useState } from 'react';
import { FormContext } from '../form.context';
import { FormItems } from '~/components/kystverket/Form/FormItems/formItems';

export interface AdresseFormPartProps {
  validationErrors?: Record<string, string | undefined>;
  data: AdresseData;
  onChange?: (data: AdresseData) => void;
}

export function AdresseFormPart({ data, validationErrors, onChange }: AdresseFormPartProps) {
  const formContext = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  if (!formContext?.lookupPoststed) {
    throw new Error('FormContext submit function is not provided.');
  }

  const onPostnummerChanged = async (postnummer: string) => {
    const cleanedPostnummer = postnummer.replace(/\D/g, '');

    onChange?.({ ...data, postnummer });

    if (cleanedPostnummer.length !== 4) {
      return;
    }

    try {
      setLoading(true);
      const poststedLookupValue = (await formContext.lookupPoststed?.(postnummer)) || '';
      onChange?.({
        ...data,
        postnummer,
        poststed: poststedLookupValue,
      });
    } catch (error) {
      console.error('Error fetching poststed:', error);
      onChange?.({
        ...data,
        postnummer,
        poststed: '',
      });
    }
    setLoading(false);
  };

  return (
    <FormItems>
      <TextInput
        label="Vegadresse"
        error={validationErrors?.vegadresse}
        value={data.vegadresse}
        onChange={(text) => onChange?.({ ...data, vegadresse: text })}
      />
      <Box horizontal="screen-sm" gap={12} align="start">
        <Box grow={1}>
          <TextInput
            label="Postnummer"
            error={validationErrors?.postnummer}
            inputMode="numeric"
            value={data.postnummer}
            onChange={(text) => onPostnummerChanged(text)}
          />
        </Box>
        <Box grow={4}>
          <TextInput label="Poststed" readOnly value={loading ? '...' : data.poststed} />
        </Box>
      </Box>
    </FormItems>
  );
}
