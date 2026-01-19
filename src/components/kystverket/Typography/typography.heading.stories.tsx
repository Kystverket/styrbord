import type { Meta, StoryObj } from '@storybook/react';
import { Body } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading } from '@digdir/designsystemet-react';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Heading>;

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
