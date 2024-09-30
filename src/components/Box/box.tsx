import { ReactNode } from 'react';
import classes from './box.module.css';
import { Spacing, SpacingKey, SpacingValues } from './box.types';
import { cssSpacingProperties, spacingKeys } from './box.constants';

const getSpacingCss = (key: SpacingKey, value?: Spacing): Record<string, string> => {
  if (!value) return {};
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
  justify?: 'start' | 'center' | 'end' | 'between';
};

export type BoxProps = VerticalBoxProps | HorizontalBoxProps;

const Box = ({ className = '', gap = 0, children, align = 'start', ...props }: BoxProps & SpacingValues) => {
  const classList = [classes.box];
  const styles: Record<string, string> = {
    '--box-gap': 'var(--spacing-' + gap + ')',
  };

  if (props.horizontal) {
    classList.push(classes.horizontal);
    classList.push(classes[`justify-${props.justify ?? 'start'}`]);
  }

  spacingKeys.forEach((key) => {
    console.log(key, props[key], getSpacingCss(key, props[key]), styles);
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
