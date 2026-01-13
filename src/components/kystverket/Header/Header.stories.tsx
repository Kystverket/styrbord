import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Page/Header',
  component: Header,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
    logo: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story['args'] = {
  logo: { url: '/' },
};

export const Default: Story = {
  args: defaultProps,
};

export const Kystverket: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'blue-horizontal' } },
};

export const MedUndertittel: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, title: 'Styrbord' } },
};

export const Datakatalog: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'datakatalog' } },
};

export const Fyr: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'fyr' } },
};

export const Hais: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'hais' } },
};

export const Pfsa: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'pfsa' } },
};

export const Saksbehandling: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'saksbehandling' } },
};

export const Selvbetjening: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, variant: 'selvbetjening' } },
};

export const medProfilOgMenyItems: Story = {
  args: {
    ...defaultProps,
    links: [
      { icon: 'anchor', label: 'Kystverket', url: 'https://kystverket.no' },
      { icon: 'settings', label: 'Settings', url: '#' },
    ],
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
      logoutHandler: () => alert('Logger ut'),
      initials: 'ON',
    },
  },
};

export const medMenyItems: Story = {
  args: {
    ...defaultProps,
    links: [
      { icon: 'anchor', label: 'Kystverket', url: 'https://kystverket.no' },
      { icon: 'settings', label: 'Settings', url: '#' },
    ],
  },
};

export const medProfil: Story = {
  args: {
    ...defaultProps,
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
      logoutHandler: () => alert('Logger ut'),
      initials: 'ON',
    },
  },
};

export const medProfilLenker: Story = {
  args: {
    ...defaultProps,
    profile: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
      logoutHandler: () => alert('Logger ut'),
      initials: 'ON',
      links: [
        { icon: 'anchor', label: 'Kystverket', url: 'https://kystverket.no' },
        { icon: 'settings', label: 'Settings', url: '#' },
      ],
    },
  },
};
