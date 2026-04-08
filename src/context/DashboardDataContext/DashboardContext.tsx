import { createContext, type ReactNode } from 'react';
import { useCreateEntry } from '@hooks/useCreateEntry/useCreateEntry.ts';
import { useDeleteEntry } from '@hooks/useDeleteEntry/useDeleteEntry';
import { useEntries } from '@hooks/useEntries/useEntries';
import { useFlightDetails } from '@hooks/useFlightDetails/useFlightDetails';
import { useUpdateEntry } from '@hooks/useUpdateEntry/useUpdateEntry';
import { type DashboardDataContextType } from './DashboardContext.types.ts';

export const DashboardDataContext = createContext<
  DashboardDataContextType | undefined
>(undefined);

export const DashboardDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {
    data: reports,
    isLoading: isReportsLoading,
    error: reportsError,
    mutateReports,
  } = useFlightDetails();

  const {
    entries,
    isLoading: isEntriesLoading,
    error: entriesError,
  } = useEntries();

  const { createEntry: createEntryMutation, isCreatingEntry } =
    useCreateEntry();

  const { deleteEntry: deleteEntryMutation, isDeletingEntry } =
    useDeleteEntry();

  const { updateEntry: updateEntryMutation, isUpdatingEntry } =
    useUpdateEntry();

  const createEntry = async (
    payload: Parameters<typeof createEntryMutation>[0],
  ) => {
    await createEntryMutation(payload);
    await mutateReports();
  };

  const deleteEntry = async (id: string) => {
    await deleteEntryMutation(id);
    await mutateReports();
  };

  const updateEntry = async (
    arg: Parameters<typeof updateEntryMutation>[0],
  ) => {
    await updateEntryMutation(arg);
    await mutateReports();
  };

  return (
    <DashboardDataContext.Provider
      value={{
        reports,
        isReportsLoading,
        reportsError,
        entries,
        isEntriesLoading,
        entriesError,
        deleteEntry,
        isDeletingEntry,
        updateEntry,
        isUpdatingEntry,
        isCreatingEntry,
        createEntry,
      }}
    >
      {children}
    </DashboardDataContext.Provider>
  );
};
