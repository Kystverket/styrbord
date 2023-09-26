import React from 'react';
import './area.css';
import { colors } from '../../index.ts';

interface AreaProps {
  /**
   * Farge på området.
   */
  color?: 'none' | colors;
  /**
   * Farge på sidekant.
   */
  border?: 'none' | colors;
}

/**
 * En generell komponent for overskift på en side eller over et avsnitt.
 */
function Area({
  color,
  border,
  children,
}: React.PropsWithChildren<AreaProps>) {
  return (
    <div
      className={['kyv-body', 'kyv-area', `kyv-area-bg-${color}`, border !== 'none' ? 'kyv-area-border' : '', `kyv-area-border-${border}`].join(' ')}
    >
      {children}
    </div>
  );
}
Area.defaultProps = {
  color: 'navy',
  border: 'none',
};

export { Area };
