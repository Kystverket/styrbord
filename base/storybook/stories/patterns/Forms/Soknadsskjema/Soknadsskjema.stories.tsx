import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Soknadsskjema } from './Soknadsskjema';
import readme from './README.md?raw';

const meta = {
  title: 'Patterns/Forms/Søknadsskjema',
  component: Soknadsskjema,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      // README.md er både dokumentasjonen her og veiledningen som følger med npm-pakken.
      description: { component: readme.replace(/^# .*\n/, '') },
    },
  },
} satisfies Meta<typeof Soknadsskjema>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Tom innsending: feiloppsummeringen vises, tar fokus og lenker til hvert felt. */
export const TomInnsending: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Send søknad' }));
    const summary = await canvas.findByText('For å sende søknaden må du rette opp følgende:');
    const summaryRoot = summary.closest('[tabindex]');
    await expect(summaryRoot).toHaveFocus();
    await expect(canvas.getByRole('link', { name: 'Skriv inn navnet ditt' })).toHaveAttribute('href', '#soknad-navn');
  },
};
