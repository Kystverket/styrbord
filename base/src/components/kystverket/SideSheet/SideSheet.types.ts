import { CSSProperties, ReactNode } from 'react';

export type SideSheetSize = 'sm' | 'md' | 'lg' | '33%' | '40%' | '50%' | '66%';

export type SideSheetPlacement = 'left' | 'right';

export interface SideSheetProps {
  open?: boolean;
  onClose?: () => void;
  placement?: SideSheetPlacement;
  size?: SideSheetSize;
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
   * Default pinned state for uncontrolled usage. `true` starts the sheet pinned/expanded,
   * reflowing content inside `<SideSheet.Layout>` (push mode). Default: `false` (overlay).
   * BEWARE: On phone it always starts unpinned regardless of this.
   */
  defaultPinned?: boolean;

  /**
   * Show a dim backdrop and trap focus when in overlay mode.
   * Default: `true` (only applies in overlay/non-pinned state).
   */
  backdrop?: boolean;

  /**
   * Sheet heading. pass a string, or your own `<Heading>` (e.g.
   * `<Heading data-size="xs">Title</Heading>`) to control its size and level.
   */
  title?: ReactNode;

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
