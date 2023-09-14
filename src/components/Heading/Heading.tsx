import React from 'react';
import './heading.css';

interface HeadingProps {
  className?: string;
  /**
   * Den (semantiske) størrelsen på overskriften.
   */
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Farge på understrekelsen av overskriften.
   */
  underline?: 'none' | 'navy' | 'rust' | 'sand' | 'sky' | 'forest' | 'sea' | 'black' | 'grey';
}

/**
 * En generell komponent for overskift på en side eller over et avsnitt.
 */
export const Heading = ({
  size = 'h3',
  underline = 'none',
  ...props
}: React.PropsWithChildren<HeadingProps>) => {
  const CustomTag = size as keyof React.JSX.IntrinsicElements;
  return (
    <CustomTag
      className={[props.className, 'kyv-h', (underline != 'none' ? 'kyv-h-underline kyv-h-underline-' + underline : '')].join(' ')}
      {...props}
    >
      {props.children}
    </CustomTag>
  );
};
