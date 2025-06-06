import { ImgHTMLAttributes } from 'react';
import classes from './image.module.css';

import ais from './svg/ais.svg';
import aissat from './svg/aissat.svg';
import arcticinfo from './svg/arcticinfo.svg';
import avgiftskalkulator from './svg/avgiftskalkulator.svg';
import baatfart_marine from './svg/baatfart_marine.svg';
import bestille_los from './svg/bestille_los.svg';
import boelgevarsel from './svg/boelgevarsel.svg';
import dgps from './svg/dgps.svg';
import digital_rutetjeneste from './svg/digital_rutetjeneste.svg';
import edialog from './svg/edialog.svg';
import farledsbevis from './svg/farledsbevis.svg';
import havbase from './svg/havbase.svg';
import havn_og_farvannsloven from './svg/havn_og_farvannsloven.svg';
import istjeneste from './svg/istjeneste.svg';
import kikkert from './svg/kikkert.svg';
import kystdatahuset from './svg/kystdatahuset.svg';
import kystinfo_kart from './svg/kystinfo_kart.svg';
import lavutslipp from './svg/lavutslipp.svg';
import lrit from './svg/lrit.svg';
import nasjonal_havneoversikt from './svg/nasjonal_havneoversikt.svg';
import navigasjonsvarsler from './svg/navigasjonsvarsler.svg';
import ohoi from './svg/ohoi.svg';
import paagaaende_seilaser from './svg/paagaaende_seilaser.svg';
import se_losbestilling from './svg/se_losbestilling.svg';
import skipsrapportering from './svg/skipsrapportering.svg';
import slukkede_fyrlys from './svg/slukkede_fyrlys.svg';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = ({ src, className = '', ...props }: ImageProps) => {
  const classNames = [classes.svg, className || ''];

  return <img className={classNames.join(' ')} src={src} {...props} />;
};

export const ImageAis = (props: ImageProps) => {
  return <Image {...props} src={ais} />;
};

export const ImageAisSat = (props: ImageProps) => {
  return <Image {...props} src={aissat} />;
};

export const ImageArcticInfo = (props: ImageProps) => {
  return <Image {...props} src={arcticinfo} />;
};

export const ImageAvgiftskalkulator = (props: ImageProps) => {
  return <Image {...props} src={avgiftskalkulator} />;
};

export const ImageBaatfartMarine = (props: ImageProps) => {
  return <Image {...props} src={baatfart_marine} />;
};

export const ImageBestilleLos = (props: ImageProps) => {
  return <Image {...props} src={bestille_los} />;
};

export const ImageBoelgevarsel = (props: ImageProps) => {
  return <Image {...props} src={boelgevarsel} />;
};

export const ImageDgps = (props: ImageProps) => {
  return <Image {...props} src={dgps} />;
};

export const ImageDigitalRutetjeneste = (props: ImageProps) => {
  return <Image {...props} src={digital_rutetjeneste} />;
};

export const ImageEDialog = (props: ImageProps) => {
  return <Image {...props} src={edialog} />;
};

export const ImageFarledsbevis = (props: ImageProps) => {
  return <Image {...props} src={farledsbevis} />;
};

export const ImageHavbase = (props: ImageProps) => {
  return <Image {...props} src={havbase} />;
};

export const ImageHavnOgFarvannsloven = (props: ImageProps) => {
  return <Image {...props} src={havn_og_farvannsloven} />;
};

export const ImageIstjeneste = (props: ImageProps) => {
  return <Image {...props} src={istjeneste} />;
};

export const ImageKikkert = (props: ImageProps) => {
  return <Image {...props} src={kikkert} />;
};

export const ImageKystdatahuset = (props: ImageProps) => {
  return <Image {...props} src={kystdatahuset} />;
};

export const ImageKystinfoKart = (props: ImageProps) => {
  return <Image {...props} src={kystinfo_kart} />;
};

export const ImageLavutslipp = (props: ImageProps) => {
  return <Image {...props} src={lavutslipp} />;
};

export const ImageLrit = (props: ImageProps) => {
  return <Image {...props} src={lrit} />;
};

export const ImageNasjonalHavneoversikt = (props: ImageProps) => {
  return <Image {...props} src={nasjonal_havneoversikt} />;
};

export const ImageNavigasjonsvarsler = (props: ImageProps) => {
  return <Image {...props} src={navigasjonsvarsler} />;
};

export const ImageOhoi = (props: ImageProps) => {
  return <Image {...props} src={ohoi} />;
};

export const ImagePaagaaendeSeilaser = (props: ImageProps) => {
  return <Image {...props} src={paagaaende_seilaser} />;
};

export const ImageSeLosbestilling = (props: ImageProps) => {
  return <Image {...props} src={se_losbestilling} />;
};

export const ImageSkipsrapportering = (props: ImageProps) => {
  return <Image {...props} src={skipsrapportering} />;
};

export const ImageSlukkedeFyrlys = (props: ImageProps) => {
  return <Image {...props} src={slukkede_fyrlys} />;
};
