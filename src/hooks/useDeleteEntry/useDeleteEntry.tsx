import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { ENTRIES_KEY } from '@hooks/useEntries/useEntries';
import { deleteEntry } from '@services/entriesService/entries.service';
import useSWRMutation from 'swr/mutation';

export const useDeleteEntry = () => {
  const { isAuthenticated } = useAuth();

  const { trigger, isMutating, error } = useSWRMutation(
    isAuthenticated ? ENTRIES_KEY : null,
    async (_key, { arg }: { arg: string }) => {
      await deleteEntry(arg);
    },
  );

  return {
    deleteEntry: trigger,
    isDeletingEntry: isMutating,
    deleteEntryError: error,
  };
};
