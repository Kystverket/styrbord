import classes from './alert.module.css';
import React from 'react';
import typography from '../Typography/typography.module.css';
import { Body, Title } from '../Typography/typography';
import { getIcon, alertStyle } from './alert.util';
import { AlertLevel, TextSize, Width } from './alert.types';
import Icon from '../Icon/icon';
import { Box } from '~/main';

export interface AlertProps {
  level: AlertLevel;
  size?: TextSize;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  width?: Width;
  className?: string;
  role?: 'status';
  onDismiss?: () => void;
}

const textSize = (size: TextSize) => {
  switch (size) {
    case 'sm':
      return typography['bodySm'];
    case 'md':
      return typography['bodySmStrong'];
    case 'lg':
      return typography['bodyLg'];
  }
};

const Alert = ({
  level,
  size = 'md',
  width = 'md',
  title = undefined,
  text = undefined,
  className = '',
  ...props
}: AlertProps) => {
  const icon = getIcon(level);

  return (
    <Box horizontal justify="between" p={12} className={`${alertStyle(width, level)} ${className}`}>
      <Box horizontal>
        {icon}
        <Box m={8} mt={0} gap={4} className={classes.content}>
          {title && (
            <Title size={size}>
              <span role={props.role}>{title}</span>
            </Title>
          )}
          {text && <Body size={size}>{text}</Body>}
          {props.children && <div className={textSize(size)}>{props.children}</div>}
        </Box>
      </Box>
      {props.onDismiss ? (
        <button className={classes.closeButton} onClick={props.onDismiss}>
          <Icon material="close" />
        </button>
      ) : null}
    </Box>
  );
};

export default Alert;
