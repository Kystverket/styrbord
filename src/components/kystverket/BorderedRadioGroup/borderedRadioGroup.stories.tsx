import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import BorderedRadioGroup, { BorderedRadioGroupProps, RadioGroupValueType } from './borderedRadioGroup';
import { Box } from '~/main';
import { useState } from 'react';

const meta = {
  title: 'Form/BorderedRadioGroup',
  component: BorderedRadioGroup,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BorderedRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Omit<BorderedRadioGroupProps, 'onChange'> = {
  label: 'Title for group',
  description: 'Description for group',
  options: [
    {
      label: 'Option A',
      value: 'option-a',
    },
    {
      label: 'Option B',
      value: 'option-b',
    },
    {
      label: 'Option C',
      value: 'option-c',
    },
  ],
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const WithLongOptionText: Story = {
  args: {
    ...defaultProps,
    options: [
      {
        label: 'Option A Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
        value: 'option-a',
      },
      {
        label: 'Option B Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
        value: 'option-b',
      },
      {
        label: 'Option C Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
        value: 'option-c',
      },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const WithReactElementDescription: Story = {
  args: {
    ...defaultProps,
    description: (
      <>
        Description containing a <a href="#">link</a>
      </>
    ),
  },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: 'This is an error message',
  },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const Optional: Story = {
  args: { ...defaultProps, optional: true },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const OptionalText: Story = {
  args: { ...defaultProps, optional: 'Spesialtilpasset Verdi' },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const Required: Story = {
  args: { ...defaultProps, required: true },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const ReadOnly: Story = {
  args: { ...defaultProps, readonly: true },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};

export const Disabled: Story = {
  args: { ...defaultProps, disabled: true },
  render: (args) => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => setValue(v)} />
      </Box>
    );
  },
};
