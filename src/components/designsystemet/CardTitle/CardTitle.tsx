import { Heading } from '@digdir/designsystemet-react';
import classes from './CardTitle.module.scss';

import { Box, Icon, IconId } from '~/main';

export type CardTitleProps = {
  children?: React.ReactNode;
  icon?: IconId;
  href?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

const CardTitle = ({ icon, href, children, level = 2, size = 'sm' }: CardTitleProps) => {
  return (
    <Box horizontal justify="between">
      {href ? (
        <Heading data-size={size} level={level}>
          <a className="styrbord-card-link" href={href}>
            {children}
          </a>
        </Heading>
      ) : (
        <Heading data-size={size} level={level}>
          {children}
        </Heading>
      )}
      {icon && <Icon material={icon} className={classes.icon} />}
    </Box>
  );
};

export default CardTitle;
