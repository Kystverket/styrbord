import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'kyv-button--primary' : 'kyv-button--secondary';
  return (
    <button
      type="button"
      className={['kyv', 'kyv-body', 'kyv-button', `kyv-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
