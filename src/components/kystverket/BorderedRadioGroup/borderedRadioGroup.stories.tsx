import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import BorderedRadioGroup, { BorderedRadioGroupProps, RadioGroupValueType } from './borderedRadioGroup';
import { Box } from '~/main';

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
    onChange: (value: RadioGroupValueType) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
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
    onChange: (value: RadioGroupValueType) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
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
    onChange: (value: RadioGroupValueType) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
      </Box>
    );
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    onChange: (value: RadioGroupValueType) => console.log(value),
    error: 'This is an error message',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedRadioGroup {...args} value={value} onChange={(v) => updateArgs({ value: v })} />
      </Box>
    );
  },
};
