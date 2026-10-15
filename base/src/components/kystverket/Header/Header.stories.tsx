import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header, HeaderProps } from './Header';
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
const saksbehandlingMeny: HeaderProps = {
  logo: { product: 'Saksbehandling', url: '/' },
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
  profile: {
    name: 'Ola Nordmann',
    department: 'Hav- og kystforvaltning',
  },
  logoutHandler: () => alert('Logger ut'),
};

export const Saksbehandling: Story = {
  args: saksbehandlingMeny,
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

export const SaksbehandlingAnnenApplikasjon: Story = {
  args: saksbehandlingMeny,
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '150px' }}>
        <ApplicationHeaderContext.Provider value={{ applicationId: 'dev' }}>
          <Story />
        </ApplicationHeaderContext.Provider>
      </div>
    ),
  ],
};

const defaultProps: Story['args'] = {
  logo: { url: '#' },
};

export const Kystverket: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo } },
};

export const MedUndertittel: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, title: 'Styrbord' } },
};

export const Datakatalog: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, product: 'Datakatalog' } },
};

export const Fyr: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, product: 'Fyr' } },
};

export const Hais: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, product: 'Historisk AIS' } },
};

export const Pfsa: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, product: 'Maritim Sikring' } },
};

export const Selvbetjening: Story = {
  args: { ...defaultProps, logo: { ...defaultProps.logo, product: 'Selvbetjening' } },
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

export const medMenyItems: Story = {
  args: {
    ...defaultProps,
    links: [
      { icon: 'anchor', label: 'Kystverket', url: 'https://kystverket.no' },
      { icon: 'settings', label: 'Settings', url: '#' },
    ],
    logoutHandler: () => alert('Logger ut'),
  },
};

export const medProfil: Story = {
  args: {
    ...defaultProps,
    profile: {
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
    profile: {
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
