import { Details, Label, useDebounceCallback } from '@digdir/designsystemet-react';
import type { Meta, StoryFn } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';
import {
  Button,
  Divider,
  Field,
  Paragraph,
  Spinner,
  EXPERIMENTAL_Suggestion as Suggestion,
  type SuggestionProps,
} from '~/main';

export default {
  title: 'Form/Suggestion',
  component: Suggestion,
  tags: ['autodocs', 'ds'],
  /* add height by default */
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    a11y: {
      // TODO: this rule should be enabled after https://github.com/dequelabs/axe-core/issues/4672 have propagated to @storybook/addon-a11y.
      config: {
        rules: [
          {
            id: 'aria-allowed-role',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

const DATA_PLACES = ['Sogndal', 'Oslo', 'Brønnøysund', 'Stavanger', 'Trondheim', 'Bergen', 'Lillestrøm'];

const DATA_PEOPLE = [
  { label: 'Lars', value: '#004' },
  { label: 'James', value: '#007' },
  { label: 'Nina', value: '#113' },
  { label: 'Tove', value: '#110' },
];

export const Preview: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List id="123">
          <Suggestion.Empty>Tomt</Suggestion.Empty>
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

export const ControlledSingleArray: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState<string[]>(['Oslo']);

  return (
    <>
      <Field>
        <Label>Velg destinasjon</Label>
        <Suggestion
          {...args}
          selected={selected}
          onSelectedChange={(items) => setSelected(items.map((item) => item.value))}
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
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
          setSelected(['Sogndal']);
        }}
      >
        Sett reisemål til Sogndal
      </Button>
    </>
  );
};

export const ControlledSingle: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <>
      <Field>
        <Label>Velg destinasjon</Label>
        <Suggestion {...args} selected={selected} onSelectedChange={(items) => setSelected(items.at(0)?.value ?? '')}>
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
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

      <Paragraph style={{ margin: 'var(--ds-size-2) 0' }}>Valgte reisemål: {selected}</Paragraph>

      <Button
        onClick={() => {
          setSelected('Sogndal');
        }}
      >
        Sett reisemål til Sogndal
      </Button>
    </>
  );
};

export const ControlledMultiple: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState<string[]>(['Oslo']);

  return (
    <>
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          {...args}
          multiple
          selected={selected}
          onSelectedChange={(items) => setSelected(items.map((item) => item.value))}
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
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

export const ControlledIndependentLabelValue: StoryFn<typeof Suggestion> = (args) => {
  const [items, setItems] = useState<typeof DATA_PEOPLE>(DATA_PEOPLE.slice(0, 1));

  return (
    <>
      <Field>
        <Label>Velg person</Label>
        <Suggestion
          {...args}
          selected={items.slice(0, 1)}
          onSelectedChange={(selectedItems) => setItems(selectedItems)}
          filter={false}
        >
          <Suggestion.Input />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
            {DATA_PEOPLE.map(({ label, value }) => (
              <Suggestion.Option key={value} label={label} value={value}>
                {label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

      <div style={{ margin: 'var(--ds-size-2) 0' }}>
        Valgt person:
        <pre
          style={{
            fontSize: 14,
            height: 100,
            whiteSpace: 'pre-wrap',
            width: 400,
          }}
        >
          {JSON.stringify(items)}
        </pre>
      </div>

      <Button
        onClick={() => {
          setItems(DATA_PEOPLE.slice(2, 3));
        }}
      >
        Sett Nina
      </Button>
    </>
  );
};

export const CustomFilterAlt1: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion {...args} filter={({ index, input }) => !input.value || index === Number(input.value) - 1}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
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

CustomFilterAlt1.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const CustomFilterAlt2: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState('');

  return (
    <Field>
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion {...args} filter={false}>
        <Suggestion.Input onInput={({ currentTarget }) => setSelected(currentTarget.value)} />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.filter((_, index) => !selected || index === Number(selected) - 1).map((label) => (
            <Suggestion.Option key={label}>{label}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const CustomMatching: StoryFn<typeof Suggestion> = (args) => {
  const handleBeforeMatch: SuggestionProps['onBeforeMatch'] = (event) => {
    event.preventDefault(); // Prevent default matching
    const { list, control } = event.currentTarget;
    const value = control?.value.toLowerCase() || '';

    for (const option of list?.options || []) option.selected = option.value.toLowerCase().startsWith(value); // Setting selected indicates a match
  };

  return (
    <Field>
      <Label>Matcher fra første bokstav</Label>
      <Suggestion {...args} onBeforeMatch={handleBeforeMatch}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((label) => (
            <Suggestion.Option key={label}>{label}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

type Item = { label: string; value: string };
export const AlwaysShowAll: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState<Array<string | Partial<Item>> | string>('Sogndal');

  return (
    <Field>
      <Label>Viser alle options også når valgt</Label>
      <Suggestion {...args} selected={selected} filter={false} onSelectedChange={(values) => setSelected(values)}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const FetchExternal: StoryFn<typeof Suggestion> = (args) => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<string[] | null>(null);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const v = encodeURIComponent(event.target.value.trim());
    setValue(event.target.value);
    setOptions(null); // Clear options

    if (!v) return;

    debounced(v);
  };

  const apiCall = async (v: string) => {
    const api = `https://restcountries.com/v2/name/${v}?fields=name`;
    const countries = await (await fetch(api)).json();
    setOptions(Array.isArray(countries) ? countries.map(({ name }) => name) : []);
  };

  const debounced = useDebounceCallback(apiCall, 500);

  return (
    <Field lang="en">
      <Label>Search for countries (in english)</Label>
      <Suggestion {...args} filter={false}>
        <Suggestion.Input onInput={handleInput} />
        <Suggestion.Clear />
        <Suggestion.List singular="%d country" plural="%d countries">
          {value ? (
            <Suggestion.Empty>
              {options ? (
                'Ingen treff'
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Spinner aria-hidden="true" data-size="sm" /> Laster...
                </span>
              )}
            </Suggestion.Empty>
          ) : null}
          {options?.map((option) => <Suggestion.Option key={option}>{option}</Suggestion.Option>)}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

FetchExternal.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const DefaultValue: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args} defaultSelected={['Sogndal']}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const Multiple: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args}>
        <Suggestion.Input />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

Multiple.args = {
  multiple: true,
};

export const InDetails: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Details>
      <Details.Summary>Åpne details som har overflow: clip;</Details.Summary>
      <Details.Content>
        <Field>
          <Label>Velg en destinasjon</Label>
          <Suggestion {...args} autoFocus>
            <Suggestion.Input />
            <Suggestion.Clear />
            <Suggestion.List>
              <Suggestion.Empty>Tomt</Suggestion.Empty>
              {DATA_PLACES.map((place) => (
                <Suggestion.Option key={place}>{place}</Suggestion.Option>
              ))}
            </Suggestion.List>
          </Suggestion>
        </Field>
      </Details.Content>
    </Details>
  );
};
