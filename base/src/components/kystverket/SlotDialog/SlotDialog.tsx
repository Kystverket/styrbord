import { ReactNode } from 'react';
import { Box, Dialog, Heading, Paragraph } from '~/main';
import classes from './SlotDialog.module.css';

export interface SlotDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  ref?: React.Ref<HTMLDialogElement>;

  /**Should be enabled with long content */
  withDividers?: boolean;
  title: string;
  subtitle?: string;
  buttons?: ReactNode;
  children: ReactNode;
}

export function SlotDialog({
  title,
  subtitle,
  isOpen,
  onClose,
  ref,
  buttons,
  children,
  withDividers,
}: SlotDialogProps) {
  const DialogBlockClasses = `${classes.dialogBlockBase} ${withDividers && classes.withDividers}`;

  return (
    <Dialog open={isOpen} onClose={onClose} ref={ref} className={classes.slotDialogOverrides} closedby="any">
      <Box gap={4} className={`${classes.headerBlock} ${DialogBlockClasses}`}>
        {!!subtitle && <Paragraph>{subtitle}</Paragraph>}
        <Heading>{title}</Heading>
      </Box>
      <Box className={`${classes.contentBlock} ${DialogBlockClasses}`}>
        <Box>{children}</Box>
      </Box>
      <Box className={`${classes.buttonBlock} ${DialogBlockClasses}`}>
        <Box horizontal gap={12}>
          {buttons}
        </Box>
      </Box>
    </Dialog>
  );
}
