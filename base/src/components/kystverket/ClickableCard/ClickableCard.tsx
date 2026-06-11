import { Box, Heading, Icon } from '~/main';
import classes from './ClickableCard.module.css';
import type { ClickableCardProps } from './ClickableCard.types';

const ClickableCard = ({
  heading,
  description,
  children,
  variant = 'default',
  color = 'neutral',
  headingLevel = 2,
  headingSize = 'sm',
  icon,
  chevron = true,
  showBorder = true,
  href,
  target,
  rel,
  onClick,
  className = '',
  'aria-label': ariaLabel,
}: ClickableCardProps) => {
  const dataColor = color === 'main' ? 'primary' : 'neutral';

  const cardClasses = [classes.card, showBorder ? classes.bordered : '', className].filter(Boolean).join(' ');

  const inner = (
    <>
      <Box horizontal className={classes.header}>
        {icon && <Icon material={icon} className={classes.iconLeft} size="md" />}
        <Heading data-size={headingSize} level={headingLevel} className={classes.heading}>
          {heading}
        </Heading>
        {chevron && <Icon material="chevron_right" className={classes.chevron} size="md" />}
      </Box>
      {description && <p className={classes.description}>{description}</p>}
      {children !== undefined && children !== null && <Box className={classes.slot}>{children}</Box>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cardClasses}
        data-color={dataColor}
        data-variant={variant}
        aria-label={ariaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cardClasses}
      data-color={dataColor}
      data-variant={variant}
      aria-label={ariaLabel}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {inner}
    </button>
  );
};

export default ClickableCard;
