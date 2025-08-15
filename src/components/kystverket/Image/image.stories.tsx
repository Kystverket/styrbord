import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import {
  Image,
  ImageAis,
  ImageAisSat,
  ImageArcticInfo,
  ImageAvgiftskalkulator,
  ImageBaatfartMarine,
  ImageBestilleLos,
  ImageBoelgevarsel,
  ImageDgps,
  ImageDigitalRutetjeneste,
  ImageEDialog,
  ImageFarledsbevis,
  ImageHavbase,
  ImageHavnOgFarvannsloven,
  ImageIstjeneste,
  ImageKikkert,
  ImageKystdatahuset,
  ImageKystinfoKart,
  ImageLavutslipp,
  ImageLrit,
  ImageNasjonalHavneoversikt,
  ImageNavigasjonsvarsler,
  ImageOhoi,
  ImagePaagaaendeSeilaser,
  ImageSeLosbestilling,
  ImageSkipsrapportering,
  ImageSlukkedeFyrlys,
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
  ['IconAis', <ImageAis />, ''],
  ['IconAisSat', <ImageAisSat />, ''],
  ['IconArcticInfo', <ImageArcticInfo />, ''],
  ['IconAvgiftskalkulator', <ImageAvgiftskalkulator />, ''],
  ['IconBaatfartMarine', <ImageBaatfartMarine />, ''],
  ['IconBestilleLos', <ImageBestilleLos />, ''],
  ['IconBoelgevarsel', <ImageBoelgevarsel />, ''],
  ['IconDgps', <ImageDgps />, ''],
  ['IconDigitalRutetjeneste', <ImageDigitalRutetjeneste />, ''],
  ['IconEDialog', <ImageEDialog />, ''],
  ['IconFarledsbevis', <ImageFarledsbevis />, ''],
  ['IconHavbase', <ImageHavbase />, ''],
  ['IconHavnOgFarvannsloven', <ImageHavnOgFarvannsloven />, ''],
  ['IconIstjeneste', <ImageIstjeneste />, ''],
  ['IconKikkert', <ImageKikkert />, ''],
  ['IconKystdatahuset', <ImageKystdatahuset />, ''],
  ['IconKystinfoKart', <ImageKystinfoKart />, ''],
  ['IconLavutslipp', <ImageLavutslipp />, ''],
  ['IconLrit', <ImageLrit />, ''],
  ['IconNasjonalHavneoversikt', <ImageNasjonalHavneoversikt />, ''],
  ['IconNavigasjonsvarsler', <ImageNavigasjonsvarsler />, ''],
  ['IconOhoi', <ImageOhoi />, ''],
  ['IconPaagaaendeSeilaser', <ImagePaagaaendeSeilaser />, ''],
  ['IconSeLosbestilling', <ImageSeLosbestilling />, ''],
  ['IconSkipsrapportering', <ImageSkipsrapportering />, ''],
  ['IconSlukkedeFyrlys', <ImageSlukkedeFyrlys />, ''],
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
