import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import Box from '../../kystverket/Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Paragraph, Text, TextProps } from '~/main';

const meta = {
  title: 'Typography/Text',
  component: Text,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fontWeight: {
      control: 'select',
      options: [undefined, 'regular', 'medium', 'semibold'],
    },
    color: {
      control: 'select',
      options: [undefined, 'accent', 'brand1', 'brand2', 'neutral', 'success', 'warning', 'danger', 'info'],
    },
    'data-color-subtle': {
      control: 'boolean',
    },
    textWrap: {
      control: 'select',
      options: [undefined, 'wrap', 'balance', 'pretty', 'nowrap'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: 'Sandnessjøen havn',
    size: 'md',
  },
};

const sizes: NonNullable<TextProps['size']>[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Sizes: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {sizes.map((size) => (
        <Text key={size} size={size} {...rest}>
          {children ?? `Text ${size}`}
        </Text>
      ))}
    </Box>
  );
};

Sizes.args = {
  children: undefined,
};

const weights: NonNullable<TextProps['fontWeight']>[] = ['regular', 'medium', 'semibold'];

export const Weights: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {weights.map((fontWeight) => (
        <Text key={fontWeight} fontWeight={fontWeight} {...rest}>
          {children ?? `Text ${fontWeight}`}
        </Text>
      ))}
    </Box>
  );
};

Weights.args = {
  size: 'md',
  children: undefined,
};

const colors: NonNullable<TextProps['color']>[] = [
  'accent',
  'brand1',
  'brand2',
  'neutral',
  'success',
  'warning',
  'danger',
  'info',
];

export const Colors: StoryFn<typeof Text> = ({ ...rest }) => {
  return (
    <Box gap={16}>
      {colors.map((color) => (
        <Box key={color} gap={4}>
          <Text color={color} {...rest}>
            {color}
          </Text>
          <Text color={color} data-color-subtle {...rest}>
            {color} subtle
          </Text>
        </Box>
      ))}
    </Box>
  );
};

Colors.args = {
  size: 'md',
};

const textWraps: NonNullable<TextProps['textWrap']>[] = ['wrap', 'balance', 'pretty', 'nowrap'];

export const TextWrap: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={16}>
      {textWraps.map((textWrap) => (
        <Box key={textWrap} width="form" gap={4}>
          <Text size="sm" fontWeight="medium">
            {textWrap}
          </Text>
          <Text textWrap={textWrap} {...rest}>
            {children ??
              'Denne teksten brytes over flere linjer for å vise hvordan text-wrap påvirker linjeskift og lesbarhet.'}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

TextWrap.args = {
  size: 'md',
  children: undefined,
};

export const Examples: StoryFn<typeof Text> = () => {
  return (
    <Box gap={24}>
      <Box width="form" gap={8}>
        <Text size="xl" fontWeight="semibold">
          Sak 2026-0142 — Søknad om utslippstillatelse
        </Text>
        <Paragraph size="md">
          Saken gjelder <Text fontWeight="semibold">utslippstillatelse</Text> for Sandnessjøen havn. Status er{' '}
          <Text color="warning" fontWeight="medium">
            under behandling
          </Text>
          , og saksbehandler har markert fristen som{' '}
          <Text fontWeight="semibold" color="danger">
            forsinket
          </Text>
          .
        </Paragraph>
      </Box>
    </Box>
  );
};
