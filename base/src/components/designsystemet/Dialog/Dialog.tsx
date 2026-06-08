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
  size?: DialogSize;
};

const DialogRoot = forwardRef<HTMLDialogElement, DialogProps>(function Dialog({ size, style, ...props }, ref) {
  const sizeStyle: CSSProperties =
    size && size !== 'md' ? ({ '--dsc-dialog-max-width': sizeMaxWidth[size] } as CSSProperties) : {};

  return <DSDialog ref={ref} style={{ ...sizeStyle, ...style }} {...props} />;
});

type DialogComponent = typeof DialogRoot & {
  TriggerContext: typeof DialogTriggerContext;
  Trigger: typeof DialogTrigger;
  Block: typeof DialogBlock;
};

export const Dialog = Object.assign(DialogRoot, {
  TriggerContext: DialogTriggerContext,
  Trigger: DialogTrigger,
  Block: DialogBlock,
}) as DialogComponent;
