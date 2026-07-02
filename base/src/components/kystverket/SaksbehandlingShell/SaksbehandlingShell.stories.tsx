import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';
import { Body, Button, Heading, Paragraph, Tag } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { SaksbehandlingShell } from './SaksbehandlingShell';
import type { SaksbehandlingItem } from './SaksbehandlingShell.types';

const meta = {
  title: 'Components/SaksbehandlingShell',
  component: SaksbehandlingShell,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SaksbehandlingShell>;

export default meta;

const ITEMS: SaksbehandlingItem[] = [
  {
    id: '1',
    title: 'Søknad om utslippstillatelse',
    description: 'Innkommet brev fra Sandnessjøen havn',
    dateCreated: new Date(2026, 5, 2),
    icon: 'inbox',
  },
  {
    id: '2',
    title: 'Svar på søknad',
    description: 'Utgående brev til søker',
    dateCreated: new Date(2026, 5, 4),
    icon: 'send',
  },
  {
    id: '3',
    title: 'Avklaring med jurist',
    description: 'Diskusjon om hjemmelsgrunnlag',
    dateCreated: new Date(2026, 5, 6),
    icon: 'chat',
  },
  {
    id: '4',
    title: 'Sjekkliste for saksbehandling',
    description: 'Standard sjekkliste for utslippssaker',
    dateCreated: new Date(2026, 5, 6),
    icon: 'format_list_bulleted',
  },
  {
    id: '5',
    title: 'Intern kommentar',
    description: 'Husk å følge opp med kystverket region nord',
    dateCreated: new Date(2026, 5, 7),
    icon: 'text_snippet',
  },
  {
    id: '6',
    title: 'Purring fra søker',
    description: 'Innkommet brev med spørsmål om status',
    dateCreated: new Date(2026, 5, 9),
    icon: 'inbox',
  },
  {
    id: '7',
    title: 'Statusoppdatering til søker',
    description: 'Utgående brev om forventet behandlingstid',
    dateCreated: new Date(2026, 5, 10),
    icon: 'send',
  },
  {
    id: '8',
    title: 'Vurdering med fagansvarlig',
    description: 'Diskusjon om miljøkonsekvenser',
    dateCreated: new Date(2026, 5, 11),
    icon: 'chat',
  },
  {
    id: '9',
    title: 'Sjekkliste for høring',
    description: 'Kontroll av høringsfrister og parter',
    dateCreated: new Date(2026, 5, 12),
    icon: 'format_list_bulleted',
  },
  {
    id: '10',
    title: 'Notat til saksmappe',
    description: 'Oppsummering av telefonsamtale med søker',
    dateCreated: new Date(2026, 5, 13),
    icon: 'text_snippet',
  },
  {
    id: '11',
    title: 'Vedlegg til søknad',
    description: 'Innkommet brev med oppdatert kartskisse',
    dateCreated: new Date(2026, 5, 14),
    icon: 'inbox',
  },
  {
    id: '12',
    title: 'Vedtak sendt til søker',
    description: 'Utgående brev med endelig vedtak',
    dateCreated: new Date(2026, 5, 16),
    icon: 'send',
  },
  {
    id: '13',
    title: 'Intern avklaring om klagefrist',
    description: 'Diskusjon med jurist om klagerett',
    dateCreated: new Date(2026, 5, 17),
    icon: 'chat',
  },
  {
    id: '14',
    title: 'Sjekkliste for arkivering',
    description: 'Kontroll før saken arkiveres',
    dateCreated: new Date(2026, 5, 18),
    icon: 'format_list_bulleted',
  },
];

export const Default: StoryFn<typeof SaksbehandlingShell> = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(ITEMS[0].id);
  const selectedItem = ITEMS.find((item) => item.id === selectedItemId);

  return (
    <div style={{ height: '100vh' }}>
      <SaksbehandlingShell
        caseTitle="Sak 2026-0142 — Søknad om utslippstillatelse"
        caseLocation="Sandnessjøen havn"
        caseStatus={
          <Tag data-color="success" data-size="sm">
            Under behandling
          </Tag>
        }
        caseActions={<Button size="sm">Avslutt sak</Button>}
        itemActions={selectedItem && <Button size="sm">Svar</Button>}
        items={ITEMS}
        selectedItemId={selectedItemId}
        onSelectItemId={setSelectedItemId}
        comparisonContent={
          <Paragraph>Sammenligningsinnhold, for eksempel en tidligere versjon av det valgte elementet.</Paragraph>
        }
      >
        {selectedItem ? (
          <>
            <Heading level={2} data-size="sm">
              {selectedItem.title}
            </Heading>
            <Body>{selectedItem.description}</Body>
          </>
        ) : (
          <Paragraph>Velg et element i listen til venstre.</Paragraph>
        )}
      </SaksbehandlingShell>
    </div>
  );
};
Default.storyName = 'Standard';
