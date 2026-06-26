import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '@kystverket/styrbord-tokens/colors';

type ColorScheme = 'light' | 'dark';

type StoryArgs = {
  colorScheme: ColorScheme;
};

function isLight(hex: string): boolean {
  const clean = hex.replace('#', '');
  const r = Number.parseInt(clean.substring(0, 2), 16);
  const g = Number.parseInt(clean.substring(2, 4), 16);
  const b = Number.parseInt(clean.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
}

const swatchStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.375rem',
  width: '9rem',
};

const labelStyle: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '0.75rem',
  lineHeight: 1.3,
  textAlign: 'center',
  color: '#2a2b35',
  wordBreak: 'break-word',
};

const hexStyle: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '0.7rem',
  color: '#5b5c6b',
};

function Swatch({ name, hex, path }: Readonly<{ name: string; hex: string; path: string }>) {
  const squareStyle: CSSProperties = {
    width: '3rem',
    height: '3rem',
    borderRadius: '0.375rem',
    background: hex,
    border: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isLight(hex) ? '#2a2b35' : '#ffffff',
  };

  return (
    <div style={swatchStyle} title={path}>
      <div style={squareStyle} />
      <span style={labelStyle}>{name}</span>
      <span style={hexStyle}>{hex}</span>
    </div>
  );
}

const ColorTokens = ({ colorScheme }: StoryArgs) => {
  const scheme = colors[colorScheme];
  const collections = Object.entries(scheme) as [string, Record<string, string>][];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '1rem' }}>
      {collections.map(([collectionName, tokens]) => (
        <section key={collectionName}>
          <h3
            style={{
              fontFamily: 'sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '0.75rem',
              textTransform: 'capitalize',
              color: '#2a2b35',
            }}
          >
            {collectionName}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {Object.entries(tokens).map(([tokenName, hex]) => (
              <Swatch
                key={tokenName}
                name={tokenName}
                hex={hex}
                path={`colors.${colorScheme}.${collectionName}.${tokenName}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const meta = {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
  component: ColorTokens,
  args: {
    colorScheme: 'light',
  },
  argTypes: {
    colorScheme: {
      options: ['light', 'dark'] as ColorScheme[],
      control: { type: 'inline-radio' },
      description: 'Color scheme to preview.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'All color tokens available in code via `import { colors } from "@kystverket/styrbord-tokens/colors"`. Each swatch shows the token name and its resolved hex value.',
      },
    },
  },
  render: (args: StoryArgs) => <ColorTokens {...args} />,
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};
