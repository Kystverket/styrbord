import type { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './alert';
import style from './alert.module.css';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Komponenter/Alert',
  component: Alert,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv-ds-hybrid'],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AlertProps = {
  title: 'Informativ tittel',
  level: 'info',
  size: 'md',
  text:
    'Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har' +
    ' behov for, men prøv likevel å være kort og konsis.',
};

export const Default: Story = {
  args: defaultProps,
};

export const Small: Story = {
  args: { ...defaultProps, size: 'sm' },
};

export const DefaultKort: Story = {
  args: { ...defaultProps, text: 'Kort melding', onDismiss: () => {} },
};

export const LargeWithDismiss: Story = {
  args: { ...defaultProps, size: 'lg', onDismiss: () => {} },
};

export const ClassNameCustomWidth: Story = {
  args: { ...defaultProps, className: style.customWidth },
};

export const WithErrorDismiss: Story = {
  args: {
    ...defaultProps,
    title: '',
    text: 'Feil under opplasting',
    level: 'error',
    onDismiss: () => {},
  },
};
