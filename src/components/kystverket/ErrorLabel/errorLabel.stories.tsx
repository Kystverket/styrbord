import type { Meta, StoryObj } from '@storybook/react';
import ErrorLabel, { ErrorLabelProps } from './errorLabel';
import { Textfield } from '@digdir/designsystemet-react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/ErrorLabel',
  component: ErrorLabel,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ErrorLabelProps = {
  error: 'I am an error',
  children: <Textfield />,
};

export const Default: Story = {
  args: defaultProps,
};

export const NoError: Story = {
  args: { ...defaultProps, error: undefined },
};
