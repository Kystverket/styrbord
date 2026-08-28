import { Paragraph as DsParagraph } from '@digdir/designsystemet-react';
import { HTMLAttributes } from 'react';
import { ParagraphProps } from '../Paragraph/Paragraph';
import paragraphClasses from '../Paragraph/Paragraph.module.css';
import classes from './Text.module.css';

export type TextColor = 'accent' | 'brand1' | 'brand2' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export type TextProps = Pick<ParagraphProps, 'size' | 'strong' | 'fontWeight' | 'data-color-subtle'> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
    color?: TextColor;
    textWrap?: 'wrap' | 'balance' | 'pretty' | 'nowrap';
  };

export const Text = ({
  size,
  strong = false,
  fontWeight,
  'data-color-subtle': colorSubtle = false,
  color,
  textWrap,
  className = '',
  style,
  children,
  ...props
}: TextProps) => {
  const resolvedFontWeight = fontWeight ?? (strong ? 'medium' : undefined);
  const classNames = [
    className,
    resolvedFontWeight ? paragraphClasses[`weight-${resolvedFontWeight}`] : '',
    color ? classes[`color-${color}`] : '',
  ].join(' ');
  const mergedStyle = textWrap ? { textWrap, ...style } : style;

  return (
    <DsParagraph
      asChild
      data-size={size}
      data-color-subtle={colorSubtle ? true : undefined}
      className={classNames}
      style={mergedStyle}
      {...props}
    >
      <span>{children}</span>
    </DsParagraph>
  );
};

export default Text;
