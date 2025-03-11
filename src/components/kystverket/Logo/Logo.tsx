import logoBlueHorizontal from './logo-b-horizontal.svg';
import logoWhiteVertical from './logo-w-vertical.svg';
import logoWhiteHorizontal from './logo-w-horizontal.svg';

export interface LogoProps {
  className?: string;
  variant?: 'blue-horizontal' | 'white-vertical' | 'white-horizontal';
  alt?: string;
  height?: number;
  width?: number;
}

const logoVariants = {
  'blue-horizontal': { image: logoBlueHorizontal, width: 186, height: 47 },
  'white-vertical': { image: logoWhiteVertical, width: 152, height: 110 },
  'white-horizontal': { image: logoWhiteHorizontal, width: 221, height: 55.25 },
};

export function Logo({ className, variant = 'blue-horizontal', alt = 'Kystverket', height, width }: LogoProps) {
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
