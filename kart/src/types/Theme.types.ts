export const themeIdList = [
  'isps',
  'speed-commercial',
  'speed-recreational',
  'aquaculture'
] as const;

export type ThemeId = (typeof themeIdList)[number];
