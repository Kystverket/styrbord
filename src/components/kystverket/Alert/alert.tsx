import classes from './alert.module.css';
import React from 'react';
import Icon from '../Icon/icon';
import { Box, Heading } from '~/main';
import { Alert as DsAlert, AlertProps as DsAlertProps } from '@digdir/designsystemet-react';
import { smaller } from '../../../utils/sizing';

export type AlertProps = DsAlertProps & {
  level?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  text?: string;
  children?: React.ReactNode;
  width?: 'content' | 'md' | 'full';
  'data-size'?: 'sm' | 'md' | 'lg';
  className?: string;
  role?: 'status';
  onDismiss?: () => void;
};

const Alert = ({
  level,
  title = undefined,
  'data-size': dataSize = 'md',
  text,
  width = 'content',
  className = '',
  ...props
}: AlertProps) => {
  const dataColor = props['data-color'] ?? (level === 'error' ? 'danger' : level) ?? 'info';
  const classNames = [classes.alert, className, classes['width-' + width]];

  return (
    <DsAlert className={classNames.join(' ')} data-color={dataColor}>
      <Box horizontal justify="between" align="start" gap={8}>
        <Box horizontal align="start" gap={8}>
          <Box gap={4}>
            {title && (
              <Heading data-size={smaller(smaller(dataSize))}>
                <span role={props.role}>{title}</span>
              </Heading>
            )}
            <div data-size={dataSize}>
              {text}
              {props.children}
            </div>
          </Box>
        </Box>
        {props.onDismiss ? (
          <button className={classes.closeButton} onClick={props.onDismiss}>
            <Icon material="close" />
          </button>
        ) : null}
      </Box>
    </DsAlert>
  );
};

export default Alert;
