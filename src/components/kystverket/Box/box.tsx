import { ReactNode } from 'react';
import classes from './box.module.css';
import { BorderRadiusProps, Spacing, SpacingKey, SpacingProps, SurfaceStyleProps } from './box.types';
import { cssSpacingProperties, spacingKeys } from './box.constants';

const getSpacingCss = (key: SpacingKey, value?: Spacing): Record<string, string> => {
  if (value === undefined) return {};

  const cssProperties = cssSpacingProperties[key];
  return cssProperties.reduce((acc, property) => {
    return { ...acc, [property]: `var(--spacing-${value})` };
  }, {});
};

type WrapType = boolean | 'reverse';

export interface BaseBoxProps {
  className?: string;
  align?: 'normal' | 'start' | 'center' | 'end';
  gap?: Spacing;
  children: ReactNode;
  wrap?: WrapType;
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: string;
}

type VerticalBoxProps = BaseBoxProps & {
  horizontal?: false;
};

type HorizontalBoxProps = BaseBoxProps & {
  horizontal: true;
  justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
};

function wrapTypeToCssValue(wrap?: WrapType): string {
  if (wrap === true) return 'wrap';
  if (wrap === false) return 'nowrap';
  if (wrap === 'reverse') return 'wrap-reverse';
  return 'nowrap';
}

function growShrinkToCssValue(value?: boolean | number): string {
  return value === true ? '1' : !value ? '0' : value.toString();
}

export type BoxProps = (VerticalBoxProps | HorizontalBoxProps) & SpacingProps & BorderRadiusProps & SurfaceStyleProps;

const Box = ({
  className = '',
  radius = undefined,
  gap = 0,
  wrap = false,
  align = 'normal',
  grow = false,
  shrink = false,
  basis = 'auto',
  children,
  ...props
}: BoxProps) => {
  const classList = [classes.box];
  const styles: Record<string, string> = {
    '--box-gap': 'var(--spacing-' + gap + ')',
    '--box-flex-grow': growShrinkToCssValue(grow),
    '--box-flex-shrink': growShrinkToCssValue(shrink),
    '--box-flex-basis': basis,
  };

  styles['--box-wrap'] = wrapTypeToCssValue(wrap);

  if (props.horizontal) {
    classList.push(classes.horizontal);
    classList.push(classes[`justify-${props.justify ?? 'start'}`]);
  }

  if (radius) {
    classList.push(classes[`border-radius-${radius}`]);
  }

  if (props.color) {
    classList.push(classes[`color-${props.color}`]);

    if (props.subtle) {
      classList.push(classes['is-subtle']);
    }

    if (props.border) {
      classList.push(classes[`has-border`]);
      classList.push(classes[`border-width-${props.border}`]);
    }
  }

  spacingKeys.forEach((key) => {
    Object.assign(styles, getSpacingCss(key, props[key]));
  });

  classList.push(classes[`align-${align}`]);
  classList.push(className);

  return (
    <div style={styles} className={classList.join(' ')}>
      {children}
    </div>
  );
};

export default Box;
