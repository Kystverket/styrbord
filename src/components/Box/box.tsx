import { ReactNode } from 'react';
import classes from './box.module.css';
import { BorderRadiusValues, Spacing, SpacingKey, SpacingValues, SurfaceStyleValues } from './box.types';
import { cssSpacingProperties, spacingKeys } from './box.constants';

const getSpacingCss = (key: SpacingKey, value?: Spacing): Record<string, string> => {
  if (value === undefined) return {};

  const cssProperties = cssSpacingProperties[key];
  return cssProperties.reduce((acc, property) => {
    return { ...acc, [property]: `var(--spacing-${value})` };
  }, {});
};

export interface BaseBoxProps {
  className?: string;
  align?: 'start' | 'center' | 'end';
  gap?: Spacing;
  children: ReactNode;
}

type VerticalBoxProps = BaseBoxProps & {
  horizontal?: false;
};

type HorizontalBoxProps = BaseBoxProps & {
  horizontal: true;
  justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
};

export type BoxProps = (VerticalBoxProps | HorizontalBoxProps) &
  SpacingValues &
  BorderRadiusValues &
  SurfaceStyleValues;

const Box = ({ className = '', radius: b = undefined, gap = 0, children, align = 'start', ...props }: BoxProps) => {
  const classList = [classes.box];
  const styles: Record<string, string> = {
    '--box-gap': 'var(--spacing-' + gap + ')',
  };

  if (props.horizontal) {
    classList.push(classes.horizontal);
    classList.push(classes[`justify-${props.justify ?? 'start'}`]);
  }

  if (b) {
    classList.push(classes[`border-radius-${b}`]);
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
