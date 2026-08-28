import { Paragraph as DsParagraph, ParagraphProps as DsParagraphProps } from '@digdir/designsystemet-react';
import classes from './Paragraph.module.css';

export type ParagraphProps = DsParagraphProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** @deprecated Use `fontWeight="medium"` instead. */
  strong?: boolean;
  fontWeight?: 'regular' | 'medium' | 'semibold';
  'data-color-subtle'?: boolean;
};

export const Paragraph = ({
  size,
  strong = false,
  fontWeight,
  'data-color-subtle': colorSubtle = false,
  className = '',
  children,
  ...props
}: ParagraphProps) => {
  const resolvedFontWeight = fontWeight ?? (strong ? 'medium' : undefined);
  const classNames = [className, resolvedFontWeight ? classes[`weight-${resolvedFontWeight}`] : ''].join(' ');

  return (
    <DsParagraph data-size={size} data-color-subtle={colorSubtle ? true : undefined} className={classNames} {...props}>
      {children}
    </DsParagraph>
  );
};

export default Paragraph;
