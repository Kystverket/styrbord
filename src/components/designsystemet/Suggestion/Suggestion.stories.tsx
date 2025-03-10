import type { Meta, StoryObj } from '@storybook/react';
import { Suggestion, SuggestionProps, SuggestionValue } from './Suggestion';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Designsystemet/Suggestion',
  component: Suggestion,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SuggestionProps = {
  label: 'Hmm',
  options: [{ value: 'Donald Duck' }, { value: 'Skrue McDuck' }, { value: 'Gulbrand Gråstein' }, { value: 'Rikerud' }],
};

export const Default: Story = {
  args: defaultProps,
};

export const WithValue: Story = {
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
  },
};
