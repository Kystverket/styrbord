import {
  Dialog as DSDialog,
  DialogBlock,
  DialogTrigger,
  DialogTriggerContext,
  type DialogProps as DSDialogProps,
} from '@digdir/designsystemet-react';
import { CSSProperties, forwardRef } from 'react';

export type DialogSize = 'sm' | 'md' | 'lg';

const sizeMaxWidth: Record<DialogSize, string> = {
  sm: '25rem',
  md: '40rem',
  lg: '50rem',
};

export type DialogProps = DSDialogProps & {
  'max-width'?: DialogSize;
};

const DialogRoot = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { 'max-width': maxWidth, style, ...props },
  ref,
) {
  const sizeStyle: CSSProperties =
    maxWidth && maxWidth !== 'md' ? ({ '--dsc-dialog-max-width': sizeMaxWidth[maxWidth] } as CSSProperties) : {};

  return <DSDialog ref={ref} style={{ ...sizeStyle, ...style }} {...props} />;
});

type DialogComponent = typeof DialogRoot & {
  /**
   * @deprecated Will be removed in the next major version. Connect a `Button` to the dialog with
   * `command="show-modal"` and `commandfor` set to the dialog's `id` instead.
   *
   * @example
   * <Button command="show-modal" commandfor="my-dialog">Open Dialog</Button>
   * <Dialog id="my-dialog">Content</Dialog>
   */
  TriggerContext: typeof DialogTriggerContext;
  /**
   * @deprecated Will be removed in the next major version. Use a `Button` with `command="show-modal"` and
   * `commandfor` set to the dialog's `id` instead.
   */
  Trigger: typeof DialogTrigger;
  Block: typeof DialogBlock;
};

export const Dialog = Object.assign(DialogRoot, {
  TriggerContext: DialogTriggerContext,
  Trigger: DialogTrigger,
  Block: DialogBlock,
}) as DialogComponent;
