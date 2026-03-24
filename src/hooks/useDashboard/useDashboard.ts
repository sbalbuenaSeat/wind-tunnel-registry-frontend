import { useContext } from 'react';
import {
  DashboardContext,
  type DashboardContextType,
} from '@/context/DashboardContext/DashboardContext';

export const useDashboardContext = (): DashboardContextType => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider',
    );
  }

  return context;
};
