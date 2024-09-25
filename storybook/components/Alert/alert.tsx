import classes from './alert.module.css';
import React from 'react';
import { Body, Label } from '../Typography/typography';
import { getIcon, rootAlertStyle } from './alert.util';
import { AlertLevel, TextSize, Width } from './alert.types';
import Icon from '../Icon/icon';

export interface AlertProps {
  level: AlertLevel;
  size: TextSize;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  width?: Width;
  className?: string;
  onDismiss?: () => void;
}

const Alert = ({
  level,
  size,
  width = 'md',
  title = undefined,
  text = undefined,
  className = '',
  ...props
}: AlertProps) => {
  const icon = getIcon(level);

  let HeaderComponent = Label.Strong.Medium;
  let BodyComponent = Body.Medium;

  if (size === 'large') {
    HeaderComponent = Label.Strong.Large;
    BodyComponent = Body.Large;
  }

  return (
    <div className={rootAlertStyle(width, level, className)}>
      {icon}
      <div className={classes.content}>
        {title && <HeaderComponent>{title}</HeaderComponent>}
        <BodyComponent>
          {text}
          {props.children}
        </BodyComponent>
      </div>
      {props.onDismiss ? (
        <button className={classes.closeButton} onClick={props.onDismiss}>
          <Icon material="close" />
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
