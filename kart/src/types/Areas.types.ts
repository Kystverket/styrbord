export const areaIdList = [
  'norway',
  'norway-svalbard'
] as const;

export type AreaId = (typeof areaIdList)[number];

export const areaBbox: Record<AreaId, [number, number, number, number]> = {
  'norway': [4.0, 57.8, 31.2, 71.3],
  'norway-svalbard': [4.0, 57.9, 35.0, 81.1],
};
