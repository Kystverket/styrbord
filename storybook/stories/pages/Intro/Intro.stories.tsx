// Dummy fil, blir ikke brukt av Intro.mdx

import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '@digdir/designsystemet-react';

type Story = StoryObj<typeof Link>;

export default {
  title: 'Intro',
  component: Link,
} as Meta;

export const Normal: Story = {
  args: {
    children: '',
    href: '/',
    color: 'accent',
  },
};
