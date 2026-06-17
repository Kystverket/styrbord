import {
  Details as DsDetails,
  DetailsContent as DsDetailsContent,
  DetailsSummary as DsDetailsSummary,
} from '@digdir/designsystemet-react';
import classes from './CompactDetails.module.css';
import type { CompactDetailsProps } from './CompactDetails.types';

const CompactDetails = ({
  label,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  id,
  className = '',
}: CompactDetailsProps) => {
  const rootClass = [classes.compact, className].filter(Boolean).join(' ');

  const handleToggle = (event: Event) => {
    onOpenChange?.((event.currentTarget as HTMLDetailsElement).open);
  };

  return (
    <DsDetails
      id={id}
      className={rootClass}
      onToggle={handleToggle}
      {...(open === undefined ? { defaultOpen } : { open })}
    >
      <DsDetailsSummary>{label}</DsDetailsSummary>
      <DsDetailsContent>{children}</DsDetailsContent>
    </DsDetails>
  );
};

export default CompactDetails;
