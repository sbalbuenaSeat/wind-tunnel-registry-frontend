import { getMappedReportsData } from '@services/reportsService/utils/reports.utils.ts';
import { apiFetch } from '@services/utils/apiFetch';
import {
  type FlightDetailsResponse,
  type MappedFlightDetailsResponse,
} from './reports.service.types.ts';

export const getFlightDetails =
  async (): Promise<MappedFlightDetailsResponse> => {
    const response: FlightDetailsResponse = await apiFetch(
      '/reports/total-by-type',
    );

    return {
      ...response,
      ...getMappedReportsData(response.totalMinutes, response.flightDetails),
    };
  };
