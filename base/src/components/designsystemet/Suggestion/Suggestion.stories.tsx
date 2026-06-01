import { Alert, Suggestion, Button, Divider, Paragraph } from '~/main';
import type { SuggestionItem, SuggestionMultipleProps } from '~/main';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const DevelopmentNotice = () => (
  <Alert
    title="Under utvikling"
    level="warning"
    text="Komponenten er fortsatt under utvikling og kan endre seg."
    style={{ marginBottom: 'var(--ds-size-6)' }}
  />
);

type MultipleSuggestionProps = SuggestionMultipleProps & {
  label: string;
  error?: string;
};

const meta = {
  title: 'Components/Suggestion',
  component: Suggestion,
  tags: ['autodocs', 'ds-override'],
  args: {
    label: '',
    error: '',
  },
  parameters: {
    docs: {
      description: {
        component:
          '**USE AT YOUR OWN RISK**\n\n[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/suggestion/overview)',
      },
    },
  },
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    label: 'Velg en destinasjon',
  },
  render: (args) => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];

    return (
      <>
        <DevelopmentNotice />
        <Suggestion {...args}>
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
      </>
    );
  },
};

export const Multiple: Story = {
  args: {
    label: 'Velg en destinasjon',
    multiple: true,
  },
  render: (args) => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];

    return (
      <>
        <DevelopmentNotice />
        <Suggestion {...args}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place}>{place}</Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </>
    );
  },
};

export const Filter: Story = {
  args: {
    label: 'Skriv inn et tall mellom 1-6',
    filter: false,
  },
  render: (args) => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];

    return (
      <>
        <DevelopmentNotice />
        <Suggestion {...args}>
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
      </>
    );
  },
};

export const ControlledMultiple: Story = {
  args: {
    label: 'Velg destinasjoner',
    multiple: true,
  },
  render: function Render(args) {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];
    const multipleArgs = args as MultipleSuggestionProps;
    const [selected, setSelected] = useState<string[]>(['Oslo']);

    return (
      <>
        <DevelopmentNotice />
        <Suggestion
          {...multipleArgs}
          selected={selected}
          onSelectedChange={(items: SuggestionItem[]) => setSelected(items.map((item) => item.value))}
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
  },
};

export const Creatable: Story = {
  args: {
    label: 'Velg destinasjon',
    creatable: true,
    multiple: true,
  },
  render: (args) => {
    const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];

    return (
      <>
        <DevelopmentNotice />
        <Suggestion {...args}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Ingen treff, trykk enter for å legge til</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place}>{place}</Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </>
    );
  },
};
