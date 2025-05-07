import {
  Details as DsDetails,
  DetailsProps as DsDetailsProps,
  DetailsSummary as DsDetailsSummary,
  DetailsContent as DsDetailsContent,
} from '@digdir/designsystemet-react';

export type DetailsProps = DsDetailsProps & {
  summary: React.ReactNode;
  children: React.ReactNode;
};

export const Details = ({ summary, children, ...props }: DetailsProps) => {
  return (
    <DsDetails {...props}>
      <DsDetailsSummary>{summary}</DsDetailsSummary>
      <DsDetailsContent>{children}</DsDetailsContent>
    </DsDetails>
  );
};
