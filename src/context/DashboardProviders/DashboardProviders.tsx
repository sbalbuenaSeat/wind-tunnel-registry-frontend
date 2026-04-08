import { type ReactNode } from 'react';
import { DashboardDataProvider } from '@/context/DashboardDataContext/DashboardContext.tsx';
import { DashboardUIProvider } from '@/context/DashboardUIContext/DashboardUIContext.tsx';

export const DashboardProviders = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardDataProvider>
      <DashboardUIProvider>{children}</DashboardUIProvider>
    </DashboardDataProvider>
  );
};
