import { Tag as DsTag, TagProps as DsTagProps } from '@digdir/designsystemet-react';
import classes from './Tag.module.css';

export type TagProps = DsTagProps & {
  bordered?: boolean;
  rounded?: boolean;
};

const Tag = ({ bordered = false, rounded = false, className = '', ...props }: TagProps) => {
  const classNames = [className];
  if (bordered) {
    classNames.push(classes.bordered);
  }
  if (rounded) {
    classNames.push(classes.rounded);
  }
  return <DsTag className={classNames.join(' ')} {...props} />;
};

export default Tag;
