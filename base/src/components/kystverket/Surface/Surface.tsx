import { CSSProperties, forwardRef } from 'react';
import classes from './Surface.module.css';
import { SurfaceProps, SurfaceSize, SurfaceSpacingKey, surfaceSpacingKeys } from './Surface.types';

type Side = 'pt' | 'pr' | 'pb' | 'pl' | 'mt' | 'mr' | 'mb' | 'ml';

const spacingSides: Record<SurfaceSpacingKey, Side[]> = {
  p: ['pt', 'pr', 'pb', 'pl'],
  px: ['pl', 'pr'],
  py: ['pt', 'pb'],
  pt: ['pt'],
  pb: ['pb'],
  pl: ['pl'],
  pr: ['pr'],
  m: ['mt', 'mr', 'mb', 'ml'],
  mx: ['ml', 'mr'],
  my: ['mt', 'mb'],
  mt: ['mt'],
  mb: ['mb'],
  ml: ['ml'],
  mr: ['mr'],
};

const size = (value: SurfaceSize) => `var(--ds-size-${value})`;

const growShrink = (value: boolean | number) => (value === true ? '1' : !value ? '0' : value.toString());

/**
 * A flex container with token-based spacing, colour, border and radius. Replaces `Box`, which is deprecated.
 *
 * Unlike `Box`, every property is opt-in: a bare `<Surface>` is only `display: flex; flex-direction: column`,
 * spacing is a step on the Designsystemet size scale (`4` = `var(--ds-size-4)`), colour follows `data-color`,
 * and all other `div` attributes and a `ref` are passed through.
 */
const Surface = forwardRef<HTMLDivElement, SurfaceProps>(function Surface(
  {
    horizontal,
    gap,
    align,
    justify,
    wrap,
    grow,
    shrink,
    basis,
    width,
    show,
    hide,
    container,
    radius,
    'border-style': borderStyle = 'none',
    'data-color-variant': colorVariant,
    className,
    style,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    ...props
  },
  ref,
) {
  const spacing: Record<SurfaceSpacingKey, SurfaceSize | undefined> = {
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
  };

  // Every property is opt-in: a value goes into a `--surface-*` variable, and a class of the same name applies it.
  // A bare <Surface> is therefore only `display: flex; flex-direction: column`.
  const vars: Record<string, string> = {};
  const set = (name: string, value: string) => (vars[`--surface-${name}`] = value);

  if (gap !== undefined) set('gap', size(gap));
  if (grow !== undefined) set('grow', growShrink(grow));
  if (shrink !== undefined) set('shrink', growShrink(shrink));
  if (basis !== undefined) set('basis', basis === 'auto' ? 'auto' : size(basis));
  // Order matters: `p` first, then `px`/`py`, then the single sides, so the more specific key wins.
  surfaceSpacingKeys.forEach((key) => {
    const value = spacing[key];
    if (value === undefined) return;
    spacingSides[key].forEach((side) => set(side, size(value)));
  });

  const classList = [
    classes.surface,
    ...Object.keys(vars).map((name) => classes[name.replace('--surface-', '')]),
    wrap !== undefined && classes[wrap === 'reverse' ? 'wrap-reverse' : wrap ? 'wrap' : 'nowrap'],
    horizontal === true && classes.horizontal,
    typeof horizontal === 'string' && classes[`horizontal-${horizontal}`],
    align && classes[`align-${align}`],
    justify && classes[`justify-${justify}`],
    width && classes[`width-${width}`],
    show && classes[`show-${show}`],
    hide && classes[`hide-${hide}`],
    container && classes[`container-${container}`],
    radius && classes[`radius-${radius}`],
    borderStyle !== 'none' && classes[`border-${borderStyle}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={classList}
      style={{ ...(vars as CSSProperties), ...style }}
      data-color-variant={colorVariant}
      {...props}
    />
  );
});

export default Surface;
