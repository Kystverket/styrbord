import type { Meta, StoryObj } from '@storybook/react';
import { Body } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading } from '@digdir/designsystemet-react';

const meta = {
  title: 'Typography/Body',
  component: Body,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <Box gap={16}>
      <Body size="md">
        Ved endringer av typografi er det viktig å merke seg at Figma rapporterer feil font-weight for medium-bold
        tekst. Den får font-weight: 400 i Figma men det korrekte skal være 500. Gyldige font-vekter for kystinn er 300,
        500 og 700
      </Body>
      <Body size="xl" strong>
        Body Strong XLarge
      </Body>
      <Body size="lg" strong>
        Body Strong Large
      </Body>
      <Body size="md" strong>
        Body Strong Medium
      </Body>
      <Body size="sm" strong>
        Body Strong Small
      </Body>
      <Body size="xl">Body XLarge</Body>
      <Body size="lg">Body Large</Body>
      <Body size="md">Body Medium</Body>
      <Body size="sm">Body Small</Body>
      <Body size="lg">Body Large accent</Body>
      <Body size="md">Body Medium</Body>
      <Body size="sm">Body Small</Body>
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
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};

export const LangTittel: Story = {
  args: {
    ...defaultProps,
    children: <Heading data-size="lg">Søke om farvannsskilt og navigasjonsinnretninger</Heading>,
  },
};
