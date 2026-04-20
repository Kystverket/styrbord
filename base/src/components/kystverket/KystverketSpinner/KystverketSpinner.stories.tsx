import type { Meta, StoryObj } from '@storybook/react-vite';
import KystverketSpinner from './KystverketSpinner';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/KystverketSpinner',
  component: KystverketSpinner,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    docs: {
      description: {
        component: `
Indeterminate laste-animasjon med et fyrtårn som sender ut lysstråler.

Brukes når en operasjon tar ubestemt tid og brukeren trenger visuell tilbakemelding om at noe skjer.

**Egnet til:**
- Sidelasting
- API-kall uten kjent varighet
- Bakgrunnsoperasjoner

**Tilgjengelighet:**
Komponenten har \`role="status"\` og \`aria-label\` (standard: "Laster"). Animasjonen stoppes automatisk ved \`prefers-reduced-motion: reduce\`.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof KystverketSpinner>;

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
      <KystverketSpinner size="sm" />
      <KystverketSpinner size="md" />
      <KystverketSpinner size="lg" />
    </div>
  ),
};
