import type { Meta, StoryFn } from '@storybook/react';

import { Textfield, Textarea, Fieldset } from '@digdir/designsystemet-react';

type Story = StoryFn<typeof Fieldset>;

export default {
  title: 'Designsystemet/Fieldset',
  component: Fieldset,
} as Meta;

export const Preview: Story = (args) => (
  <form>
    <Fieldset {...args}>
      <Textfield label='Kort beskrivelse'></Textfield>
      <Textarea label='Lang beskrivelse'></Textarea>
    </Fieldset>
  </form>
);

Preview.args = {
  description: 'Gi en kort beskrivelse i begge feltene',
  disabled: false,
  error: '',
  legend: 'Skriv inn dine svar',
  readOnly: false,
  hideLegend: false,
  size: 'md',
};
