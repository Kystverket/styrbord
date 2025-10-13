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

const icons: [string, React.JSX.Element, string][] = [
  ['IconAisSat', <ImageAisSat />, ''],
  ['IconArcticInfo', <ImageArcticInfo />, ''],
  ['IconAvgiftskalkulator', <ImageAvgiftskalkulator />, ''],
  ['IconBaatfartMarine', <ImageBaatfartMarine />, ''],
  ['IconBestilleLos', <ImageBestilleLos />, ''],
  ['IconBoelgevarsel', <ImageBoelgevarsel />, ''],
  ['IconBwArcticinfo', <ImageBwArcticinfo />, ''],
  ['IconBwBoelgevarsel', <ImageBwBoelgevarsel />, ''],
  ['IconBwNais', <ImageBwNais />, ''],
  ['IconBwOhoi', <ImageBwOhoi />, ''],
  ['IconDatakatalog', <ImageDatakatalog />, ''],
  ['IconDgps', <ImageDgps />, ''],
  ['IconDigitaleFyrbesoek', <ImageDigitaleFyrbesoek />, ''],
  ['IconDigitaleReferanseruter', <ImageDigitaleReferanseruter />, ''],
  ['IconEDialog', <ImageEDialog />, ''],
  ['IconForespoerselSendt', <ImageForespoerselSendt />, ''],
  ['IconHais', <ImageHais />, ''],
  ['IconHavbase', <ImageHavbase />, ''],
  ['IconHavnOgFarvannsloven', <ImageHavnOgFarvannsloven />, ''],
  ['IconIsmelding', <ImageIsmelding />, ''],
  ['IconIstjeneste', <ImageIstjeneste />, ''],
  ['IconKikkert', <ImageKikkert />, ''],
  ['IconKystdatahuset', <ImageKystdatahuset />, ''],
  ['IconKystinfoKart', <ImageKystinfoKart />, ''],
  ['IconKystreise', <ImageKystreise />, ''],
  ['IconKystvaer', <ImageKystvaer />, ''],
  ['IconLavutslipp', <ImageLavutslipp />, ''],
  ['IconLrit', <ImageLrit />, ''],
  ['IconMarU', <ImageMarU />, ''],
  ['IconMegafon', <ImageMegafon />, ''],
  ['IconNais', <ImageNais />, ''],
  ['IconNasjonalHavneoversikt', <ImageNasjonalHavneoversikt />, ''],
  ['IconNavarea', <ImageNavarea />, ''],
  ['IconNavigasjonsvarsler', <ImageNavigasjonsvarsler />, ''],
  ['IconOhoi', <ImageOhoi />, ''],
  ['IconRegistrerteSeilaser', <ImageRegistrerteSeilaser />, ''],
  ['IconSafeSeaNet', <ImageSafeSeaNet />, ''],
  ['IconSeLosbestilling', <ImageSeLosbestilling />, ''],
  ['IconSelvbetjening', <ImageSelvbetjening />, ''],
  ['IconSelvbetjeningRso', <ImageSelvbetjeningRso />, ''],
  ['IconSlukkedeFyrlys', <ImageSlukkedeFyrlys />, ''],
  ['IconSoeknadOmFarledsbevis', <ImageSoeknadOmFarledsbevis />, ''],
];

export const Showcase: StoryFn = () => {
  return (
    <table>
      {icons.map(([elementName, Element, description]) => (
        <tr key={elementName}>
          <td style={{ padding: '0.5rem' }}>{Element}</td>
          <td style={{ padding: '0.5rem' }}>
            <Body strong>&lt;{elementName} /&gt;</Body>
            <Body size="sm">{description}</Body>
          </td>
        </tr>
      ))}
    </table>
  );
};

export const Big: StoryFn = () => {
  return <ImageArcticInfo width={256} />;
};

export const Small: StoryFn = () => {
  return <ImageArcticInfo width={32} />;
};
