import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonProps } from './Button';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Icon } from '~/main';

const meta = {
  title: 'Components/Button',
  component: Button,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: [
          '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/button/overview)',
          '',
          '**Merk:** `variant` har med vilje andre navn enn i Designsystemet, og dette er en varig forskjell.',
          'Designsystemets `primary`/`secondary`/`tertiary` leses som nivåer og kolliderer med',
          '`data-color="primary"`, som er en fargefamilie. Styrbord navngir formen i stedet, og får',
          'samtidig plass til `subtle` og `dashed`, som Designsystemet ikke har.',
          '',
          '| Styrbord | Designsystemet |',
          '| --- | --- |',
          '| `filled` | `primary` |',
          '| `outline` | `secondary` |',
          '| `ghost` | `tertiary` |',
          '| `subtle` | `primary` + ekstra CSS |',
          '| `dashed` | `secondary` + ekstra CSS |',
          '',
          'Eksempler fra Designsystemet må oversettes gjennom tabellen over.',
        ].join('\n'),
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {
  children: 'Label',
};

export const Default: Story = {
  args: defaultProps,
};

export const Filled: Story = {
  args: { ...defaultProps, variant: 'filled' },
};

export const Subtle: Story = {
  args: { ...defaultProps, variant: 'subtle' },
};

export const Ghost: Story = {
  args: { ...defaultProps, variant: 'ghost' },
};

export const Dashed: Story = {
  args: { ...defaultProps, variant: 'dashed' },
};

export const Neutral: Story = {
  args: { ...defaultProps, variant: 'filled', color: 'neutral' },
};

export const Danger: Story = {
  args: { ...defaultProps, variant: 'filled', color: 'danger' },
};

export const DangerDashed: Story = {
  args: { ...defaultProps, variant: 'dashed', color: 'danger' },
};

export const LinkTo: Story = {
  args: { ...defaultProps, variant: 'subtle', href: 'https://www.kystverket.no', text: 'Kystverket' },
};

export const Small: Story = {
  args: { ...defaultProps, variant: 'filled', size: 'sm' },
};

export const Medium: Story = {
  args: { ...defaultProps, variant: 'filled', size: 'md' },
};

export const Large: Story = {
  args: { ...defaultProps, variant: 'filled', size: 'lg' },
};

export const Loading: Story = {
  args: { ...defaultProps, variant: 'filled', loading: true },
};

export const Disabled: Story = {
  args: { ...defaultProps, variant: 'filled', disabled: true },
};

export const WithIcon: Story = {
  args: {
    ...defaultProps,
    children: (
      <>
        <Icon material="file_save" />
        Lagre
      </>
    ),
  },
};

export const WithTooltip: Story = {
  args: { ...defaultProps, variant: 'filled', tooltip: 'Lagre endringene dine' },
};
