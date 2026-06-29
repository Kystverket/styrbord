import { Box, Chip, ChipButtonProps } from '~/main';
import type { Meta, StoryObj } from '@storybook/react-vite';

const chipVariants = ['Radio', 'Checkbox', 'Removable', 'Button'] as const;

type ChipVariant = (typeof chipVariants)[number];

type ChipStoryArgs = {
  variant: ChipVariant;
  label: string;
  color: ChipColor;
  disabled: boolean;
};

type ChipColor = NonNullable<ChipButtonProps['data-color']>;

const chipColors: ChipColor[] = ['none', 'primary', 'neutral', 'primary/subtle', 'neutral/subtle'];
const sizes = ['sm', 'md', 'lg'] as const;

const defaultVariantArgs: ChipStoryArgs = {
  variant: 'Radio',
  label: 'Nynorsk',
  color: 'none',
  disabled: false,
};

const variantArgTypes = {
  variant: {
    control: { type: 'select' as const },
    options: chipVariants,
  },
  label: {
    control: { type: 'text' as const },
  },
  color: {
    control: { type: 'select' as const },
    description: 'Subtle is mainly used for Removable variant',
    options: chipColors,
  },
  disabled: {
    control: { type: 'boolean' as const },
  },
};

const renderChip = (
  variant: ChipVariant,
  label: string,
  size?: 'sm' | 'md' | 'lg',
  color?: ChipColor,
  disabled?: boolean,
) => {
  switch (variant) {
    case 'Radio': {
      return (
        <Chip.Radio
          data-size={size}
          data-color={color}
          disabled={disabled}
          name="preview-radio"
          value={size ?? 'preview'}
          defaultChecked
        >
          {label}
        </Chip.Radio>
      );
    }
    case 'Checkbox': {
      return (
        <Chip.Checkbox
          data-size={size}
          data-color={color}
          disabled={disabled}
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
        <Chip.Removable data-size={size} data-color={color} disabled={disabled} aria-label={`Slett ${label}`}>
          {label}
        </Chip.Removable>
      );
    }
    case 'Button': {
      return (
        <Chip.Button data-size={size} data-color={color} disabled={disabled}>
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
  render: ({ variant, label, color, disabled }) => renderChip(variant, label, 'md', color, disabled),
  args: defaultVariantArgs,
  argTypes: variantArgTypes,
};

/**
 * Go into the story itself to have an option to switch between variants
 */
export const Sizes: Story = {
  render: ({ variant, label, disabled }) => (
    <Box gap={8}>
      {sizes.map((size) => {
        return (
          <span key={size}>{renderChip(variant, `${label} ${size.toUpperCase()}`, size, undefined, disabled)}</span>
        );
      })}
    </Box>
  ),
  args: defaultVariantArgs,
  argTypes: variantArgTypes,
};

export const Colors: Story = {
  render: ({ variant, label, disabled }) => (
    <Box gap={8}>
      {chipColors.map((color) => {
        return <span key={color}>{renderChip(variant, `${label} ${color}`, 'md', color, disabled)}</span>;
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
