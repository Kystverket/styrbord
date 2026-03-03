import { TableProps as DsTableProps } from '@digdir/designsystemet-react';
export type TableProps = DsTableProps & {
    header?: true | 'transparent' | 'opaque';
    body?: 'transparent' | 'white';
};
declare const Table: {
    ({ header, body, className, ...props }: TableProps): React.JSX.Element;
    Cell: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TableCellProps & React.RefAttributes<HTMLTableCellElement>>;
    HeaderCell: React.ForwardRefExoticComponent<{
        sort?: React.AriaAttributes["aria-sort"];
    } & React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
    Head: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TableHeadProps & React.RefAttributes<HTMLTableSectionElement>>;
    Body: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    Row: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
    Foot: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TableFootProps & React.RefAttributes<HTMLTableSectionElement>>;
};
export default Table;
