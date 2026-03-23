import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExistingFilesProviderItem, FileUploader, FileUploaderProps } from '../FileUploader/FileUploader';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { PartialStoryFn } from 'storybook/internal/types';

import { useState } from 'react';
import { FileInfo } from '../FileUploader/FileUploader.types';

import { NamespaceProvider, SprakProvider, SprakDebug } from '@kystverket/sprak-react';
import { STYRBORD_TRANSLATIONS_NAMESPACE } from '~/translations';
import { Box } from '~/main';

import alternateTranslations from './alternateTranslations.json';

const Wrapper = (props: FileUploaderProps) => {
  const [value, setValue] = useState<FileInfo[]>([...props.files]);

  const onChange = (v: FileInfo[]) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <FileUploader {...props} files={value} onChange={onChange} />;
};

const AlternateTranslationsDecorator = (Story: PartialStoryFn) => (
  <Box color="danger" p={24}>
    <SprakProvider locale="nb-NO" defaultNamespace={STYRBORD_TRANSLATIONS_NAMESPACE} debug>
      <NamespaceProvider
        ns={STYRBORD_TRANSLATIONS_NAMESPACE}
        translations={{
          'nb-NO': alternateTranslations,
          'nn-NO': alternateTranslations,
          'en-US': alternateTranslations,
        }}
        zIndex={5}
      >
        <Story />
        <SprakDebug />
      </NamespaceProvider>
    </SprakProvider>
  </Box>
);

const meta = {
  title: 'Sprak/Alternate Translations',
  component: Wrapper,
  decorators: [AlternateTranslationsDecorator, StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FileUploaderProps = {
  label: 'Last opp filer',
  description: 'Du kan laste opp flere filer samtidig',
  error: null,
  multiple: true,
  files: [
    {
      fileName: 'file1.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: '214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c',
      storageId: '1',
      sizeInBytes: 92881,
    },
  ],
  maxFiles: 5,
  maxSizeInBytes: 10 * 1000 * 1000, // 10MB
  onChange: (files) => console.log('Files changed:', files),
  allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
};

const existingFilesProvider = async (): Promise<ExistingFilesProviderItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  return [
    {
      title: 'Testfiler',
      label: 'Dette er bare noen testfiler',
      files: [
        {
          contextId: 'existing-1',
          fileName: 'document1.pdf',
          storageId: 'storage-id-1',
          contentType: 'application/pdf',
          status: 'uploaded',
          sizeInBytes: 5818,
        },
      ],
    },
    {
      title: 'Flere testfiler',
      label: 'Abrakadabra, this page now has more testfiles',
      files: [
        {
          contextId: 'existing-test2-1',
          fileName: 'document1.pdf',
          storageId: 'storage-id-test2-1',
          contentType: 'application/pdf',
          status: 'uploaded',
          sizeInBytes: 5818,
        },
      ],
    },
  ];
};

export const OverriddenTranslations: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider,
  },
};
