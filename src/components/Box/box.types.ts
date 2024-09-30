import { spacingKeys } from "./box.constants";

export type Spacing =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 18
  | 22
  | 26
  | 30;

export type SpacingKey = (typeof spacingKeys)[number];

export type SpacingValues = {
  [K in SpacingKey]?: Spacing;
};
