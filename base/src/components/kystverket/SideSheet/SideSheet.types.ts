import { CSSProperties, ReactNode } from 'react';

export type SideSheetSize = 'sm' | 'md' | 'lg' | '33%' | '50%' | '66%';

export type SideSheetPlacement = 'left' | 'right';

/**
 * - `overlay`: sheet slides over content (default). Can be pinned by the user via `pinnable`.
 * - `push`: sheet starts pinned and reflowing content inside `<SideSheet.Layout>`.
 */
export type SideSheetMode = 'overlay' | 'push';

export type SideSheetHeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SideSheetProps {
  open?: boolean;
  onClose?: () => void;
  placement?: SideSheetPlacement;
  size?: SideSheetSize;
  /**
   * overlay: sheet floats over content (default).
   * push: sheet starts pinned/expanded, reflowing content inside `<SideSheet.Layout>`.
   */
  mode?: SideSheetMode;
  /**
   * Show a pin button in the header that lets the user toggle overlay/push.
   * Default: `false`.
   */
  pinnable?: boolean;

  /**
   * Controlled pinned state. When `true` the sheet expands as a flex child (push mode).
   * When `false` it overlays content. Combine with `onPinnedChange` for controlled usage.
   */
  pinned?: boolean;

  /** Called when the user toggles the pin button. */
  onPinnedChange?: (pinned: boolean) => void;

  /**
   * Default pinned state for uncontrolled usage. Defaults to `true` when `mode='push'`,
   * `false` otherwise.
   */
  defaultPinned?: boolean;

  /**
   * Show a dim backdrop and trap focus when in overlay mode.
   * Default: `true` (only applies in overlay/non-pinned state).
   */
  backdrop?: boolean;

  /** Sheet heading text. */
  title?: ReactNode;

  /** Font size of the heading. Default: `'xs'`. */
  headingSize?: SideSheetHeadingSize;

  /** Show the close (×) button. Default: `true`. */
  showCloseButton?: boolean;

  /** Show a back (←) button in the header. Default: `false`. */
  showBackButton?: boolean;

  /** Called when the back button is clicked. */
  onBack?: () => void;

  /**
   * An optional extra element rendered in the header between the title and the
   * pin/close buttons (e.g. an "open in new tab" button).
   */
  headerAction?: ReactNode;

  /** Show a divider line below the header. Default: `true`. */
  headerDivider?: boolean;

  /** Show a divider line above the footer. Default: `true`. */
  footerDivider?: boolean;

  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface SideSheetLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
