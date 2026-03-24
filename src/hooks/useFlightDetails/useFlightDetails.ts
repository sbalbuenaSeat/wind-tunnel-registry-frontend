import { getFlightDetails } from '@services/reportsService/reports.service.ts';
import useSWR from 'swr';

export const useFlightDetails = () => {
  const { data, isLoading, error } = useSWR(
    'flight-details',
    getFlightDetails,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  return {
    data,
    isLoading,
    error,
  };
};
