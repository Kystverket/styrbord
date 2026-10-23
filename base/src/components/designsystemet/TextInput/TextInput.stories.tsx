import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput, TextInputProps } from './TextInput';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Surface } from '~/main';

const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textfield/overview)',
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TextInputProps = {
  onBlur: () => console.log('onBlur'),
  onChange: (value: string) => console.log(`onChange value: ${value}`),
  value: '',
  label: 'This is a label',
  description: 'This is a description',
};

export const Default: Story = {
  args: defaultArgs,
};

export const Required: Story = {
  args: {
    ...defaultArgs,
    required: true,
  },
};

export const Optional: Story = {
  args: {
    ...defaultArgs,
    optional: true,
  },
};

export const OptionalText: Story = {
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi',
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'placeholder',
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    error: 'error',
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    readOnly: true,
  },
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
  },
};

/**
 * Optional, required and plain side by side, top-aligned, so any height difference in the label row shows.
 *
 * For obligatoriske felter som ønskes markert med tag, bruker man “warning”-variant.
 */
export const LabelSizes: Story = {
  render: (args) => (
    <Surface horizontal gap={4} align="start">
      <TextInput {...args} label="Optional" optional />
      <TextInput {...args} label="Required" required />
      <TextInput {...args} label="Required with text" required="Påkrevd" />
      <TextInput {...args} label="Plain" />
      <TextInput {...args} label="Read only" readOnly />
      <TextInput {...args} label="Disabled" disabled />
    </Surface>
  ),
  args: {
    ...defaultArgs,
    description: undefined,
  },
};
