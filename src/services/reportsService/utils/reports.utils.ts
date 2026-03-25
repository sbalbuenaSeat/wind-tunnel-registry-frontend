import {
  type FlightDetailsByType,
  type ReportsCard,
} from '@services/reportsService/reports.service.types.ts';

const CARD_CONFIGS: {
  label: string;
  type: ReportsCard['type'];
  description: string;
}[] = [
  {
    label: 'Total',
    type: 'total',
    description: 'Total time accumulated in the wind tunnel.',
  },
  {
    label: '1-on-1',
    type: 'individual',
    description: 'Flights performed with an instructor.',
  },
  {
    label: 'Group',
    type: 'shared',
    description: 'Flights performed with other skydivers.',
  },
];

export const getTimeParts = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return [
    ...(hours ? [{ value: hours, unit: 'h' }] : []),
    ...(minutes || !hours ? [{ value: minutes, unit: 'min' }] : []),
  ];
};

const getMinutesByType = (type: string, flightDetails: FlightDetailsByType[]) =>
  flightDetails.find((flightDetail) => flightDetail.type.toLowerCase() === type)
    ?.minutes ?? 0;

export const getMappedReportsData = (
  totalMinutes: number,
  flightDetails: FlightDetailsByType[],
) => {
  const minutesByType: Record<string, number> = {};

  const cards = CARD_CONFIGS.map((config) => {
    const value =
      config.type === 'total'
        ? totalMinutes
        : getMinutesByType(config.type, flightDetails);

    minutesByType[config.type] = value;
    return { ...config, value, timeParts: getTimeParts(value) };
  });

  return { cards, minutesByType };
};
