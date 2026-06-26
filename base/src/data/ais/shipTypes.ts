export interface AisShipType {
  readonly id: string;
  readonly label: string;
  readonly aisCodes: readonly string[];
  readonly color: string;
  readonly borderColor: string;
}

export const AIS_SHIP_TYPES = [
  {
    id: 'passasjer',
    label: 'Passasjer',
    aisCodes: [
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
    ],
    color: '#085382',
    borderColor: '#022C55',
  },
  {
    id: 'fritidsbat',
    label: 'Fritidsbåt',
    aisCodes: ['37'],
    color: '#83A9C0',
    borderColor: '#085382',
  },
  {
    id: 'seilbat',
    label: 'Seilbåt',
    aisCodes: ['36'],
    color: '#83A9C0',
    borderColor: '#085382',
  },
  {
    id: 'frakt',
    label: 'Frakt',
    aisCodes: ['33', '34', '53', '54', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79'],
    color: '#58A752',
    borderColor: '#0C6F06',
  },
  {
    id: 'tank',
    label: 'Tank',
    aisCodes: ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
    color: '#535E62',
    borderColor: '#19191A',
  },
  {
    id: 'fiske',
    label: 'Fiske',
    aisCodes: ['30'],
    color: '#F48B68',
    borderColor: '#EC481E',
  },
  {
    id: 'tau',
    label: 'Tau',
    aisCodes: ['31', '32', '52'],
    color: '#FFD666',
    borderColor: '#CC9600',
  },
  {
    id: 'militaer',
    label: 'Militær',
    aisCodes: ['35'],
    color: '#5D6533',
    borderColor: '#013200',
  },
  {
    id: 'redning',
    label: 'Redning',
    aisCodes: ['51', '55', '58'],
    color: '#FFEA00',
    borderColor: '#19191A',
  },
  {
    id: 'los',
    label: 'Los',
    aisCodes: ['50'],
    color: '#FF701A',
    borderColor: '#820000',
  },
  {
    id: 'ukjent',
    label: 'Ukjent',
    aisCodes: [
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '56',
      '57',
      '59',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '98',
      '99',
    ],
    color: '#CCCCCC',
    borderColor: '#404040',
  },
] as const satisfies readonly AisShipType[];

export type AisShipTypeEntry = (typeof AIS_SHIP_TYPES)[number];

export type AisShipTypeId = AisShipTypeEntry['id'];

export type AisCode = AisShipTypeEntry['aisCodes'][number];

const _byAisCode = new Map<string, AisShipTypeEntry>();
for (const entry of AIS_SHIP_TYPES) {
  for (const code of entry.aisCodes) {
    _byAisCode.set(code, entry);
  }
}

const _byId = new Map<AisShipTypeId, AisShipTypeEntry>(AIS_SHIP_TYPES.map((entry) => [entry.id, entry]));

export function getShipTypeByAisCode(code: string | number): AisShipTypeEntry | undefined {
  return _byAisCode.get(String(code));
}

export function getShipTypeById(id: AisShipTypeId): AisShipTypeEntry | undefined {
  return _byId.get(id);
}
