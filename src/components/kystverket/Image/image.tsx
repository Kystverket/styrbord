import classes from './image.module.css';

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

export const imageColors = ['primary', 'info', 'accent', 'sand', 'neutral', 'white'] as const;
export type ImageColor = (typeof imageColors)[number];

export type ImageSize = number;

export type ImageProps = {
  'data-color'?: ImageColor;
  size?: ImageSize;
  className?: string;
};

type BaseImageProps = {
  src: string;
  name?: string;
  'data-color'?: ImageColor;
  size?: ImageSize;
  className?: string;
};

export const Image = ({ name, src, 'data-color': dataColor = 'primary', className = '', ...props }: BaseImageProps) => {
  const classNames = [classes.svg, name ? classes[name] : '', classes[dataColor], className || ''];
  const style = { '--kyv-svg-size': `calc(var(--ds-size-unit) * ${props.size ?? 18})` } as React.CSSProperties;

  return <ReactSVG style={style} className={classNames.join(' ')} src={src} {...props} />;
};

export const ImageHais = (props: ImageProps) => {
  return <Image name="hais" {...props} src={hais} />;
};

export const ImageAisSat = (props: ImageProps) => {
  return <Image name="aissat" {...props} src={aissat} />;
};

export const ImageDatakatalog = (props: ImageProps) => {
  return <Image name="datakatalog" {...props} src={datakatalog} />;
};

export const ImageArcticInfo = (props: ImageProps) => {
  return <Image name="arcticinfo" {...props} src={arcticinfo} />;
};

export const ImageAvgiftskalkulator = (props: ImageProps) => {
  return <Image name="avgiftskalkulator" {...props} src={avgiftskalkulator} />;
};

export const ImageBaatfartMarine = (props: ImageProps) => {
  return <Image name="baatfart_marine" {...props} src={baatfart_marine} />;
};

export const ImageBestilleLos = (props: ImageProps) => {
  return <Image name="bestille_los" {...props} src={bestille_los} />;
};

export const ImageBoelgevarsel = (props: ImageProps) => {
  return <Image name="boelgevarsel" {...props} src={boelgevarsel} />;
};

export const ImageDgps = (props: ImageProps) => {
  return <Image name="dgps" {...props} src={dgps} />;
};

export const ImageDigitaleReferanseruter = (props: ImageProps) => {
  return <Image name="digitale_referanseruter" {...props} src={digitale_referanseruter} />;
};

export const ImageEDialog = (props: ImageProps) => {
  return <Image name="edialog" {...props} src={edialog} />;
};

export const ImageFarledsbevis = (props: ImageProps) => {
  return <Image name="farledsbevis" {...props} src={farledsbevis} />;
};

export const ImageSoeknadOmFarledsbevis = (props: ImageProps) => {
  return <Image name="soeknad_om_farledsbevis" {...props} src={farledsbevis} />;
};

export const ImageHavbase = (props: ImageProps) => {
  return <Image name="havbase" {...props} src={havbase} />;
};

export const ImageHavnOgFarvannsloven = (props: ImageProps) => {
  return <Image name="havn_og_farvannsloven" {...props} src={havn_og_farvannsloven} />;
};

export const ImageIstjeneste = (props: ImageProps) => {
  return <Image name="istjeneste" {...props} src={istjeneste} />;
};

export const ImageIsmelding = (props: ImageProps) => {
  return <Image name="ismelding" {...props} src={ismelding} />;
};

export const ImageKikkert = (props: ImageProps) => {
  return <Image name="kikkert" {...props} src={kikkert} />;
};

export const ImageKystdatahuset = (props: ImageProps) => {
  return <Image name="kystdatahuset" {...props} src={datakatalog} />;
};

export const ImageKystinfoKart = (props: ImageProps) => {
  return <Image name="kystinfo_kart" {...props} src={kystinfo_kart} />;
};

export const ImageLavutslipp = (props: ImageProps) => {
  return <Image name="lavutslipp" {...props} src={lavutslipp} />;
};

export const ImageLrit = (props: ImageProps) => {
  return <Image name="lrit" {...props} src={lrit} />;
};

export const ImageNasjonalHavneoversikt = (props: ImageProps) => {
  return <Image name="nasjonal_havneoversikt" {...props} src={nasjonal_havneoversikt} />;
};

export const ImageNavigasjonsvarsler = (props: ImageProps) => {
  return <Image name="navigasjonsvarsler" {...props} src={navigasjonsvarsler} />;
};

export const ImageOhoi = (props: ImageProps) => {
  return <Image name="ohoi" {...props} src={ohoi} />;
};

export const ImageRegistrerteSeilaser = (props: ImageProps) => {
  return <Image name="registrerte_seilaser" {...props} src={registrerte_seilaser} />;
};

export const ImageSeLosbestilling = (props: ImageProps) => {
  return <Image name="se_losbestilling" {...props} src={se_losbestilling} />;
};

export const ImageSkipsrapportering = (props: ImageProps) => {
  return <Image name="skipsrapportering" {...props} src={safeSeaNet} />;
};

export const ImageDigitaleFyrbesoek = (props: ImageProps) => {
  return <Image name="digitale_fyrbesoek" {...props} src={digitale_fyrbesoek} />;
};

export const ImageSlukkedeFyrlys = (props: ImageProps) => {
  return <Image name="slukkede_fyrlys" {...props} src={digitale_fyrlykter} />;
};

export const ImageMarU = (props: ImageProps) => {
  return <Image name="maru" {...props} src={maru} />;
};

export const ImageNavarea = (props: ImageProps) => {
  return <Image name="navarea" {...props} src={navarea} />;
};

export const ImageKystreise = (props: ImageProps) => {
  return <Image name="kystreise" {...props} src={kystreise} />;
};

export const ImageMegafon = (props: ImageProps) => {
  return <Image name="megafon" {...props} src={megafon} />;
};

export const ImageSafeSeaNet = (props: ImageProps) => {
  return <Image name="safeSeaNet" {...props} src={safeSeaNet} />;
};

export const ImageSelvbetjening = (props: ImageProps) => {
  return <Image name="selvbetjening" {...props} src={selvbetjening} />;
};

export const ImageSelvbetjeningRso = (props: ImageProps) => {
  return <Image name="selvbetjeningRso" {...props} src={selvbetjeningRso} />;
};

export const ImageNais = (props: ImageProps) => {
  return <Image name="nais" {...props} src={nais} />;
};

export const ImageKystvaer = (props: ImageProps) => {
  return <Image name="kystvaer" {...props} src={kystvaer} />;
};

export const ImageForespoerselSendt = (props: ImageProps) => {
  return <Image name="forespoersel_sendt" {...props} src={forespoersel_sendt} />;
};

export const ImageBwNais = (props: ImageProps) => {
  return <Image name="bw_nais" {...props} src={bw_nais} />;
};

export const ImageBwOhoi = (props: ImageProps) => {
  return <Image name="bw_ohoi" {...props} src={bw_ohoi} />;
};

export const ImageBwBoelgevarsel = (props: ImageProps) => {
  return <Image name="bw_boelgevarsel" {...props} src={bw_boelgevarsel} />;
};

export const ImageBwArcticinfo = (props: ImageProps) => {
  return <Image name="bw_arcticinfo" {...props} src={bw_arcticinfo} />;
};
