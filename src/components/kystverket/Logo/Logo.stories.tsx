import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Logo, LogoProps } from '~/components/kystverket/Logo/Logo';

const meta = {
  title: 'KYV - Side/Logo',
  component: Logo,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: LogoProps = {
  alt: 'Kystverket 4K',
};

export const Default: Story = {
  args: defaultProps,
};

export const OnlyWidth: Story = {
  args: { ...defaultProps, width: 400 },
};

export const OnlyHeight: Story = {
  args: { ...defaultProps, height: 200 },
};

export const White: Story = {
  args: { ...defaultProps, variant: 'white-vertical' },
};

export const Datakatalog: Story = {
  args: { ...defaultProps, variant: 'datakatalog' },
};

export const Fyr: Story = {
  args: { ...defaultProps, variant: 'fyr' },
};

export const Hais: Story = {
  args: { ...defaultProps, variant: 'hais' },
};

export const Pfsa: Story = {
  args: { ...defaultProps, variant: 'pfsa' },
};

export const Saksbehandling: Story = {
  args: { ...defaultProps, variant: 'saksbehandling' },
};

export const Selvbetjening: Story = {
  args: { ...defaultProps, variant: 'selvbetjening' },
};
