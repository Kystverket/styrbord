import { DetailsProps as DsDetailsProps } from '@digdir/designsystemet-react';
export type DetailsProps = DsDetailsProps & {
    summary: React.ReactNode;
    children: React.ReactNode;
};
export declare const Details: ({ summary, children, ...props }: DetailsProps) => React.JSX.Element;
