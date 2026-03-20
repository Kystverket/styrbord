import type { Meta, StoryObj } from '@storybook/react-vite';
import MarkdownToReact from './markdownToReact';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

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
## Overskrift nivå 2 
### Overskrift nivå 3`,
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

## Funksjoner

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
