import { Suggestion, Button, Divider, Field, Label, Paragraph } from '~/main';
import { useState } from 'react';
import { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Suggestion',
  component: Suggestion,
  tags: ['autodocs', 'ds-override'],
  parameters: {
    docs: {
      description: {
        component:
          '**USE AT YOUR OWN RISK**\n\n[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/suggestion/overview)',
      },
    },
  },
} as Meta;

export const Preview = () => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place} label={place} value={place}>
              {place}
              <div>Kommune</div>
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const Multiple = () => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion multiple>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const Filter = () => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return (
    <Field>
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion filter={false}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {DATA_PLACES.map((label) => (
            <Suggestion.Option key={label} value={label.toLowerCase()}>
              {label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const ControlledMultiple = () => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  const [selected, setSelected] = useState<string[]>(['Oslo']);

  return (
    <>
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          multiple
          selected={selected}
          onSelectedChange={(items) => setSelected(items.map((item) => item.value))}
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place} label={place} value={place}>
                {place}
                <div>Kommune</div>
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

      <Paragraph style={{ margin: 'var(--ds-size-2) 0' }}>Valgte reisemål: {selected.join(', ')}</Paragraph>

      <Button
        onClick={() => {
          setSelected(['Sogndal', 'Stavanger']);
        }}
      >
        Sett reisemål til Sogndal, Stavanger
      </Button>
    </>
  );
};

export const Creatable = () => {
  const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
  return (
    <Field>
      <Label>Velg destinasjon</Label>
      <Suggestion creatable multiple>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff, trykk enter for å legge til</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};
