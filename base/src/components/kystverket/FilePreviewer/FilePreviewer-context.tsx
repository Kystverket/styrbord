import { createContext, ReactNode, Ref, useImperativeHandle, useRef, useState } from 'react';
import { FilePreviewerDialog, FilePreviewerDialogProps, FilePreviewRef } from './FilePreviewer-dialog';
import { FileInfo } from './FilePreviewer.types';

export const FPContext = createContext<{
  files: FileInfo[];
  ref: Ref<FilePreviewRef> | null;
  setFiles: React.Dispatch<React.SetStateAction<FileInfo[]>>;
}>({
  files: [],
  setFiles: () => {},
  ref: null,
});

export interface FilePreviewerContextProps {
  children?: ReactNode;
  ref?: Ref<FilePreviewRef>;
  files?: FileInfo[];
  animation?: FilePreviewerDialogProps['animation'];
}

export const FilePreviewerContext = ({ animation, children, ref, files }: FilePreviewerContextProps) => {
  const internalRef = useRef<FilePreviewRef>(null);
  const dialogRef = ref || internalRef;
  const [contextFiles, setContextFiles] = useState<FileInfo[]>(files ?? []);

  const [startIndex, setStartIndex] = useState(0);
  const [showPreviewer, setShowPreviewer] = useState(false);

  useImperativeHandle(dialogRef, () => {
    return {
      close() {
        setShowPreviewer(false);
      },
      showModal(idx?: number) {
        setStartIndex(idx ?? 0);
        setShowPreviewer(true);
      },
    };
  }, [files, startIndex]);

  if (!contextFiles) {
    throw Error('No files, either use files prop or use <FilePreviewer.Thumbnail/> ');
  } else if (!dialogRef) {
    throw new Error('No ref set, either pass one or set <FilePreviewer.Thumbnail/>');
  }

  return (
    <FPContext.Provider value={{ setFiles: setContextFiles, files: contextFiles, ref: dialogRef }}>
      {showPreviewer && (
        <FilePreviewerDialog
          animation={animation}
          files={contextFiles}
          startIndex={startIndex}
          onClose={() => setShowPreviewer(false)}
        />
      )}
      {children}
    </FPContext.Provider>
  );
};
