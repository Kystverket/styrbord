import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Paragraph } from '@digdir/designsystemet-react';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import type { ColorScheme } from './ColorSchemeToggle.types';
import Surface from '../Surface/Surface';

const meta = {
  title: 'Components/ColorSchemeToggle',
  component: ColorSchemeToggle,
  tags: ['autodocs', 'kyv'],
  parameters: {
    docs: {
      description: {
        component: `
Bryter mellom lyst og mørkt fargetema. Sola eller månen er bryteren, og fyret glir inn og ut fra nærmeste kant
når den flytter seg.

Komponenten sier bare fra om valget via \`onChange\` — applikasjonen bestemmer selv hvor \`data-color-scheme\` settes.
Illustrasjonen låser sitt eget fargetema, så den ser lik ut uansett hvilket tema siden rundt har.

**Egnet til:**
- Valg av lyst/mørkt tema i header eller innstillinger

**Uegnet til:**
- Andre av/på-valg — bruk \`Switch\`
        `,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof ColorSchemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};

export const Dark: Story = {
  args: { defaultValue: 'dark' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const ControllingThePage: Story = {
  name: 'Styrer fargetemaet',
  render: (args) => {
    const [scheme, setScheme] = useState<ColorScheme>('light');
    return (
      <Surface data-color-scheme={scheme} p={6} gap={4} radius="lg">
        <ColorSchemeToggle
          {...args}
          value={scheme}
          onChange={(next) => {
            setScheme(next);
            args.onChange?.(next);
          }}
        />
        <Paragraph>Fargetemaet er nå {scheme === 'dark' ? 'mørkt' : 'lyst'}.</Paragraph>
      </Surface>
    );
  },
};
