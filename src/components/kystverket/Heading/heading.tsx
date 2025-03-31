import { ReactNode } from 'react';
import { buildHeadingClasses } from './heading.utils';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: ReactNode | undefined;
  margin?: boolean;
};

const HeaderTag = ({ level = '1', children, ...props }: HeadingProps) => {
  const Tag = `h${level}`;
  return <Tag {...props}>{children}</Tag>;
};

export const Heading = ({ level, size, className, children, margin }: HeadingProps) => {
  return (
    <HeaderTag level={level} className={buildHeadingClasses({ size, className, margin })}>
      {children}
    </HeaderTag>
  );
};
