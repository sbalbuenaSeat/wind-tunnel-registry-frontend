import { type FlightDetailsResponse } from '@services/reportsService/reports.service.types.ts';

export const REPORTS_MOCK: FlightDetailsResponse = {
  totalMinutes: 150,
  flightDetails: [
    { type: 'Individual', minutes: 90 },
    { type: 'Shared', minutes: 60 },
  ],
};
