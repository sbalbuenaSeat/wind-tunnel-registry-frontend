import {
  type FlightDetailsByType,
  type ReportsCard,
} from '@services/reportsService/reports.service.types.ts';
import { formatMinutes } from '@services/utils/formatMinutes';

const CARD_CONFIGS: { label: string; type: ReportsCard['type'] }[] = [
  { label: 'Total', type: 'total' },
  { label: 'Individual', type: 'individual' },
  { label: 'Shared', type: 'shared' },
];

const getTimeParts = (minutes: number) =>
  formatMinutes(minutes)
    .split(' ')
    .map((part) => ({
      value: part.slice(0, -1),
      unit: part.slice(-1),
    }));

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
