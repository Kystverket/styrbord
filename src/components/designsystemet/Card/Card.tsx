import { Card as DsCard, CardProps as DsCardProps, Heading } from '@digdir/designsystemet-react';
import classes from './Card.module.scss';

import { Box, Icon, IconId } from '~/main';

export type CardProps = Omit<DsCardProps, 'children'> & {
  title?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  icon?: IconId;
  link?: string;
  children?: React.ReactNode;
};

const Card = ({ title, icon, link, children, titleLevel = 2, ...props }: CardProps) => {
  if (title) {
    return (
      <DsCard {...props} title={title}>
        {title && (
          <Box horizontal justify="between" mb={8}>
            {link ? (
              <Heading data-size="sm" level={titleLevel}>
                <a href={link}>{title}</a>
              </Heading>
            ) : (
              <Heading data-size="sm" level={titleLevel}>
                {title}
              </Heading>
            )}
            {icon && <Icon material={icon} className={classes.icon} />}
          </Box>
        )}
        {children}
      </DsCard>
    );
  } else {
    return <DsCard {...props}>{children}</DsCard>;
  }
};

Card.Block = DsCard.Block;

export default Card;
