import type { Meta, StoryFn } from '@storybook/react-vite';
import { useId, useState } from 'react';
import {
  Paragraph,
  Surface,
  Button,
  Heading,
  Icon,
  Tag,
  Header,
  Footer,
  ApplicationHeaderContext,
  Datepicker,
  Dropdown,
  Popover,
  Summary,
  convertBytesToReadable,
  FilePreviewer,
  type FilePreviewerPanelProps,
} from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { SaksbehandlingShell } from './SaksbehandlingShell';
import type { SaksbehandlingItem } from './SaksbehandlingShell.types';
import atlas from '@assets/img/atlas/atlas 1.jpeg';
import pikekyst from '@assets/documents/Pikekyst Oppskrift.pdf';
import geojson from '@assets/documents/geojson.json';
import tekstfil from '@assets/documents/tekstfil.txt';

const meta = {
  title: 'Side/SaksbehandlingShell',
  component: SaksbehandlingShell,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'beta'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SaksbehandlingShell>;

export default meta;

const typeToIcon: Record<string, Pick<SaksbehandlingItem, 'icon' | 'iconColor' | 'iconIndicator'>> = {
  inbound: { icon: 'mail', iconIndicator: 'arrow_forward', iconColor: 'sol' },
  outbound: { icon: 'mail', iconIndicator: 'arrow_back', iconColor: 'hav' },
  discussion: { icon: 'chat', iconColor: 'skog' },
  note: { icon: 'format_list_bulleted', iconColor: 'lyng' },
  task: { icon: 'text_snippet', iconColor: 'fyr' },
};

const ITEMS: SaksbehandlingItem[] = [
  {
    id: '1',
    title: 'Søknad om utslippstillatelse',
    description: 'Innkommet brev fra Sandnessjøen havn',
    ...typeToIcon['inbound'],
  },
  {
    id: '2',
    title: 'Svar på søknad',
    description: 'Utgående brev til søker',
    ...typeToIcon['outbound'],
  },
  {
    id: '3',
    title: 'Avklaring med jurist',
    description: 'Diskusjon om hjemmelsgrunnlag',
    ...typeToIcon['discussion'],
  },
  {
    id: '4',
    title: 'Sjekkliste for saksbehandling',
    description: 'Standard sjekkliste for utslippssaker',
    ...typeToIcon['note'],
  },
  {
    id: '5',
    title: 'Intern kommentar',
    description: 'Husk å følge opp med kystverket region nord',
    ...typeToIcon['task'],
  },
  {
    id: '6',
    title: 'Purring fra søker',
    description: 'Innkommet brev med spørsmål om status',
    ...typeToIcon['inbound'],
  },
  {
    id: '7',
    title: 'Statusoppdatering til søker',
    description: 'Utgående brev om forventet behandlingstid',
    ...typeToIcon['outbound'],
  },
  {
    id: '8',
    title: 'Vurdering med fagansvarlig',
    description: 'Diskusjon om miljøkonsekvenser',
    ...typeToIcon['discussion'],
  },
  {
    id: '9',
    title: 'Sjekkliste for høring',
    description: 'Kontroll av høringsfrister og parter',
    ...typeToIcon['note'],
  },
  {
    id: '10',
    title: 'Notat til saksmappe',
    description: 'Oppsummering av telefonsamtale med søker',
    ...typeToIcon['task'],
  },
  {
    id: '11',
    title: 'Vedlegg til søknad',
    description: 'Innkommet brev med oppdatert kartskisse',
    ...typeToIcon['inbound'],
  },
  {
    id: '12',
    title: 'Vedtak sendt til søker',
    description: 'Utgående brev med endelig vedtak',
    ...typeToIcon['outbound'],
  },
  {
    id: '13',
    title: 'Intern avklaring om klagefrist',
    description: 'Diskusjon med jurist om klagerett',
    ...typeToIcon['discussion'],
  },
  {
    id: '14',
    title: 'Sjekkliste for arkivering',
    description: 'Kontroll før saken arkiveres',
    ...typeToIcon['note'],
  },
];

function ShellDemo() {
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(ITEMS[0].id);
  const selectedItem = ITEMS.find((item) => item.id === selectedItemId);

  return (
    <SaksbehandlingShell
      headerContent={
        <Surface horizontal align="center" gap={2} justify="between" width="full">
          <Heading level={1} data-size="sm" style={{ margin: 0 }}>
            Sak 2026-0142 — Søknad om utslippstillatelse
          </Heading>
          <Surface horizontal align="center" gap={1}>
            <Icon material="pin_drop" size="sm" />
            <span data-size="sm">Sandnessjøen havn</span>
          </Surface>
          <Tag data-color="success" data-size="sm">
            Under behandling
          </Tag>
        </Surface>
      }
      caseActions={<Button size="sm">Avslutt sak</Button>}
      itemActions={selectedItem && <Button size="sm">Svar</Button>}
      items={ITEMS}
      selectedItemId={selectedItemId}
      onSelectItemId={setSelectedItemId}
      comparisonContent={
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
          lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
          egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam nec
          ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu. Phasellus
          suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat nulla, ut
          pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae orci sit
          amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum sagittis.
          Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit pulvinar
          magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut accumsan feugiat. Donec
          tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et, consectetur massa. Fusce
          pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis condimentum. Nulla facilisi.
          Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat, lobortis et arcu ut, posuere
          vehicula tortor. Phasellus ut tortor leo. Etiam ac augue nisl. Integer sodales pharetra interdum. Pellentesque
          ac nisi sed urna consectetur faucibus. Vivamus mauris metus, laoreet ac turpis id, molestie scelerisque leo.
          Nulla et nisl eu erat auctor viverra a a dui. Vestibulum vel fermentum lacus, imperdiet suscipit lacus. Nunc
          vel tortor faucibus, venenatis nisi nec, tincidunt nunc. Nulla imperdiet convallis lacus. Nunc velit orci,
          gravida eget purus a, consequat blandit neque. Aenean vitae est nisl. Nunc sed massa risus. Nam libero metus,
          pharetra at lectus sit amet, aliquet finibus mauris. Duis vel dui porta tellus porta auctor non at purus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, elit id tincidunt tempor, ligula
          lorem auctor urna, quis dignissim nunc massa sed massa. Proin sed dolor at felis facilisis elementum. Ut
          fringilla nibh eu bibendum interdum. Suspendisse hendrerit purus in eros venenatis pretium. In interdum
          faucibus ultrices. Aliquam hendrerit vestibulum massa lacinia dignissim. Morbi bibendum risus in turpis
          tincidunt sodales. In et felis fringilla, rutrum nisl in, feugiat quam. Praesent eget pretium sapien, in
          lacinia lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur id nulla a accumsan.
          Nullam vitae ullamcorper metus. Sed hendrerit volutpat ante a bibendum. Aliquam ut molestie massa. Etiam nec
          imperdiet turpis, id eleifend quam. In in justo fringilla, pretium sapien sit amet, ornare lectus. Integer
          tellus turpis, sollicitudin in varius vel, feugiat vel urna. Sed tincidunt augue et tempor accumsan. Nullam
          quam mauris, consequat nec nulla iaculis, faucibus gravida erat. Vivamus ac nisl nec mauris placerat porttitor
          eu non nulla. Sed ullamcorper ex eget vestibulum vulputate. Suspendisse consectetur, dui quis eleifend
          interdum, ipsum orci vestibulum eros, vel efficitur lorem tortor et purus. Morbi viverra, velit at volutpat
          rhoncus, tortor mi porta magna, vel vestibulum velit ante non tellus. Duis aliquet mollis fermentum. Mauris
          dictum nec turpis ut mattis. Sed mattis leo ex, nec lacinia risus pretium a. Nulla imperdiet justo sit amet
          tempus luctus. Duis sit amet finibus eros. Cras tristique vestibulum diam eu gravida. Cras pellentesque felis
          felis, sit amet semper ipsum venenatis vel. Ut vulputate pulvinar neque. Suspendisse a feugiat est, ac varius
          mi. In non lorem lacus. Donec ut egestas ipsum. Nulla facilisi. Suspendisse ut posuere purus. Praesent
          pharetra dolor ut felis dictum ullamcorper. Morbi sem mauris, malesuada non molestie in, pharetra eu ligula.
          Nunc et facilisis purus. Morbi facilisis lorem massa, a consectetur purus elementum id. Vivamus et ultricies
          sapien. Vivamus eros turpis, vestibulum porta elit faucibus, fringilla malesuada purus. Donec mollis mi at
          mauris porttitor auctor. Nulla leo arcu, condimentum at elit ac, volutpat faucibus neque. Duis ornare pharetra
          pretium. Sed egestas eros id urna interdum, vel eleifend magna commodo. Etiam pulvinar dapibus ex, in semper
          eros. Nulla posuere efficitur posuere. Proin vel vulputate arcu. Sed magna felis, hendrerit vitae ultricies
          quis, congue vel odio. Nunc et elementum arcu. Cras ipsum magna, eleifend et pharetra quis, pulvinar nec quam.
          Praesent nec porta metus, eget facilisis odio. Nulla a dui felis. Mauris ac tincidunt libero, eu lobortis
          ante. Maecenas efficitur condimentum est, id maximus lectus pharetra ut. Etiam vel malesuada nulla. Donec vel
          turpis eu tortor efficitur sollicitudin. Donec quis placerat dolor. Quisque convallis metus nec nulla
          consectetur, et vestibulum quam fermentum. Donec sed bibendum nunc. Fusce consectetur leo a ligula pretium
          vehicula. Nulla at iaculis ligula. Integer lobortis diam neque. Quisque ut mauris nisl. Nullam aliquam dictum
          nisl, quis iaculis libero condimentum vitae. Nunc egestas in orci nec efficitur. Aliquam eleifend congue
          lectus, sed malesuada lacus varius eu. Pellentesque nec risus ut dolor facilisis mattis ut in quam. Sed in mi
          erat. Praesent euismod facilisis lacus at finibus. Vivamus consequat quam mauris, sed viverra dui ornare
          varius. Proin id blandit massa. Praesent mi nulla, lacinia at mauris at, pellentesque ullamcorper tellus. Cras
          ullamcorper, leo sit amet egestas sodales, ante quam pretium leo, non hendrerit est lorem non arcu. Cras non
          nunc scelerisque, tempus lacus et, aliquet nisi. Cras dui metus, dignissim vel sapien ac, sodales scelerisque
          dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
          scelerisque ornare turpis sit amet placerat. Nullam quis viverra mauris. Nulla accumsan ligula vitae neque
          luctus finibus. In tincidunt orci dui, non egestas quam fringilla quis. Etiam tempus, nibh in congue feugiat,
          erat nulla lobortis felis, in accumsan lectus dolor ut dui. In a malesuada turpis. Vestibulum imperdiet cursus
          commodo. Mauris sagittis tristique nunc, consectetur tincidunt ex congue in. Nunc ac orci et nunc vestibulum
          pretium. Nam eget lacus pretium, iaculis mi sed, mattis erat. Aliquam ullamcorper eros ut ante tempor
          convallis. Ut sit amet dui id diam suscipit tristique. Fusce efficitur odio quis diam sagittis, ac venenatis
          leo lacinia. Nam finibus eget nisl a pretium. Curabitur vel condimentum risus, vel hendrerit turpis. Aenean
          eget elementum ipsum, sed laoreet lorem. Vivamus consectetur metus at metus vehicula ornare. Vestibulum
          pulvinar turpis nibh, at interdum nulla vestibulum non. Proin placerat, tellus quis tincidunt vulputate,
          libero risus facilisis lectus, vitae imperdiet sem odio mattis massa. Nam ac orci et velit faucibus
          consectetur sit amet eu justo. Sed purus ante, aliquet a ligula sit amet, laoreet viverra massa. Cras
          elementum sollicitudin posuere. Aliquam et dui vel est dictum tempus quis ut dolor. Aenean ultrices, nunc sit
          amet sagittis scelerisque, purus nibh sagittis massa, convallis dictum nisl neque id purus. Sed ut risus quis
          mauris malesuada tempor ac molestie quam. Duis a erat purus. Morbi rutrum mattis neque nec dictum. Nam velit
          erat, interdum accumsan magna id, auctor porttitor nulla. Aenean volutpat aliquet libero, ac pulvinar nisl
          ultrices ac. Nulla cursus nisl et sem auctor luctus. Sed ex erat, hendrerit vitae tristique ornare, suscipit
          eu odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas
          auctor rhoncus odio non consectetur. Cras vestibulum lorem sed orci blandit dictum. Sed luctus leo vel quam
          suscipit aliquam. Etiam suscipit eleifend massa vitae tincidunt. Nullam ut turpis nulla. Nullam eleifend, nunc
          nec volutpat iaculis, libero tellus maximus leo, tincidunt facilisis magna augue in massa. Donec iaculis
          scelerisque est, quis consectetur sem efficitur at. Phasellus sapien ligula, dictum nec augue nec, ultrices
          consequat nulla. Duis vel nisi finibus, efficitur ipsum quis, semper nibh. Aenean cursus imperdiet consequat.
          Ut magna diam, consequat ut justo et, sagittis congue dui. Duis vestibulum elit est, vel rhoncus sapien
          scelerisque sed. In est nisl, pretium vitae lobortis venenatis, ornare sit amet libero. Praesent nec ipsum
          eget erat mattis pharetra sed eu purus. Integer quis porttitor nisi, non ultrices enim. Nullam gravida sed
          justo vel tempor. In aliquam nulla at auctor aliquet. Vivamus scelerisque placerat urna, id blandit nulla
          lacinia vitae. Mauris tincidunt tellus sit amet vestibulum ullamcorper. Aliquam volutpat sem quis lorem
          aliquam, nec porttitor neque accumsan. Suspendisse eu leo gravida, luctus urna eu, ultricies velit. Phasellus
          tincidunt nunc vitae tortor congue convallis. Morbi velit nisl, sagittis convallis ligula eget, blandit
          blandit risus. Morbi hendrerit, tellus ac semper blandit, metus velit luctus leo, quis egestas justo nunc et
          dolor. Ut sed purus dignissim, faucibus ex a, pulvinar urna. Pellentesque quis luctus est. Morbi consequat
          porttitor ante eu fringilla. Duis massa lorem, luctus in vestibulum vitae, maximus in ipsum. In blandit leo ut
          fermentum laoreet. Etiam id arcu aliquam dui fermentum convallis quis ullamcorper enim.
        </Paragraph>
      }
    >
      {selectedItem ? (
        <>
          <Heading level={2} data-size="sm">
            {selectedItem.title}
          </Heading>
          <Paragraph>{selectedItem.description}</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at bibendum dui. Sed eu enim et tellus
            lacinia pretium. Proin vel velit euismod, finibus libero in, sagittis lacus. Nam euismod leo vitae magna
            egestas, sed commodo purus egestas. Aenean euismod est sed libero imperdiet porttitor. Donec molestie diam
            nec ante sagittis, ac vehicula enim congue. Phasellus id malesuada sem. Vestibulum vel egestas arcu.
            Phasellus suscipit malesuada odio id mattis. Aenean molestie, dui a tempor viverra, ante ipsum placerat
            nulla, ut pharetra odio nisl quis mauris. Sed et molestie dolor. Pellentesque in suscipit quam. Nulla vitae
            orci sit amet elit mollis dictum sit amet in eros. Nulla in nisi nisl. Ut interdum eros vel urna interdum
            sagittis. Nullam efficitur vulputate commodo. Nulla eu tortor posuere enim congue egestas. Aenean suscipit
            pulvinar magna id malesuada. Nullam cursus accumsan arcu, vitae gravida metus porta sed. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut dignissim leo ut
            accumsan feugiat. Donec tincidunt dictum ante ut placerat. Quisque ac magna iaculis, tincidunt ipsum et,
            consectetur massa. Fusce pretium lectus sed lobortis facilisis. Vestibulum interdum nulla vitae ex mattis
            condimentum. Nulla facilisi. Suspendisse consectetur nibh vel massa mattis scelerisque. In lectus erat,
            lobortis et arcu ut, posuere vehicula tortor.
          </Paragraph>
        </>
      ) : (
        <Paragraph>Velg et element i listen til venstre.</Paragraph>
      )}
    </SaksbehandlingShell>
  );
}

export const Default: StoryFn<typeof SaksbehandlingShell> = () => (
  <div style={{ height: '100vh' }}>
    <ShellDemo />
  </div>
);
Default.storyName = 'Standard';

/**
 * The shell inside a full page: it fills the viewport below the header, and the footer sits
 * below the fold, as in an application.
 */
export const WithHeaderAndFooter: StoryFn<typeof SaksbehandlingShell> = () => (
  <ApplicationHeaderContext.Provider value={{ applicationId: 'sak' }}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        logo={{ product: 'Saksbehandling', url: '/' }}
        applications={[{ id: 'sak', name: 'Saksbehandling', icon: 'data_table' }]}
        links={[
          { applicationId: 'sak', position: 'main', label: 'Arbeidsliste', url: '#' },
          { applicationId: 'sak', position: 'main', label: 'Alle saker', url: '#' },
        ]}
        profile={{ name: 'Ola Nordmann', department: 'Hav- og kystforvaltning' }}
        logoutHandler={() => alert('Logger ut')}
      />
      <div style={{ flex: 1, minHeight: 0 }}>
        <ShellDemo />
      </div>
    </div>
    <Footer links={[{ text: 'Personvernerklæring', url: '#' }]} />
  </ApplicationHeaderContext.Provider>
);
WithHeaderAndFooter.storyName = 'Med header og footer';

type FileInfo = NonNullable<FilePreviewerPanelProps['file']>;

type InnsendingStatus = 'ny' | 'behandlet' | 'slettet';

type Innsending = {
  id: string;
  dato: Date;
  opprettet: string;
  tittel: string;
  skjemanavn: string;
  saksnummer?: string;
  team: string;
  innsender: string;
  status: InnsendingStatus;
  merknader: { tekst: string; color: 'neutral' | 'success' }[];
  vedlegg?: FileInfo[];
};

const VEDLEGG = {
  bilde: { contentType: 'image', fileName: 'Bilde av skade.jpeg', fileSizeInBytes: 3700000, src: atlas },
  pdf: { contentType: 'pdf', fileName: 'Søknad.pdf', fileSizeInBytes: 240000, src: pikekyst },
  kart: { contentType: 'json', fileName: 'Tiltaksområde.geojson', fileSizeInBytes: 1000, data: geojson },
  tekst: { contentType: 'txt', fileName: 'Merknad.txt', fileSizeInBytes: 700, src: tekstfil },
} satisfies Record<string, FileInfo>;

const INNSENDINGER: Innsending[] = [
  {
    id: 'p1',
    dato: new Date('2026-11-17'),
    opprettet: '46 minutter siden',
    tittel: 'Navigasjonsvarsel',
    skjemanavn: 'Navigasjonsvarsel',
    team: 'nav',
    innsender: 'Kari Nordmann',
    status: 'ny',
    merknader: [{ tekst: 'Sendes til navigasjonsvarsel', color: 'neutral' }],
    vedlegg: [VEDLEGG.kart, VEDLEGG.tekst],
  },
  {
    id: 'p8',
    dato: new Date('2026-11-17'),
    opprettet: '2 timer siden',
    tittel: 'Søknad om tillatelse til tiltak',
    skjemanavn: 'Tillatelsetiltiltak',
    team: 'tiltak',
    innsender: 'Bodø havn',
    status: 'ny',
    merknader: [],
    vedlegg: [VEDLEGG.pdf, VEDLEGG.kart, VEDLEGG.bilde],
  },
  {
    id: 'p2',
    dato: new Date('2026-11-11'),
    opprettet: '6 dager siden',
    tittel: 'Innmelding av skade',
    skjemanavn: 'Skadeinnmelding',
    saksnummer: '2026/77',
    team: 'skade',
    innsender: 'Per Hansen',
    status: 'behandlet',
    merknader: [{ tekst: 'Vedlegg lastet opp', color: 'success' }],
    vedlegg: [VEDLEGG.bilde, VEDLEGG.pdf],
  },
  {
    id: 'p3',
    dato: new Date('2026-11-11'),
    opprettet: '6 dager siden',
    tittel: 'Innmelding av skade',
    skjemanavn: 'Skadeinnmelding',
    saksnummer: '2026/76',
    team: 'skade',
    innsender: 'Ola Olsen',
    status: 'behandlet',
    merknader: [],
  },
  {
    id: 'p4',
    dato: new Date('2026-11-05'),
    opprettet: '12 dager siden',
    tittel: 'Søknad om tillatelse til tiltak',
    skjemanavn: 'Tillatelsetiltiltak',
    saksnummer: '2026/75',
    team: 'tiltak',
    innsender: 'Sandnessjøen havn',
    status: 'behandlet',
    merknader: [],
  },
  {
    id: 'p5',
    dato: new Date('2026-08-13'),
    opprettet: '13. aug',
    tittel: 'Høringsinnspill - Ola Nordmann 12',
    skjemanavn: 'Hoering',
    team: 'hoering',
    innsender: 'Ola Nordmann',
    status: 'behandlet',
    merknader: [
      { tekst: 'Journalført på høringssaken', color: 'success' },
      { tekst: 'Markert ferdig', color: 'success' },
    ],
  },
  {
    id: 'p6',
    dato: new Date('2026-08-13'),
    opprettet: '13. aug',
    tittel: 'Høringsinnspill - Svar uten merknad - Kari Nordmann 11',
    skjemanavn: 'Hoering',
    team: 'hoering',
    innsender: 'Kari Nordmann',
    status: 'behandlet',
    merknader: [
      { tekst: 'Journalført på høringssaken', color: 'success' },
      { tekst: 'Markert ferdig', color: 'success' },
    ],
  },
  {
    id: 'p7',
    dato: new Date('2026-08-13'),
    opprettet: '13. aug',
    tittel: 'Høringsinnspill - Ola Nordmann 9',
    skjemanavn: 'Hoering',
    team: 'hoering',
    innsender: 'Ola Nordmann',
    status: 'behandlet',
    merknader: [
      { tekst: 'Journalført på høringssaken', color: 'success' },
      { tekst: 'Markert ferdig', color: 'success' },
    ],
  },
  {
    id: 'p9',
    dato: new Date('2026-10-02'),
    opprettet: '2. okt',
    tittel: 'Innmelding av skade',
    skjemanavn: 'Skadeinnmelding',
    team: 'skade',
    innsender: 'Test Testesen',
    status: 'slettet',
    merknader: [{ tekst: 'Duplikat', color: 'neutral' }],
  },
];

type FilterOption = { value: string; label: string };

const STATUS_OPTIONS: FilterOption[] = [
  { value: 'ny', label: 'Nye' },
  { value: 'behandlet', label: 'Behandlet' },
  { value: 'slettet', label: 'Slettet' },
];

const TEAM_OPTIONS: FilterOption[] = [
  { value: 'alle', label: 'Alle team' },
  { value: 'nav', label: 'Navigasjonsvarsel' },
  { value: 'skade', label: 'Skade' },
  { value: 'tiltak', label: 'Tiltak' },
  { value: 'hoering', label: 'Høring' },
];

const skjemaToIcon: Record<string, SaksbehandlingItem['icon']> = {
  Navigasjonsvarsel: 'sailing',
  Skadeinnmelding: 'warning',
  Tillatelsetiltiltak: 'text_snippet',
  Hoering: 'chat',
};

function toItem(innsending: Innsending): SaksbehandlingItem {
  return {
    id: innsending.id,
    title: innsending.tittel,
    description: `${innsending.skjemanavn} · ${innsending.opprettet}`,
    icon: skjemaToIcon[innsending.skjemanavn] ?? 'mail',
    iconColor: 'himmel',
    children: innsending.merknader.length > 0 && (
      <Surface horizontal gap={1} wrap>
        {innsending.merknader.map((merknad) => (
          <Tag key={merknad.tekst} data-color={merknad.color} data-size="sm">
            {merknad.tekst}
          </Tag>
        ))}
      </Surface>
    ),
  };
}

const formatDate = (date: Date) => date.toLocaleDateString('nb-NO');

/** GitHub-style filter button: "Label: value ▾", opening a list with the current choice checked. */
function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: Readonly<{ label: string; value: string; options: FilterOption[]; onChange: (value: string) => void }>) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const current = options.find((option) => option.value === value);

  return (
    <>
      <Button variant="ghost" color="neutral" size="sm" popovertarget={id} onClick={() => setOpen(!open)}>
        {label}: <strong>{current?.label}</strong>
        <Icon material="keyboard_arrow_down" size="sm" aria-hidden />
      </Button>
      <Dropdown
        id={id}
        open={open}
        onClose={() => setOpen(false)}
        placement="bottom-start"
        data-size="sm"
        data-color="neutral"
      >
        <Dropdown.Heading>{label}</Dropdown.Heading>
        <Dropdown.List>
          {options.map((option) => (
            <Dropdown.Item key={option.value}>
              <Dropdown.Button
                aria-current={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                <span style={{ width: 'var(--ds-size-5)', display: 'inline-flex' }}>
                  {option.value === value && <Icon material="check" size="sm" aria-hidden />}
                </span>
                {option.label}
              </Dropdown.Button>
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </>
  );
}

/** GitHub-style date filter: "Fra ▾" opens a popover with a date picker. */
function DateFilter({
  label,
  value,
  onChange,
  minDate,
  maxDate,
}: Readonly<{
  label: string;
  value: Date | undefined;
  onChange: (value: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
}>) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <Button variant="ghost" color="neutral" size="sm" popovertarget={id} onClick={() => setOpen(!open)}>
        {label}
        {value && (
          <>
            : <strong>{formatDate(value)}</strong>
          </>
        )}
        <Icon material="keyboard_arrow_down" size="sm" aria-hidden />
      </Button>
      <Popover id={id} open={open} onClose={() => setOpen(false)} placement="bottom-start" data-color="neutral">
        <Surface gap={3}>
          <Datepicker label={label} value={value} onChange={onChange} minDate={minDate} maxDate={maxDate} />
          {value && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onChange(undefined);
                setOpen(false);
              }}
            >
              <Icon material="close" size="sm" />
              Fjern dato
            </Button>
          )}
        </Surface>
      </Popover>
    </>
  );
}

const fileExtension = (file: FileInfo) => file.fileName.split('.').pop()?.toLowerCase() ?? file.contentType;

function AttachmentList({
  files,
  active,
  onOpen,
}: Readonly<{ files: FileInfo[]; active?: FileInfo; onOpen: (file: FileInfo) => void }>) {
  return (
    <Surface gap={2}>
      <Heading level={3} data-size="xs">
        Vedlegg ({files.length})
      </Heading>
      <Surface gap={1}>
        {files.map((file) => (
          <Button
            key={file.fileName}
            variant="ghost"
            color="neutral"
            aria-pressed={file === active}
            style={{ justifyContent: 'flex-start', width: '100%' }}
            onClick={() => onOpen(file)}
          >
            <Icon file={fileExtension(file)} size="md" />
            {file.fileName}
            {file.fileSizeInBytes && (
              <Paragraph data-size="sm" data-color-variant="subtle" asChild>
                <span>{convertBytesToReadable(file.fileSizeInBytes)}</span>
              </Paragraph>
            )}
          </Button>
        ))}
      </Surface>
    </Surface>
  );
}

/** A labelled action. Outline by default; `primary` for the one main action, `danger` for deleting. */
function Action({
  label,
  icon,
  primary,
  danger,
  onClick,
}: Readonly<{
  label: string;
  icon: SaksbehandlingItem['icon'];
  primary?: boolean;
  danger?: boolean;
  onClick?: () => void;
}>) {
  return (
    <Button variant={primary ? 'filled' : 'outline'} color={danger ? 'danger' : undefined} size="sm" onClick={onClick}>
      <Icon material={icon} size="sm" />
      {label}
    </Button>
  );
}

/**
 * Postmottak mocked in the shell: each innsending is an item in the list, the filters sit in the
 * toolbar as GitHub-style dropdowns, and the row actions become actions on the selected item.
 */
export const Postmottak: StoryFn<typeof SaksbehandlingShell> = () => {
  const [status, setStatus] = useState<InnsendingStatus>('ny');
  const [team, setTeam] = useState('alle');
  const [fra, setFra] = useState<Date | undefined>();
  const [til, setTil] = useState<Date | undefined>();
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [activeVedlegg, setActiveVedlegg] = useState<FileInfo | undefined>();
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const filtered = INNSENDINGER.filter(
    (i) =>
      i.status === status && (team === 'alle' || i.team === team) && (!fra || i.dato >= fra) && (!til || i.dato <= til),
  );
  // Keep the selection while it matches the filters, otherwise fall back to the first match.
  const selected = filtered.find((i) => i.id === selectedId) ?? filtered[0];
  // Only show an attachment while it belongs to the selected innsending.
  const shownVedlegg = selected?.vedlegg?.includes(activeVedlegg as FileInfo) ? activeVedlegg : undefined;
  const openVedlegg = (file: FileInfo) => {
    setActiveVedlegg(file);
    setIsViewerOpen(true);
  };
  const hasFilters = team !== 'alle' || fra !== undefined || til !== undefined;

  return (
    <ApplicationHeaderContext.Provider value={{ applicationId: 'sak' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header
          logo={{ product: 'Saksbehandling', url: '/' }}
          applications={[{ id: 'sak', name: 'Saksbehandling', icon: 'data_table' }]}
          links={[{ applicationId: 'sak', position: 'main', label: 'Postmottak', url: '#' }]}
          profile={{ name: 'Dag Eriksen', department: 'Hav- og kystforvaltning' }}
          logoutHandler={() => alert('Logger ut')}
        />
        <div style={{ flex: 1, minHeight: 0 }}>
          <SaksbehandlingShell
            headerContent={
              <Surface horizontal align="center" gap={3}>
                <Icon material="mail" indicator="arrow_forward" size="xl" background="neutral" aria-hidden />
                <Surface gap={1}>
                  <Heading level={1} data-size="sm" style={{ margin: 0 }}>
                    Postmottak
                  </Heading>
                  <Paragraph data-size="sm">
                    Innsendinger fra selvbetjening. Nye innsendinger kan sendes til Kystsak, markeres som ferdige eller
                    slettes.
                  </Paragraph>
                </Surface>
              </Surface>
            }
            caseActions={
              <>
                <FilterDropdown
                  label="Status"
                  value={status}
                  options={STATUS_OPTIONS}
                  onChange={(value) => setStatus(value as InnsendingStatus)}
                />
                <FilterDropdown label="Team" value={team} options={TEAM_OPTIONS} onChange={setTeam} />
                <DateFilter label="Fra" value={fra} onChange={setFra} maxDate={til} />
                <DateFilter label="Til" value={til} onChange={setTil} minDate={fra} />
                {hasFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setTeam('alle');
                      setFra(undefined);
                      setTil(undefined);
                    }}
                  >
                    <Icon material="close" size="sm" />
                    Nullstill
                  </Button>
                )}
              </>
            }
            itemActions={
              selected && (
                <>
                  {selected.status === 'ny' && (
                    <>
                      <Action label="Send til Kystsak" icon="send" primary />
                      <Action label="Marker som ferdig" icon="check_circle" />
                    </>
                  )}
                  {selected.status === 'behandlet' && <Action label="Angre" icon="undo" />}
                  {selected.status === 'slettet' && <Action label="Gjenopprett" icon="undo" primary />}
                  <Action label="Historikk" icon="history" />
                  {selected.status !== 'slettet' && <Action label="Slett" icon="delete" danger />}
                </>
              )
            }
            items={filtered.map(toItem)}
            selectedItemId={selected?.id}
            onSelectItemId={setSelectedId}
            comparisonContent={
              <FilePreviewer.Panel
                file={shownVedlegg}
                emptyContent={<Paragraph>Velg et vedlegg for å vise det her.</Paragraph>}
              />
            }
            comparisonOpen={isViewerOpen}
            onComparisonOpenChange={setIsViewerOpen}
          >
            {selected ? (
              <Surface gap={6} p={6}>
                <Heading level={2} data-size="md">
                  {selected.tittel}
                </Heading>
                <Summary
                  rows={[
                    { label: 'Opprettet', value: `${formatDate(selected.dato)} (${selected.opprettet})` },
                    { label: 'Skjemanavn', value: selected.skjemanavn },
                    { label: 'Innsender', value: selected.innsender },
                    { label: 'Saksnummer', value: selected.saksnummer ?? '-' },
                    {
                      label: 'Team',
                      value: TEAM_OPTIONS.find((option) => option.value === selected.team)?.label,
                    },
                  ]}
                />
                {selected.vedlegg && (
                  <AttachmentList files={selected.vedlegg} active={shownVedlegg} onOpen={openVedlegg} />
                )}
              </Surface>
            ) : (
              <Surface p={6}>
                <Paragraph>Ingen innsendinger passer med filtrene.</Paragraph>
              </Surface>
            )}
          </SaksbehandlingShell>
        </div>
      </div>
      <Footer links={[{ text: 'Personvernerklæring', url: '#' }]} />
    </ApplicationHeaderContext.Provider>
  );
};
