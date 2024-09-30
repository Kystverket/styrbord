import classes from "./alert.module.css";
import React from "react";
import typography from "../Typography/typography.module.css";
import { Title } from "../Typography/typography";
import { getIcon, alertStyle } from "./alert.util";
import { AlertLevel, TextSize, Width } from "./alert.types";
import Icon from "../Icon/icon";
import { Box } from "~/main";

export interface AlertProps {
  level: AlertLevel;
  size?: TextSize;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  width?: Width;
  className?: string;
  onDismiss?: () => void;
}

const Alert = ({
  level,
  size = "md",
  width = "md",
  title = undefined,
  text = undefined,
  className = "",
  ...props
}: AlertProps) => {
  const icon = getIcon(level);

  let HeaderComponent = Title.Medium;
  let bodyClasses = typography.bodyMd;

  if (size === "lg") {
    HeaderComponent = Title.Large;
    bodyClasses = typography.bodyLg;
  }

  return (
    <Box
      horizontal
      justify="between"
      pt={2}
      className={`${alertStyle(width, level)} ${className}`}
    >
      {icon}
      <Box m={2} mb={4} pr={4} gap={2} className={classes.content}>
        {title && <HeaderComponent>{title}</HeaderComponent>}
        <div className={bodyClasses}>
          {text}
          {props.children}
        </div>
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
