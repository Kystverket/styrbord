import { Table as DsTable, TableProps } from '@digdir/designsystemet-react';

const Table = ({ ...props }: TableProps) => {
  if (!props['data-color']) {
    props['data-color'] = 'neutral';
  }
  return <DsTable {...props} />;
};

Table.Cell = DsTable.Cell;
Table.HeaderCell = DsTable.HeaderCell;
Table.Head = DsTable.Head;
Table.Body = DsTable.Body;
Table.Row = DsTable.Row;
Table.Foot = DsTable.Foot;

export default Table;
