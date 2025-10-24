import type { Meta, StoryObj } from '@storybook/react';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Card, CardBlock, CardProps } from '@digdir/designsystemet-react';
import CardTitle from '../CardTitle/CardTitle';
import { Box } from '~/main';

const meta = {
  title: 'Components/Card',
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

const colors: CardProps['data-color'][] = [
  undefined,
  'primary',
  'neutral',
  'success',
  'danger',
  'warning',
  'accent',
  'extra1',
  'extra2',
];

const colorVariants: CardProps['variant'][] = ['default', 'tinted'];

export const ColorVariants: Story['render'] = () => (
  <Box gap={16}>
    {colors.map((color) =>
      colorVariants.map((colorVariant) => (
        <Box key={color + colorVariant} horizontal align="center" gap={8}>
          <Card data-color={color} variant={colorVariant}>
            <CardBlock>
              <CardTitle>
                {color ? color.toString().substring(0, 1).toUpperCase() + color.toString().substring(1) : 'Default'}{' '}
                {colorVariant}
              </CardTitle>
              <p>
                Most provide as with carried business are much better more the perfected designer. Writing slightly
                explain desk unable at supposedly about this
              </p>
            </CardBlock>
          </Card>
        </Box>
      )),
    )}
  </Box>
);

export const Colors: Story = {
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
