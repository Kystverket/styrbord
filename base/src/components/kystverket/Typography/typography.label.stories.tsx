import type { Meta, StoryObj } from '@storybook/react';
import { Body, Typography } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Typography/Label',
  component: Typography.Label,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
} satisfies Meta<typeof Typography.Label>;

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
      <Typography.Label size="xl" strong>
        Label XL Strong
      </Typography.Label>
      <Typography.Label size="lg" strong>
        Label Large Strong
      </Typography.Label>
      <Typography.Label size="md" strong>
        Label Medium Strong
      </Typography.Label>
      <Typography.Label size="sm" strong>
        Label Small Strong
      </Typography.Label>
      <Typography.Label size="xl">Label XL Large</Typography.Label>
      <Typography.Label size="lg">Label Large</Typography.Label>
      <Typography.Label size="md">Label Medium</Typography.Label>
      <Typography.Label size="sm">Label Small</Typography.Label>
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};
