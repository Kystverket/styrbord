import type { Meta, StoryObj } from '@storybook/react-vite';
import MarkdownToReact from './markdownToReact';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { ResolvedImageRef } from '~/components/kystverket/MarkdownToReact/markdownToReact';

import atlas from '@assets/img/atlas/atlas 1.jpeg';

const meta = {
  title: 'Components/MarkdownToReact',
  component: MarkdownToReact,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
  argTypes: {
    markdown: { control: 'text' },
  },
} satisfies Meta<typeof MarkdownToReact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    markdown: '**MarkdownToReact** er en komponent som lar deg rendere markdown som React-komponenter.',
  },
};

export const Headings: Story = {
  args: {
    markdown: `# Overskrift nivå 1
## Overskrift nivå 2`,
  },
};

export const TextFormatting: Story = {
  args: {
    markdown: `**Fet tekst** og *kursiv tekst* kan kombineres.

Du kan også bruke \`inline kode\`.`,
  },
};

export const Lists: Story = {
  args: {
    markdown: `## Uordnet liste
* Første element
* Andre element
* Tredje element

## Ordnet liste
1. Første steg
2. Andre steg
3. Tredje steg`,
  },
};

export const CodeBlock: Story = {
  args: {
    markdown: `Her er et eksempel på en kodeblokk:

\`\`\`typescript
const hilsen = (navn: string): string => {
  return \`Hei, \${navn}!\`;
};

console.log(hilsen('verden'));
\`\`\``,
  },
};

export const Links: Story = {
  args: {
    markdown: `Se [Kystverkets nettside](https://www.kystverket.no) for mer informasjon.`,
  },
};

export const Combined: Story = {
  args: {
    markdown: `# Velkommen til MarkdownToReact

Denne komponenten lar deg **rendere markdown** som React-komponenter.


# Overskrift 1

## Funksjoner




litt mellom

- Støtter *kursiv* og **fet** tekst
- Lister (ordnet og uordnet)
- [Lenker](https://www.kystverket.no)
- Kodeblokker og \`inline kode\`

## Eksempel på kode

\`\`\`typescript
import MarkdownToReact from './markdownToReact';

const App = () => (
  <MarkdownToReact markdown="**Hei verden!**" />
);
\`\`\``,
  },
};

export const ResolveImageRefExample: Story = {
  args: {
    markdown: `
# Noe kul markdown

## Med et bilde som ikke resolver
![Et bilde av en skillingsbolle på havet](image://128asdnsaj-dnb1-asj1-9d11-sajdnj1jo)

## og et bilde som resolver!
![Atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)
`,
    resolveImageRef: (ref: string) => {
      const imageRefMap: Record<string, ResolvedImageRef> = {
        'image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69': {
          src: atlas,
        },
      };

      return imageRefMap[ref];
    },
  },
};
