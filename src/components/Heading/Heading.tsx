import React from 'react';
import './heading.css';
import { colors } from '../../.';

interface HeadingProps {
  /**
   * Den (semantiske) størrelsen på overskriften.
   */
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * Farge på understrekelsen av overskriften.
   */
  underline?: 'none' | colors;
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
      className={['kyv-h', (underline != 'none' ? 'kyv-h-underline kyv-h-underline-' + underline : '')].join(' ')}
      {...props}
    >
      {props.children}
    </CustomTag>
  );
};
