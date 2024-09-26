import type { Meta, StoryObj } from '@storybook/react';
import ErrorWrapper, { ErrorWrapperProps } from './errorWrapper';
import { Textfield } from '@digdir/designsystemet-react';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';

const meta = {
  title: 'Form/ErrorWrapper',
  component: ErrorWrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ErrorWrapperProps = {
  error: 'I am an error',
  children: <Textfield />,
};

export const Default: Story = {
  args: defaultProps,
};

export const NoError: Story = {
  args: { ...defaultProps, error: undefined },
};
