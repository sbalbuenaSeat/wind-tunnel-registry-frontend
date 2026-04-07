import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { getFlightDetails } from '@services/reportsService/reports.service.ts';
import useSWR from 'swr';

export const FLIGHT_DETAILS_KEY = 'flight-details';

export const useFlightDetails = () => {
  const { isAuthenticated } = useAuth();

  const { data, isLoading, error, mutate } = useSWR(
    isAuthenticated ? FLIGHT_DETAILS_KEY : null,
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
    mutateReports: mutate,
  };
};
