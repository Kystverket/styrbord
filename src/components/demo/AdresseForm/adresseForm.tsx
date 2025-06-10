import { Box, TextInput } from '~/main';
import { AdresseData } from '../skadeinnmelding.types';
import { useContext } from 'react';
import { FormContext } from '../form.context';

export interface AdresseFormProps {
  data: AdresseData;
  onChange?: (data: AdresseData) => void;
}

export function AdresseForm({ data, onChange }: AdresseFormProps) {
  const formContext = useContext(FormContext);

  const onPostnummerChanged = async (postnummer: string) => {
    const cleanedPostnummer = postnummer.replace(/\D/g, '');

    onChange?.({ ...data, postnummer });

    if (cleanedPostnummer.length !== 4) {
      return;
    }

    try {
      const poststedLookupValue = await formContext.lookupPoststed(postnummer);
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
  };

  return (
    <>
      <TextInput
        label="Vegadresse"
        value={data.vegadresse}
        onChange={(text) => onChange?.({ ...data, vegadresse: text })}
      />
      <Box horizontal="screen-sm" gap={12} align="start">
        <Box grow={1}>
          <TextInput
            label="Postnummer"
            inputMode="numeric"
            value={data.postnummer}
            onChange={(text) => onPostnummerChanged(text)}
          />
        </Box>
        <Box grow={4}>
          <TextInput label="Poststed" readOnly value={data.poststed} />
        </Box>
      </Box>
    </>
  );
}
