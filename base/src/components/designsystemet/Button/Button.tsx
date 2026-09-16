import { Button as DsButton, ButtonProps as DsButtonProps, Tooltip } from '@digdir/designsystemet-react';
import classes from './Button.module.scss';
import { Children, FC, Fragment, isValidElement, ReactNode } from 'react';
import { StyrbordPaletteColor, StyrbordSemanticColor } from '@kystverket/styrbord-tokens/colors';

function wrapTextNodes(children: ReactNode, className: string): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return <span className={className}>{child}</span>;
    }
    if (isValidElement(child) && child.type === Fragment) {
      return wrapTextNodes((child.props as { children?: ReactNode }).children, className);
    }
    return child;
  });
}

export type ButtonProps = {
  /**
   * Visual style of the button.
   *
   * Styrbord deliberately and permanently names these differently from Designsystemet. The
   * upstream names (`primary`/`secondary`/`tertiary`) read as emphasis levels and collide with
   * `data-color="primary"`, which is a colour family — two unrelated things spelled the same way.
   * Styrbord names the shape instead, which also leaves room for `subtle` and `dashed`, neither of
   * which Designsystemet has.
   *
   * | Styrbord    | Designsystemet         |
   * | ----------- | ---------------------- |
   * | `filled`    | `primary`              |
   * | `outline`   | `secondary`            |
   * | `ghost`     | `tertiary`             |
   * | `subtle`    | `primary` + extra CSS  |
   * | `dashed`    | `secondary` + extra CSS|
   *
   * Consequence of the divergence: the upstream `variant` prop is not forwarded, so Designsystemet
   * examples need translating through the table above. Use this list, not theirs.
   */
  variant?: 'filled' | 'subtle' | 'outline' | 'ghost' | 'dashed';
  color?: StyrbordSemanticColor | StyrbordPaletteColor;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  text?: string;
  href?: string;
  target?: string;
  tooltip?: string;
} & Omit<DsButtonProps, 'variant' | 'data-color' | 'data-size' | 'disabled'>;

export const Button: FC<ButtonProps> = ({
  variant = 'outline',
  color = undefined,
  size = 'md',
  text = undefined,
  href = undefined,
  target = '_blank',
  tooltip = undefined,
  ...props
}) => {
  const propsToOverride: DsButtonProps = { ...props };
  propsToOverride.className = [propsToOverride.className, classes.paddingOverrides].join(' ');

  switch (variant) {
    case 'filled':
      propsToOverride.variant = 'primary';
      break;
    case 'outline':
      propsToOverride.variant = 'secondary';
      propsToOverride.className = [propsToOverride.className, classes.outline].join(' ');
      break;
    case 'ghost':
      propsToOverride.variant = 'tertiary';
      propsToOverride.className = [propsToOverride.className, classes.ghost].join(' ');
      break;
    case 'subtle':
      propsToOverride.variant = 'primary';
      propsToOverride.className = [propsToOverride.className, classes.subtle].join(' ');
      break;
    case 'dashed':
      propsToOverride.variant = 'secondary';
      propsToOverride.className = [propsToOverride.className, classes.dashed].join(' ');
      break;
  }

  propsToOverride['data-color'] = color;
  propsToOverride['data-size'] = size;

  if (href) {
    propsToOverride.className = [propsToOverride.className, classes.href].join(' ');
  }

  if (text && href) {
    propsToOverride.children = (
      <a href={href} target={target} rel="noreferrer">
        <span className={classes.textContent}>{text}</span>
      </a>
    );
    propsToOverride.asChild = true;
  } else if (text) {
    propsToOverride.children = <span className={classes.textContent}>{text}</span>;
  } else if (href) {
    propsToOverride.children = (
      <a href={href} target={target} rel="noreferrer">
        {wrapTextNodes(propsToOverride.children, classes.textContent)}
      </a>
    );
    propsToOverride.asChild = true;
  } else {
    propsToOverride.children = wrapTextNodes(propsToOverride.children, classes.textContent);
  }

  const button = <DsButton {...propsToOverride} />;

  if (tooltip) {
    return <Tooltip content={tooltip}>{button}</Tooltip>;
  }

  return button;
};
