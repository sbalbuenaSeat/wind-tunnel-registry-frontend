import { createContext, type ReactNode } from 'react';
import { useDeleteEntry } from '@hooks/useDeleteEntry/useDeleteEntry';
import { useEntries } from '@hooks/useEntries/useEntries';
import { useFlightDetails } from '@hooks/useFlightDetails/useFlightDetails';
import { useUpdateEntry } from '@hooks/useUpdateEntry/useUpdateEntry';
import {
  type EntriesResponse,
  type UpdateEntryPayload,
} from '@services/entriesService/entries.service.types.ts';
import { type MappedFlightDetailsResponse } from '@services/reportsService/reports.service.types.ts';

export interface DashboardContextType {
  reports: MappedFlightDetailsResponse | undefined;
  isReportsLoading: boolean;
  reportsError: unknown;
  entries: EntriesResponse | undefined;
  isEntriesLoading: boolean;
  entriesError: unknown;
  deleteEntry: (id: string) => Promise<void>;
  isDeletingEntry: boolean;
  updateEntry: (arg: {
    id: string;
    payload: UpdateEntryPayload;
  }) => Promise<void>;
  isUpdatingEntry: boolean;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
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

  const { deleteEntry: deleteEntryMutation, isDeletingEntry } =
    useDeleteEntry();

  const { updateEntry: updateEntryMutation, isUpdatingEntry } =
    useUpdateEntry();

  const deleteEntry = async (id: string) => {
    await deleteEntryMutation(id);
    await mutateReports();
  };

  const updateEntry = async (arg: {
    id: string;
    payload: UpdateEntryPayload;
  }) => {
    await updateEntryMutation(arg);
    await mutateReports();
  };

  return (
    <DashboardContext.Provider
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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
