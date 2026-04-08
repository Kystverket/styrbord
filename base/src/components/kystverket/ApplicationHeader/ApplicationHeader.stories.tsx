import type { Meta, StoryObj } from '@storybook/react-vite';
import { ApplicationHeader } from './ApplicationHeader';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { ApplicationHeaderContext } from '../Header/headerContext';

const meta = {
  title: 'Page/ApplicationHeader',
  component: ApplicationHeader,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    logo: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof ApplicationHeader>;

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
        link: { icon: 'data_table', label: 'Arbeidsliste', href: '#' },
      },
      {
        applicationId: 'sak',
        position: 'main',
        link: { icon: 'data_table', label: 'Alle saker', href: '#' },
      },
      {
        applicationId: 'dev',
        position: 'main',
        link: { icon: 'inbox', label: 'Innsendinger', href: '#' },
      },
      {
        applicationId: 'dev',
        position: 'main',
        link: { icon: 'article', label: 'Tilbakemeldinger', href: '#' },
      },
      {
        applicationId: 'hoer',
        position: 'main',
        link: { icon: 'export_notes', label: 'Høring', href: '#' },
      },
      {
        applicationId: 'is',
        position: 'main',
        link: { icon: 'severe_cold', label: 'Ismelding', href: '#' },
      },
      { position: 'profile', link: { icon: 'person', label: 'Min side', href: '#' } },
      { position: 'main', link: { icon: 'groups', label: 'Saksbehandlere', href: '#' } },
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
