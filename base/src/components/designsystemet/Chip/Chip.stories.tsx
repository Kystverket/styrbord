import { Box, Chip, ChipButtonProps } from '~/main';
import type { Meta, StoryObj } from '@storybook/react-vite';

const chipVariants = ['Radio', 'Checkbox', 'Removable', 'Button'] as const;

type ChipVariant = (typeof chipVariants)[number];

type ChipStoryArgs = {
  variant: ChipVariant;
  label: string;
};

type ChipColor = NonNullable<ChipButtonProps['data-color']>;

const chipColors: ChipColor[] = ['none', 'neutral'];
const sizes = ['sm', 'md', 'lg'] as const;

const defaultVariantArgs: ChipStoryArgs = {
  variant: 'Radio',
  label: 'Nynorsk',
};

const variantArgTypes = {
  variant: {
    control: { type: 'select' as const },
    options: chipVariants,
  },
  label: {
    control: { type: 'text' as const },
  },
};

const renderChip = (variant: ChipVariant, label: string, size?: 'sm' | 'md' | 'lg', color?: ChipColor) => {
  switch (variant) {
    case 'Radio': {
      return (
        <Chip.Radio data-size={size} data-color={color} name="preview-radio" value={size ?? 'preview'} defaultChecked>
          {label}
        </Chip.Radio>
      );
    }
    case 'Checkbox': {
      return (
        <Chip.Checkbox
          data-size={size}
          data-color={color}
          name="preview-checkbox"
          value={size ?? 'preview'}
          defaultChecked
        >
          {label}
        </Chip.Checkbox>
      );
    }
    case 'Removable': {
      return (
        <Chip.Removable data-size={size} data-color={color} aria-label={`Slett ${label}`}>
          {label}
        </Chip.Removable>
      );
    }
    case 'Button': {
      return (
        <Chip.Button data-size={size} data-color={color}>
          {label}
        </Chip.Button>
      );
    }
  }
};

const meta = {
  title: 'Components/Chip',
  component: Chip.Radio,
  tags: ['autodocs', 'ds'],
  parameters: {
    customStyles: { display: 'flex', gap: 'var(--ds-size-2)' },
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/chip/overview)',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<ChipStoryArgs>;

export const Preview: Story = {
  render: ({ variant, label }) => renderChip(variant, label),
  args: defaultVariantArgs,
  argTypes: variantArgTypes,
};

/**
 * Go into the story itself to have an option to switch between variants
 */
export const Sizes: Story = {
  render: ({ variant, label }) => (
    <Box gap={8}>
      {sizes.map((size) => {
        return <span key={size}>{renderChip(variant, `${label} ${size.toUpperCase()}`, size)}</span>;
      })}
    </Box>
  ),
  args: defaultVariantArgs,
  argTypes: variantArgTypes,
};

export const Colors: Story = {
  render: ({ variant, label }) => (
    <Box gap={8}>
      {chipColors.map((color) => {
        return <span key={color}>{renderChip(variant, `${label} ${color}`, 'md', color)}</span>;
      })}
    </Box>
  ),
  args: {
    ...defaultVariantArgs,
    label: '',
  },
  argTypes: variantArgTypes,
  parameters: {
    customStyles: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--ds-size-2)',
      width: '100%',
    },
  },
};

export const Checkbox = {
  render: (args) => <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>,
} satisfies StoryObj<typeof Chip.Checkbox>;

export const Removable = {
  render: (args) => <Chip.Removable {...args}>Norge</Chip.Removable>,
  args: {
    'aria-label': 'Slett Norge',
  },
} satisfies StoryObj<typeof Chip.Removable>;

export const Button = {
  render: (args) => <Chip.Button {...args}>Tøm alle filtre</Chip.Button>,
  parameters: {
    customStyles: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
} satisfies StoryObj<typeof Chip.Button>;
