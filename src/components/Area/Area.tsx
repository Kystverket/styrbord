import React from 'react';
import './area.css';

interface AreaProps {
  /**
   * Farge på området.
   */
  color?: 'none' | 'navy' | 'rust' | 'sand' | 'sky' | 'forest' | 'sea' | 'black' | 'grey';
  /**
   * Farge på kant.
   */
  border?: 'none' | 'navy' | 'rust' | 'sand' | 'sky' | 'forest' | 'sea' | 'black' | 'grey';
}

/**
 * En generell komponent for overskift på en side eller over et avsnitt.
 */
export const Area = ({
  color = 'navy',
  border = 'none',
  ...props
}: React.PropsWithChildren<AreaProps>) => {
  return (
    <div
      className={['kyv-body', 'kyv-area', 'kyv-area-bg-' + color, border != 'none' ? 'kyv-area-border' : '', 'kyv-area-border-' + border].join(' ')}
      {...props}
    >
      {props.children}
    </div>
  );
};
