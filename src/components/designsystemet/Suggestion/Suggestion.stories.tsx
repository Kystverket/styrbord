import type { Meta, StoryObj } from '@storybook/react';
import { Suggestion, SuggestionProps, SuggestionValue } from './Suggestion';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { v4 } from 'uuid';

const meta = {
  title: 'Komponenter/Suggestion',
  component: Suggestion,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds'],
  argTypes: {},
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SuggestionProps = {
  label: 'Hmm',
  options: [{ value: 'Donald Duck' }, { value: 'Skrue McDuck' }, { value: 'Gulbrand Gråstein' }, { value: 'Rikerud' }],
  language: 'nb-NO',
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

export const WithLabels: Story = {
  args: {
    ...defaultProps,
    options: defaultProps.options?.map((option): SuggestionValue => {
      return {
        label: option.value.toString(),
        value: v4(),
      };
    }),
  },
};

export const WaitingForOptions: Story = {
  args: {
    ...defaultProps,
    filter: false,
    options: null,
  },
};
