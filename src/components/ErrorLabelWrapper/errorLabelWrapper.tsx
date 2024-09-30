import { ReactNode } from "react";
import style from "./errorLabelWrapper.module.css";
import { Label } from "../Typography/typography";
import Icon from "../Icon/icon";
import Box from "../Box/box";

export interface ErrorLabelWrapperProps {
  error?: string | null;
  children?: ReactNode;
}

const ErrorLabelWrapper = (props: ErrorLabelWrapperProps) => {
  const errorHasText =
    typeof props.error === "string" && props.error.length > 0;
  return (
    <Box gap={1} className={errorHasText ? style.withErrors : style.noErrors}>
      <Box>{props.children}</Box>
      <Box horizontal align="center" gap={1} className={style.error}>
        <Icon material="error" filled className={style.icon} />
        <Label.Strong.Small className={`${style.text}`}>
          {props.error}
        </Label.Strong.Small>
      </Box>
    </Box>
  );
};

export default ErrorLabelWrapper;
