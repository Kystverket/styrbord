import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { ApplicationHeaderContext } from './headerContext';

const meta = {
  title: 'Page/Header',
  component: Header,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    logo: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Saksbehandling: Story = {
  args: {
    logo: { variant: 'saksbehandling', url: '/' },
    applications: [
      { id: 'sak', name: 'Saksbehandling', icon: 'data_table' },
      { id: 'is', name: 'Ismelding', icon: 'severe_cold' },
      { id: 'hoer', name: 'Høring', icon: 'export_notes' },
      { id: 'dev', name: 'Utvikling', icon: 'anchor' },
    ],
    links: [
      {
        applicationId: 'sak',
        position: 'main',
        label: 'Arbeidsliste',
        url: '#',
      },
      {
        applicationId: 'sak',
        position: 'main',
        label: 'Alle saker',
        url: '#',
      },
      {
        applicationId: 'dev',
        position: 'main',
        label: 'Innsendinger',
        url: '#',
      },
      {
        applicationId: 'dev',
        position: 'main',
        label: 'Tilbakemeldinger',
        url: '#',
      },
      {
        applicationId: 'hoer',
        position: 'main',
        label: 'Høring',
        url: '#',
      },
      {
        applicationId: 'is',
        position: 'main',
        label: 'Ismelding',
        url: '#',
      },
      {
        position: 'main',
        label: 'Saksbehandlere',
        url: '#',
      },
      {
        position: 'profile',
        icon: 'person',
        label: 'Min side',
        url: '#',
      },
    ],
    person: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
    },
    logoutHandler: () => alert('Logger ut'),
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '150px' }}>
        <ApplicationHeaderContext.Provider value={{ applicationId: 'sak' }}>
          <Story />
        </ApplicationHeaderContext.Provider>
      </div>
    ),
  ],
};

const defaultProps: Story['args'] = {
  logo: { variant: 'blue-horizontal', url: '#' },
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
    person: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '300px' }}>
        <Story />
      </div>
    ),
  ],
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
    person: {
      name: 'Ola Nordmann',
      department: 'Hav- og kystforvaltning',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '150px' }}>
        <Story />
      </div>
    ),
  ],
};

export const medProfilLenker: Story = {
  args: {
    ...defaultProps,
    links: [
      ...(defaultProps.links || []),
      { position: 'profile', icon: 'anchor', label: 'Kystverket', url: 'https://kystverket.no' },
      { position: 'profile', icon: 'settings', label: 'Settings', url: '#' },
    ],
    person: {
      name: 'Ola Nordmann',
    },
    logoutHandler: () => alert('Logger ut'),
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
