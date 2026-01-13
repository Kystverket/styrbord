import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Footer, FooterProps } from '~/components/kystverket/Footer/Footer';

import Musea from './musea.svg?react';

const meta = {
  title: 'Page/Footer',
  component: Footer,

  decorators: [StyrbordDecorator],
  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FooterProps = {};

export const Default: Story = {
  args: defaultProps,
};

export const Selvbetjening: Story = {
  args: {
    ...defaultProps,
    links: [
      [
        { text: 'Data- og lisenserklæring', url: '#' },
        {
          text: 'Tilgjengelighetserklæring',
          url: '#',
        },
        { text: 'Personvernerklæring', url: '#' },
      ],
      [
        {
          text: 'Nynorsk',
          url: '#',
        },
        { text: 'Engelsk', url: '#' },
      ],
    ],
  },
};

export const MaritimSikring: Story = {
  args: {
    ...defaultProps,
    contacts: [],
    links: [
      [
        { text: 'Data- og lisenserklæring', url: '#' },
        {
          text: 'Tilgjengelighetserklæring',
          url: '#',
        },
        { text: 'Personvernerklæring', url: '#' },
      ],
      [
        {
          text: 'Send e-post til support',
          url: 'mailto:selvbetjening.maritimsikring@kystverket.no',
        },
        {
          text: 'Kontakt kystverket',
          url: 'https://www.kystverket.no/kontakt-oss/',
        },
      ],
    ],
  },
};

export const Hais: Story = {
  args: {
    ...defaultProps,
    links: [
      {
        text: 'Tilgjengelighetserklæring',
        url: '#',
      },
      { text: 'Om tjenesten', url: '#' },
    ],
  },
};

export const Saksbehandling: Story = {
  args: {
    ...defaultProps,
    contacts: [],
    links: [
      {
        text: 'Personvernerklæring',
        url: '#',
      },
    ],
  },
};

export const Kystdatahuset: Story = {
  args: {
    ...defaultProps,
    contacts: [],
    links: [
      [
        {
          text: 'Om Kystdatahuset',
          url: '#',
        },
        {
          text: 'Data i løsningen',
          url: '#',
        },
        {
          text: 'API-tilgang',
          url: '#',
        },
        {
          text: 'Hjelp',
          url: '#',
        },
      ],
      [
        { text: 'Data- og lisenserklæring', url: '#' },
        {
          text: 'Tilgjengelighetserklæring',
          url: '#',
        },
        { text: 'Personvernerklæring', url: '#' },
        { text: 'Gi tilbakemelding', url: '#' },
      ],
    ],
  },
};

export const Fyr: Story = {
  args: {
    ...defaultProps,
    additionalLogo: <Musea style={{ width: 160, height: 160 }} />,
    contacts: [],
    text: 'Fyr er et samarbeid mellom\nKystverket og Kystverksmusea',
    copyright: 'Opphavsrett Kystverket og\nKystverksmusea © 2024',
    links: [
      {
        text: 'Kontakt Kystverket',
        url: '#',
      },
      {
        text: 'Kontakt Kystverksmusea',
        url: '#',
      },
    ],
  },
};
