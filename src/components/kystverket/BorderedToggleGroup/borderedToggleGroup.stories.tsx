import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import BorderedToggleGroup, { BorderedToggleGroupProps, ToggleGroupValues, ToggleValue } from './borderedToggleGroup';
import { Box, Icon } from '~/main';

const meta = {
  title: 'Components/BorderedToggleGroup',
  component: BorderedToggleGroup,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BorderedToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Omit<BorderedToggleGroupProps, 'onChange'> = {
  label: 'Title for group',
  description: 'Description for group',
  values: [
    ['Option A', false],
    ['Option B', true],
    ['Option C', false],
    ['Option D', false],
    ['Option E', true],
  ],
};

export const Default: Story = {
  args: {
    ...defaultProps,
    onChanges: (value: ToggleGroupValues) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedToggleGroup {...args} values={value} onChange={(v) => updateArgs({ value: v })} />
      </Box>
    );
  },
};

export const WithLongOptionText: Story = {
  args: {
    ...defaultProps,
    values: [
      ['Option A er en lang og rar tekst som burde vært kortere slik at brukeren ikke blir forvirret', false],
      ['Option B er også tilsvarende lang og verbos for å si det på godt norsk', true],
      ['Option C er kortere', false],
      ['Option D er veldig lang også, og nå burde noen fatte seg i korthet', false],
    ],
    onChanges: (value: ToggleGroupValues) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedToggleGroup {...args} values={value} onChange={(v) => updateArgs({ value: v })} />
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
    onChanges: (value: ToggleGroupValues) => console.log(value),
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedToggleGroup {...args} values={value} onChange={(v) => updateArgs({ value: v })} />
      </Box>
    );
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    onChanges: (value: ToggleGroupValues) => console.log(value),
    error: 'This is an error message',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <Box width="full">
        <BorderedToggleGroup {...args} values={value} onChange={(v) => updateArgs({ value: v })} />
      </Box>
    );
  },
};
