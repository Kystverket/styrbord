import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import {
  ImageAisSat,
  ImageArcticInfo,
  ImageAvgiftskalkulator,
  ImageBaatfartMarine,
  ImageBestilleLos,
  ImageBoelgevarsel,
  ImageBwArcticinfo,
  ImageBwBoelgevarsel,
  ImageBwNais,
  ImageBwOhoi,
  svgImageColors,
  ImageDatakatalog,
  ImageDigitaleFyrbesoek,
  ImageDigitaleReferanseruter,
  ImageEDialog,
  ImageForespoerselSendt,
  ImageHais,
  ImageHavbase,
  ImageHavnOgFarvannsloven,
  ImageHavnOgFarvannslovenFarget,
  ImageIsmelding,
  ImageIsmeldingFarget,
  ImageKikkert,
  ImageKystdatahuset,
  ImageKystinfoKart,
  ImageKystreise,
  ImageKystvaer,
  ImageLavutslipp,
  ImageMarU,
  ImageMegafon,
  ImageNais,
  ImageNavarea,
  ImageNavigasjonsvarsler,
  ImageNavigasjonsvarslerFarget,
  ImageOhoi,
  SvgImageProps,
  ImageRegistrerteSeilaser,
  ImageSafeSeaNet,
  ImageSeLosbestilling,
  ImageSelvbetjening,
  ImageSelvbetjeningRso,
  ImageSelvbetjeningRsoFarget,
  ImageSlukkedeFyrlys,
  ImageSoeknadOmFarledsbevis,
  ImageFarvannsskiltOgNavinnretninger,
  ImageFarvannsskiltOgNavinnretningerFarget,
  ImageSkadePaaInfrastruktur,
  ImageSkadePaaInfrastrukturFarget,
  ImageTilskuddTilFiskerihavn,
  ImageTilskuddTilFiskerihavnFarget,
  ImageUtfordringIFarvannetFarget,
  ImageUtfordringIFarvannet,
} from './svgImage';
import { Body } from '~/main';

const meta = {
  title: 'Helpers/Images and Illustrations',
  component: ImageSoeknadOmFarledsbevis,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof ImageSoeknadOmFarledsbevis>;

export default meta;

const images: [string, React.FC<SvgImageProps>][] = [
  ['ImageAisSat', ImageAisSat],
  ['ImageArcticInfo', ImageArcticInfo],
  ['ImageAvgiftskalkulator', ImageAvgiftskalkulator],
  ['ImageBaatfartMarine', ImageBaatfartMarine],
  ['ImageBestilleLos', ImageBestilleLos],
  ['ImageBoelgevarsel', ImageBoelgevarsel],
  ['ImageBwArcticinfo', ImageBwArcticinfo],
  ['ImageBwBoelgevarsel', ImageBwBoelgevarsel],
  ['ImageBwNais', ImageBwNais],
  ['ImageBwOhoi', ImageBwOhoi],
  ['ImageDatakatalog', ImageDatakatalog],
  ['ImageDigitaleFyrbesoek', ImageDigitaleFyrbesoek],
  ['ImageDigitaleReferanseruter', ImageDigitaleReferanseruter],
  ['ImageEDialog', ImageEDialog],
  ['ImageForespoerselSendt', ImageForespoerselSendt],
  ['ImageHais', ImageHais],
  ['ImageHavbase', ImageHavbase],
  ['ImageHavnOgFarvannsloven', ImageHavnOgFarvannsloven],
  ['ImageHavnOgFarvannslovenFarget', ImageHavnOgFarvannslovenFarget],
  ['ImageIsmelding', ImageIsmelding],
  ['ImageIsmeldingFarget', ImageIsmeldingFarget],
  ['ImageKikkert', ImageKikkert],
  ['ImageKystdatahuset', ImageKystdatahuset],
  ['ImageKystinfoKart', ImageKystinfoKart],
  ['ImageKystreise', ImageKystreise],
  ['ImageKystvaer', ImageKystvaer],
  ['ImageLavutslipp', ImageLavutslipp],
  ['ImageMarU', ImageMarU],
  ['ImageMegafon', ImageMegafon],
  ['ImageNais', ImageNais],
  ['ImageNavarea', ImageNavarea],
  ['ImageNavigasjonsvarsler', ImageNavigasjonsvarsler],
  ['ImageNavigasjonsvarslerFarget', ImageNavigasjonsvarslerFarget],
  ['ImageOhoi', ImageOhoi],
  ['ImageRegistrerteSeilaser', ImageRegistrerteSeilaser],
  ['ImageSafeSeaNet', ImageSafeSeaNet],
  ['ImageSeLosbestilling', ImageSeLosbestilling],
  ['ImageSelvbetjening', ImageSelvbetjening],
  ['ImageSelvbetjeningRso', ImageSelvbetjeningRso],
  ['ImageSelvbetjeningRsoFarget', ImageSelvbetjeningRsoFarget],
  ['ImageSlukkedeFyrlys', ImageSlukkedeFyrlys],
  ['ImageSoeknadOmFarledsbevis', ImageSoeknadOmFarledsbevis],
  ['ImageFarvannsskiltOgNavinnretninger', ImageFarvannsskiltOgNavinnretninger],
  ['ImageFarvannsskiltOgNavinnretningerFarget', ImageFarvannsskiltOgNavinnretningerFarget],
  ['ImageSkadePaaInfrastruktur', ImageSkadePaaInfrastruktur],
  ['ImageSkadePaaInfrastrukturFarget', ImageSkadePaaInfrastrukturFarget],
  ['ImageTilskuddTilFiskerihavn', ImageTilskuddTilFiskerihavn],
  ['ImageTilskuddTilFiskerihavnFarget', ImageTilskuddTilFiskerihavnFarget],
  ['ImageUtfordringIFarvannet', ImageUtfordringIFarvannet],
  ['ImageUtfordringIFarvannetFarget', ImageUtfordringIFarvannetFarget],
];

const variants = [...svgImageColors] as const;

export const Showcase: StoryFn = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {variants.map((variant) => (
            <th style={{ padding: '0.5rem' }}>{variant}</th>
          ))}
        </tr>
      </thead>
      {images.map(([elementName, Element]) => (
        <tr key={elementName}>
          <td style={{ padding: '0.5rem' }}>
            <Body strong>&lt;{elementName} /&gt;</Body>
          </td>
          {variants.map((variant) => (
            <td style={{ padding: '0.5rem' }}>{<Element data-color={variant} />}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export const Big: StoryFn = () => {
  return <ImageSlukkedeFyrlys size={60} />;
};

export const Small: StoryFn = () => {
  return <ImageArcticInfo size={8} />;
};
