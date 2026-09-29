import type { Meta, StoryObj } from '@storybook/react-vite';
import { styrbordPaletteColors, styrbordSemanticColors } from '@kystverket/styrbord-tokens/colors';
import { DataColor, Heading } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Surface from './Surface';
import { SurfaceProps, surfaceBorderStyles, surfaceColorVariants, surfaceSizes } from './Surface.types';

const meta = {
  title: 'Components/Surface',
  component: Surface,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    'data-color': {
      options: [undefined, ...styrbordSemanticColors, ...styrbordPaletteColors] satisfies (DataColor | undefined)[],
      control: { type: 'select' },
    },
    'data-color-variant': {
      options: [undefined, ...surfaceColorVariants],
      control: { type: 'radio' },
    },
    'border-style': { options: surfaceBorderStyles, control: { type: 'radio' } },
    gap: { options: surfaceSizes, control: { type: 'select' } },
    p: { options: [undefined, ...surfaceSizes], control: { type: 'select' } },
    m: { options: [undefined, ...surfaceSizes], control: { type: 'select' } },
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

const Item = ({ children, ...props }: SurfaceProps) => (
  <Surface data-color="primary" p={4} {...props}>
    {children}
  </Surface>
);

const items = (
  <>
    <Item>Første</Item>
    <Item data-color="lyng" data-color-variant="subtle">
      Andre
    </Item>
    <Item data-color="lyng" data-color-variant="tinted">
      Tredje
    </Item>
    <Item data-color="lyng" data-color-variant="base">
      Fjerde
    </Item>
  </>
);

export const Default: Story = {
  args: { children: items, gap: 2 },
};

export const Horizontal: Story = {
  args: { children: items, gap: 2, horizontal: true },
};

export const Gap: Story = {
  args: { children: items, gap: 8 },
};

export const HorizontalJustifyEnd: Story = {
  args: { children: items, gap: 4, horizontal: true, justify: 'end', align: 'center' },
};

export const HorizontalJustifyBetween: Story = {
  args: { children: items, gap: 4, horizontal: true, justify: 'between', align: 'center' },
};

const spacingExamples: Omit<SurfaceProps, 'children'>[] = [
  { p: 8, pb: 4, mt: 2 },
  { m: 8, pr: 12 },
  { p: 15, px: 4, py: 0 },
  { p: 15, pl: 0, pt: 2, pr: 4, pb: 8 },
  { m: 15, mx: 0, my: 4 },
  { m: 15, ml: 0, mt: 2, mr: 4, mb: 8 },
];

export const Spacings: Story = {
  args: {
    gap: 4,
    align: 'start',
    children: spacingExamples.map((spacing) => {
      const label = Object.entries(spacing)
        .map(([key, value]) => `${key}={${value}}`)
        .join(' ');
      return (
        <Surface key={label} data-color="neutral" data-color-variant="tinted" border-style="solid">
          <Surface data-color="warning" {...spacing}>
            {label}
          </Surface>
        </Surface>
      );
    }),
  },
};

export const Sizes: Story = {
  args: {
    gap: 1,
    align: 'start',
    children: surfaceSizes.map((size) => (
      <Surface key={size} horizontal align="center" gap={4}>
        <code style={{ width: '4rem' }}>{size}</code>
        <Surface data-color="primary" data-color-variant="base" p={size} radius="sm" />
      </Surface>
    )),
  },
};

export const DataSize: Story = {
  args: {
    gap: 4,
    children: (['sm', 'md', 'lg'] as const).map((dataSize) => (
      <Surface key={dataSize} data-size={dataSize} data-color="primary" p={6} gap={4} radius="lg" horizontal>
        <Item data-color="info">data-size=&quot;{dataSize}&quot;</Item>
        <Item data-color="info">p=&#123;6&#125; gap=&#123;4&#125;</Item>
      </Surface>
    )),
  },
};

export const Colors: Story = {
  args: {
    gap: 4,
    children: [...styrbordSemanticColors, ...styrbordPaletteColors].map((color) => (
      <Surface key={color} gap={2}>
        <Heading level={3} data-size="2xs">
          {color}
        </Heading>
        <Surface horizontal="screen-sm" gap={2}>
          {surfaceColorVariants.map((variant) => (
            <Surface
              key={variant}
              data-color={color}
              data-color-variant={variant}
              border-style="solid"
              p={4}
              radius="lg"
              grow
            >
              {variant}
            </Surface>
          ))}
        </Surface>
      </Surface>
    )),
  },
};

export const BorderStyles: Story = {
  args: {
    gap: 4,
    horizontal: true,
    wrap: true,
    children: surfaceBorderStyles.map((borderStyle) => (
      <Surface key={borderStyle} data-color="neutral" border-style={borderStyle} p={6} radius="lg">
        {borderStyle}
      </Surface>
    )),
  },
};

export const Radius: Story = {
  args: {
    gap: 4,
    horizontal: true,
    wrap: true,
    children: (['none', 'default', 'sm', 'md', 'lg', 'xl', 'full'] as const).map((radius) => (
      <Item key={radius} radius={radius} p={6} border-style="solid">
        {radius}
      </Item>
    )),
  },
};

export const WrapAndBasis: Story = {
  args: {
    gap: 8,
    children: (
      <>
        <Heading level={3} data-size="xs">
          Grow
        </Heading>
        <Surface gap={4} horizontal>
          <Item grow={3}>3</Item>
          <Item data-color="info" grow={2}>
            2
          </Item>
          <Item data-color="success" grow={1}>
            1
          </Item>
        </Surface>
        <Heading level={3} data-size="xs">
          Wrap
        </Heading>
        <Surface gap={4} horizontal wrap>
          <Item grow basis={30}>
            1
          </Item>
          <Item data-color="info" grow basis={30}>
            2
          </Item>
          <Item data-color="success" grow basis={30}>
            3
          </Item>
        </Surface>
        <Heading level={3} data-size="xs">
          Reverse wrap
        </Heading>
        <Surface gap={4} horizontal wrap="reverse">
          <Item grow basis={30}>
            1
          </Item>
          <Item data-color="info" grow basis={30}>
            2
          </Item>
          <Item data-color="success" grow basis={30}>
            3
          </Item>
        </Surface>
      </>
    ),
  },
};

export const HorizontalBreakpoints: Story = {
  args: {
    gap: 8,
    children: (['screen-xxs', 'screen-xs', 'screen-sm', 'screen-md', 'screen-lg'] as const).map((screen) => (
      <Surface key={screen} gap={4} horizontal={screen}>
        <Item grow>horizontal</Item>
        <Item data-color="info" grow>
          &gt;=
        </Item>
        <Item data-color="success" grow>
          {screen}
        </Item>
      </Surface>
    )),
  },
};

export const ShowAndHide: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <Item show="screen-md">show=&quot;screen-md&quot; — synlig fra md og opp</Item>
        <Item data-color="info" hide="screen-md">
          hide=&quot;screen-md&quot; — skjult fra md og opp
        </Item>
      </>
    ),
  },
};
