import { ReactNode, useContext } from 'react';
import { Box, Dialog, Heading, Paragraph } from '~/main';
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

  /**Should be enabled with long content */
  longContent?: boolean;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SlotDialog({ title, subtitle, open, onClose, ref, children, longContent }: SlotDialogProps) {
  const DialogBlockClasses = `${classes.dialogBlockBase} ${longContent ? classes.longContent : ''}`;

  return (
    <SlotDialogButtonsProvider>
      <Dialog open={open} onClose={onClose} ref={ref} className={classes.slotDialogOverrides} closedby="any">
        <Box gap={4} className={`${classes.headerBlock} ${DialogBlockClasses}`}>
          {!!subtitle && <Paragraph>{subtitle}</Paragraph>}
          <Heading>{title}</Heading>
        </Box>
        <Box className={`${classes.contentBlock} ${DialogBlockClasses}`}>
          <Box>{children}</Box>
        </Box>
        <SlotDialogButtonsBlock className={`${classes.buttonBlock} ${DialogBlockClasses}`} />
      </Dialog>
    </SlotDialogButtonsProvider>
  );
}

function SlotDialogButtonsBlock({ className }: { className: string }) {
  const { buttons } = useContext(SlotDialogButtonsContainerContext);

  if (!buttons) {
    return null;
  }

  return (
    <Box className={className}>
      <Box horizontal gap={12}>
        {buttons}
      </Box>
    </Box>
  );
}

SlotDialog.Buttons = SlotDialogButtons;
