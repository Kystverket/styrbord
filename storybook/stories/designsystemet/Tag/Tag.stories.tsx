import { Tag, TagProps } from '~/main';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Tag>;

export default {
  title: 'Designsystemet/Tag',
  component: Tag,
  parameters: {
    customStyles: { justifyContent: 'start' },
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
