import { Reports } from '@components/Reports/Reports';
import { DashboardProvider } from '@/context/DashboardContext/DashboardContext';

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Reports />
    </DashboardProvider>
  );
};
