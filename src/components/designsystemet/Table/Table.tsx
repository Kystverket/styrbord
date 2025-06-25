import { Table as DsTable, TableProps as DsTableProps } from '@digdir/designsystemet-react';
import classes from './Table.module.scss';

export type TableProps = DsTableProps & {
  header?: true | 'transparent' | 'opaque';
  body?: 'transparent' | 'white';
};

const Table = ({ header = 'transparent', body = 'transparent', className = '', ...props }: TableProps) => {
  if (!props['data-color']) {
    props['data-color'] = 'neutral';
  }
  const classNames = [className, classes.table];
  if (header && header !== 'transparent') {
    classNames.push(classes.opaqueHeader);
  }
  if (body && body === 'white') {
    classNames.push(classes.body);
  }
  return <DsTable className={classNames.join(' ')} {...props} />;
};

Table.Cell = DsTable.Cell;
Table.HeaderCell = DsTable.HeaderCell;
Table.Head = DsTable.Head;
Table.Body = DsTable.Body;
Table.Row = DsTable.Row;
Table.Foot = DsTable.Foot;

export default Table;
