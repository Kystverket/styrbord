import { Surface, Heading, Icon } from '~/main';
import classes from './ClickableCard.module.css';
import type { ClickableCardProps } from './ClickableCard.types';

const ClickableCard = (props: ClickableCardProps) => {
  const {
    heading,
    description,
    children,
    'data-size': dataSize = 'md',
    'data-color-variant': variant = 'default',
    'data-color': dataColor = 'neutral',
    headingLevel = 2,
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
    <Surface horizontal justify="between" align="center" className={classes.gap3}>
      <Surface className={classes.gap2}>
        <Surface horizontal align="center" className={classes.gap3}>
          {icon && <Icon material={icon} className={classes.iconLeft} size="md" />}
          <Heading data-size="sm" level={headingLevel}>
            {heading}
          </Heading>
        </Surface>
        {(description || children) && (
          <Surface className={classes.gap3}>
            {description && <p className={classes.description}>{description}</p>}
            {children !== undefined && children !== null && <Surface width="full">{children}</Surface>}
          </Surface>
        )}
      </Surface>
      {chevron && <Icon material="chevron_right" className={classes.chevron} size="md" />}
    </Surface>
  );

  if (typeof props.href === 'string') {
    const effectiveRel = props.target === '_blank' ? (props.rel ?? 'noopener noreferrer') : props.rel;
    return (
      <a
        href={props.href}
        target={props.target}
        rel={effectiveRel}
        className={cardClasses}
        data-size={dataSize}
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
      data-size={dataSize}
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
