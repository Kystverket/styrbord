import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import style from './alert.module.css';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import BorderedRadioGroup, { BorderedRadioGroupProps } from './borderedRadioGroup';
import { Box, Icon } from '~/main';

const meta = {
  title: 'Components/BorderedRadioGroup',
  component: BorderedRadioGroup,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BorderedRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Omit<BorderedRadioGroupProps, 'onChange'> = {
  name: 'example-radio-group',
  title: 'Title for group',
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
    onChange: (value: string) => console.log(value),
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

export const WithReactElementTitle: Story = {
  args: {
    ...defaultProps,
    title: (
      <>
        Title with icon <Icon material="check" />
      </>
    ),
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
    onChange: (value: string) => console.log(value),
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
