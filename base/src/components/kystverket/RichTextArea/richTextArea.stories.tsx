import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { RichTextArea, RichTextAreaProps } from './richTextArea';

import atlas from '@assets/img/atlas/atlas 1.jpeg';
import { ExtraFileInfo, UploadFileResult } from '../FileUploader/FileUploader.types';
import { FileUploaderContext } from '../FileUploader/FileUploader.context';
import { FileRetrieverContext } from '../FileUploader/FileRetriever.context';
import { v4 as uuidv4 } from 'uuid';
import { Box, Chip } from '~/main';

const meta = {
  title: 'Form/RichTextArea/RichTextArea',
  component: RichTextArea,
  decorators: [
    (Story) => (
      <FileRetrieverContext.Provider value={{ deriveFileInfosFromStorageIds }}>
        <Story />
      </FileRetrieverContext.Provider>
    ),
    StyrbordDecorator,
  ],
  tags: ['autodocs', 'kyv', 'beta'],
} satisfies Meta<typeof RichTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const fileToPreviewUrl = (file: File): string => URL.createObjectURL(file);

const defaultArgs: RichTextAreaProps = {
  value: '',
  onChange: () => {},
  label: 'Rikt tekstfelt',
  description: 'Dette er et tekstfelt som støtter rik tekstformatering.',
  // optional: 'Valgfritt',
};

const deriveFileInfosFromStorageIds = async (): Promise<ExtraFileInfo[]> => {
  return new Promise((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve([{ storageId: 'image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69', previewUri: atlas }]);
    }, 1000);
  });
};

const uploadFile = async (): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve({
        storageId: uuidv4(),
        success: true,
      });
    }, 1500);
  });
};

const deleteFile = async (): Promise<void> => {
  return new Promise((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve();
    }, 1000);
  });
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
 * `onImageUpload` returns both:
 * - `src` — a data URL used by the editor to display the image immediately
 * - `ref` — a stable opaque ID (e.g. Azure blob path / UUID) stored in the markdown instead of the SAS URL.
 *
 * `onImageRemove` is called with the stable ref when an image is removed from the editor,
 * so a backend can delete the persisted image resource.
 *
 * The `onChange` output will contain `![alt](image://uuid-...)` rather than the raw data URL,
 * and a `MarkdownToReact` resolver can map that ref to a displayable URL.
 */
export const WithImageRef: Story = {
  parameters: {
    docs: {
      source: {
        // Prevent Storybook from pretty-printing runtime-heavy render output for this interactive story.
        type: 'code',
      },
    },
  },
  args: {
    ...defaultArgs,

    value: `
Bilde av Atlas
![Bilde_av_atlas.png](image://86062b3c-ebc8-48d0-9d08-8c282f5d8c69)`,
    label: 'Rikt tekstfelt med bildereferanse',
    description: 'Last opp et bilde — markdownutdata vil inneholde en stabil referanse til bildet.',
    onImageUpload: async (file) => {
      const src = fileToPreviewUrl(file);
      // Simulate a stable blob reference that would be generated server-side
      const ref = `image://${crypto.randomUUID()}`;
      return { src, ref, alt: file.name };
    },
    onImageRemove: async (ref: string) => {
      alert('Removed image ' + ref);
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '');
    const [markdownOutput, setMarkdownOutput] = useState('');

    return (
      <FileUploaderContext.Provider
        value={{
          uploadFile,
          deleteFile,
        }}
      >
        <FileRetrieverContext.Provider value={{ deriveFileInfosFromStorageIds }}>
          <RichTextArea
            {...args}
            value={value}
            onChange={(nextMarkdown) => {
              setValue(nextMarkdown);
              setMarkdownOutput(nextMarkdown);
              args.onChange(nextMarkdown);
            }}
            bottomToolbar={{
              left: [
                {
                  icon: 'add',
                  ariaLabel: 'abc',
                  id: 'abc',
                  onClick: () => {
                    alert('BOO');
                  },
                },
              ],
              right: [
                {
                  label: 'Avbryt',
                  id: 'a',
                  color: 'neutral',
                  variant: 'ghost',
                  onClick: () => {
                    alert('Avbryt');
                  },
                },
                {
                  label: 'Lagre',
                  variant: 'filled',
                  id: 'a',
                  onClick: () => {
                    alert('Lagre');
                  },
                },
              ],
              above: (
                <Box horizontal>
                  <Chip.Removable>@Admin Etternavn</Chip.Removable>
                  <Chip.Removable>@Saksbehandler Etternavn</Chip.Removable>
                </Box>
              ),
              middle: <Chip.Radio>Marker som konklusjon</Chip.Radio>,
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
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>
    );
  },
};

export const WithBottomToolbar: Story = {
  parameters: {
    docs: {
      source: {
        // Prevent Storybook from pretty-printing runtime-heavy render output for this interactive story.
        type: 'code',
      },
    },
  },
  args: {
    ...defaultArgs,

    value: ``,
    label: 'Rikt tekstfelt med bottomToolbar',
    description: ' ',
    onImageUpload: async (file) => {
      const src = fileToPreviewUrl(file);
      // Simulate a stable blob reference that would be generated server-side
      const ref = `image://${crypto.randomUUID()}`;
      return { src, ref, alt: file.name };
    },
    onImageRemove: async (ref: string) => {
      alert('Removed image ' + ref);
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? '');
    const [markdownOutput, setMarkdownOutput] = useState('');

    return (
      <FileUploaderContext.Provider
        value={{
          uploadFile,
          deleteFile,
        }}
      >
        <FileRetrieverContext.Provider value={{ deriveFileInfosFromStorageIds }}>
          <RichTextArea
            {...args}
            value={value}
            onChange={(nextMarkdown) => {
              setValue(nextMarkdown);
              setMarkdownOutput(nextMarkdown);
              args.onChange(nextMarkdown);
            }}
            bottomToolbar={{
              left: [
                {
                  icon: 'add',
                  ariaLabel: 'abc',
                  id: 'abc',
                  onClick: () => {
                    alert('BOO');
                  },
                },
              ],
              right: [
                {
                  label: 'Avbryt',
                  id: 'a',
                  color: 'neutral',
                  variant: 'ghost',
                  onClick: () => {
                    alert('Avbryt');
                  },
                },
                {
                  label: 'Lagre',
                  variant: 'filled',
                  id: 'a',
                  onClick: () => {
                    alert('Lagre');
                  },
                },
              ],
              above: (
                <Box horizontal>
                  <Chip.Removable>@Admin Etternavn</Chip.Removable>
                  <Chip.Removable>@Saksbehandler Etternavn</Chip.Removable>
                </Box>
              ),
              middle: <Chip.Radio>Marker som konklusjon</Chip.Radio>,
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
        </FileRetrieverContext.Provider>
      </FileUploaderContext.Provider>
    );
  },
};
