import classes from './svgImage.module.css';

import Aissat from './svg/AISSAT.svg?react';
import Arcticinfo from './svg/Arcticinfo.svg?react';
import Avgiftskalkulator from './svg/avgiftskalkulator.svg?react';
import BaatfartMarine from './svg/båtfart_marine.svg?react';
import BestilleLos from './svg/bestille_los.svg?react';
import Boelgevarsel from './svg/bølgevarsel.svg?react';
import Datakatalog from './svg/datakatalog.svg?react';
import Hais from './svg/HAIS.svg?react';
import Havbase from './svg/havbase.svg?react';
import Edialog from './svg/Edialog.svg?react';
import Ohoi from './svg/OHOI.svg?react';
import HavnOgFarvannsloven from './svg/havn-_og_farvannsloven.svg?react';
import DigitaleReferanseruter from './svg/digitale_referanseruter.svg?react';
import Navigasjonsvarsler from './svg/navigasjonsvarsler.svg?react';
import DigitaleFyrlykter from './svg/digitale_fyrlykter.svg?react';
import SeLosbestilling from './svg/se_losbestilling.svg?react';
import Lavutslipp from './svg/lavutslipp.svg?react';
import Maru from './svg/MarU.svg?react';
import Navarea from './svg/NAVAREA.svg?react';
import DigitaleFyrbesoek from './svg/digitale_fyrbesøk.svg?react';
import RegistrerteSeilaser from './svg/registrerte_seilaser.svg?react';
import Farledsbevis from './svg/illustrert_farledsbevis.svg?react';
import Kystreise from './svg/kystreise.svg?react';
import Megafon from './svg/megafon.svg?react';
import SafeSeaNet from './svg/SafeSeaNet.svg?react';
import KystinfoKart from './svg/kystinfo_kart.svg?react';
import Selvbetjening from './svg/selvbetjening.svg?react';
import SelvbetjeningRso from './svg/selvbetjening_RSO.svg?react';
import Nais from './svg/Nais.svg?react';
import Kystvaer from './svg/kystvær.svg?react';
import ForespoerselSendt from './svg/illustrert_forespørsel_sendt.svg?react';
import BwNais from './svg/BWicons-NAIS.svg?react';
import BwOhoi from './svg/BWicons-navigation1.svg?react';
import BwBoelgevarsel from './svg/BWicons-wave.svg?react';
import BwArcticinfo from './svg/BWicons-polarbear.svg?react';

import Dgps from './svg/dgps.svg?react';
import Lrit from './svg/lrit.svg?react';
import NasjonalHavneoversikt from './svg/nasjonal_havneoversikt.svg?react';
import Kikkert from './svg/kikkert.svg?react';
import Istjeneste from './svg/istjeneste.svg?react';
import Ismelding from './svg/ismelding.svg?react';

export const svgImageColors = ['primary', 'info', 'accent', 'sand', 'neutral', 'white'] as const;
export type SvgImageColor = (typeof svgImageColors)[number];

export type SvgImageSize = number;

export type SvgImageProps = {
  'data-color'?: SvgImageColor;
  size?: SvgImageSize;
  className?: string;
};

type BaseSvgImageProps = {
  name?: string;
  'data-color'?: SvgImageColor;
  size?: SvgImageSize;
  className?: string;
};

const getImageProps = ({
  name,
  'data-color': dataColor = 'primary',
  className,
  size,
}: BaseSvgImageProps): { style: React.CSSProperties; className: string } => {
  const classNames = [classes.svg, name ? classes[name] : '', classes[dataColor], className || ''];
  const style = { '--kyv-svg-size': `calc(var(--ds-size-unit) * ${size ?? 18})` } as React.CSSProperties;

  return { style: style, className: classNames.join(' ') };
};

export const ImageHais = (props: SvgImageProps) => {
  return <Hais {...getImageProps({ name: 'hais', ...props })} />;
};

export const ImageAisSat = (props: SvgImageProps) => {
  return <Aissat {...getImageProps({ name: 'aissat', ...props })} />;
};

export const ImageDatakatalog = (props: SvgImageProps) => {
  return <Datakatalog {...getImageProps({ name: 'datakatalog', ...props })} />;
};

export const ImageArcticInfo = (props: SvgImageProps) => {
  return <Arcticinfo {...getImageProps({ name: 'arcticinfo', ...props })} />;
};

export const ImageAvgiftskalkulator = (props: SvgImageProps) => {
  return <Avgiftskalkulator {...getImageProps({ name: 'avgiftskalkulator', ...props })} />;
};

export const ImageBaatfartMarine = (props: SvgImageProps) => {
  return <BaatfartMarine {...getImageProps({ name: 'baatfart_marine', ...props })} />;
};

export const ImageBestilleLos = (props: SvgImageProps) => {
  return <BestilleLos {...getImageProps({ name: 'bestille_los', ...props })} />;
};

export const ImageBoelgevarsel = (props: SvgImageProps) => {
  return <Boelgevarsel {...getImageProps({ name: 'boelgevarsel', ...props })} />;
};

export const ImageDgps = (props: SvgImageProps) => {
  return <Dgps {...getImageProps({ name: 'dgps', ...props })} />;
};

export const ImageDigitaleReferanseruter = (props: SvgImageProps) => {
  return <DigitaleReferanseruter {...getImageProps({ name: 'digitale_referanseruter', ...props })} />;
};

export const ImageEDialog = (props: SvgImageProps) => {
  return <Edialog {...getImageProps({ name: 'edialog', ...props })} />;
};

export const ImageFarledsbevis = (props: SvgImageProps) => {
  return <Farledsbevis {...getImageProps({ name: 'farledsbevis', ...props })} />;
};

export const ImageSoeknadOmFarledsbevis = (props: SvgImageProps) => {
  return <Farledsbevis {...getImageProps({ name: 'soeknad_om_farledsbevis', ...props })} />;
};

export const ImageHavbase = (props: SvgImageProps) => {
  return <Havbase {...getImageProps({ name: 'havbase', ...props })} />;
};

export const ImageHavnOgFarvannsloven = (props: SvgImageProps) => {
  return <HavnOgFarvannsloven {...getImageProps({ name: 'havn_og_farvannsloven', ...props })} />;
};

export const ImageIstjeneste = (props: SvgImageProps) => {
  return <Istjeneste {...getImageProps({ name: 'istjeneste', ...props })} />;
};

export const ImageIsmelding = (props: SvgImageProps) => {
  return <Ismelding {...getImageProps({ name: 'ismelding', ...props })} />;
};

export const ImageKikkert = (props: SvgImageProps) => {
  return <Kikkert {...getImageProps({ name: 'kikkert', ...props })} />;
};

export const ImageKystdatahuset = (props: SvgImageProps) => {
  return <Datakatalog {...getImageProps({ name: 'datakatalog', ...props })} />;
};

export const ImageKystinfoKart = (props: SvgImageProps) => {
  return <KystinfoKart {...getImageProps({ name: 'kystinfo_kart', ...props })} />;
};

export const ImageLavutslipp = (props: SvgImageProps) => {
  return <Lavutslipp {...getImageProps({ name: 'lavutslipp', ...props })} />;
};

export const ImageLrit = (props: SvgImageProps) => {
  return <Lrit {...getImageProps({ name: 'lrit', ...props })} />;
};

export const ImageNasjonalHavneoversikt = (props: SvgImageProps) => {
  return <NasjonalHavneoversikt {...getImageProps({ name: 'nasjonal_havneoversikt', ...props })} />;
};

export const ImageNavigasjonsvarsler = (props: SvgImageProps) => {
  return <Navigasjonsvarsler {...getImageProps({ name: 'navigasjonsvarsler', ...props })} />;
};

export const ImageOhoi = (props: SvgImageProps) => {
  return <Ohoi {...getImageProps({ name: 'ohoi', ...props })} />;
};

export const ImageRegistrerteSeilaser = (props: SvgImageProps) => {
  return <RegistrerteSeilaser {...getImageProps({ name: 'registrerte_seilaser', ...props })} />;
};

export const ImageSeLosbestilling = (props: SvgImageProps) => {
  return <SeLosbestilling {...getImageProps({ name: 'se_losbestilling', ...props })} />;
};

export const ImageSkipsrapportering = (props: SvgImageProps) => {
  return <SafeSeaNet {...getImageProps({ name: 'skipsrapportering', ...props })} />;
};

export const ImageDigitaleFyrbesoek = (props: SvgImageProps) => {
  return <DigitaleFyrbesoek {...getImageProps({ name: 'digitale_fyrbesoek', ...props })} />;
};

export const ImageSlukkedeFyrlys = (props: SvgImageProps) => {
  return <DigitaleFyrlykter {...getImageProps({ name: 'slukkede_fyrlys', ...props })} />;
};

export const ImageMarU = (props: SvgImageProps) => {
  return <Maru {...getImageProps({ name: 'maru', ...props })} />;
};

export const ImageNavarea = (props: SvgImageProps) => {
  return <Navarea {...getImageProps({ name: 'navarea', ...props })} />;
};

export const ImageKystreise = (props: SvgImageProps) => {
  return <Kystreise {...getImageProps({ name: 'kystreise', ...props })} />;
};

export const ImageMegafon = (props: SvgImageProps) => {
  return <Megafon {...getImageProps({ name: 'megafon', ...props })} />;
};

export const ImageSafeSeaNet = (props: SvgImageProps) => {
  return <SafeSeaNet {...getImageProps({ name: 'safeSeaNet', ...props })} />;
};

export const ImageSelvbetjening = (props: SvgImageProps) => {
  return <Selvbetjening {...getImageProps({ name: 'selvbetjening', ...props })} />;
};

export const ImageSelvbetjeningRso = (props: SvgImageProps) => {
  return <SelvbetjeningRso {...getImageProps({ name: 'selvbetjeningRso', ...props })} />;
};

export const ImageNais = (props: SvgImageProps) => {
  return <Nais {...getImageProps({ name: 'nais', ...props })} />;
};

export const ImageKystvaer = (props: SvgImageProps) => {
  return <Kystvaer {...getImageProps({ name: 'kystvaer', ...props })} />;
};

export const ImageForespoerselSendt = (props: SvgImageProps) => {
  return <ForespoerselSendt {...getImageProps({ name: 'forespoersel_sendt', ...props })} />;
};

export const ImageBwNais = (props: SvgImageProps) => {
  return <BwNais {...getImageProps({ name: 'bw_nais', ...props })} />;
};

export const ImageBwOhoi = (props: SvgImageProps) => {
  return <BwOhoi {...getImageProps({ name: 'bw_ohoi', ...props })} />;
};

export const ImageBwBoelgevarsel = (props: SvgImageProps) => {
  return <BwBoelgevarsel {...getImageProps({ name: 'bw_boelgevarsel', ...props })} />;
};

export const ImageBwArcticinfo = (props: SvgImageProps) => {
  return <BwArcticinfo {...getImageProps({ name: 'bw_arcticinfo', ...props })} />;
};
