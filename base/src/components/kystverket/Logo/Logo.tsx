import logoHorizontal from './kyv-2026-h-no.svg?react';
import logoVertical from './kyv-2026-v-no.svg?react';
import logoHorizontalEn from './kyv-2026-h-en.svg?react';
import logoVerticalEn from './kyv-2026-v-en.svg?react';
import logoSymbol from './kyv-2026-s-no.svg?react';

import { CSSProperties, FunctionComponent, SVGProps } from 'react';

import classes from './logo.module.css';

export type LogoVariant = 'horizontal' | 'vertical' | 'symbol' | 'horizontal-en' | 'vertical-en';
export type LogoColor = 'blue' | 'white' | 'black';

export interface LogoProps {
  className?: string;
  color?: LogoColor;
  variant?: LogoVariant;
  product?: string;
  alt?: string;
  height?: number;
  width?: number;
}

const logoVariants: Record<
  LogoVariant,
  { image: FunctionComponent<SVGProps<SVGSVGElement>>; width: number; height: number }
> = {
  horizontal: { image: logoHorizontal, width: 183, height: 47 },
  vertical: { image: logoVertical, width: 153, height: 110 },
  symbol: { image: logoSymbol, width: 60, height: 100 },
  'horizontal-en': { image: logoHorizontalEn, width: 183, height: 47 },
  'vertical-en': { image: logoVerticalEn, width: 200, height: 110 },
};

export function Logo({
  product,
  className,
  color = 'blue',
  variant = 'horizontal',
  alt = 'Kystverket',
  height,
  width,
}: Readonly<LogoProps>) {
  const LogoImage = logoVariants[variant].image;
  let logoHeight = logoVariants[variant].height;
  let logoWidth = logoVariants[variant].width;

  const logoRatio = logoWidth / logoHeight;
  const colorClassName = classes['logo-color-' + color];
  const variantClassName = classes['logo-variant-' + variant];

  if (height && width) {
    logoHeight = height;
    logoWidth = width;
  } else if (height && !width) {
    logoWidth = height * logoRatio;
    logoHeight = height;
  } else if (width && !height) {
    logoWidth = width;
    logoHeight = width / logoRatio;
  }

  if (product) {
    return (
      <div
        aria-label={alt}
        className={[className, classes['product-logo-container'], colorClassName, variantClassName].join(' ')}
        style={{ '--logo-height': `${logoHeight}px` } as CSSProperties}
      >
        <LogoImage height={logoHeight} width={logoWidth} />
        <span className={classes['product-logo-text']}>{product}</span>
      </div>
    );
  } else {
    return (
      <LogoImage
        className={[className, colorClassName, variantClassName].join(' ')}
        aria-label={alt}
        height={logoHeight}
        width={logoWidth}
      />
    );
  }
}
