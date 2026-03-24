import { createContext, type ReactNode } from 'react';
import { useFlightDetails } from '@hooks/useFlightDetails/useFlightDetails';
import { type MappedFlightDetailsResponse } from '@services/reportsService/reports.service.types.ts';

export interface DashboardContextType {
  reports: MappedFlightDetailsResponse | undefined;
  isLoading: boolean;
  error: unknown;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, error } = useFlightDetails();

  return (
    <DashboardContext.Provider
      value={{
        reports: data,
        isLoading,
        error,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
