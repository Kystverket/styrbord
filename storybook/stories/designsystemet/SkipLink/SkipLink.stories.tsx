import type { Meta, StoryFn } from '@storybook/react';

import { Paragraph, SkipLink } from '@digdir/designsystemet-react';
type Story = StoryFn<typeof SkipLink>;

export default {
  title: 'Designsystemet/SkipLink',
  component: SkipLink,
} as Meta;

export const Preview: Story = () => (
  <Paragraph>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet
    og trykk <kbd>Tab</kbd>.
    <SkipLink href='#main-content'>Hopp til hovedinnhold</SkipLink>
    <main
      id='main-content'
      tabIndex={-1}
    >
      Region som kan motta fokus fra skiplink.
    </main>
  </Paragraph>
);
