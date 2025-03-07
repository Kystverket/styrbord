import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Footer, FooterProps } from '~/components/kystverket/Footer/Footer';
import { Box, Link, Title } from '~/main';

const meta = {
  title: 'Page/Footer',
  component: Footer,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
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
  children: null,
};

export const Default: Story = {
  args: defaultProps,
};

export const WithLanguageLinks: Story = {
  args: {
    ...defaultProps,
    children: (
      <>
        <Title size="lg" level="3">
          Andre språk
        </Title>
        <Box>
          <Link href={'#no'}>Norsk</Link>
          <Link href={'#en'}>Engelsk</Link>
        </Box>
      </>
    ),
  },
};
