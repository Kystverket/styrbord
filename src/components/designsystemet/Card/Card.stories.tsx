import type { Meta, StoryObj } from '@storybook/react';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Card } from '@digdir/designsystemet-react';
import CardTitle from '../CardTitle/CardTitle';

const meta = {
  title: 'Designsystemet/Card',
  component: Card,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'tinted'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Dette er et default kort med standardinnhold.</p>,
    variant: 'default',
  },
};

export const Tinted: Story = {
  args: {
    children: <p>Dette er et tinted kort med standardinnhold.</p>,
    variant: 'tinted',
  },
};

export const CardWithTitleAndIcon: Story = {
  args: {
    children: (
      <>
        <CardTitle icon="anchor">Tittel</CardTitle>
        <p>Dette er et kort med tittel og et ikon</p>
      </>
    ),
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
    children: (
      <>
        <CardTitle icon="arrow_right_alt" href="'/?path=/docs/komponenter-card--docs'">
          Kort med lenke i tittel og ikon
        </CardTitle>
        <p>Dette er et kort med linktittel og et ikon</p>
      </>
    ),
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
