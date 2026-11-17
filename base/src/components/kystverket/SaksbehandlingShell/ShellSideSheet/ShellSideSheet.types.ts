import type { CSSProperties, ReactNode } from 'react';

export type ShellSideSheetSize = 'sm' | 'md' | 'lg' | '33%' | '40%' | '50%' | '66%';

export type ShellSideSheetPlacement = 'left' | 'right';

export interface ShellSideSheetProps {
  open?: boolean;
  /** Called on Escape and backdrop click while the sheet is open and not pinned. */
  onClose?: () => void;
  placement?: ShellSideSheetPlacement;
  size?: ShellSideSheetSize;
  /**
   * When `true` the sheet is a flex child of `<ShellSideSheetLayout>` and reflows the content
   * next to it. When `false` it overlays the content.
   */
  pinned?: boolean;
  /** Dim the content and trap focus while overlaying. Default: `true`. */
  backdrop?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface ShellSideSheetLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
