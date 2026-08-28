import { Paragraph } from '../Paragraph/Paragraph';
import { HTMLAttributes } from 'react';
import { ParagraphProps } from '../Paragraph/Paragraph';
import paragraphClasses from '../Paragraph/Paragraph.module.css';
import classes from './Text.module.css';

export const textColorValues = ['primary', 'neutral', 'success', 'warning', 'danger', 'info'] as const;
export type TextColor = (typeof textColorValues)[number];

export const textWrapValues = ['wrap', 'balance', 'pretty', 'nowrap'] as const;
export const textTransformValues = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;
export const textAlignValues = ['left', 'center', 'right', 'justify'] as const;

export type TextProps = Pick<ParagraphProps, 'fontWeight' | 'data-color-subtle' | 'data-size' | 'size'> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
    ['data-color']?: TextColor;
    textWrap?: (typeof textWrapValues)[number];
    textTransform?: (typeof textTransformValues)[number];
    textAlign?: (typeof textAlignValues)[number];
  };

export const Text = ({
  fontWeight,
  'data-color-subtle': colorSubtle = false,
  ['data-color']: color,
  textWrap,
  textTransform,
  textAlign,
  className,
  style,
  children,
  ...props
}: TextProps) => {
  const classNames = [
    className,
    fontWeight ? paragraphClasses[`weight-${fontWeight}`] : '',
    color ? classes[`color-${color}`] : '',
  ].join(' ');
  const mergedStyle =
    textWrap || textTransform || textAlign || style ? { textWrap, textTransform, textAlign, ...style } : undefined;

  return (
    <Paragraph
      asChild
      data-color-subtle={colorSubtle ? true : undefined}
      className={classNames}
      style={mergedStyle}
      {...props}
    >
      <span>{children}</span>
    </Paragraph>
  );
};
