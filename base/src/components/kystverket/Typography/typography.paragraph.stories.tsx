import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Paragraph } from '~/main';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <Box gap={24}>
      <Paragraph data-size="md">
        Ved endringer av typografi er det viktig å merke seg at Figma rapporterer feil font-weight for medium-bold
        tekst. Den får font-weight: 400 i Figma men det korrekte skal være 500. Gyldige font-vekter for kystinn er 300,
        500 og 700
      </Paragraph>
      <Box gap={16}>
        <Paragraph data-size="xl">Paragraph XLarge</Paragraph>
        <Paragraph data-size="lg">Paragraph Large</Paragraph>
        <Paragraph data-size="md">Paragraph Medium</Paragraph>
        <Paragraph data-size="sm">Paragraph Small</Paragraph>
        <Paragraph data-size="xs">Paragraph XSmall</Paragraph>
      </Box>
      <Box gap={16}>
        <Paragraph data-size="lg">Paragraph Large accent</Paragraph>
        <Paragraph data-size="md">Paragraph Medium</Paragraph>
        <Paragraph data-size="sm">Paragraph Small</Paragraph>
      </Box>
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};
