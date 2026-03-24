import {
  type FlightDetailsByType,
  type ReportsCard,
} from '@services/reportsService/reports.service.types.ts';

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

export const buildReportsCards = (
  totalMinutes: number,
  minutesByType: Record<string, number>,
): ReportsCard[] => [
  {
    label: 'Total',
    value: totalMinutes,
    type: 'total',
  },
  {
    label: 'Individual',
    value: minutesByType.individual ?? 0,
    type: 'individual',
  },
  {
    label: 'Shared',
    value: minutesByType.shared ?? 0,
    type: 'shared',
  },
];
