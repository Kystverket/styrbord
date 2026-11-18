import logoHorizontal from './kyv-2026-h-no.svg?react';
import logoVertical from './kyv-2026-v-no.svg?react';
import logoHorizontalEn from './kyv-2026-h-en.svg?react';
import logoVerticalEn from './kyv-2026-v-en.svg?react';
import logoSymbol from './kyv-2026-s-no.svg?react';
import logoHorizontalWhite from './kyv-2026-h-no-white.svg?react';
import logoVerticalWhite from './kyv-2026-v-no-white.svg?react';
import logoHorizontalEnWhite from './kyv-2026-h-en-white.svg?react';
import logoVerticalEnWhite from './kyv-2026-v-en-white.svg?react';
import logoSymbolWhite from './kyv-2026-s-no-white.svg?react';

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

type LogoImage = { image: FunctionComponent<SVGProps<SVGSVGElement>>; width: number; height: number };

/**
 * Den hvite logoen er en egen tegning, ikke bare den blå i en annen farge: emblemet er fylt
 * og skjoldet har en kontur, slik profilhåndboka krever på mørk bakgrunn. Tegningen er litt
 * større enn den blå (konturen ligger utenpå), så størrelsene er skalert likt for at teksten
 * i logoen skal bli like stor i begge.
 */
const logoVariants: Record<LogoVariant, { default: LogoImage; white: LogoImage }> = {
  horizontal: {
    default: { image: logoHorizontal, width: 183, height: 47 },
    white: { image: logoHorizontalWhite, width: 184, height: 49 },
  },
  vertical: {
    default: { image: logoVertical, width: 153, height: 110 },
    white: { image: logoVerticalWhite, width: 153, height: 112 },
  },
  symbol: {
    default: { image: logoSymbol, width: 60, height: 100 },
    white: { image: logoSymbolWhite, width: 64, height: 104 },
  },
  'horizontal-en': {
    default: { image: logoHorizontalEn, width: 183, height: 47 },
    white: { image: logoHorizontalEnWhite, width: 184, height: 49 },
  },
  'vertical-en': {
    default: { image: logoVerticalEn, width: 200, height: 110 },
    white: { image: logoVerticalEnWhite, width: 200, height: 112 },
  },
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
  const logo = logoVariants[variant][color === 'white' ? 'white' : 'default'];
  const LogoImage = logo.image;
  let logoHeight = logo.height;
  let logoWidth = logo.width;

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
