import { Tag, TagProps } from '~/main';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

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

const colorVariants = ['accent', 'extra1', 'neutral', 'success', 'warning', 'danger', 'info'];

export const Preview: Story = {
  args: {
    children: 'New',
  },
};

const sizes: TagProps['data-size'][] = ['sm', 'md', 'lg'];
export const Sizes: StoryFn<typeof Tag> = ({ ...rest }) => {
  return (
    <>
      {sizes.map((size) => (
        <Tag key={size} data-size={size} {...rest}>
          {size}
        </Tag>
      ))}
    </>
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
    <>
      {colorVariants.map((color) => (
        <Tag key={color} data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </>
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
    <>
      {colorVariants.map((color) => (
        <Tag key={color} bordered data-color={color as TagProps['data-color']} {...rest}>
          {color}
        </Tag>
      ))}
    </>
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
        <Tag key={color} rounded data-color={color as TagProps['data-color']} {...rest}>
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
        <Tag key={size} rounded data-size={size} {...rest}>
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
        <Tag key={color} rounded bordered data-color={color as TagProps['data-color']} {...rest}>
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
    plainBackground: true,
  },
};

export const PlainBackgroundRoundedWithIcon: Story = {
  args: {
    children: 'Status',
    icon: 'check_circle',
    plainBackground: true,
    rounded: true,
    'data-color': 'accent',
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
        <Tag key={color} rounded icon="info" bordered data-color={color as TagProps['data-color']} {...rest}>
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
