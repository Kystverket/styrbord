import { Tag as DsTag, TagProps as DsTagProps } from '@digdir/designsystemet-react';
import classes from './Tag.module.css';

export type TagProps = DsTagProps & {
  bordered?: boolean;
};

const Tag = ({ bordered = false, className = '', ...props }: TagProps) => {
  const classNames = [className];
  if (bordered) {
    classNames.push(classes.bordered);
  }
  return <DsTag className={classNames.join(' ')} {...props} />;
};

export default Tag;
