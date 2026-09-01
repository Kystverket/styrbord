import type { Meta, StoryObj } from '@storybook/react-vite';
import { Body, Accent } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Typography/Accent',
  component: Accent,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Accent>;

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
      <Accent size="md">Accent Medium</Accent>
      <Accent size="sm">Accent Small</Accent>
      <Accent size="md" weight="medium">
        Accent Medium Medium
      </Accent>
      <Accent size="sm" weight="medium">
        Accent Small Medium
      </Accent>
      <Accent size="md" weight="semibold">
        Accent Medium Semibold
      </Accent>
      <Accent size="sm" weight="semibold">
        Accent Small Semibold
      </Accent>
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};
