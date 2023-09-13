import React from 'react';
import './heading.css';

interface HeadingProps {
  /**
   * Den (semantiske) størrelsen på overskriften.
   */
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Understrek overskriften.
   */
  underline?: boolean;
}

/**
 * En generell komponent for overskift på en side eller over et avsnitt.
 */
export const Heading = ({
  size = 'h3',
  underline = false,
  ...props
}: React.PropsWithChildren<HeadingProps>) => {
  const CustomTag = size as keyof React.JSX.IntrinsicElements;
  return (
    <CustomTag
      className={['kyv-h', (underline ? 'underline' : '')].join(' ')}
      {...props}
    >
      {props.children}
    </CustomTag>
  );
};
