import type { StyrbordPaletteColor, StyrbordSemanticColor } from '@kystverket/styrbord-tokens/colors';
import classes from './icon.module.css';
import { FileIconId, IconId } from './icon.types';
import FileIcon from './FileIcon';

type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface IconBaseProps {
  indicator?: IconId;
  indicatorPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  size?: IconSize;
  title?: string;
  background?: StyrbordPaletteColor | StyrbordSemanticColor;
}

export interface MaterialIconProps extends IconBaseProps {
  material: IconId;
  file?: never;
}

export interface FileIconProps extends IconBaseProps {
  /** A preset file type, or any short text (e.g. `docx`) to print on the label. */
  file: FileIconId | (string & {});
  material?: never;
}

export type IconProps = MaterialIconProps | FileIconProps;

const Icon = ({
  material,
  file,
  indicator,
  indicatorPosition = 'bottom-right',
  className = '',
  size = 'md',
  title,
  background,
}: IconProps) => {
  const classNames = [
    classes.container,
    background ? classes.hasBackground : classes.noBackground,
    classes[`size-${size}`],
    className,
  ];
  const iconClassNames = [classes.icon, ...(file === undefined ? ['material-symbols-outlined'] : [])];
  const indicatorClassNames = [classes.indicator, 'material-symbols-outlined'];
  const style: React.CSSProperties = {};

  if (background) {
    style['color'] = `var(--icon-color, var(--ds-color-${background}-text-default))`;
    style['backgroundColor'] = `var(--icon-background-color, var(--ds-color-${background}-surface-tinted))`;
  }

  return (
    <span className={classNames.join(' ')}>
      <span title={title} aria-hidden style={style} className={iconClassNames.join(' ')}>
        {file === undefined ? material : <FileIcon file={file} />}
      </span>
      {indicator && (
        <span
          title={title}
          aria-hidden
          style={style}
          className={[...indicatorClassNames, classes[`indicator-${indicatorPosition ?? 'bottom-right'}`]].join(' ')}
        >
          {indicator}
        </span>
      )}
    </span>
  );
};

export default Icon;
