import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { getEntries } from '@services/entriesService/entries.service';
import useSWR from 'swr';

export const useEntries = () => {
  const { isAuthenticated } = useAuth();

  const { data, isLoading, error, mutate } = useSWR(
    isAuthenticated ? 'entries' : null,
    getEntries,
    {
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  );

  return {
    entries: data,
    isLoading,
    error,
    mutate,
  };
};
