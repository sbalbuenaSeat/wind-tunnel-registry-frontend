import {
  type FlightDetailsByType,
  type ReportsCard,
} from '@services/reportsService/reports.service.types.ts';
import { formatMinutes } from '@services/utils/formatMinutes';

export const mapMinutesByType = (
  flightDetails: FlightDetailsByType[],
): Record<string, number> =>
  flightDetails.reduce(
    (acc, detail) => {
      const type = detail.type.toLowerCase();
      if (type) {
        acc[type] = detail.minutes;
      }
      return acc;
    },
    { individual: 0, shared: 0 } as Record<string, number>,
  );

const getTimeParts = (minutes: number) => {
  return formatMinutes(minutes)
    .split(' ')
    .map((part) => ({
      num: part.slice(0, -1),
      unit: part.slice(-1),
    }));
};

export const buildReportsCards = (
  totalMinutes: number,
  minutesByType: Record<string, number>,
): ReportsCard[] => [
  {
    label: 'Total',
    value: totalMinutes,
    type: 'total',
    timeParts: getTimeParts(totalMinutes),
  },
  {
    label: 'Individual',
    value: minutesByType.individual ?? 0,
    type: 'individual',
    timeParts: getTimeParts(minutesByType.individual ?? 0),
  },
  {
    label: 'Shared',
    value: minutesByType.shared ?? 0,
    type: 'shared',
    timeParts: getTimeParts(minutesByType.shared ?? 0),
  },
];
