import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import React from 'react';
import { Link, Body, Box, Icon } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Link',
  component: Link,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

const randomNum = Math.floor(Math.random() * 1000);
const designsystemetLink = 'https://designsystemet.no/?=' + randomNum;

export const Normal: Story = {
  args: {
    children: 'Gå til designsystemet',
    href: designsystemetLink,
  },
};

export const NormalSm: Story = {
  args: {
    children: 'Liten link',
    href: designsystemetLink,
    'data-size': 'sm',
  },
};

export const NormalLg: Story = {
  args: {
    children: 'Større link',
    href: designsystemetLink,
    'data-size': 'lg',
  },
};

export const UtenUnderline: Story = {
  args: {
    children: 'Link uten underline',
    href: designsystemetLink,
    underline: false,
  },
};

export const Visited: Story = {
  args: {
    children: 'Besøk linken for å se visited state',
    href: 'https://arngren.net/',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Legg til kai',
    href: 'https://arngren.net/',
    icon: 'anchor',
  },
};

export const WithIconAndNoUnderline: Story = {
  args: {
    children: 'Legg til kai',
    href: 'https://arngren.net/',
    icon: 'anchor',
    underline: false,
  },
};

export const InText: StoryFn<typeof Link> = () => (
  <>
    <Body>
      Vi bruker komponenter fra <Link href={designsystemetLink}>et fantastisk designsystem</Link>.
    </Body>
    <Box gap={16}>
      <Link href="mailto:designsystem@digdir.no">
        <Icon material="person" aria-hidden />
        <span>Kontakt oss</span>
      </Link>
    </Box>
  </>
);

export const LongLink: StoryFn<typeof Link> = () => (
  <Body>
    <Link href={designsystemetLink}>Dette er en lenke som brekker over flere linjer</Link>
  </Body>
);

LongLink.decorators = [
  (Story) => (
    <div style={{ width: '200px' }}>
      <Story></Story>
    </div>
  ),
];

export const Neutral: StoryFn<typeof Link> = () => (
  <>
    <Body>
      <Link data-color="neutral" href={designsystemetLink}>
        Neutral
      </Link>
    </Body>
  </>
);

export const Accent: StoryFn<typeof Link> = () => (
  <>
    <Body>
      <Link data-color="accent" href={designsystemetLink}>
        Accent
      </Link>
    </Body>
  </>
);
