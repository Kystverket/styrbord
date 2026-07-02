import { StyrbordPaletteColor, StyrbordSemanticColor } from '@kystverket/styrbord-tokens/colors';
import classes from './icon.module.css';
import { IconId } from './icon.types';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const iconSizes: Record<IconSize, string> = {
  '2xs': '0.875rem', // 14px
  xs: '1rem', // 16px
  sm: '1.125rem', // 18px
  md: '1.3125rem', // 21px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
};

export interface MaterialIconProps {
  material: IconId;
  className?: string;
  size?: IconSize;
  title?: string;
  background?: StyrbordPaletteColor | StyrbordSemanticColor;
}

const Icon = ({ material, className = '', size = 'md', title, background }: MaterialIconProps) => {
  const classNames = [classes.icon, className, 'material-symbols-outlined'];
  const style: Record<string, string> = {};

  style['fontSize'] = `var(--icon-size, ${iconSizes[size]})`;
  style['height'] = `var(--icon-size, ${iconSizes[size]})`;
  if (background) {
    style['padding'] = '0.5rem';
    style['border-radius'] = '4px';
    style['color'] = `var(--icon-color, var(--ds-color-${background}-text-default))`;
    style['background-color'] = `var(--icon-color, var(--ds-color-${background}-surface-tinted))`;
    delete style['height'];
  }

  return (
    <span title={title} aria-hidden style={style} className={classNames.join(' ')}>
      {material}
    </span>
  );
};

export default Icon;
