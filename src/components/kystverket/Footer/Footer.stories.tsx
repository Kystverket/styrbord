import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Footer, FooterProps } from '~/components/kystverket/Footer/Footer';
import { Image } from '../Image/image';

import musea from './musea.svg';

const meta = {
  title: 'Side/Footer',
  component: Footer,

  decorators: [StyrbordDecorator],
  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FooterProps = {
  language: 'nb-NO',
};

export const Default: Story = {
  args: defaultProps,
};

export const Selvbetjening: Story = {
  args: {
    ...defaultProps,
    primary: [
      { text: 'Data- og lisenserklæring', url: '#' },
      {
        text: 'Tilgjengelighetserklæring',
        url: '#',
      },
      { text: 'Personvernerklæring', url: '#' },
    ],
    secondary: [
      {
        text: 'Nynorsk',
        url: '#',
      },
      { text: 'Engelsk', url: '#' },
    ],
  },
};

export const MaritimSikring: Story = {
  args: {
    ...defaultProps,
    contacts: [],
    primary: [
      { text: 'Data- og lisenserklæring', url: '#' },
      {
        text: 'Tilgjengelighetserklæring',
        url: '#',
      },
      { text: 'Personvernerklæring', url: '#' },
    ],
    secondary: [
      {
        text: 'Send e-post til support',
        url: 'mailto:selvbetjening.maritimsikring@kystverket.no',
      },
      {
        text: 'Kontakt kystverket',
        url: 'https://www.kystverket.no/kontakt-oss/',
      },
    ],
  },
};

export const Hais: Story = {
  args: {
    ...defaultProps,
    primary: [
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
    primary: [
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
    primary: [
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
    secondary: [
      { text: 'Data- og lisenserklæring', url: '#' },
      {
        text: 'Tilgjengelighetserklæring',
        url: '#',
      },
      { text: 'Personvernerklæring', url: '#' },
      { text: 'Gi tilbakemelding', url: '#' },
    ],
  },
};

export const Fyr: Story = {
  args: {
    ...defaultProps,
    additionalLogo: <Image src={musea} />,
    contacts: [],
    text: 'Fyr er et samarbeid mellom\nKystverket og Kystverksmusea',
    copyright: 'Opphavsrett Kystverket og\nKystverksmusea © 2024',
    primary: [
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
