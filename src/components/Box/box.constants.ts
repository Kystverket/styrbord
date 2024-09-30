import { SpacingKey } from "./box.types";

export const spacingKeys = [
  "p",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
  "m",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
] as const;

export const cssSpacingProperties: Record<SpacingKey, string[]> = {
  m: ["--box-ml", "--box-mr", "--box-mt", "--box-mb"],
  mb: ["--box-mb"],
  ml: ["--box-ml"],
  mr: ["--box-mr"],
  mt: ["--box-mt"],
  mx: ["--box-ml", "--box-mr"],
  my: ["--box-mt", "--box-mb"],
  p: ["--box-pl", "--box-pr", "--box-pt", "--box-pb"],
  pb: ["--box-pb"],
  pl: ["--box-pl"],
  pr: ["--box-pr"],
  pt: ["--box-pt"],
  px: ["--box-pl", "--box-pr"],
  py: ["--box-pt", "--box-pb"],
};
