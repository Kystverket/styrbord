import { SpacingKey } from './box.types';

export const spacingKeys = ['pt', 'pb', 'pl', 'pr', 'px', 'py', 'p', 'mt', 'mb', 'ml', 'mr', 'mx', 'my', 'm'] as const;

export const cssSpacingProperties: Record<SpacingKey, string[]> = {
  m: ['margin'],
  mb: ['margin-bottom'],
  ml: ['margin-left'],
  mr: ['margin-right'],
  mt: ['margin-top'],
  mx: ['margin-left', 'margin-right'],
  my: ['margin-top', 'margin-bottom'],
  p: ['padding'],
  pb: ['padding-bottom'],
  pl: ['padding-left'],
  pr: ['padding-right'],
  pt: ['padding-top'],
  px: ['padding-left', 'padding-right'],
  py: ['padding-top', 'padding-bottom'],
};
