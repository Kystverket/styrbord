import { Paragraph, type ParagraphProps } from '../Paragraph/Paragraph';
import { HTMLAttributes } from 'react';
import paragraphClasses from '../Paragraph/Paragraph.module.css';
import classes from './Text.module.css';
import { styrbordSemanticColors, styrbordPaletteColors } from '@kystverket/styrbord-tokens/colors';

export const colorValues = [...styrbordSemanticColors, ...styrbordPaletteColors];
export const textWrapValues = ['wrap', 'balance', 'pretty', 'nowrap'] as const;
export const textTransformValues = ['none', 'capitalize', 'uppercase', 'lowercase'] as const;
export const textAlignValues = ['left', 'center', 'right', 'justify'] as const;

export type TextProps = Pick<ParagraphProps, 'weight' | 'data-color-subtle' | 'data-size' | 'size'> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
    ['data-color']?: (typeof colorValues)[number];
    wrap?: (typeof textWrapValues)[number];
    transform?: (typeof textTransformValues)[number];
    align?: (typeof textAlignValues)[number];
  };

export const Text = ({
  weight,
  'data-color-subtle': colorSubtle = false,
  ['data-color']: color,
  wrap,
  transform,
  align,
  className,
  style,
  children,
  ...props
}: TextProps) => {
  const classNames = [
    className,
    weight ? paragraphClasses[`weight-${weight}`] : '',
    color ? classes[`color`] : '',
  ].join(' ');

  const colorVariant = colorSubtle ? 'subtle' : 'default';
  const colorBuilder = color ? `var(--ds-color-${color}-text-${colorVariant})` : '';

  const mergedStyle = {
    textWrap: wrap,
    textTransform: transform,
    textAlign: align,
    '--sb-text-color': colorBuilder,
    ...style,
  };

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
