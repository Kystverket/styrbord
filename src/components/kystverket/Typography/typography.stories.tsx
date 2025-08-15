import type { Meta, StoryObj } from '@storybook/react';
import { Body, Accent } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading } from '@digdir/designsystemet-react';

const meta = {
  title: 'Helpers/Typography',
  component: Box,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const headerSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const defaultProps: BoxProps = {
  children: (
    <Box gap={16}>
      <Body size="md">
        Ved endringer av typografi er det viktig å merke seg at Figma rapporterer feil font-weight for medium-bold
        tekst. Den får font-weight: 400 i Figma men det korrekte skal være 500. Gyldige font-vekter for kystinn er 300,
        500 og 700
      </Body>
      {headerSizes.toReversed().map((size) => (
        <Heading key={size} data-size={size}>
          Heading {size}
        </Heading>
      ))}
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
  args: {
    ...defaultProps,
    children: <Heading data-size="lg">Søke om farvannsskilt og navigasjonsinnretninger</Heading>,
  },
};
