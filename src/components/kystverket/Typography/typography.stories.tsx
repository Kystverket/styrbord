import type { Meta, StoryObj } from '@storybook/react';
import { Display, Body, Headline, Label, Title, Accent } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Helpers/Typography',
  component: Box,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <Box gap={16}>
      <Display size="lg">Display Large</Display>
      <Display size="md">Display Medium</Display>
      <Display size="sm">Display Small</Display>
      <Headline size="lg">Headline Large</Headline>
      <Headline size="md">Headline Medium</Headline>
      <Headline size="sm">Headline Small</Headline>
      <Title size="lg">Title Large</Title>
      <Title size="md">Title Medium</Title>
      <Title size="sm">Title Small</Title>
      <Body size="lg" strong>
        Body Strong Large
      </Body>
      <Body size="md" strong>
        Body Strong Medium
      </Body>
      <Body size="sm" strong>
        Body Strong Small
      </Body>
      <Body size="lg">Body Large</Body>
      <Body size="md">Body Medium</Body>
      <Body size="sm">Body Small</Body>
      <Label size="xl" strong>
        Label XL Strong
      </Label>
      <Label size="lg" strong>
        Label Large Strong
      </Label>
      <Label size="md" strong>
        Label Medium Strong
      </Label>
      <Label size="sm" strong>
        Label Small Strong
      </Label>
      <Label size="xl">Label XL Large</Label>
      <Label size="lg">Label Large</Label>
      <Label size="md">Label Medium</Label>
      <Label size="sm">Label Small</Label>
      <p>
        <Body size="lg" strong inline>
          Body Large strong inline
        </Body>
        <Body size="md" strong inline>
          Body Medium strong inline
        </Body>
        <Body size="sm" strong inline>
          Body Small strong inline
        </Body>
        <Body size="lg" inline>
          Body Large inline
        </Body>
        <Body size="md" inline>
          Body Medium inline
        </Body>
        <Body size="sm" inline>
          Body Small inline
        </Body>
      </p>
      <Accent size="md">Accent Medium</Accent>
      <Accent size="sm">Accent Small</Accent>
      <Accent size="md" strong>
        Accent Medium strong
      </Accent>
      <Accent size="sm" strong>
        Accent Small strong
      </Accent>
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};

export const LangTittel: Story = {
  args: { ...defaultProps, children: <Title size="lg">Søke om farvannsskilt og navigasjonsinnretninger</Title> },
};
