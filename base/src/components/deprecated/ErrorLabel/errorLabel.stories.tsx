import type { Meta, StoryObj } from '@storybook/react';
import ErrorLabel, { ErrorLabelProps } from './errorLabel';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Deprecated/ErrorLabel',
  component: ErrorLabel,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'deprecated'],
  argTypes: {},
} satisfies Meta<typeof ErrorLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ErrorLabelProps = {
  error: 'I am an error',
  children: <input type="text" />,
};

export const Default: Story = {
  args: defaultProps,
};

export const NoError: Story = {
  args: { ...defaultProps, error: undefined },
};
