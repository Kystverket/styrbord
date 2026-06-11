import type { IconId } from '~/main';

export type ClickableCardColor = 'neutral' | 'main';
export type ClickableCardVariant = 'default' | 'tinted';
export type ClickableCardHeadingSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ClickableCardProps {
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
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  'aria-label'?: string;
}
