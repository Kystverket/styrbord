import classes from './svgImage.module.css';

import aissat from './svg/AISSAT.svg';
import arcticinfo from './svg/Arcticinfo.svg';
import avgiftskalkulator from './svg/avgiftskalkulator.svg';
import baatfart_marine from './svg/båtfart_marine.svg';
import bestille_los from './svg/bestille_los.svg';
import boelgevarsel from './svg/bølgevarsel.svg';
import datakatalog from './svg/datakatalog.svg';
import hais from './svg/HAIS.svg';
import havbase from './svg/havbase.svg';
import edialog from './svg/Edialog.svg';
import ohoi from './svg/OHOI.svg';
import havn_og_farvannsloven from './svg/havn-_og_farvannsloven.svg';
import digitale_referanseruter from './svg/digitale_referanseruter.svg';
import navigasjonsvarsler from './svg/navigasjonsvarsler.svg';
import digitale_fyrlykter from './svg/digitale_fyrlykter.svg';
import se_losbestilling from './svg/se_losbestilling.svg';
import lavutslipp from './svg/lavutslipp.svg';
import maru from './svg/MarU.svg';
import navarea from './svg/NAVAREA.svg';
import digitale_fyrbesoek from './svg/digitale_fyrbesøk.svg';
import registrerte_seilaser from './svg/registrerte_seilaser.svg';
import farledsbevis from './svg/illustrert_farledsbevis.svg';
import kystreise from './svg/kystreise.svg';
import megafon from './svg/megafon.svg';
import safeSeaNet from './svg/SafeSeaNet.svg';
import kystinfo_kart from './svg/kystinfo_kart.svg';
import selvbetjening from './svg/selvbetjening.svg';
import selvbetjeningRso from './svg/selvbetjening_RSO.svg';
import nais from './svg/Nais.svg';
import kystvaer from './svg/kystvær.svg';
import forespoersel_sendt from './svg/illustrert_forespørsel_sendt.svg';
import bw_nais from './svg/BWicons-NAIS.svg';
import bw_ohoi from './svg/BWicons-navigation1.svg';
import bw_boelgevarsel from './svg/BWicons-wave.svg';
import bw_arcticinfo from './svg/BWicons-polarbear.svg';

import dgps from './svg/dgps.svg';
import lrit from './svg/lrit.svg';
import nasjonal_havneoversikt from './svg/nasjonal_havneoversikt.svg';
import kikkert from './svg/kikkert.svg';
import istjeneste from './svg/istjeneste.svg';
import ismelding from './svg/ismelding.svg';
import { ReactSVG } from 'react-svg';

export const svgImageColors = ['primary', 'info', 'accent', 'sand', 'neutral', 'white'] as const;
export type SvgImageColor = (typeof svgImageColors)[number];

export type SvgImageSize = number;

export type SvgImageProps = {
  'data-color'?: SvgImageColor;
  size?: SvgImageSize;
  className?: string;
};

type BaseSvgImageProps = {
  src: string;
  name?: string;
  'data-color'?: SvgImageColor;
  size?: SvgImageSize;
  className?: string;
};

export const SvgImage = ({
  name,
  src,
  'data-color': dataColor = 'primary',
  className = '',
  ...props
}: BaseSvgImageProps) => {
  const classNames = [classes.svg, name ? classes[name] : '', classes[dataColor], className || ''];
  const style = { '--kyv-svg-size': `calc(var(--ds-size-unit) * ${props.size ?? 18})` } as React.CSSProperties;

  return <ReactSVG style={style} className={classNames.join(' ')} src={src} {...props} />;
};

export const ImageHais = (props: SvgImageProps) => {
  return <SvgImage name="hais" {...props} src={hais} />;
};

export const ImageAisSat = (props: SvgImageProps) => {
  return <SvgImage name="aissat" {...props} src={aissat} />;
};

export const ImageDatakatalog = (props: SvgImageProps) => {
  return <SvgImage name="datakatalog" {...props} src={datakatalog} />;
};

export const ImageArcticInfo = (props: SvgImageProps) => {
  return <SvgImage name="arcticinfo" {...props} src={arcticinfo} />;
};

export const ImageAvgiftskalkulator = (props: SvgImageProps) => {
  return <SvgImage name="avgiftskalkulator" {...props} src={avgiftskalkulator} />;
};

export const ImageBaatfartMarine = (props: SvgImageProps) => {
  return <SvgImage name="baatfart_marine" {...props} src={baatfart_marine} />;
};

export const ImageBestilleLos = (props: SvgImageProps) => {
  return <SvgImage name="bestille_los" {...props} src={bestille_los} />;
};

export const ImageBoelgevarsel = (props: SvgImageProps) => {
  return <SvgImage name="boelgevarsel" {...props} src={boelgevarsel} />;
};

export const ImageDgps = (props: SvgImageProps) => {
  return <SvgImage name="dgps" {...props} src={dgps} />;
};

export const ImageDigitaleReferanseruter = (props: SvgImageProps) => {
  return <SvgImage name="digitale_referanseruter" {...props} src={digitale_referanseruter} />;
};

export const ImageEDialog = (props: SvgImageProps) => {
  return <SvgImage name="edialog" {...props} src={edialog} />;
};

export const ImageFarledsbevis = (props: SvgImageProps) => {
  return <SvgImage name="farledsbevis" {...props} src={farledsbevis} />;
};

export const ImageSoeknadOmFarledsbevis = (props: SvgImageProps) => {
  return <SvgImage name="soeknad_om_farledsbevis" {...props} src={farledsbevis} />;
};

export const ImageHavbase = (props: SvgImageProps) => {
  return <SvgImage name="havbase" {...props} src={havbase} />;
};

export const ImageHavnOgFarvannsloven = (props: SvgImageProps) => {
  return <SvgImage name="havn_og_farvannsloven" {...props} src={havn_og_farvannsloven} />;
};

export const ImageIstjeneste = (props: SvgImageProps) => {
  return <SvgImage name="istjeneste" {...props} src={istjeneste} />;
};

export const ImageIsmelding = (props: SvgImageProps) => {
  return <SvgImage name="ismelding" {...props} src={ismelding} />;
};

export const ImageKikkert = (props: SvgImageProps) => {
  return <SvgImage name="kikkert" {...props} src={kikkert} />;
};

export const ImageKystdatahuset = (props: SvgImageProps) => {
  return <SvgImage name="kystdatahuset" {...props} src={datakatalog} />;
};

export const ImageKystinfoKart = (props: SvgImageProps) => {
  return <SvgImage name="kystinfo_kart" {...props} src={kystinfo_kart} />;
};

export const ImageLavutslipp = (props: SvgImageProps) => {
  return <SvgImage name="lavutslipp" {...props} src={lavutslipp} />;
};

export const ImageLrit = (props: SvgImageProps) => {
  return <SvgImage name="lrit" {...props} src={lrit} />;
};

export const ImageNasjonalHavneoversikt = (props: SvgImageProps) => {
  return <SvgImage name="nasjonal_havneoversikt" {...props} src={nasjonal_havneoversikt} />;
};

export const ImageNavigasjonsvarsler = (props: SvgImageProps) => {
  return <SvgImage name="navigasjonsvarsler" {...props} src={navigasjonsvarsler} />;
};

export const ImageOhoi = (props: SvgImageProps) => {
  return <SvgImage name="ohoi" {...props} src={ohoi} />;
};

export const ImageRegistrerteSeilaser = (props: SvgImageProps) => {
  return <SvgImage name="registrerte_seilaser" {...props} src={registrerte_seilaser} />;
};

export const ImageSeLosbestilling = (props: SvgImageProps) => {
  return <SvgImage name="se_losbestilling" {...props} src={se_losbestilling} />;
};

export const ImageSkipsrapportering = (props: SvgImageProps) => {
  return <SvgImage name="skipsrapportering" {...props} src={safeSeaNet} />;
};

export const ImageDigitaleFyrbesoek = (props: SvgImageProps) => {
  return <SvgImage name="digitale_fyrbesoek" {...props} src={digitale_fyrbesoek} />;
};

export const ImageSlukkedeFyrlys = (props: SvgImageProps) => {
  return <SvgImage name="slukkede_fyrlys" {...props} src={digitale_fyrlykter} />;
};

export const ImageMarU = (props: SvgImageProps) => {
  return <SvgImage name="maru" {...props} src={maru} />;
};

export const ImageNavarea = (props: SvgImageProps) => {
  return <SvgImage name="navarea" {...props} src={navarea} />;
};

export const ImageKystreise = (props: SvgImageProps) => {
  return <SvgImage name="kystreise" {...props} src={kystreise} />;
};

export const ImageMegafon = (props: SvgImageProps) => {
  return <SvgImage name="megafon" {...props} src={megafon} />;
};

export const ImageSafeSeaNet = (props: SvgImageProps) => {
  return <SvgImage name="safeSeaNet" {...props} src={safeSeaNet} />;
};

export const ImageSelvbetjening = (props: SvgImageProps) => {
  return <SvgImage name="selvbetjening" {...props} src={selvbetjening} />;
};

export const ImageSelvbetjeningRso = (props: SvgImageProps) => {
  return <SvgImage name="selvbetjeningRso" {...props} src={selvbetjeningRso} />;
};

export const ImageNais = (props: SvgImageProps) => {
  return <SvgImage name="nais" {...props} src={nais} />;
};

export const ImageKystvaer = (props: SvgImageProps) => {
  return <SvgImage name="kystvaer" {...props} src={kystvaer} />;
};

export const ImageForespoerselSendt = (props: SvgImageProps) => {
  return <SvgImage name="forespoersel_sendt" {...props} src={forespoersel_sendt} />;
};

export const ImageBwNais = (props: SvgImageProps) => {
  return <SvgImage name="bw_nais" {...props} src={bw_nais} />;
};

export const ImageBwOhoi = (props: SvgImageProps) => {
  return <SvgImage name="bw_ohoi" {...props} src={bw_ohoi} />;
};

export const ImageBwBoelgevarsel = (props: SvgImageProps) => {
  return <SvgImage name="bw_boelgevarsel" {...props} src={bw_boelgevarsel} />;
};

export const ImageBwArcticinfo = (props: SvgImageProps) => {
  return <SvgImage name="bw_arcticinfo" {...props} src={bw_arcticinfo} />;
};
