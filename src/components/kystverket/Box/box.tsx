import { ReactNode } from 'react';
import classes from './box.module.css';
import { BorderRadiusProps, Spacing, SpacingKey, SpacingProps, SurfaceStyleProps } from './box.types';
import { cssSpacingProperties, spacingKeys } from './box.constants';
import { ScreenSize } from '~/utils/types';
import { AllSizes, buildTypographyClasses, TypographyPrefix } from '../Typography/typography.util';

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
  align?: 'normal' | 'start' | 'center' | 'end' | 'stretch';
  gap?: Spacing;
  children: ReactNode;
  wrap?: WrapType;
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: string;
  width?: 'auto' | 'fit' | 'full' | 'container' | 'form' | 'form-sidebar';
  show?: ScreenSize;
  hide?: ScreenSize;
  font?: {
    base?: TypographyPrefix;
    size?: AllSizes;
    strong?: boolean;
  };
}

type VerticalBoxProps = BaseBoxProps & {
  horizontal?: false;
  justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
};

type HorizontalBoxProps = BaseBoxProps & {
  horizontal: true | ScreenSize;
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
  width = undefined,
  gap = 0,
  wrap = false,
  align = 'normal',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  show = undefined,
  hide = undefined,
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

  if (props.font) {
    classList.push(
      buildTypographyClasses({
        type: props.font.base ?? 'body',
        size: props.font.size ?? 'md',
        strong: props.font.strong,
      }),
    );
  }

  styles['--box-wrap'] = wrapTypeToCssValue(wrap);

  if (props.horizontal) {
    if (props.horizontal === true) {
      classList.push(classes.horizontal);
    } else {
      classList.push(classes[`horizontal-${props.horizontal}`]);
      classList.push(classes[`justify-${props.justify ?? 'start'}`]);
    }
    classList.push(classes[`justify-${props.justify ?? 'start'}`]);
  }

  if (show) {
    classList.push(classes.show);
    classList.push(classes[`show-${show}`]);
  }

  if (hide) {
    classList.push(classes.hide);
    classList.push(classes[`hide-${hide}`]);
  }

  if (width) {
    classList.push(classes[`width-${width}`]);
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
