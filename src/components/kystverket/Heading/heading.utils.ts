import heading from './heading.module.css';
type BuildHeadingProps = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  margin?: boolean;
};

export const buildHeadingClasses = ({ size = 'md', className, margin = false }: BuildHeadingProps): string => {
  return [
    heading[`heading-${size}`],
    margin ? heading[`heading-${size}${margin ? '-margin' : ''}`] : '',
    className ?? '',
  ].join(' ');
};
