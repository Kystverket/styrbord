import type { Meta, StoryObj } from '@storybook/react';
import Alert, { AlertProps } from './alert';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/alert/overview)',
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AlertProps = {
  text:
    'Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange linjer du har' +
    ' behov for, men prøv likevel å være kort og konsis.',
};

export const Default: Story = {
  args: defaultProps,
};

export const Warning: Story = {
  args: { ...defaultProps, title: 'Informativ tittel', level: 'warning' },
};

export const Success: Story = {
  args: { ...defaultProps, level: 'success' },
};

export const Danger: Story = {
  args: { ...defaultProps, level: 'error' },
};

export const DangerAlt: Story = {
  args: { ...defaultProps, 'data-color': 'danger' },
};

export const SmallSize: Story = {
  args: { ...defaultProps, title: 'Informativ tittel', 'data-size': 'sm' },
};

export const NormalSize: Story = {
  args: { ...defaultProps, title: 'Informativ tittel', 'data-size': 'md' },
};

export const LargeSizeWithDismiss: Story = {
  args: { ...defaultProps, title: 'Informativ tittel', 'data-size': 'lg', onDismiss: () => {} },
};

export const DefaultKort: Story = {
  args: { ...defaultProps, text: 'Kort melding', onDismiss: () => {} },
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
