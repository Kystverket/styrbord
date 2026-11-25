import type { Meta, StoryObj } from '@storybook/react-vite';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Logo, LogoProps } from '~/components/kystverket/Logo/Logo';
import faviconUrl from '@assets/favicon/favicon.svg?url';

const meta = {
  title: 'Grunnlag/Logo',
  component: Logo,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: [
          'Kystverket-logoen finnes i to varianter, og hvilken du bruker avhenger av bakgrunnen:',
          '',
          '- **Blå** (`color="blue"`, standard) brukes på lys bakgrunn. Den følger fargemodusen: i mørk modus (`data-color-scheme="dark"`, eller `auto` når systemet er mørkt) vises den hvite logoen i stedet.',
          '- **Hvit** (`color="white"`) brukes på mørk bakgrunn, for eksempel i footeren. Den hvite logoen er en egen tegning med fylt emblem og kontur rundt skjoldet, ikke den blå logoen farget hvit.',
          '',
          'Begge finnes liggende, stående og som symbol, på norsk og engelsk (`variant`).',
          '',
          'Se [Logo og emblem i Kystverkets profilhåndbok](https://www.kystverket.no/om-kystverket/profilhandbok/logo-og-emblem/) for når og hvordan logoen skal brukes.',
        ].join('\n'),
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: LogoProps = {
  alt: 'Kystverket 4K',
};

export const Default: Story = {
  args: defaultProps,
};

export const OnlyWidth: Story = {
  args: { ...defaultProps, width: 400 },
};

export const OnlyHeight: Story = {
  args: { ...defaultProps, height: 200 },
};

export const EnglishVertical: Story = {
  args: { ...defaultProps, height: 200, variant: 'vertical-en' },
};

export const EnglishHorizontal: Story = {
  args: { ...defaultProps, height: 100, variant: 'horizontal-en' },
};

export const SymbolVariant: Story = {
  args: { ...defaultProps, variant: 'symbol' },
};

/** Den hvite logoen er laget for mørk bakgrunn, så historiene under vises på primærfargen. */
const darkBackground: Story['decorators'] = [
  (Story) => (
    <div
      data-color="primary"
      style={{
        backgroundColor: 'var(--ds-color-base-default)',
        padding: 'var(--ds-size-6)',
        display: 'inline-block',
      }}
    >
      <Story />
    </div>
  ),
];

export const White: Story = {
  args: { ...defaultProps, variant: 'vertical', color: 'white' },
  decorators: darkBackground,
};

export const WhiteHorizontal: Story = {
  args: { ...defaultProps, color: 'white' },
  decorators: darkBackground,
};

export const WhiteSymbol: Story = {
  args: { ...defaultProps, variant: 'symbol', color: 'white' },
  decorators: darkBackground,
};

export const WhiteEnglishVertical: Story = {
  args: { ...defaultProps, height: 200, variant: 'vertical-en', color: 'white' },
  decorators: darkBackground,
};

export const WhiteEnglishHorizontal: Story = {
  args: { ...defaultProps, height: 100, variant: 'horizontal-en', color: 'white' },
  decorators: darkBackground,
};

export const Black: Story = {
  args: { ...defaultProps, variant: 'vertical', color: 'black' },
};

export const Datakatalog: Story = {
  args: { ...defaultProps, height: 83, product: 'Datakatalog' },
};

export const Fyr: Story = {
  args: { ...defaultProps, height: 83, product: 'Fyr' },
};

export const Hais: Story = {
  args: { ...defaultProps, height: 83, product: 'Historisk AIS' },
};

export const Pfsa: Story = {
  args: { ...defaultProps, height: 83, product: 'Maritim Sikring' },
};

export const Saksbehandling: Story = {
  args: { ...defaultProps, height: 83, product: 'Saksbehandling' },
};

export const Selvbetjening: Story = {
  args: { ...defaultProps, height: 83, product: 'Selvbetjening' },
};

export const SelvbetjeningEnglish: Story = {
  args: { ...defaultProps, height: 83, product: 'Selvbetjening', variant: 'horizontal-en' },
};

/**
 * Faviconet er det blå skjoldet fra logoen på hvit bakgrunn med avrundede hjørner. Det er ikke en
 * React-komponent, men ferdige filer i pakken under `@kystverket/styrbord/favicon/`: `favicon.svg`,
 * `favicon.ico` (16, 32 og 48 px), `apple-touch-icon.png` (180 px, kvadratisk, siden iOS runder
 * hjørnene selv) og `icon-192.png` / `icon-512.png` til web app manifest. Kopier dem til appens
 * `public`-mappe og pek på dem fra `<head>`:
 *
 * ```html
 * <link rel="icon" href="/favicon.ico" sizes="32x32" />
 * <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
 * <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
 * ```
 *
 * Vist i 16, 32, 48 og 180 px.
 */
export const Favicon: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-4)', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--ds-size-6)' }}>
        {[16, 32, 48, 180].map((size) => (
          <figure
            key={size}
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--ds-size-2)',
            }}
          >
            <img src={faviconUrl} width={size} height={size} alt="" />
            <figcaption>{size} px</figcaption>
          </figure>
        ))}
      </div>
      <a href={faviconUrl} download="favicon.svg">
        Last ned favicon.svg
      </a>
    </div>
  ),
};
