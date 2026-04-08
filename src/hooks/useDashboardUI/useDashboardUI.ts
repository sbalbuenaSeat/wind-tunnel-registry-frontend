import { useContext } from 'react';
import { DashboardUIContext } from '@/context/DashboardUIContext/DashboardUIContext.tsx';
import { type DashboardUIContextType } from '@/context/DashboardUIContext/DashboardUIContext.types.ts';

export const useDashboardUI = (): DashboardUIContextType => {
  const context = useContext(DashboardUIContext);

  if (!context) {
    throw new Error('useDashboardUI must be used within DashboardUIProvider');
  }

  return context;
};
