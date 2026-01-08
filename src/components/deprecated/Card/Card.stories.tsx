import type { Meta, StoryObj } from '@storybook/react';
import cat1 from '@assets/img/cats/Cat 1.jpg';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Card from './Card';
import { Heading, Paragraph } from '@digdir/designsystemet-react';

const meta = {
  title: 'Deprecated/Card',
  component: Card,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'deprecated'],
  argTypes: {
    variant: {
      options: ['default', 'tinted'],
      control: { type: 'radio' },
    },
    title: {
      options: ['default', 'tinted'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dette er et default kort med standardinnhold.',
    variant: 'default',
  },
};

export const Tinted: Story = {
  args: {
    children: 'Dette er et tinted kort med standardinnhold.',
    variant: 'tinted',
  },
};

export const CardWithTitleAndIcon: Story = {
  args: {
    children: 'Dette er et kort med tittel og et ikon',
    title: 'Kort med tittel og ikon',
    icon: 'anchor',
  },
};

export const CardWithTitle: Story = {
  args: {
    children: 'Dette er et kort med en tittel',
    title: 'Kort med tittel',
  },
};

export const CardWithLinkInTitle: Story = {
  args: {
    variant: 'tinted',
    title: 'Kort med lenke i tittel og ikon',
    icon: 'arrow_right_alt',
    link: '/?path=/docs/komponenter-card--docs',
  },
};

export const CardAsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="/?path=/docs/komponenter-card--docs" rel="noopener noreferrer" target="_blank">
        Dette er et kort med navigering
      </a>
    ),
  },
};

export const CardAsButton: Story = {
  args: {
    asChild: true,
    children: <button type="button">Dette er et kort som en knapp</button>,
  },
};

export const Media: Story = {
  render: () => (
    <>
      <Card data-color="neutral">
        <Card.Block>
          <iframe
            data-chromatic="ignore"
            src="https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1"
            width="320px"
            height="179px"
            allow="autoplay; fullscreen; picture-in-picture"
            title="30 år med digitalt innsyn"
          ></iframe>
        </Card.Block>
        <Card.Block>
          <Heading>Card Neutral</Heading>
          <Paragraph>
            Most provide as with carried business are much better more the perfected designer. Writing slightly explain
            desk unable at supposedly about this
          </Paragraph>
        </Card.Block>
      </Card>
      <Card data-color="neutral">
        <Card.Block>
          <Heading>Card Neutral</Heading>
          <Paragraph>
            Most provide as with carried business are much better more the perfected designer. Writing slightly explain
            desk unable at supposedly about this
          </Paragraph>
        </Card.Block>
        <Card.Block>
          <img src={cat1} alt="katt" />
        </Card.Block>
      </Card>
    </>
  ),
};

export const Video: Story = {
  render: () => (
    <Card data-color="neutral" style={{ maxWidth: '320px' }}>
      <Card.Block>
        <iframe
          data-chromatic="ignore"
          src="https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1"
          width="320px"
          height="179px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="30 år med digitalt innsyn"
        ></iframe>
      </Card.Block>
      <Card.Block>
        <Heading>
          <a
            href="https://www.digdir.no/felleslosninger/30-ar-med-digitalt-innsyn/5015"
            target="_blank"
            rel="noreferrer"
          >
            Vi feira 30 år med digitalt innsyn
          </a>
        </Heading>
        <Paragraph>
          Det er i år 30 år sidan dei første forsøka med elektronisk postjournal i Noreg. Sjå opptak frå feiringa på
          Pressens Hus der det både var historiske tilbakeblikk og debatt om innsyn og openheit i forvaltninga.
        </Paragraph>
      </Card.Block>
    </Card>
  ),
};
