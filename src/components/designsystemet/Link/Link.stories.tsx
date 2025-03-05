import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';

import { Link } from '@digdir/designsystemet-react';
import React from 'react';
import { Body } from '~/main';

type Story = StoryObj<typeof Link>;

const randomNum = Math.floor(Math.random() * 1000);
const designsystemetLink = 'https://designsystemet.no/?=' + randomNum;

export default {
  title: 'Designsystemet/Link',
  component: Link,
  parameters: {
    status: {
      type: 'beta',
      url: 'http://www.url.com/status',
    },
  },
} as Meta;

export const Normal: Story = {
  args: {
    children: 'Gå til designsystemet',
    href: designsystemetLink,
    color: 'accent',
  },
};

export const InText: StoryFn<typeof Link> = () => (
  <>
    <Body>
      Vi bruker komponenter fra <Link href={designsystemetLink}>et fantastisk designsystem</Link>.
    </Body>
    <Body>
      <Link href="mailto:designsystem@digdir.no">
        <EnvelopeClosedIcon aria-hidden />
        Kontakt oss
      </Link>
    </Body>
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
      <Link color="neutral" href={designsystemetLink}>
        Neutral
      </Link>
    </Body>
  </>
);
