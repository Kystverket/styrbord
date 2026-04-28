import { Tag as DsTag, TagProps as DsTagProps } from '@digdir/designsystemet-react';
import classes from './Tag.module.css';
import Icon from '~/components/kystverket/Icon/icon';
import { IconId } from '~/components/kystverket/Icon/icon.types';

export type TagProps = DsTagProps & {
  bordered?: boolean;
  rounded?: boolean;
  icon?: IconId;
  plainBackground?: boolean;
};

const Tag = ({
  bordered = false,
  rounded = false,
  plainBackground = false,
  icon,
  children,
  className = '',
  ...props
}: TagProps) => {
  const classNames = [className];
  if (bordered || plainBackground) {
    classNames.push(classes.bordered);
  }
  if (rounded) {
    classNames.push(classes.rounded);
  }
  if (plainBackground) {
    classNames.push(classes.plainBackground);
  }
  if (icon) {
    classNames.push(classes.withIcon);
  }
  return (
    <DsTag className={classNames.join(' ')} {...props}>
      {icon && <Icon material={icon} size="xs" />}
      {children}
    </DsTag>
  );
};

export default Tag;
