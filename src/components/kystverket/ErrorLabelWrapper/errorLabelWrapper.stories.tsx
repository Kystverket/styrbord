import type { Meta, StoryObj } from '@storybook/react';
import ErrorLabelWrapper, { ErrorLabelWrapperProps } from './errorLabelWrapper';
import { Textfield } from '@digdir/designsystemet-react';
import StyrbordDecorator from '@/../storybook/styrbordDecorator';

const meta = {
  title: 'Components/ErrorLabelWrapper',
  component: ErrorLabelWrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorLabelWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ErrorLabelWrapperProps = {
  error: 'I am an error',
  children: <Textfield />,
};

export const Default: Story = {
  args: defaultProps,
};

export const NoError: Story = {
  args: { ...defaultProps, error: undefined },
};
