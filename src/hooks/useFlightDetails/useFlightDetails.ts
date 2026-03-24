import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { getFlightDetails } from '@services/reportsService/reports.service.ts';
import useSWR from 'swr';

export const useFlightDetails = () => {
  const { isAuthenticated } = useAuth();

  const { data, isLoading, error } = useSWR(
    isAuthenticated ? 'flight-details' : null,
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
