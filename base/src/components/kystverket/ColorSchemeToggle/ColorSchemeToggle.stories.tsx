import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { ColorSchemeToggle, Paragraph, useColorScheme, type ColorScheme } from '~/main';

const meta = {
  title: 'Components/Actions/ColorSchemeToggle',
  component: ColorSchemeToggle,
  tags: ['autodocs', 'kyv'],
  args: {
    colorScheme: 'light',
    onColorSchemeChange: () => {},
    variant: 'mono',
    'data-size': 'md',
  },
  argTypes: {
    colorScheme: { control: false },
    onColorSchemeChange: { control: false },
    variant: {
      control: 'inline-radio',
      options: ['mono', 'color'],
    },
    'data-size': {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Rund knapp som bytter mellom lys og mørk modus. I lys modus står sola over havet; i mørk modus synker den bak horisonten og månen og tre stjerner kommer fram. ' +
          'Komponenten er kontrollert — bruk `useColorScheme`. Som standard følger siden systeminnstillingen (`data-color-scheme="auto"` på `<html>`). Velger brukeren noe annet enn systemet, lagres valget i `localStorage` (`styrbord-color-scheme`); velger de det systemet viser, slettes valget og siden følger systemet igjen. ' +
          'Tilgjengelig navn beskriver handlingen («Bytt til mørk modus») og bytter med tilstanden, så knappen har ikke `aria-pressed`. ' +
          '`mono` (standard) er et strekikon i `primary-base-default` som følger sidens fargemodus; `color` har himmel, hav og gul sol med faste farger. ' +
          'Størrelse settes med `data-size`: `xs` ≈ 16 px, `sm` ≈ 24 px, `md` ≈ 32 px (standard), `lg` ≈ 48 px og `xl` ≈ 64 px.',
      },
    },
  },
} satisfies Meta<typeof ColorSchemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The system setting, so the stories start where a real page would. */
const systemScheme = (): ColorScheme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/** Stand-in for a page: `data-color-scheme` on a wrapper, since Storybook's own wrapper overrides `<html>`. */
const Page = ({ colorScheme, children }: { colorScheme: ColorScheme; children: ReactNode }) => (
  <div
    data-color-scheme={colorScheme}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--ds-size-4)',
      padding: 'var(--ds-size-6)',
      borderRadius: 'var(--ds-border-radius-lg)',
      background: 'var(--ds-color-neutral-background-default)',
      color: 'var(--ds-color-neutral-text-default)',
    }}
  >
    {children}
  </div>
);

export const Preview: Story = {
  render: (args) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return (
      <Page colorScheme={colorScheme}>
        <ColorSchemeToggle {...args} colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
        <Paragraph>Fargemodus: {colorScheme}</Paragraph>
      </Page>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return (
      <Page colorScheme={colorScheme}>
        <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} variant="mono" />
        <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} variant="color" />
      </Page>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>(systemScheme); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    return (
      <div style={{ display: 'grid', gap: 'var(--ds-size-4)' }}>
        {(['mono', 'color'] as const).map((variant) => (
          <Page key={variant} colorScheme={colorScheme}>
            {sizes.map((size) => (
              <ColorSchemeToggle
                key={size}
                colorScheme={colorScheme}
                onColorSchemeChange={setColorScheme}
                variant={variant}
                data-size={size}
              />
            ))}
          </Page>
        ))}
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const noop = () => {};
    return (
      <div style={{ display: 'grid', gap: 'var(--ds-size-4)' }}>
        {(['light', 'dark'] as const).map((scheme) => (
          <Page key={scheme} colorScheme={scheme}>
            <ColorSchemeToggle colorScheme={scheme} onColorSchemeChange={noop} variant="mono" />
            <ColorSchemeToggle colorScheme={scheme} onColorSchemeChange={noop} variant="color" />
            <Paragraph>{scheme}</Paragraph>
          </Page>
        ))}
      </div>
    );
  },
};

/**
 * With `useColorScheme` the page follows the system until the user picks the other scheme. That choice
 * survives a reload; picking what the system shows clears it and the page follows the system again.
 */
export const WithHook: Story = {
  render: (args) => {
    const [colorScheme, setColorScheme, followsSystem] = useColorScheme(); // NOSONAR - Storybook render fungerer som en React-komponent, hooks er gyldige her
    return (
      <Page colorScheme={colorScheme}>
        <ColorSchemeToggle {...args} colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
        <Paragraph>
          {followsSystem
            ? `Følger systemet (${colorScheme}).`
            : `Lagret valg: ${colorScheme}. Last siden på nytt — valget blir stående.`}
        </Paragraph>
      </Page>
    );
  },
};
