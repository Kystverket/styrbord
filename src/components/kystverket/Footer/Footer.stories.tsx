import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Footer, FooterProps } from '~/components/kystverket/Footer/Footer';

const meta = {
  title: 'Side/Footer',
  component: Footer,

  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],

  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FooterProps = {
  language: 'nb-NO',
  links: [
    {
      text: 'Tilgjengelighetserklæring',
      url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
    },
    { text: 'Personvernerklæring', url: 'https://www.kystverket.no/om-kystverket/kystverkets-personvernerklaring/' },
    { text: 'Lisenserklæring', url: '#' },
  ],
};

export const Default: Story = {
  args: defaultProps,
};

export const WithLanguageLinks: Story = {
  args: {
    ...defaultProps,
    langLinks: [
      {
        text: 'Nynorsk',
        url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
      },
      { text: 'Engelsk', url: 'https://www.kystverket.no/om-kystverket/kystverkets-personvernerklaring/' },
    ],
  },
};

export const WithContactLinks: Story = {
  args: {
    ...defaultProps,
    langLinks: [
      {
        text: 'Nynorsk',
        url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
      },
      { text: 'Engelsk', url: 'https://www.kystverket.no/om-kystverket/kystverkets-personvernerklaring/' },
    ],
    contactLinks: [
      {
        text: 'Tilgjengelighetserklæring',
        url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
      },
      { text: 'Personvernerklæring', url: 'https://www.kystverket.no/om-kystverket/kystverkets-personvernerklaring/' },
      { text: 'Lisenserklæring', url: '#' },
    ],
  },
};

export const WithMaritimSikringLinks: Story = {
  args: {
    ...defaultProps,
    contactLinks: [
      {
        text: 'Send e-post til support',
        url: 'mailto:selvbetjening.maritimsikring@kystverket.no',
      },
      {
        text: 'Kontakt kystverket',
        url: 'https://www.kystverket.no/kontakt-oss/',
      },
    ],
    links: [
      { text: 'Data- og Lisenserklæring', url: '#' },
      { text: 'Personvernerklæring', url: 'https://www.kystverket.no/om-kystverket/kystverkets-personvernerklaring/' },
      {
        text: 'Tilgjengelighetserklæring',
        url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
      },
    ],
    langLinks: [
      {
        text: 'Nynorsk',
        url: 'https://uustatus.no/nb/erklaringer/publisert/5e6d4b9f-7e58-407d-aee1-9d949ef46b16',
      },
    ],
    contactLinksAsSelect: false,
  },
};
