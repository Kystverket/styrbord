import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

type DataColor = 'primary' | 'neutral' | 'danger';
type DataColorSchemes = 'light' | 'dark';

type StoryArgs = {
  dataColor: DataColor;
  dataColorScheme: DataColorSchemes;
};

const TOKENS = [
  '--ds-color-background-default',
  '--ds-color-background-tinted',
  '--ds-color-surface-default',
  '--ds-color-surface-tinted',
  '--ds-color-surface-hover',
  '--ds-color-surface-active',
  '--ds-color-border-subtle',
  '--ds-color-border-default',
  '--ds-color-border-strong',
  '--ds-color-text-subtle',
  '--ds-color-text-default',
  '--ds-color-base-default',
  '--ds-color-base-hover',
  '--ds-color-base-active',
  '--ds-color-base-contrast-subtle',
  '--ds-color-base-contrast-default',
] as const;

const dataColorOptions: DataColor[] = ['primary', 'neutral', 'danger'];
const dataColorSchemeOptions: DataColorSchemes[] = ['dark', 'light'];

const baseCard: CSSProperties = {
  width: '100%',
  minHeight: '5.5rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--ds-color-border-subtle)',
  padding: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'monospace',
  fontSize: '0.85rem',
  lineHeight: 1.35,
  boxSizing: 'border-box',
};

function getTokenStyle(token: (typeof TOKENS)[number]): CSSProperties {
  const variable = `var(${token})`;

  if (token.startsWith('--ds-color-background-') || token.startsWith('--ds-color-surface-')) {
    return {
      ...baseCard,
      background: variable,
      color: 'var(--ds-color-text-default)',
      borderColor: 'var(--ds-color-border-subtle)',
    };
  }

  if (token.startsWith('--ds-color-border-')) {
    return {
      ...baseCard,
      background: 'var(--ds-color-surface-default)',
      color: 'var(--ds-color-text-default)',
      borderWidth: '3px',
      borderColor: variable,
    };
  }

  if (token.startsWith('--ds-color-text-')) {
    return {
      ...baseCard,
      background: 'var(--ds-color-surface-tinted)',
      color: variable,
      borderColor: 'var(--ds-color-border-subtle)',
    };
  }

  if (token.startsWith('--ds-color-base-contrast-')) {
    return {
      ...baseCard,
      background: 'var(--ds-color-base-default)',
      color: variable,
      borderColor: 'transparent',
    };
  }

  return {
    ...baseCard,
    background: variable,
    color: 'var(--ds-color-base-contrast-default)',
    borderColor: 'transparent',
  };
}

const ColorTokenCollections = ({ dataColor, dataColorScheme }: StoryArgs) => {
  return (
    <div
      data-color={dataColor}
      data-color-scheme={dataColorScheme}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '0.75rem',
        padding: '0.75rem',
        background: 'var(--ds-color-background-default)',
      }}
    >
      {TOKENS.map((token) => (
        <div key={token} style={getTokenStyle(token)}>
          {token}
        </div>
      ))}
    </div>
  );
};

const meta = {
  title: 'Tokens/Color Collections',
  tags: ['autodocs'],
  component: ColorTokenCollections,
  args: {
    dataColor: 'primary',
    dataColorScheme: 'light',
  },
  argTypes: {
    dataColor: {
      options: dataColorOptions,
      control: { type: 'inline-radio' },
      description: 'Applies data-color to the preview container.',
    },
    dataColorScheme: {
      options: dataColorSchemeOptions,
      control: { type: 'inline-radio' },
      description: 'Applies data-color-scheme to the preview container.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Preview of collection color tokens. Change data-color to inspect how aliases map for primary, neutral and danger.',
      },
    },
  },
  render: (args: StoryArgs) => <ColorTokenCollections {...args} />,
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllCollectionTokens: Story = {};
