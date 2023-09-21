import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Primærhandling på siden eller i settet av knapper.
   */
  primary?: boolean;
  /**
   * Skru av mulighet til å klikke på knappen.
   */
  disabled?: boolean;
  /**
   * Størrelsen på knappen.
   */
  size?: 'small' | 'medium';
  /**
   * Tekst i knappen.
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
function Button({
    primary,
    size,
    disabled,
    label,
    onClick,
}: ButtonProps) {
    const mode = primary ? 'kyv-button--primary' : 'kyv-button--secondary';
    const disabledClass = disabled ? 'kyv-button--disabled' : 'kyv-button--enabled';
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={['kyv-body', 'kyv-button', `kyv-button--${size}`, mode, disabledClass].join(' ')}
        >
            {label}
        </button>
    );
}

Button.defaultProps = {
    primary: false,
    size: 'medium',
    disabled: false,
    onClick: () => { },
};

export { Button };
