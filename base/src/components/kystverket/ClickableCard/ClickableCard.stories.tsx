import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Box, DataColor, DataColorVariant, Paragraph } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import ClickableCard from './ClickableCard';

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
      options: ['neutral', 'primary', 'lyng', 'fyr', 'gress'] satisfies DataColor[],
      control: { type: 'radio' },
    },
    headingLevel: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    headingSize: {
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'text' },
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
      <Box gap={16}>
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          headingSize="xs"
          data-color-variant="base"
          data-color="neutral"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          headingSize="xs"
          data-color-variant="tinted"
          data-color="neutral"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          headingSize="xs"
          data-color-variant="base"
          data-color="primary"
        />
        <ClickableCard
          heading="Forespørsel om nautisk vurdering"
          icon="picture_as_pdf"
          chevron
          headingSize="xs"
          data-color-variant="tinted"
          data-color="primary"
        />
      </Box>

      <Box gap={8}>
        <Paragraph data-size="sm">Alle elementer skrudd på</Paragraph>
        <Box width="fit">
          <ClickableCard
            heading="Card title"
            description="Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this."
            icon="anchor"
            chevron
            border-style="solid"
            data-color-variant="base"
            data-color="neutral"
          >
            <Box gap={4} p={4}>
              <Paragraph data-size="xs">SLOT</Paragraph>
              <Paragraph data-size="xs">Erstatt med eget innhold</Paragraph>
            </Box>
          </ClickableCard>
        </Box>
      </Box>
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
