import { StyrbordPaletteColor, StyrbordSemanticColor } from '@kystverket/styrbord-tokens/colors';
import classes from './icon.module.css';
import { IconId } from './icon.types';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface MaterialIconProps {
  material: IconId;
  indicator?: IconId;
  className?: string;
  size?: IconSize;
  title?: string;
  background?: StyrbordPaletteColor | StyrbordSemanticColor;
}

const Icon = ({ material, indicator, className = '', size = 'md', title, background }: MaterialIconProps) => {
  const classNames = [
    classes.container,
    indicator ? classes.hasIndicator : classes.noIndicator,
    background ? classes.hasBackground : classes.noBackground,
    classes[`size-${size}`],
    className,
  ];
  const iconClassNames = [classes.icon, 'material-symbols-outlined'];
  const indicatorClassNames = [classes.indicator, 'material-symbols-outlined'];
  const style: Record<string, string> = {};

  if (background) {
    style['color'] = `var(--icon-color, var(--ds-color-${background}-text-default))`;
    style['background-color'] = `var(--icon-color, var(--ds-color-${background}-surface-tinted))`;
  }

  return (
    <span className={classNames.join(' ')}>
      <span title={title} aria-hidden style={style} className={iconClassNames.join(' ')}>
        {material}
      </span>
      {indicator && (
        <span title={title} aria-hidden style={style} className={indicatorClassNames.join(' ')}>
          {indicator}
        </span>
      )}
    </span>
  );
};

export default Icon;
