import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExistingFilesProviderItem, FileUploader, FileUploaderProps } from './FileUploader';
import { FileUploaderContext } from './FileUploader.context';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { useState } from 'react';
import { ExtraFileInfo, FileInfo, UploadFileResult } from './FileUploader.types';
import { v4 as uuidv4 } from 'uuid';

import cat1 from '/assets/img/cats/Cat 1.jpg';
import cat2 from '/assets/img/cats/Cat 2.jpg';
import samplePdf from '/assets/documents/Pikekyst Oppskrift.pdf';

const deriveFileInfosFromStorageIds = async (): Promise<ExtraFileInfo[]> => {
  return new Promise((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve([
        {
          storageId: '1',
          thumbnailUri: cat1,
          previewUri: cat1,
          sizeInBytes: 9281231,
        },
        {
          storageId: '2',
          thumbnailUri: cat2,
          previewUri: cat2,
          sizeInBytes: 192811,
        },
        {
          storageId: '3',
          thumbnailUri: undefined,
          previewUri: samplePdf,
          sizeInBytes: 12122,
        },
      ]);
    }, 1000);
  });
};

const Wrapper = (props: FileUploaderProps) => {
  const [value, setValue] = useState<FileInfo[]>([...props.files]);

  const onChange = (v: FileInfo[]) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <FileUploader {...props} files={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/FileUploader',
  component: Wrapper,
  decorators: [StyrbordDecorator],
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
    },

    {
      fileName: 'file2.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: '214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c',
      storageId: '1',
    },
    {
      fileName: 'file3.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      contextId: '214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c',
      storageId: '1',
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
        },
        {
          contextId: 'existing-2',
          fileName: 'image1.jpg',
          storageId: 'storage-id-2',
          contentType: 'image/jpeg',
          status: 'uploaded',
        },
        {
          contextId: 'existing-3',
          fileName: 'screenshot.png',
          storageId: 'storage-id-3',
          contentType: 'image/png',
          status: 'uploaded',
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
        },
        {
          contextId: 'existing-test2-2',
          fileName: 'image1.jpg',
          storageId: 'storage-id-test2-2',
          contentType: 'image/jpeg',
          status: 'uploaded',
        },
        {
          contextId: 'existing-test2-3',
          fileName: 'aCoolDocument.pdf',
          storageId: 'storage-id-test2-3',
          contentType: 'application/pdf',
          status: 'uploaded',
        },
        {
          contextId: 'existing-test2-4',
          fileName: 'screenshot.png',
          storageId: 'storage-id-test2-4',
          contentType: 'image/png',
          status: 'uploaded',
        },
      ],
    },
  ];
};

export const Default: Story = {
  args: defaultProps,
};

export const Optional: Story = {
  args: { ...defaultProps, optional: true },
};
export const OptionalText: Story = {
  args: { ...defaultProps, optional: 'Spesialtilpasset Verdi' },
};
export const Required: Story = {
  args: { ...defaultProps, required: true },
};

export const RequiredText: Story = {
  args: { ...defaultProps, required: 'Påkrevd' },
};

export const Dropzone: Story = {
  args: { ...defaultProps, variant: 'dropzone' },
};

export const DropzoneWithExistingFiles: Story = {
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider,
  },
};

export const WithError: Story = {
  args: { ...defaultProps, error: 'Det oppstod en feil' },
};

export const WithCaptureButton: Story = {
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: [],
  },
};

export const WithExistingFiles: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider,
  },
};

const uploadFileWithSizeLimit = async (file: FormData): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    const fileEntry = file.get('file') as File;
    const maxSize = 10 * 1024 * 1024; // 10MB

    // Simulate loading delay
    setTimeout(() => {
      if (fileEntry && fileEntry.size > maxSize) {
        resolve({
          storageId: '',
          success: false,
          error: 'file-too-large',
        });
      } else {
        resolve({
          storageId: uuidv4(),
          success: true,
        });
      }
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

export const withFileSizeLimit: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithSizeLimit,
          deleteFile: deleteFile,
          deriveFileInfosFromStorageIds,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: [],
  },
};

export const withPreviews: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithSizeLimit,
          deleteFile: deleteFile,
          deriveFileInfosFromStorageIds,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    allowFilePreview: true,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: [
      {
        fileName: 'cat1.jpg',
        status: 'uploaded',
        contentType: 'image/jpeg',
        contextId: '214b3c2e-1f4d-4f8a-9b6c-5d7e8f9xxb1c',
        storageId: '1',
      },

      {
        fileName: 'cat2.jpg',
        status: 'uploaded',
        contentType: 'image/jpeg',
        contextId: '214b3c2e-1f4d-4f3a-9b6c-5d7e8fdsd0b1c',
        storageId: '2',
      },
      {
        fileName: 'file3.pdf',
        status: 'uploaded',
        contentType: 'application/pdf',
        contextId: '214b3c2e-1f4d-4f8a-a127-5d7e8ffff1c',
        storageId: '3',
      },
    ],
  },
};

export const withAllowedFileTypes: Story = {
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: [],
  },
};

const uploadFileWithFileScan = async (): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve({
        storageId: '',
        success: false,
        error: 'file-scan-failed',
      });
    }, 1500);
  });
};

export const withFileScanFailed: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithFileScan,
          deleteFile: deleteFile,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    description: 'Opplastning av fil vil gi feil ved scanning av filen',
    files: [],
  },
};

export const WithFilePreview: Story = {
  args: {
    ...defaultProps,
    allowFilePreview: true,
    description: 'Klikk på forhåndsvisningsknappen for å se filer i full størrelse',
    files: [
      {
        fileName: 'Pikekyst Oppskrift.pdf',
        status: 'uploaded',
        contentType: 'application/pdf',
        contextId: 'preview-pdf-1',
        storageId: '1',
      },
      {
        fileName: 'file3.jpeg',
        status: 'uploaded',
        contentType: 'image/jpeg',
        contextId: 'preview-img-1',
        storageId: '2',
      },
      {
        fileName: 'file4.jpeg',
        status: 'uploaded',
        contentType: 'image/jpeg',
        contextId: 'preview-img-2',
        storageId: '3',
      },
      {
        fileName: 'readme.txt',
        status: 'uploaded',
        contentType: 'text/plain',
        contextId: 'preview-txt-1',
        storageId: '4',
      },
    ],
  },
};
