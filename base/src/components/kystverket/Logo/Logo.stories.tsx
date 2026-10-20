import type { Meta, StoryObj } from '@storybook/react-vite';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Logo, LogoProps } from '~/components/kystverket/Logo/Logo';

const meta = {
  title: 'Page/Logo',
  component: Logo,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
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

export const EnglishVertical: Story = {
  args: { ...defaultProps, height: 200, variant: 'vertical-en' },
};

export const EnglishHorizontal: Story = {
  args: { ...defaultProps, height: 100, variant: 'horizontal-en' },
};

export const White: Story = {
  args: { ...defaultProps, variant: 'vertical', color: 'white' },
};

export const Black: Story = {
  args: { ...defaultProps, variant: 'vertical', color: 'black' },
};

export const Datakatalog: Story = {
  args: { ...defaultProps, height: 83, product: 'Datakatalog' },
};

export const Fyr: Story = {
  args: { ...defaultProps, height: 83, product: 'Fyr' },
};

export const Hais: Story = {
  args: { ...defaultProps, height: 83, product: 'Historisk AIS' },
};

export const Pfsa: Story = {
  args: { ...defaultProps, height: 83, product: 'Maritim Sikring' },
};

export const Saksbehandling: Story = {
  args: { ...defaultProps, height: 83, product: 'Saksbehandling' },
};

export const Selvbetjening: Story = {
  args: { ...defaultProps, height: 83, product: 'Selvbetjening' },
};

export const SelvbetjeningEnglish: Story = {
  args: { ...defaultProps, height: 83, product: 'Selvbetjening', variant: 'horizontal-en' },
};
