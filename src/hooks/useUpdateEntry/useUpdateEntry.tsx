import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { ENTRIES_KEY } from '@hooks/useEntries/useEntries';
import { updateEntry as updateEntryService } from '@services/entriesService/entries.service';
import { type UpdateEntryPayload } from '@services/entriesService/entries.service.types';
import useSWRMutation from 'swr/mutation';

type UpdateEntryArg = {
  id: string;
  payload: UpdateEntryPayload;
};

export const useUpdateEntry = () => {
  const { isAuthenticated } = useAuth();

  const { trigger, isMutating, error } = useSWRMutation(
    isAuthenticated ? ENTRIES_KEY : null,
    async (_key, { arg }: { arg: UpdateEntryArg }) => {
      return await updateEntryService(arg.id, arg.payload);
    },
  );

  return {
    updateEntry: trigger,
    isUpdatingEntry: isMutating,
    updateEntryError: error,
  };
};
