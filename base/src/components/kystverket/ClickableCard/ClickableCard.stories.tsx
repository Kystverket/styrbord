import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Surface, DataColor, DataColorVariant, Paragraph } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import ClickableCard from './ClickableCard';
import { styrbordPaletteColors, styrbordSemanticColors } from '@kystverket/styrbord-tokens/colors';

const meta = {
  title: 'Components/ClickableCard',
  component: ClickableCard,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    'data-color-variant': {
      options: ['base', 'tinted'] satisfies DataColorVariant[],
      control: { type: 'radio' },
    },
    'data-color': {
      options: [...styrbordSemanticColors, ...styrbordPaletteColors] satisfies DataColor[],
      control: { type: 'radio' },
    },
    headingLevel: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'text' },
    },
    'data-size': {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ClickableCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Card title',
    description: 'Lorem ipsum dolor mit amet.',
    icon: 'anchor',
    chevron: true,
    'border-style': 'solid',
    'data-color-variant': 'base',
    'data-color': 'neutral',
    onClick: () => alert('Clicked!'),
  },
};

export const Sizes: StoryFn = () => {
  const combos: { label: string; 'data-size': 'sm' | 'md' | 'lg' }[] = [
    { label: 'Liten', 'data-size': 'sm' },
    { label: 'Middels', 'data-size': 'md' },
    { label: 'Stor', 'data-size': 'lg' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {combos.map((c) => (
        <>
          <ClickableCard
            key={`first-${c['data-size']}`}
            heading={c.label}
            description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."
            icon="anchor"
            chevron
            border-style="solid"
            data-size={c['data-size']}
          />
          <ClickableCard
            key={`second-${c['data-size']}`}
            heading={c.label}
            icon="article"
            chevron
            border-style="solid"
            data-size={c['data-size']}
          />
        </>
      ))}
    </div>
  );
};
Sizes.storyName = 'Størrelser';

export const ColorVariants: StoryFn = () => {
  const combos: { label: string; color: DataColor; variant: DataColorVariant }[] = [
    { label: 'Neutral, default', color: 'neutral', variant: 'base' },
    { label: 'Main, default', color: 'primary', variant: 'base' },
    { label: 'Neutral, tinted', color: 'neutral', variant: 'tinted' },
    { label: 'Main, tinted', color: 'primary', variant: 'tinted' },
    { label: 'Lyng, tinted', color: 'lyng', variant: 'tinted' },
    { label: 'Gress, tinted', color: 'gress', variant: 'tinted' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {combos.map((c) => (
        <ClickableCard
          key={`${c.color}-${c.variant}`}
          heading={c.label}
          description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."
          icon="anchor"
          chevron
          border-style="solid"
          data-color={c.color}
          data-color-variant={c.variant}
        />
      ))}
    </div>
  );
};
ColorVariants.storyName = 'Farge og variant';

export const Eksempel: StoryFn = () => {
  return (
    <div style={{ maxWidth: '500px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Surface gap={4}>
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          data-size="sm"
          data-color-variant="base"
          data-color="neutral"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          data-color-variant="tinted"
          data-color="neutral"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          data-color-variant="base"
          data-color="primary"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          data-size="sm"
          data-color-variant="tinted"
          data-color="primary"
        />
      </Surface>

      <Surface gap={2}>
        <Paragraph data-size="sm">Alle elementer skrudd på</Paragraph>
        <Surface width="fit">
          <ClickableCard
            heading="Card title"
            description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."
            icon="anchor"
            chevron
            border-style="solid"
            data-color-variant="base"
            data-color="neutral"
          >
            <Surface gap={1} p={1}>
              <Paragraph data-size="xs">SLOT</Paragraph>
              <Paragraph data-size="xs">Erstatt med eget innhold</Paragraph>
            </Surface>
          </ClickableCard>
        </Surface>
      </Surface>
    </div>
  );
};
Eksempel.storyName = 'Eksempel';

export const AsLink: Story = {
  args: {
    heading: 'Gå til designsystemet',
    description: 'Åpner lenken i ny fane.',
    icon: 'anchor',
    chevron: true,
    'border-style': 'solid',
    'data-color-variant': 'tinted',
    'data-color': 'primary',
    href: 'https://designsystemet.no',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  storyName: 'Som lenke (href)',
};
