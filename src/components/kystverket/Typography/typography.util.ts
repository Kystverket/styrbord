import typographyCss from './typography.module.css';
import utilClasses from './util.module.css';

export type TypographyPrefix = 'display' | 'headline' | 'title' | 'body' | 'label';

export type AllSizes = 'sm' | 'md' | 'lg' | 'xl';

export const typographyClasses = (
  typography: TypographyPrefix,
  size: AllSizes = 'md',
  strong: boolean,
  className: string = '',
) => {
  return [
    utilClasses[typography],
    typographyCss[`${typography}-${size}${strong ? '-strong' : ''}`],
    className ?? '',
  ].join(' ');
};
