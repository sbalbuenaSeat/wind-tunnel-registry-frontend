import { useContext } from 'react';
import { DashboardDataContext } from '@/context/DashboardDataContext/DashboardContext.tsx';
import { type DashboardDataContextType } from '@/context/DashboardDataContext/DashboardContext.types.ts';

export const useDashboardData = (): DashboardDataContextType => {
  const context = useContext(DashboardDataContext);

  if (!context) {
    throw new Error('useDashboardData must be used within a DashboardProvider');
  }

  return context;
};
