import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import CompactDetails from './CompactDetails';
import { Box, BorderedRadioGroup, Paragraph } from '~/main';
import type { RadioGroupValueType } from '../BorderedRadioGroup/borderedRadioGroup';

const meta = {
  title: 'Components/CompactDetails',
  component: CompactDetails,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          'En kompakt, sammenleggbar detaljkomponent. Etiketten vises i primærfargen med en pil til høyre, ' +
          'og innholdet får en venstrekant når det åpnes. Egnet for korte hjelpetekster, for eksempel mellom ' +
          'et spørsmål og et svaralternativ.',
      },
    },
  },
} satisfies Meta<typeof CompactDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    children: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => (
    <Box width="full">
      <CompactDetails {...args} />
    </Box>
  ),
};

export const Open: Story = {
  args: {
    label: 'Label',
    defaultOpen: true,
    children: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => (
    <Box width="full">
      <CompactDetails {...args} />
    </Box>
  ),
};

export const Controlled: Story = {
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: 'Dette feltet brukes til å avgjøre om saken kan behandles automatisk.',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Box width="full">
        <CompactDetails {...args} open={open} onOpenChange={setOpen} />
      </Box>
    );
  },
};

/**
 * Plassert mellom et spørsmål og svaralternativene. Her brukes `BorderedRadioGroup` uten egen `label`,
 * og spørsmålet rendres som en egen overskrift slik at `CompactDetails` kan plasseres rett under tittelen,
 * men over radioknappene.
 */
export const PlacementInRadioGroup: Story = {
  args: {
    label: 'Hvorfor spør vi om dette?',
    children: '',
  },
  render: () => {
    const [value, setValue] = useState<RadioGroupValueType | undefined>(undefined);
    return (
      <div style={{ maxWidth: '32rem' }}>
        <Box gap={12}>
          <Paragraph style={{ fontWeight: '500' }}>
            Er tiltaket i samsvar med kommuneplans arealdel eller reguleringsplan?
          </Paragraph>
          <CompactDetails label="Hvorfor spør vi om dette?">
            <Paragraph data-size="sm" style={{ margin: 0 }}>
              Myndigheten etter denne loven og kommunen som plan- og bygningsmyndighet skal foreta en effektiv og
              samordnet behandling av søknader om tillatelse. Tillatelse til tiltak etter denne paragrafen kan ikke gis
              i strid med vedtatte arealplaner etter plan- og bygningsloven uten etter dispensasjon fra plan- og
              bygningsmyndigheten.
            </Paragraph>
          </CompactDetails>
          <BorderedRadioGroup
            options={[
              { label: 'Ja', value: 'ja' },
              { label: 'Nei', value: 'nei' },
            ]}
            value={value}
            onChange={(v) => setValue(v)}
          />
        </Box>
      </div>
    );
  },
};
