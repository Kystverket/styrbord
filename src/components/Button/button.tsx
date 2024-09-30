import {
  ButtonProps as DsButtonProps,
  Button as DsButton,
} from "@digdir/designsystemet-react";
import classes from "./button.module.css";

/*
    Unionen av designsystemets ButtonProps og vår ButtonProps
    gjør at variant aldri kan settes til noe annet enn undefined.
    Liten hack, men må til for å kunne overstyre designsystemets
    variant med vår egen design-prop.

    Tanken med å gjøre det på denne måten er at vi er mest mulig
    framoverkompatible med designsystemet.
*/
export type ButtonProps = {
  variant?: undefined;
  design?: "filled" | "outlined" | "ghost" | "dashed";
} & DsButtonProps;

export const Button = ({ design, ...props }: ButtonProps) => {
  const propsToOverride: DsButtonProps = { ...props };

  switch (design) {
    case "filled":
      propsToOverride.variant = "primary";
      break;
    case "outlined":
      propsToOverride.variant = "secondary";
      break;
    case "ghost":
      propsToOverride.variant = "tertiary";
      break;
    case "dashed":
      propsToOverride.variant = "secondary";
      propsToOverride.className = [
        propsToOverride.className,
        classes.dashed,
      ].join(" ");
      break;
  }

  return <DsButton {...propsToOverride} />;
};
