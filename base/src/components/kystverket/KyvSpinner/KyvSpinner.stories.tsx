import type { Meta, StoryObj } from '@storybook/react-vite';
import KyvSpinner from './KyvSpinner';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Feedback/KyvSpinner',
  component: KyvSpinner,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    docs: {
      description: {
        component: `
Indeterminate laste-animasjon: et fyrtårn på en grønn øy, med roterende lysstråle og bølger som ruller forbi.

Standard er en strektegning på gjennomsiktig bakgrunn, i samme stil som fyr-ikonet. Med \`variant="scene"\` får du en fargelagt scene med himmel, hav og øy.

Begge følger fargemodus — sol i lys modus, måne og stjerner i mørk modus (\`data-color-scheme\`, også \`auto\`).

Brukes når en operasjon tar ubestemt tid og brukeren trenger visuell tilbakemelding om at noe skjer.

**Egnet til:**
- Sidelasting
- API-kall uten kjent varighet
- Bakgrunnsoperasjoner

**Tilgjengelighet:**
Komponenten har \`role="status"\` og \`aria-label\` (standard: "Laster"). Animasjonen stoppes automatisk ved \`prefers-reduced-motion: reduce\`; da står strålen stille.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['outline', 'scene'],
    },
  },
} satisfies Meta<typeof KyvSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'md' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
      <KyvSpinner size="sm" />
      <KyvSpinner size="md" />
      <KyvSpinner size="lg" />
    </div>
  ),
};

export const DayAndNight: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div
        data-color-scheme="light"
        style={{ background: 'var(--ds-color-neutral-background-default)', padding: '1rem' }}
      >
        <KyvSpinner size="md" />
      </div>
      <div
        data-color-scheme="dark"
        style={{ background: 'var(--ds-color-neutral-background-default)', padding: '1rem' }}
      >
        <KyvSpinner size="md" />
      </div>
    </div>
  ),
};

export const Scene: Story = {
  args: { size: 'md', variant: 'scene' },
};

export const SceneDayAndNight: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div data-color-scheme="light">
        <KyvSpinner size="md" variant="scene" />
      </div>
      <div data-color-scheme="dark">
        <KyvSpinner size="md" variant="scene" />
      </div>
    </div>
  ),
};
