import { Button as DsButton, ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import classes from './Button.module.scss';
import { FC } from 'react';

export type ButtonProps = {
  variant?: 'filled' | 'subtle' | 'outline' | 'ghost' | 'dashed';
  color?: 'accent' | 'neutral' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  href?: string;
  target?: string;
} & Omit<DsButtonProps, 'variant' | 'data-color' | 'data-size'>;

export const Button: FC<ButtonProps> = ({
  variant = 'outline',
  color = 'accent',
  size = 'md',
  text = undefined,
  href = undefined,
  target = '_blank',
  ...props
}) => {
  const propsToOverride: DsButtonProps = { ...props };

  switch (variant) {
    case 'filled':
      propsToOverride.variant = 'primary';
      break;
    case 'outline':
      propsToOverride.variant = 'secondary';
      break;
    case 'ghost':
      propsToOverride.variant = 'tertiary';
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
        {text}
      </a>
    );
    propsToOverride.asChild = true;
  } else if (text) {
    propsToOverride.children = text;
  } else if (href) {
    propsToOverride.children = (
      <a href={href} target={target} rel="noreferrer">
        {propsToOverride.children}
      </a>
    );
    propsToOverride.asChild = true;
  }

  return <DsButton {...propsToOverride} />;
};

/*
export interface ButtonInputProps {
  icon?: ReactNode;
  iconPlacement?: 'left' | 'right';
}

<Button asChild>
    <a target='_blank' rel='noreferrer' href='https://www.designsystemet.no'>
      Gå til Designsystemet
      <ExternalLinkIcon title='Ekstern lenke' />
    </a>
  </Button>

*/
