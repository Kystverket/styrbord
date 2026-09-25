import { Box, Tag, TagProps } from '~/main';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { styrbordSemanticColors, styrbordPaletteColors } from '@kystverket/styrbord-tokens/colors';
type Story = StoryObj<typeof Tag>;

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs', 'ds'],
  parameters: {
    customStyles: { justifyContent: 'start' },
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/tag/overview)',
      },
    },
  },
} satisfies Meta;

const colorVariants = [...styrbordSemanticColors, ...styrbordPaletteColors];

export const Preview: Story = {
  args: {
    children: 'New',
  },
};

const sizes: TagProps['data-size'][] = ['sm', 'md', 'lg'];
export const Sizes: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <Box horizontal wrap gap={8}>
      {sizes.map((size) => (
        <>
          <Tag key={size} data-size={size} {...rest}>
            {size}
          </Tag>
          <Tag key={size} icon="anchor" data-size={size} {...rest}>
            {size}
          </Tag>
        </>
      ))}
    </Box>
  );
};

Sizes.parameters = {
  customStyles: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--ds-size-2)',
  },
};

export const Colors: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <Box horizontal wrap gap={8}>
      {colorVariants.map((color) => (
        <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </Box>
  );
};

Colors.parameters = {
  customStyles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--ds-size-2)',
    height: '100%',
    width: '100%',
    placeItems: 'center',
  },
};

export const Borders: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <Box horizontal wrap gap={8}>
      {colorVariants.map((color) => (
        <Tag key={color} variant="outline" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </Box>
  );
};

Borders.parameters = {
  customStyles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--ds-size-2)',
    height: '100%',
    width: '100%',
    placeItems: 'center',
  },
};

export const Rounded: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {colorVariants.map((color) => (
        <Tag key={color} radius="full" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </>
  );
};

export const RoundedWithSizes: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {sizes.map((size) => (
        <Tag key={size} radius="full" data-size={size} {...rest}>
          {size}
        </Tag>
      ))}
    </>
  );
};

export const RoundedWithBorders: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {colorVariants.map((color) => (
        <Tag key={color} radius="full" variant="outline" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </>
  );
};

export const WithIcon: Story = {
  args: {
    children: 'Status',
    icon: 'check_circle',
  },
};

export const PlainBackground: Story = {
  args: {
    children: 'Status',
    'data-color-transparent': true,
  },
};

export const PlainBackgroundRoundedWithIcon: Story = {
  args: {
    children: 'Status',
    icon: 'check_circle',
    radius: 'full',
    'data-color': 'accent',
    'data-color-transparent': true,
  },
};

export const WithIconColors: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {colorVariants.map((color) => (
        <Tag key={color} icon="info" data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </>
  );
};

WithIconColors.parameters = {
  customStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--ds-size-2)',
  },
};

export const RoundedWithIconColors: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {colorVariants.map((color) => (
        <Tag
          key={color}
          radius="full"
          icon="info"
          variant="outline"
          data-color={color as TagProps['data-color']}
          {...rest}
        >
          {color}
        </Tag>
      ))}
    </>
  );
};

RoundedWithIconColors.parameters = {
  customStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--ds-size-2)',
  },
};

export const RoundedWithIconPlainColors: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {colorVariants.map((color) => (
        <Tag
          key={color}
          radius="full"
          icon="info"
          variant="outline"
          data-color={color as TagProps['data-color']}
          data-color-transparent
          {...rest}
        >
          {color}
        </Tag>
      ))}
    </>
  );
};

RoundedWithIconPlainColors.parameters = {
  customStyles: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--ds-size-2)',
  },
};
