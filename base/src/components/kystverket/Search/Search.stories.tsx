import { Search, Divider, Paragraph, Button, Field } from '~/main';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';
import { Label } from '@digdir/designsystemet-react';

export default {
  title: 'Components/Form/Search',
  component: Search,
  tags: ['autodocs', 'kyv'],
  parameters: {
    docs: {
      description: {
        component:
          'Søkefelt med tømmeknapp og søkeknapp. Designsystemet fjerner sin `Search` i neste major-versjon ([les mer](https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do)), så Styrbord har sin egen med samme API. `Search.Clear` tømmer bare søkefeltet, ikke resten av skjemaet, og fungerer også når feltet er kontrollert.',
      },
    },
  },
} as Meta;

export const Preview: StoryFn<typeof Search> = (args) => (
  <Search {...args}>
    <Search.Input aria-label="Søk" />
    <Search.Clear />
    <Search.Button />
  </Search>
);

export const Controlled: StoryFn<typeof Search> = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Search>
        <Search.Input aria-label="Søk" value={value} onChange={(e) => setValue(e.target.value)} />
        <Search.Clear />
        <Search.Button />
      </Search>

      <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

      <Paragraph style={{ margin: 'var(--ds-size-2) 0' }}>Du har skrevet inn: {value}</Paragraph>
      <Button onClick={() => setValue('Pizza')}>Jeg vil ha Pizza</Button>
    </>
  );
};

export const Variants: StoryFn<typeof Search> = () => (
  <>
    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
    </Search>

    <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
      <Search.Button />
    </Search>

    <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

    <Search>
      <Search.Input aria-label="Søk" />
      <Search.Clear />
      <Search.Button variant="outline" />
    </Search>
  </>
);

export const WithLabel: StoryFn<typeof Search> = () => (
  <Field>
    <Label>Søk etter katter</Label>
    <Search>
      <Search.Input name="cat-search" />
      <Search.Clear />
      <Search.Button />
    </Search>
  </Field>
);

export const Form: StoryFn<typeof Search> = () => {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          // Prevent navigation from Storybook
          e.preventDefault();
          setSubmittedValue(value);
        }}
      >
        <Search>
          <Search.Input aria-label="Søk" value={value} onChange={(e) => setValue(e.target.value)} />
          <Search.Clear />
          <Search.Button />
        </Search>
      </form>

      <Paragraph data-size="md" style={{ marginTop: 'var(--ds-size-2)' }}>
        Submitted value: {submittedValue}
      </Paragraph>
    </>
  );
};
