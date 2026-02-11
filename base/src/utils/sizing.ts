const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
type Size = (typeof sizes)[number];

export const smaller = (size: Size): Size => {
  return sizes[sizes.indexOf(size) - 1] || '2xs';
};
export const larger = (size: Size): Size => {
  return sizes[sizes.indexOf(size) + 1] || '2xl';
};
