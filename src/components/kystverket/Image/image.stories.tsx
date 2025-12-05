import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import {
  Image,
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
  imageColors,
  ImageDatakatalog,
  ImageDgps,
  ImageDigitaleFyrbesoek,
  ImageDigitaleReferanseruter,
  ImageEDialog,
  ImageForespoerselSendt,
  ImageHais,
  ImageHavbase,
  ImageHavnOgFarvannsloven,
  ImageIsmelding,
  ImageIstjeneste,
  ImageKikkert,
  ImageKystdatahuset,
  ImageKystinfoKart,
  ImageKystreise,
  ImageKystvaer,
  ImageLavutslipp,
  ImageLrit,
  ImageMarU,
  ImageMegafon,
  ImageNais,
  ImageNasjonalHavneoversikt,
  ImageNavarea,
  ImageNavigasjonsvarsler,
  ImageOhoi,
  ImageProps,
  ImageRegistrerteSeilaser,
  ImageSafeSeaNet,
  ImageSeLosbestilling,
  ImageSelvbetjening,
  ImageSelvbetjeningRso,
  ImageSlukkedeFyrlys,
  ImageSoeknadOmFarledsbevis,
} from './image';
import { Body } from '~/main';

const meta = {
  title: 'Helpers/Images and Illustrations',
  component: Image,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;

const images: [string, React.FC<ImageProps>][] = [
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
  ['ImageDgps', ImageDgps],
  ['ImageDigitaleFyrbesoek', ImageDigitaleFyrbesoek],
  ['ImageDigitaleReferanseruter', ImageDigitaleReferanseruter],
  ['ImageEDialog', ImageEDialog],
  ['ImageForespoerselSendt', ImageForespoerselSendt],
  ['ImageHais', ImageHais],
  ['ImageHavbase', ImageHavbase],
  ['ImageHavnOgFarvannsloven', ImageHavnOgFarvannsloven],
  ['ImageIsmelding', ImageIsmelding],
  ['ImageIstjeneste', ImageIstjeneste],
  ['ImageKikkert', ImageKikkert],
  ['ImageKystdatahuset', ImageKystdatahuset],
  ['ImageKystinfoKart', ImageKystinfoKart],
  ['ImageKystreise', ImageKystreise],
  ['ImageKystvaer', ImageKystvaer],
  ['ImageLavutslipp', ImageLavutslipp],
  ['ImageLrit', ImageLrit],
  ['ImageMarU', ImageMarU],
  ['ImageMegafon', ImageMegafon],
  ['ImageNais', ImageNais],
  ['ImageNasjonalHavneoversikt', ImageNasjonalHavneoversikt],
  ['ImageNavarea', ImageNavarea],
  ['ImageNavigasjonsvarsler', ImageNavigasjonsvarsler],
  ['ImageOhoi', ImageOhoi],
  ['ImageRegistrerteSeilaser', ImageRegistrerteSeilaser],
  ['ImageSafeSeaNet', ImageSafeSeaNet],
  ['ImageSeLosbestilling', ImageSeLosbestilling],
  ['ImageSelvbetjening', ImageSelvbetjening],
  ['ImageSelvbetjeningRso', ImageSelvbetjeningRso],
  ['ImageSlukkedeFyrlys', ImageSlukkedeFyrlys],
  ['ImageSoeknadOmFarledsbevis', ImageSoeknadOmFarledsbevis],
];

const variants = [...imageColors] as const;

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
