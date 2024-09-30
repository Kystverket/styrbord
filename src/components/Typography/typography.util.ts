import { TypographyProps } from "./typography";
import utilClasses from "./util.module.css";

export type Tint = "black" | "blue";

export const getTintClass = (tint: undefined | Tint) => {
  return tint === "blue" ? utilClasses.blue : utilClasses.black;
};

export const getTitleClasses = (titleClass: string, props: TypographyProps) => {
  return [
    getTintClass(props.tint),
    utilClasses.title,
    titleClass,
    props.className,
  ].join(" ");
};

export const getLabelClasses = (
  customClass: string,
  props: TypographyProps,
) => {
  return [
    getTintClass(props.tint),
    utilClasses.label,
    customClass,
    props.className,
  ].join(" ");
};

export const getBodyClasses = (customClass: string, props: TypographyProps) => {
  return [
    getTintClass(props.tint),
    utilClasses.body,
    customClass,
    props.className,
  ].join(" ");
};
