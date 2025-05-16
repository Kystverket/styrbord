import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import BorderedToggleGroup, { BorderedToggleGroupProps } from './borderedToggleGroup';

const meta = {
  title: 'Komponenter/BorderedToggleGroup',
  component: BorderedToggleGroup,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof BorderedToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Omit<BorderedToggleGroupProps, 'onChange'> = {
  label: 'Title for group',
  description: 'Description for group',
  values: [
    { key: 'a', label: 'Option A', value: true },
    { key: 'b', label: 'Option B', value: false },
    { key: 'c', label: 'Option C', value: false },
    { key: 'd', label: 'Option D', value: true },
    { key: 'e', label: 'Option E', value: false },
    { key: 'f', label: 'Option F', value: false },
  ],
};

export const Default: Story = {
  args: defaultProps,
};

export const WithLongOptionText: Story = {
  args: {
    ...defaultProps,
    values: [
      {
        key: 'a',
        label: 'Option A er en lang og rar tekst som burde vært kortere slik at brukeren ikke blir forvirret',
        value: false,
      },
      {
        key: 'b',
        label: 'Option B er også tilsvarende lang og verbos for å si det på godt norsk',
        value: true,
      },
      {
        key: 'c',
        label: 'Option C er kortere',
        value: true,
      },
      {
        key: 'd',
        label: 'Option D er veldig lang også, og nå burde noen fatte seg i korthet',
        value: false,
      },
    ],
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
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: 'This is an error message',
  },
};
