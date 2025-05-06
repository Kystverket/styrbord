import logoBlueHorizontal from './logo-b-horizontal.svg';
import logoDatakatalogHorizontal from './Kystverket Datakatalog.svg';
import logoFyrHorizontal from './Kystverket Fyr.svg';
import logoHaisHorizontal from './Kystverket Historisk AIS.svg';
import logoPfsaHorizontal from './Kystverket Maritim Sikring.svg';
import logoSaksbehandlingHorizontal from './Kystverket Saksbehandling.svg';
import logoSelvbetjeningHorizontal from './Kystverket Selvbetjening.svg';
import logoWhiteVertical from './logo-w-vertical.svg';
import logoWhiteHorizontal from './logo-w-horizontal.svg';

export type LogoVariant =
  | 'blue-horizontal'
  | 'datakatalog'
  | 'fyr'
  | 'hais'
  | 'pfsa'
  | 'saksbehandling'
  | 'selvbetjening'
  | 'white-horizontal'
  | 'white-vertical';

export interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  alt?: string;
  height?: number;
  width?: number;
}

const logoVariants = {
  'blue-horizontal': { image: logoBlueHorizontal, width: 186, height: 47 },
  datakatalog: { image: logoDatakatalogHorizontal, width: 589, height: 83 },
  fyr: { image: logoFyrHorizontal, width: 409, height: 83 },
  hais: { image: logoHaisHorizontal, width: 591, height: 83 },
  pfsa: { image: logoPfsaHorizontal, width: 643, height: 83 },
  saksbehandling: { image: logoSaksbehandlingHorizontal, width: 654, height: 83 },
  selvbetjening: { image: logoSelvbetjeningHorizontal, width: 618, height: 83 },
  'white-vertical': { image: logoWhiteVertical, width: 152, height: 110 },
  'white-horizontal': { image: logoWhiteHorizontal, width: 221, height: 55.25 },
};

export function Logo({ className, variant = 'blue-horizontal', alt = 'Til forsiden', height, width }: LogoProps) {
  let logoHeight = logoVariants[variant].height;
  let logoWidth = logoVariants[variant].width;

  const logoRatio = logoWidth / logoHeight;

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

  return (
    <img className={className} src={logoVariants[variant].image} alt={alt} height={logoHeight} width={logoWidth} />
  );
}
