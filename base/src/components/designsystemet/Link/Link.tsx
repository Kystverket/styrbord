import { FC } from 'react';
import { Link as DsLink, LinkProps as DsLinkProps, MergeRight } from '@digdir/designsystemet-react';
import classes from './Link.module.css';
import { Icon, IconId } from '~/main';

export type LinkProps = MergeRight<
  DsLinkProps,
  {
    underline?: boolean;
    icon?: IconId;
  }
>;

export const Link: FC<LinkProps> = ({ underline, className, children, ...rest }) => {
  const classList = [className];

  if (underline === undefined || underline === true) {
    classList.push(classes['with-underline']);
  } else {
    classList.push(classes['without-underline']);
  }

  if (rest.icon) {
    classList.push(classes['with-icon']);
    children = (
      <>
        <Icon material={rest.icon} size="sm" className={classes['link-icon']} />
        <span className={classes['link-icon-text']}>{children}</span>
      </>
    );
  } else {
    classList.push(classes['without-icon']);
  }

  return (
    <DsLink className={classList.join(' ')} {...rest}>
      {children}
    </DsLink>
  );
};
