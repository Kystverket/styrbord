import { CSSProperties, ReactNode, useContext } from 'react';
import { Surface, Dialog, Heading, Paragraph, type DialogSize } from '~/main';
import classes from './SlotDialog.module.css';
import { SlotDialogButtons } from '~/components/kystverket/SlotDialog/Buttons/SlotDialogButtons';
import {
  SlotDialogButtonsContainerContext,
  SlotDialogButtonsProvider,
} from '~/components/kystverket/SlotDialog/Buttons/ButtonsContext';

export interface SlotDialogProps {
  open?: boolean;
  onClose?: () => void;
  ref?: React.Ref<HTMLDialogElement>;
  className?: string;
  style?: CSSProperties;

  /**Should be enabled with long content */
  longContent?: boolean;
  'max-width'?: DialogSize;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

function SlotDialogRoot({
  title,
  subtitle,
  open,
  onClose,
  ref,
  children,
  longContent,
  'max-width': maxWidth,
  style,
  className = '',
}: Readonly<SlotDialogProps>) {
  const DialogBlockClasses = `${classes.dialogBlockBase} ${longContent ? classes.longContent : ''}`;

  return (
    <SlotDialogButtonsProvider>
      <Dialog
        open={open}
        onClose={onClose}
        ref={ref}
        max-width={maxWidth}
        style={style}
        className={`${classes.slotDialogOverrides} ${className}`}
        closedby="any"
      >
        <Surface gap={1} className={`${classes.headerBlock} ${DialogBlockClasses}`}>
          {!!subtitle && <Paragraph>{subtitle}</Paragraph>}
          <Heading>{title}</Heading>
        </Surface>
        <Surface className={`${classes.contentBlock} ${DialogBlockClasses}`}>
          <Surface>{children}</Surface>
        </Surface>
        <SlotDialogButtonsBlock className={`${classes.buttonBlock} ${DialogBlockClasses}`} />
      </Dialog>
    </SlotDialogButtonsProvider>
  );
}

function SlotDialogButtonsBlock({ className }: Readonly<{ className: string }>) {
  const { buttons } = useContext(SlotDialogButtonsContainerContext);

  if (!buttons) {
    return null;
  }

  return (
    <Surface className={className}>
      <Surface horizontal gap={3}>
        {buttons}
      </Surface>
    </Surface>
  );
}

type SlotDialogComponent = typeof SlotDialogRoot & {
  Buttons: typeof SlotDialogButtons;
};

export const SlotDialog = Object.assign(SlotDialogRoot, {
  Buttons: SlotDialogButtons,
}) as SlotDialogComponent;
