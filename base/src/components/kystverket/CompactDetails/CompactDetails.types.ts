import type { ReactNode } from 'react';

export type CompactDetailsProps = {
  label: ReactNode;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  id?: string;
  className?: string;
};
