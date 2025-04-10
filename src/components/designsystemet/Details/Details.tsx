import { Card, Details as DsDetails } from '@digdir/designsystemet-react';

export interface DetailsProps {
  wrapped?: boolean;
  classname?: string;
  summary: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'tinted';
  defaultOpen?: boolean;
  onToggle?: (event: Event) => void;
}

export const Details = ({
  wrapped = false,
  summary,
  children,
  variant = 'default',

  defaultOpen = false,
  ...props
}: DetailsProps) => {
  const details = (
    <DsDetails defaultOpen={defaultOpen} onToggle={props.onToggle} variant={variant}>
      <DsDetails.Summary>{summary}</DsDetails.Summary>
      <DsDetails.Content>{children}</DsDetails.Content>
    </DsDetails>
  );

  if (wrapped) {
    return <Card>{details}</Card>;
  } else {
    return details;
  }
};
