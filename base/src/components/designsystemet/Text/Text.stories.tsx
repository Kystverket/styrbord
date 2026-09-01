import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import Box from '../../kystverket/Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading, Paragraph, Text, TextProps } from '~/main';

import { colorValues, textAlignValues, textTransformValues, textWrapValues } from './Text';

const meta = {
  title: 'Typography/Text',
  parameters: {
    docs: {
      description: {
        component: 'Denne komponenten tillater for ekstra styling på tekst. Den legger inn et span element',
      },
    },
  },
  component: Text,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {
    'data-size': {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: { defaultValue: { summary: 'arver størrelse fra omgivelsene' } },
    },
    weight: {
      control: 'select',
      options: [undefined, 'regular', 'medium', 'semibold'],
      table: { defaultValue: { summary: 'regular' } },
    },
    ['data-color']: {
      control: 'select',
      options: [undefined, ...colorValues],
      table: { defaultValue: { summary: 'ingen (arver farge)' } },
    },
    'data-color-subtle': {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    wrap: {
      control: 'select',
      options: [undefined, ...textWrapValues],
      table: { defaultValue: { summary: 'wrap' } },
    },
    transform: {
      control: 'select',
      options: [undefined, ...textTransformValues],
      table: { defaultValue: { summary: 'none' } },
    },
    align: {
      control: 'select',
      options: [undefined, ...textAlignValues],
      table: { defaultValue: { summary: 'left' } },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    children: 'Sandnessjøen havn',
    'data-size': 'md',
  },
};

const sizes: NonNullable<TextProps['data-size']>[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const Sizes: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {sizes.map((size) => (
        <Text key={size} data-size={size} {...rest}>
          {children ?? `Text ${size}`}
        </Text>
      ))}
    </Box>
  );
};

Sizes.args = {
  children: undefined,
};

const weights: NonNullable<TextProps['weight']>[] = ['regular', 'medium', 'semibold'];

export const Weights: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {weights.map((fontWeight) => (
        <Text key={fontWeight} weight={fontWeight} {...rest}>
          {children ?? `Text ${fontWeight}`}
        </Text>
      ))}
    </Box>
  );
};

Weights.args = {
  'data-size': 'md',
  children: undefined,
};

export const Colors: StoryFn<typeof Text> = ({ ...rest }) => {
  return (
    <Box gap={16}>
      {colorValues.map((color) => (
        <Box key={color} gap={4}>
          <Text weight="semibold" data-color={color} {...rest}>
            {color}
          </Text>
          <Text weight="semibold" data-color={color} data-color-subtle {...rest}>
            {color} subtle
          </Text>
        </Box>
      ))}
    </Box>
  );
};

Colors.args = {
  'data-size': 'md',
};

export const TextWrap: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={16}>
      {textWrapValues.map((textWrap) => (
        <Box key={textWrap} width="form" gap={4}>
          <Text data-size="sm" weight="medium">
            {textWrap}
          </Text>
          <Text wrap={textWrap} {...rest}>
            {children ??
              'Denne teksten brytes over flere linjer for å vise hvordan text-wrap påvirker linjeskift og lesbarhet.'}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

TextWrap.args = {
  'data-size': 'md',
  children: undefined,
};

export const TextTransform: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {textTransformValues.map((textTransform) => (
        <Text key={textTransform} transform={textTransform} {...rest}>
          {children ?? 'Sandnessjøen havn'}
        </Text>
      ))}
    </Box>
  );
};

TextTransform.args = {
  'data-size': 'md',
  children: undefined,
};

export const TextAlign: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={16}>
      {textAlignValues.map((textAlign) => (
        <Box key={textAlign} width="form" gap={4}>
          <Text data-size="sm" weight="medium">
            {textAlign}
          </Text>
          <Text align={textAlign} style={{ display: 'block' }} {...rest}>
            {children ??
              'Denne teksten brytes over flere linjer for å vise hvordan text-align påvirker justering av tekst.'}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

TextAlign.args = {
  'data-size': 'md',
  children: undefined,
};

export const Examples: StoryFn<typeof Text> = () => {
  return (
    <Box gap={24}>
      <Box width="form" gap={8}>
        <Heading>
          <Text data-color="primary">Sak 2026-0142 — Søknad om utslippstillatelse</Text>
        </Heading>
        <Paragraph size="md">
          <Text data-color="neutral" weight="medium">
            Saken gjelder utslippstillatelse for Sandnessjøen havn. Status er under behandling,
            <br />
            og saksbehandler har markert fristen som forsinket.
          </Text>
        </Paragraph>
      </Box>
    </Box>
  );
};
