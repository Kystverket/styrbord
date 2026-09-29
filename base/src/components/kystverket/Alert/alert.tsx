import classes from './alert.module.css';
import React from 'react';
import Icon from '../Icon/icon';
import { Surface, DataColor, Heading } from '~/main';
import { Alert as DsAlert, AlertProps as DsAlertProps } from '@digdir/designsystemet-react';
import { smaller } from '../../../utils/sizing';

export type AlertProps = DsAlertProps & {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  width?: 'content' | 'md' | 'full';
  'data-size'?: 'sm' | 'md' | 'lg';
  className?: string;
  role?: 'status';
  onDismiss?: () => void;
  'border-style'?: 'none' | 'solid';
  'data-color'?: DataColor;
};

const Alert = ({
  title = undefined,
  'data-size': dataSize = 'md',
  text,
  width = 'content',
  className = '',
  'border-style': borderStyle = 'solid',
  ...props
}: AlertProps) => {
  const classNames = [classes.alert, className, classes['width-' + width]];

  if (borderStyle === 'solid') {
    classNames.push(classes.bordered);
  }

  return (
    <DsAlert className={classNames.join(' ')} style={props.style} {...props}>
      <Surface horizontal justify="between" align="start" gap={2}>
        <Surface horizontal align="start" gap={2}>
          <Surface gap={1}>
            {title && (
              <Heading data-size={smaller(smaller(dataSize))}>
                <span role={props.role}>{title}</span>
              </Heading>
            )}
            <div data-size={dataSize}>
              {text}
              {props.children}
            </div>
          </Surface>
        </Surface>
        {props.onDismiss ? (
          <button className={classes.closeButton} onClick={props.onDismiss}>
            <Icon material="close" />
          </button>
        ) : null}
      </Surface>
    </DsAlert>
  );
};

export default Alert;
