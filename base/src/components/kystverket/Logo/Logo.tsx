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

function logoSize(logo: LogoImage, height?: number, width?: number): { height: number; width: number } {
  const logoRatio = logo.width / logo.height;

  if (height && width) {
    return { height, width };
  } else if (height) {
    return { height, width: height * logoRatio };
  } else if (width) {
    return { height: width / logoRatio, width };
  }
  return { height: logo.height, width: logo.width };
}

/**
 * `color="blue"` følger fargemodusen: i mørk modus vises den hvite tegningen i stedet, siden
 * profilhåndboka krever den på mørk bakgrunn. Begge tegningene rendres, og CSS viser den som
 * passer nærmeste `data-color-scheme` (se logo.module.css). `white` og `black` byttes aldri.
 */
export function Logo({
  product,
  className,
  color = 'blue',
  variant = 'horizontal',
  alt = 'Kystverket',
  height,
  width,
}: Readonly<LogoProps>) {
  const drawings = logoVariants[variant];
  const logo = drawings[color === 'white' ? 'white' : 'default'];
  const LogoImage = logo.image;
  const size = logoSize(logo, height, width);

  const followsColorScheme = color === 'blue';
  const DarkLogoImage = drawings.white.image;
  const darkSize = logoSize(drawings.white, height, width);

  const colorClassName = classes['logo-color-' + color];
  const variantClassName = classes['logo-variant-' + variant];
  const lightClassName = followsColorScheme ? classes['logo-scheme-light'] : undefined;
  const darkClassName = classes['logo-scheme-dark'];

  if (product) {
    return (
      <div
        aria-label={alt}
        className={[className, classes['product-logo-container'], colorClassName, variantClassName].join(' ')}
        style={{ '--logo-height': `${size.height}px` } as CSSProperties}
      >
        <LogoImage className={lightClassName} height={size.height} width={size.width} />
        {followsColorScheme && (
          <DarkLogoImage className={darkClassName} height={darkSize.height} width={darkSize.width} />
        )}
        <span className={classes['product-logo-text']}>{product}</span>
      </div>
    );
  } else {
    return (
      <>
        <LogoImage
          className={[className, colorClassName, variantClassName, lightClassName].join(' ')}
          aria-label={alt}
          height={size.height}
          width={size.width}
        />
        {followsColorScheme && (
          <DarkLogoImage
            className={[className, colorClassName, variantClassName, darkClassName].join(' ')}
            aria-label={alt}
            height={darkSize.height}
            width={darkSize.width}
          />
        )}
      </>
    );
  }
}
