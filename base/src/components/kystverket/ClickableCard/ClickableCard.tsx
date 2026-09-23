import { Box, Heading, Icon } from '~/main';
import classes from './ClickableCard.module.css';
import type { ClickableCardProps } from './ClickableCard.types';

const ClickableCard = (props: ClickableCardProps) => {
  const {
    heading,
    description,
    children,
    'data-color-variant': variant = 'default',
    'data-color': dataColor = 'neutral',
    headingLevel = 2,
    headingSize = 'sm',
    icon,
    chevron = true,
    'border-style': borderStyle = 'solid',
    className = '',
    'aria-label': ariaLabel,
  } = props;
  const cardClasses = [classes.card, borderStyle === 'solid' ? classes.bordered : '', className]
    .filter(Boolean)
    .join(' ');

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

  if (typeof props.href === 'string') {
    const effectiveRel = props.target === '_blank' ? (props.rel ?? 'noopener noreferrer') : props.rel;
    return (
      <a
        href={props.href}
        target={props.target}
        rel={effectiveRel}
        className={cardClasses}
        data-color={dataColor}
        data-color-variant={variant}
        aria-label={ariaLabel}
        onClick={props.onClick}
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
      data-color-variant={variant}
      aria-label={ariaLabel}
      onClick={props.onClick}
    >
      {inner}
    </button>
  );
};

export default ClickableCard;
