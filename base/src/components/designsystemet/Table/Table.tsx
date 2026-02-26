import { Table as DsTable, TableProps as DsTableProps } from '@digdir/designsystemet-react';
import classes from './Table.module.scss';

export type TableProps = DsTableProps & {
  radius?: 'none' | 'sm' | 'md' | 'lg';
  header?: true | 'transparent' | 'opaque';
  body?: 'transparent' | 'white';
  'cell-padding'?: 'sm' | 'md';
};

const Table = ({
  header = 'transparent',
  body = 'transparent',
  radius = 'none',
  className = '',
  'cell-padding': cellPadding = 'sm',
  ...props
}: TableProps) => {
  if (!props['data-color']) {
    props['data-color'] = 'neutral';
  }
  const classNames = [className, classes.table];
  if (header && header !== 'transparent') {
    classNames.push(classes.opaqueHeader);
  }
  if (body && body === 'white') {
    classNames.push(classes.white);
  }
  if (radius) {
    classNames.push(classes[`radius-${radius}`]);
  }
  if (cellPadding) {
    classNames.push(classes[`cell-padding-${cellPadding}`]);
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
