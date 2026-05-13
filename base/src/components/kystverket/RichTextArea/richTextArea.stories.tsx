import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { RichTextArea, RichTextAreaProps } from './richTextArea';

const meta = {
  title: 'Form/RichTextArea/RichTextArea',
  component: RichTextArea,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
} satisfies Meta<typeof RichTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
        return;
      }

      reject(new Error('Could not read image file'));
    };
    reader.onerror = () => reject(reader.error ?? new Error('Could not read image file'));
    reader.readAsDataURL(file);
  });

const defaultArgs: RichTextAreaProps = {
  value: '',
  onChange: () => {},
  label: 'Rikt tekstfelt',
  description: 'Dette er et tekstfelt som støtter rik tekstformatering.',
  optional: 'Valgfritt',
};

const renderInteractive: Story['render'] = (args) => {
  const InteractiveStory = () => {
    const [value, setValue] = useState(args.value ?? '');

    return (
      <RichTextArea
        {...args}
        value={value}
        onChange={(nextMarkdown) => {
          setValue(nextMarkdown);
          console.log('RichTextArea markdown:', nextMarkdown);
          args.onChange(nextMarkdown);
        }}
      />
    );
  };

  return <InteractiveStory />;
};

export const Default: Story = {
  args: defaultArgs,
  render: renderInteractive,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold',
  },
  render: renderInteractive,
};
export const WithError: Story = {
  args: {
    ...defaultArgs,

    error: 'Du må fylle ut dette feltet.',
  },
  render: renderInteractive,
};

/**
 * Demonstrates stable image references in markdown.
 *
 * `onUpload` returns both:
 * - `src` — a data URL used by the editor to display the image immediately
 * - `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL
 *
 * The `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,
 * which is what a `MarkdownToReact` or similar renderers renderer would receive and resolve to a fresh SAS URL at render time.
 */
export const WithImageRef: Story = {
  args: {
    ...defaultArgs,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet,.',

    onUpload: async (file) => {
      const src = await fileToDataUrl(file);
      // Simulate a stable blob reference that would be generated server-side
      const ref = `image://${crypto.randomUUID()}`;
      return { src, ref, alt: file.name };
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '');
    const [markdownOutput, setMarkdownOutput] = useState('');

    return (
      <>
        <RichTextArea
          {...args}
          value={value}
          onChange={(nextMarkdown) => {
            setValue(nextMarkdown);
            setMarkdownOutput(nextMarkdown);
            args.onChange(nextMarkdown);
          }}
        />
        {markdownOutput && (
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '0.25rem', fontWeight: 'bold', fontSize: '0.875rem' }}>
              Markdown sendt til onChange:
            </p>
            <pre
              style={{
                background: '#f4f4f4',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '0.75rem',
                fontSize: '0.8rem',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
              }}
            >
              {markdownOutput}
            </pre>
          </div>
        )}
      </>
    );
  },
};
