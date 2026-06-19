import type { IconId } from '../Icon/icon.types';

export type ClickableCardColor = 'neutral' | 'main';
export type ClickableCardVariant = 'default' | 'tinted';
export type ClickableCardHeadingSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ClickableCardBaseProps = {
  heading: string;
  description?: string;
  children?: React.ReactNode;
  variant?: ClickableCardVariant;
  color?: ClickableCardColor;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  headingSize?: ClickableCardHeadingSize;
  icon?: IconId;
  chevron?: boolean;
  showBorder?: boolean;
  className?: string;
  'aria-label'?: string;
};

type ClickableCardLinkProps = ClickableCardBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ClickableCardButtonProps = ClickableCardBaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type ClickableCardProps = ClickableCardLinkProps | ClickableCardButtonProps;
