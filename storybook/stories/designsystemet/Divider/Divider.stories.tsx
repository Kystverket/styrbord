import { Divider, Paragraph } from '~/main';
import type { Meta, StoryFn } from '@storybook/react';

type Story = StoryFn<typeof Divider>;

export default {
  title: 'Designsystemet/Divider',
  component: Divider,
} as Meta;

export const Preview: Story = (args) => (
  <>
    <Paragraph>Divider er brukt for å dele opp innhold i mindre deler.</Paragraph>
    <Divider {...args} />
    <Paragraph>Den kan også brukes for å skille innhold som er relatert til hverandre.</Paragraph>
  </>
);
