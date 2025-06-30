import classes from './icon.module.css';
import { IconId } from './icon.types';

export interface MaterialIconProps {
  material: IconId;
  filled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Icon = ({ material, filled = false, className = '', size = 'md' }: MaterialIconProps) => {
  const classNames = [classes.icon, className, 'material-symbols-outlined'];
  const style: Record<string, string> = {};

  if (filled) {
    classNames.push(classes.filled);
  }

  switch (size) {
    case 'sm':
      style['fontSize'] = '18px';
      break;
    case 'md':
      style['fontSize'] = '21px';
      break;
    case 'lg':
      style['fontSize'] = '24px';
      break;
    case 'xl':
      style['fontSize'] = '32px';
      break;
    case '2xl':
      style['fontSize'] = '48px';
      break;
  }
  return (
    <span aria-hidden style={style} className={classNames.join(' ')}>
      {material}
    </span>
  );
};

export default Icon;
