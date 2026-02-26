import { ReactNode } from 'react';

export interface HeadingRowProps {
  title: string;
  editButton: {
    label: string;
    ariaLabel: string;
    onClick: () => void;
  };
}

export interface TitleRowProps {
  title: string;
}

export interface ValueRowProps {
  label: string;
  value?: string;
  error?: string;
}

export interface ContentRowProps {
  label: string;
  content?: ReactNode;
  error?: string;
}

export type SummaryRowProps = TitleRowProps | HeadingRowProps | ValueRowProps | ContentRowProps;

export type SummaryProps = { rows: SummaryRowProps[] };
