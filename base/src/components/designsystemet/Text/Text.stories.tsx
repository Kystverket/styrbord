import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import Box from '../../kystverket/Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading, Paragraph, Text, TextProps } from '~/main';

import { textAlignValues, textColorValues, textTransformValues, textWrapValues } from './Text';

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
    },
    fontWeight: {
      control: 'select',
      options: [undefined, 'regular', 'medium', 'semibold'],
    },
    ['data-color']: {
      control: 'select',
      options: [undefined, ...textColorValues],
    },
    'data-color-subtle': {
      control: 'boolean',
    },
    textWrap: {
      control: 'select',
      options: [undefined, ...textWrapValues],
    },
    textTransform: {
      control: 'select',
      options: [undefined, ...textTransformValues],
    },
    textAlign: {
      control: 'select',
      options: [undefined, ...textAlignValues],
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
  'data-size': 'md',
  children: undefined,
};

export const Colors: StoryFn<typeof Text> = ({ ...rest }) => {
  return (
    <Box gap={16}>
      {textColorValues.map((color) => (
        <Box key={color} gap={4}>
          <Text fontWeight="semibold" data-color={color} {...rest}>
            {color}
          </Text>
          <Text fontWeight="semibold" data-color={color} data-color-subtle {...rest}>
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
          <Text data-size="sm" fontWeight="medium">
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
  'data-size': 'md',
  children: undefined,
};

export const TextTransform: StoryFn<typeof Text> = ({ children, ...rest }) => {
  return (
    <Box gap={8}>
      {textTransformValues.map((textTransform) => (
        <Text key={textTransform} textTransform={textTransform} {...rest}>
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
          <Text data-size="sm" fontWeight="medium">
            {textAlign}
          </Text>
          <Text textAlign={textAlign} style={{ display: 'block' }} {...rest}>
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
          <Text data-color="neutral" fontWeight="medium">
            Saken gjelder utslippstillatelse for Sandnessjøen havn. Status er under behandling,
            <br />
            og saksbehandler har markert fristen som forsinket.
          </Text>
        </Paragraph>
      </Box>
    </Box>
  );
};
