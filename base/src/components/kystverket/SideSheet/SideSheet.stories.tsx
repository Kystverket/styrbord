import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';
import { Button, Icon, Paragraph, SideSheet, Tooltip } from '~/main';

export default {
  title: 'Components/SideSheet',
  component: SideSheet,
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: { type: 'code' },
    },
  },
} satisfies Meta<typeof SideSheet>;

function PageContent({ onOpen }: Readonly<{ onOpen: () => void }>) {
  return (
    <div style={{ padding: '2rem', flex: 1, minWidth: 0 }}>
      <Paragraph style={{ marginBottom: '1rem' }}>
        This is the main page content. When the SideSheet is pinned it repositions itself to sit beside it.
      </Paragraph>
      <Button onClick={onOpen}>Open SideSheet</Button>
    </div>
  );
}

export const Default: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        <Paragraph>Side sheet content goes here.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
Default.args = { size: 'sm' };

export const OpenInNewWindow: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Heading"
        headerAction={
          <Tooltip content="Åpne i ny fane" placement="bottom">
            <Button
              variant="ghost"
              size="sm"
              icon
              aria-label="Åpne i ny fane"
              onClick={() => window.open('https://vg.no', '_blank', 'noopener,noreferrer')}
            >
              <Icon material="open_in_new" size="md" />
            </Button>
          </Tooltip>
        }
      >
        <Paragraph>Side sheet content with an "open in new window" action in the header.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
OpenInNewWindow.storyName = 'Åpne i nytt vindu';

export const WithBackButton: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<'page1' | 'page2'>('page1');

  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent
        onOpen={() => {
          setPage('page1');
          setOpen(true);
        }}
      />
      <SideSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title={page === 'page2' ? 'Heading to Page 2' : 'Heading'}
        headingSize="sm"
        showBackButton={page === 'page2'}
        onBack={() => setPage('page1')}
      >
        {page === 'page1' ? (
          <>
            <Paragraph>Page 1</Paragraph>
            <SideSheet.Buttons>
              <Button variant="filled" onClick={() => setPage('page2')}>
                Next page
              </Button>
            </SideSheet.Buttons>
          </>
        ) : (
          <>
            <Paragraph>Page 2. Use the back button in the header or footer to return.</Paragraph>
            <SideSheet.Buttons>
              <Button onClick={() => setPage('page1')}>Back</Button>
            </SideSheet.Buttons>
          </>
        )}
      </SideSheet>
    </SideSheet.Layout>
  );
};
WithBackButton.storyName = 'Tilbakeknapp';

export const WithActionsScrollbarDividers: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading">
        {Array.from({ length: 20 }, (_, i) => (
          <Paragraph key={i}>Content row {i + 1} - scroll to see all rows.</Paragraph>
        ))}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>
  );
};
WithActionsScrollbarDividers.storyName = 'Buttons, scrollbar og dividers';

export const Pinnable: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <SideSheet.Layout style={{ height: '100vh' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Heading" pinnable defaultPinned={false}>
        {Array.from({ length: 20 }, (_, i) => (
          <Paragraph key={i}>
            Content row {i + 1} - klikk pin-ikonet for å feste panelet ved siden av innholdet.
          </Paragraph>
        ))}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>
  );
};
Pinnable.storyName = 'Pinnbar (overlay ↔ push)';

export const LeftPlacement: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <SideSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Left panel"
        placement="left"
        pinnable
        defaultPinned={false}
      >
        <Paragraph>Left panel content.</Paragraph>
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
      <PageContent onOpen={() => setOpen(true)} />
    </SideSheet.Layout>
  );
};
LeftPlacement.storyName = 'Venstre plassering';

export const SmallSize: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="sm (400px)" size="sm">
        <Paragraph>Small side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
SmallSize.storyName = 'Størrelse: sm';

export const LargeSize: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="lg (800px)" size="lg">
        <Paragraph>Large side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
LargeSize.storyName = 'Størrelse: lg';

export const HalfWidth: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="50% width" size="50%">
        <Paragraph>Half-width side sheet.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
HalfWidth.storyName = 'Størrelse: 50%';

export const PinnedWithContent: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(true);
  const [pinned, setPinned] = useState(true);

  return (
    <SideSheet.Layout style={{ height: '100vh' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Pinned with content"
        pinnable
        pinned={pinned}
        onPinnedChange={setPinned}
        headerDivider
        footerDivider
      >
        {Array.from({ length: 25 }, (_, i) => (
          <Paragraph key={i}>
            Rad {i + 1} - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati
            assumenda odio
          </Paragraph>
        ))}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>
  );
};
PinnedWithContent.storyName = 'Pinned';

export const NoBackdrop: StoryFn<typeof SideSheet> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SideSheet.Layout style={{ minHeight: '400px' }}>
      <PageContent onOpen={() => setOpen(true)} />
      <SideSheet {...args} open={open} onClose={() => setOpen(false)} title="Ingen bakgrunn" backdrop={false}>
        <Paragraph>Overlay without backdrop dimming.</Paragraph>
      </SideSheet>
    </SideSheet.Layout>
  );
};
NoBackdrop.storyName = 'Overlay uten bakgrunn';

export const TwoSheets: StoryFn<typeof SideSheet> = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [leftPinned, setLeftPinned] = useState(true);
  const [rightPinned, setRightPinned] = useState(true);

  return (
    <SideSheet.Layout style={{ height: '80vh' }}>
      {/* Venstre side */}
      <SideSheet
        open={leftOpen}
        onClose={() => setLeftOpen(false)}
        title="Navigasjon"
        placement="left"
        size="sm"
        pinnable
        pinned={leftPinned}
        onPinnedChange={setLeftPinned}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <Paragraph key={i}>Navigasjonsrad {i + 1}</Paragraph>
        ))}
      </SideSheet>

      {/* Midtinnhold */}
      <div style={{ flex: 1, minWidth: 0, padding: '2rem', overflow: 'auto' }}>
        <Paragraph style={{ marginBottom: '1rem' }}>
          Midtinnhold. Begge sidepanelene kan åpnes og festes på hver sin side.
        </Paragraph>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {!leftOpen && <Button onClick={() => setLeftOpen(true)}>Åpne venstre panel</Button>}
          {!rightOpen && <Button onClick={() => setRightOpen(true)}>Åpne høyre panel</Button>}
        </div>
      </div>

      {/* Høyre side */}
      <SideSheet
        open={rightOpen}
        onClose={() => setRightOpen(false)}
        title="Detaljer"
        placement="right"
        size="sm"
        pinnable
        pinned={rightPinned}
        onPinnedChange={setRightPinned}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <Paragraph key={i}>Detaljrad {i + 1}</Paragraph>
        ))}
        <SideSheet.Buttons>
          <Button variant="filled" onClick={() => setRightOpen(false)}>
            Lagre
          </Button>
          <Button variant="outline" onClick={() => setRightOpen(false)}>
            Avbryt
          </Button>
        </SideSheet.Buttons>
      </SideSheet>
    </SideSheet.Layout>
  );
};
TwoSheets.storyName = 'To paneler (venstre + høyre)';
