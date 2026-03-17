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
  filled?: boolean;
  className?: string;
  size?: IconSize;
  title?: string;
}

const Icon = ({ material, filled = false, className = '', size = 'md', title }: MaterialIconProps) => {
  const classNames = [classes.icon, className, 'material-symbols-outlined'];
  const style: Record<string, string> = {};

  if (filled) {
    classNames.push(classes.filled);
  }

  style['fontSize'] = iconSizes[size];
  style['height'] = iconSizes[size];

  return (
    <span title={title} aria-hidden style={style} className={classNames.join(' ')}>
      {material}
    </span>
  );
};

export default Icon;
