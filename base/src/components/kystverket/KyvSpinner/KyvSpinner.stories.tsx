import type { Meta, StoryObj } from '@storybook/react-vite';
import KyvSpinner from './KyvSpinner';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/KyvSpinner',
  component: KyvSpinner,
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
