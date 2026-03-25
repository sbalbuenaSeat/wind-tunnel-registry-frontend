import { createContext, type ReactNode } from 'react';
import { useEntries } from '@hooks/useEntries/useEntries';
import { useFlightDetails } from '@hooks/useFlightDetails/useFlightDetails';
import { type EntriesResponse } from '@services/entriesService/entries.service.types.ts';
import { type MappedFlightDetailsResponse } from '@services/reportsService/reports.service.types.ts';

export interface DashboardContextType {
  reports: MappedFlightDetailsResponse | undefined;
  isLoading: boolean;
  error: unknown;
  entries: EntriesResponse | undefined;
  isEntriesLoading: boolean;
  entriesError: unknown;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const { data: reports, isLoading, error } = useFlightDetails();
  const {
    entries,
    isLoading: isEntriesLoading,
    error: entriesError,
  } = useEntries();

  return (
    <DashboardContext.Provider
      value={{
        reports,
        isLoading,
        error,
        entries,
        isEntriesLoading,
        entriesError,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
