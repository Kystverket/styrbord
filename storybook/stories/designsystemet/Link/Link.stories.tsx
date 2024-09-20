import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';

import { Paragraph, Link, Button, Alert, ChipToggle } from '@digdir/designsystemet-react';

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
    <Paragraph>
      Vi bruker komponenter fra <Link href={designsystemetLink}>et fantastisk designsystem</Link>.
    </Paragraph>
    <Paragraph>
      <Link href="mailto:designsystem@digdir.no">
        <EnvelopeClosedIcon aria-hidden />
        Kontakt oss
      </Link>
      <Button>Hnm</Button>
      <Alert>HHmm</Alert>
      <ChipToggle>Chipps</ChipToggle>
    </Paragraph>
  </>
);

export const LongLink: StoryFn<typeof Link> = () => (
  <Paragraph>
    <Link href={designsystemetLink}>Dette er en lenke som brekker over flere linjer</Link>
  </Paragraph>
);

LongLink.decorators = [
  (Story) => (
    <div style={{ width: '200px' }}>
      <Story></Story>
    </div>
  ),
];

export const Neutral: Story = {
  args: {
    children: 'Gå til designsystemet',
    href: designsystemetLink,
    color: 'neutral',
  },
};
