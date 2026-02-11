import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader, FileUploaderProps } from './FileUploader';
import { FileUploaderContext } from './FileUploader.context';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { StyrbordTranslationContext } from '~/main';
import { useState } from 'react';
import { FileInfo, UploadFileResult } from './FileUploader.types';
import { v4 as uuidv4 } from 'uuid';

import cat1 from '/assets/img/cats/Cat 1.jpg';
import cat2 from '/assets/img/cats/Cat 2.jpg';

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
  buttonLabel: 'Last opp',
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
  ],
  maxFiles: 5,
  onChange: (files) => console.log('Files changed:', files),
  allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
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

export const WithError: Story = {
  args: { ...defaultProps, error: 'Det oppstod en feil' },
};

export const WithExistingFiles: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
      return [
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
          thumbnailUri: cat1,
          status: 'uploaded',
        },
        {
          contextId: 'existing-3',
          fileName: 'screenshot.png',
          storageId: 'storage-id-3',
          contentType: 'image/png',
          thumbnailUri: cat2,
          status: 'uploaded',
        },
      ];
    },
  },
};

export const WithExistingFilesWithTranslations: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
      return [
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
          thumbnailUri: cat1,
          status: 'uploaded',
        },
        {
          contextId: 'existing-3',
          fileName: 'screenshot.png',
          storageId: 'storage-id-3',
          contentType: 'image/png',
          thumbnailUri: cat2,
          status: 'uploaded',
        },
      ];
    },
    translations: {
      existingFiles: {
        buttonOpen: 'Velg eksisterende filer',
        dialogTitle: 'Velg filer fra eksisterende',
        dialogCancel: 'Avbryt',
        dialogConfirm: 'Velg',
        noFilesAvailable: 'Ingen eksisterende filer tilgjengelig',
      },
    },
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

export const WithFileSizeLimitEnglish: Story = {
  decorators: [
    (Story) => (
      <StyrbordTranslationContext.Provider value={{ language: 'en-US' }}>
        <FileUploaderContext.Provider
          value={{
            uploadFile: uploadFileWithSizeLimit,
            deleteFile: deleteFile,
          }}
        >
          <Story />
        </FileUploaderContext.Provider>
      </StyrbordTranslationContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    label: 'Upload files',
    buttonLabel: 'Upload',
    description: 'Files larger than 10MB will be rejected',
    files: [],
  },
};

const uploadFileWithTypeRestriction = async (file: FormData): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    const fileEntry = file.get('file') as File;
    const forbiddenTypes = ['.exe', '.bat', '.scr', '.com', '.zip'];

    // Simulate loading delay
    setTimeout(() => {
      if (fileEntry && forbiddenTypes.some((type) => fileEntry.name.toLowerCase().endsWith(type))) {
        resolve({
          storageId: '',
          success: false,
          error: 'invalid-file-type',
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

export const withFileTypeRestriction: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithTypeRestriction,
          deleteFile: deleteFile,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    description: 'Filer med utvidelser .exe, .bat, .scr, .com, .zip vil bli avvist',
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
