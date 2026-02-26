import { Switch, Fieldset } from '~/main';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Switch>;

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs', 'ds'],
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/switch/overview)',
      },
    },
  },
} as Meta;

export const Preview: Story = {
  args: {
    label: 'Switch',
    description: '',
    disabled: false,
    readOnly: false,
    position: 'start',
  },
};

export const Checked: Story = {
  ...Preview,
  args: { ...Preview.args, checked: true },
};

export const Group: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ 'aria-label': a, 'aria-labelledby': b, ...args }) => (
    <Fieldset>
      <Fieldset.Legend>Skru av/på en eller flere innstillinger</Fieldset.Legend>
      <Switch label="Innstilling 1" description="Beskrivelse av innstilling" value="alt1" checked {...args} />
      <Switch label="Innstilling 2" value="alt2" {...args} />
      <Switch label="Innstilling 3" value="alt3" {...args} />
      <Switch
        label="Innstilling 4"
        value="alt4"
        description="Du mangler rettigheter for denne instillingen"
        readOnly
        {...args}
      />
    </Fieldset>
  ),
};

export const GroupEnd: Story = {
  ...Group,
  args: {
    position: 'end',
  },
};
