import Icon from "../Icon/icon";
import classes from "./alert.module.css";
import { AlertLevel, Width } from "./alert.types";

export const getIcon = (level: AlertLevel) => {
  switch (level) {
    case "info":
    case "ghost":
      return <Icon material="info" filled className={classes.icon} />;
    case "warning":
      return <Icon material="warning" filled className={classes.icon} />;
    case "error":
      return <Icon material="error" filled className={classes.icon} />;
    case "success":
      return <Icon material="check_circle" filled className={classes.icon} />;
  }
};

export const rootAlertStyle = (
  width: Width,
  level: AlertLevel,
  className: string = "",
) => {
  const classNames = [classes.root, className];

  switch (width) {
    case "md":
      classNames.push(classes.widthMd);
      break;
    case "full":
      classNames.push(classes.widthFull);
      break;
  }
  switch (level) {
    case "ghost":
      classNames.push(classes.ghost);
      break;
    case "info":
      classNames.push(classes.info);
      break;
    case "success":
      classNames.push(classes.success);
      break;
    case "warning":
      classNames.push(classes.warning);
      break;
    case "error":
      classNames.push(classes.error);
      break;
  }
  return classNames.join(" ");
};
