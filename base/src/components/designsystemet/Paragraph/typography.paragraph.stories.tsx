import type { Meta, StoryObj } from '@storybook/react-vite';
import Box, { BoxProps } from '../../kystverket/Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Paragraph } from '~/main';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fontWeight: {
      control: 'select',
      options: [undefined, 'regular', 'medium', 'semibold'],
    },
    'data-color-subtle': {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children:
      'Ved endringer av typografi er det viktig å merke seg at Figma rapporterer feil font-weight for medium-bold tekst.',
    size: 'md',
  },
};

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
        <Paragraph size="xl" fontWeight="semibold">
          Paragraph Semibold XLarge
        </Paragraph>
        <Paragraph size="lg" fontWeight="semibold">
          Paragraph Semibold Large
        </Paragraph>
        <Paragraph size="md" fontWeight="semibold">
          Paragraph Semibold Medium
        </Paragraph>
        <Paragraph size="sm" fontWeight="semibold">
          Paragraph Semibold Small
        </Paragraph>
      </Box>
      <Box gap={16}>
        <Paragraph size="xl" fontWeight="medium">
          Paragraph Medium XLarge
        </Paragraph>
        <Paragraph size="lg" fontWeight="medium">
          Paragraph Medium Large
        </Paragraph>
        <Paragraph size="md" fontWeight="medium">
          Paragraph Medium Medium
        </Paragraph>
        <Paragraph size="sm" fontWeight="medium">
          Paragraph Medium Small
        </Paragraph>
      </Box>
      <Box gap={16}>
        <Paragraph size="lg" data-color-subtle>
          Paragraph Large subtle
        </Paragraph>
        <Paragraph size="md" data-color-subtle>
          Paragraph Medium subtle
        </Paragraph>
        <Paragraph size="sm" data-color-subtle>
          Paragraph Small subtle
        </Paragraph>
      </Box>
    </Box>
  ),
};

export const Examples: Story = {
  args: defaultProps,
};
